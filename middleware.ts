declare const process: { env: Record<string, string | undefined> };

export const config = {
  // Allow through: login page, API routes, PWA assets (manifest, SW, icons)
  matcher: '/((?!login\\.html|api/|manifest\\.webmanifest|sw\\.js|workbox-|registerSW\\.js|icons/).*)',
};

export default function middleware(request: Request): Response | undefined {
  const cookieHeader = request.headers.get('cookie') ?? '';
  const match = cookieHeader.match(/(?:^|;\s*)tsi-auth=([^;]+)/);
  const token = match?.[1];

  // .trim() consistent cu api/login.ts (vezi nota de acolo).
  const authToken = process.env.AUTH_TOKEN?.trim();
  if (token && authToken && token === authToken) {
    return undefined; // allow
  }

  return Response.redirect(new URL('/login.html', request.url));
}
