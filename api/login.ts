declare const process: { env: Record<string, string | undefined> };

export const config = { runtime: 'edge' };

export default async function handler(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const origin = url.origin;

  const appPassword = process.env.APP_PASSWORD;
  const authToken = process.env.AUTH_TOKEN;

  // --- Diagnostic temporar -------------------------------------------------
  // Verifică dacă variabilele de mediu ajung în runtime-ul deployment-ului,
  // FĂRĂ a expune valorile (doar true/false). Folosește:
  //   curl https://DOMENIUL-TĂU/api/login?check=1
  // (din browser obișnuit poate interveni service worker-ul PWA — folosește
  // curl sau o fereastră incognito). Șterge acest bloc după ce ai rezolvat.
  if (request.method === 'GET' && url.searchParams.get('check') === '1') {
    return new Response(
      JSON.stringify({ APP_PASSWORD: Boolean(appPassword), AUTH_TOKEN: Boolean(authToken) }),
      { status: 200, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } },
    );
  }
  // -------------------------------------------------------------------------

  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  // Server neconfigurat: lipsește o variabilă de mediu pe Vercel.
  // Răspuns distinct, ca să nu fie confundat cu „parolă greșită".
  if (!appPassword || !authToken) {
    return new Response(null, {
      status: 302,
      headers: { 'Location': origin + '/login.html?error=config' },
    });
  }

  const text = await request.text();
  const params = new URLSearchParams(text);
  const password = params.get('password') ?? '';

  if (password === appPassword) {
    return new Response(null, {
      status: 302,
      headers: {
        'Location': origin + '/',
        'Set-Cookie': `tsi-auth=${authToken}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=604800`,
      },
    });
  }

  return new Response(null, {
    status: 302,
    headers: { 'Location': origin + '/login.html?error=1' },
  });
}
