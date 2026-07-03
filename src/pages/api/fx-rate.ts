import type { APIRoute } from 'astro';

export const prerender = false;

// Live USD -> CNY rate from a free, key-less, CORS-friendly public API.
// Fetched server-side so it works for visitors inside China (the Vercel
// function runs outside the Great Firewall) and needs no client CORS.
// Primary: open.er-api.com. Fallback: frankfurter.app (ECB data).
export const GET: APIRoute = async () => {
  const sources = [
    {
      url: 'https://open.er-api.com/v6/latest/USD',
      pick: (d: any) => d?.rates?.CNY,
    },
    {
      url: 'https://api.frankfurter.app/latest?from=USD&to=CNY',
      pick: (d: any) => d?.rates?.CNY,
    },
  ];

  for (const s of sources) {
    try {
      const res = await fetch(s.url, { signal: AbortSignal.timeout(6000) });
      if (!res.ok) continue;
      const data = await res.json();
      const rate = s.pick(data);
      if (typeof rate === 'number' && rate > 0) {
        return json({ rate: Math.round(rate * 10000) / 10000, source: s.url }, 200);
      }
    } catch {
      // try the next source
    }
  }

  return json({ error: 'Could not fetch a live rate right now.' }, 502);
};

function json(payload: unknown, status: number) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
