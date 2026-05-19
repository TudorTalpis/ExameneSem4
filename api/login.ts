declare const process: { env: Record<string, string | undefined> };

export const config = { runtime: 'edge' };

export default async function handler(request: Request): Promise<Response> {
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  const text = await request.text();
  const params = new URLSearchParams(text);
  const password = params.get('password') ?? '';
  const origin = new URL(request.url).origin;

  if (
    process.env.APP_PASSWORD &&
    password === process.env.APP_PASSWORD
  ) {
    const token = process.env.AUTH_TOKEN ?? '';
    return new Response(null, {
      status: 302,
      headers: {
        'Location': origin + '/',
        'Set-Cookie': `tsi-auth=${token}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=604800`,
      },
    });
  }

  return new Response(null, {
    status: 302,
    headers: { 'Location': origin + '/login.html?error=1' },
  });
}
