const ALLOWED_ORIGINS = new Set([
  'https://omrialloro.com',
  'https://www.omrialloro.com',
  'http://localhost:4601', // local http-server preview only
]);

const MAX_BYTES = 60 * 1024 * 1024; // safety cap, ~20s H.264 capture is well under this
const RATE_LIMIT_PER_HOUR = 5;
const LINK_TTL_SECONDS = 7 * 24 * 60 * 60; // informational only — set the matching R2 lifecycle rule in the dashboard

function corsHeaders(origin) {
  const headers = { 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type' };
  if (ALLOWED_ORIGINS.has(origin)) headers['Access-Control-Allow-Origin'] = origin;
  return headers;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = request.headers.get('Origin') || '';

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    if (url.pathname === '/send-video' && request.method === 'POST') {
      return handleSend(request, env, origin);
    }

    if (url.pathname.startsWith('/v/') && request.method === 'GET') {
      return handleServe(url, env);
    }

    return new Response('not found', { status: 404 });
  },
};

async function handleSend(request, env, origin) {
  const headers = corsHeaders(origin);

  if (!ALLOWED_ORIGINS.has(origin)) {
    return new Response('forbidden', { status: 403, headers });
  }

  const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
  const rateKey = `rate:${ip}`;
  const count = parseInt((await env.CAPTURE_KV.get(rateKey)) || '0', 10);
  if (count >= RATE_LIMIT_PER_HOUR) {
    return new Response('rate limit exceeded, try again later', { status: 429, headers });
  }

  let form;
  try {
    form = await request.formData();
  } catch {
    return new Response('bad request', { status: 400, headers });
  }

  const email = (form.get('email') || '').toString().trim();
  const video = form.get('video');

  if (!isValidEmail(email)) {
    return new Response('invalid email', { status: 400, headers });
  }
  if (!(video instanceof File)) {
    return new Response('missing video', { status: 400, headers });
  }
  if (video.size > MAX_BYTES) {
    return new Response('video too large', { status: 413, headers });
  }

  await env.CAPTURE_KV.put(rateKey, String(count + 1), { expirationTtl: 3600 });

  const key = `${crypto.randomUUID()}.mp4`;
  await env.CAPTURE_BUCKET.put(key, video.stream(), {
    httpMetadata: { contentType: 'video/mp4' },
  });

  const workerOrigin = new URL(request.url).origin;
  const videoUrl = `${workerOrigin}/v/${key}`;

  const emailResp = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: env.FROM_EMAIL,
      to: email,
      subject: 'Your Laser Mirror capture',
      html: `<p>Your video is ready:</p><p><a href="${videoUrl}">${videoUrl}</a></p><p>This link expires in ${LINK_TTL_SECONDS / 86400} days.</p>`,
    }),
  });

  if (!emailResp.ok) {
    const errText = await emailResp.text();
    return new Response(`email failed: ${errText}`, { status: 502, headers });
  }

  return new Response(JSON.stringify({ ok: true, url: videoUrl }), {
    headers: { ...headers, 'Content-Type': 'application/json' },
  });
}

async function handleServe(url, env) {
  const key = url.pathname.replace('/v/', '');
  const obj = await env.CAPTURE_BUCKET.get(key);
  if (!obj) return new Response('not found', { status: 404 });

  return new Response(obj.body, {
    headers: {
      'Content-Type': obj.httpMetadata?.contentType || 'video/mp4',
      'Cache-Control': 'public, max-age=604800',
    },
  });
}
