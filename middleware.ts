declare const process: { env: Record<string, string | undefined> };

export const config = {
  // Allow through: login page, API routes, PWA assets (manifest, SW, icons)
  matcher: '/((?!login\\.html|api/|manifest\\.webmanifest|sw\\.js|workbox-|registerSW\\.js|icons/).*)',
};

export default function middleware(request: Request): Response | undefined {
  const cookieHeader = request.headers.get('cookie') ?? '';
  const match = cookieHeader.match(/(?:^|;\s*)tsi-auth=([^;]+)/);
  const token = match?.[1];

  if (token && token === process.env.AUTH_TOKEN) {
    return undefined; // allow
  }

  return Response.redirect(new URL('/login.html', request.url));
}
