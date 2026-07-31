import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { SESSION_COOKIE, expectedSessionValue } from "./lib/auth";

export function proxy(request: NextRequest) {
  const expected = expectedSessionValue();

  // Sem SITE_PASSWORD configurada (ex.: dev local sem .env.local), o gate
  // fica desativado em vez de trancar o acesso.
  if (!expected) {
    return NextResponse.next();
  }

  const cookie = request.cookies.get(SESSION_COOKIE)?.value;

  if (cookie === expected) {
    return NextResponse.next();
  }

  const loginUrl = new URL("/login", request.url);
  loginUrl.searchParams.set("from", request.nextUrl.pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: [
    "/((?!login|_next/static|_next/image|favicon.ico|manifest.webmanifest|sw.js|offline|icon|icon-192.png|icon-512.png|apple-icon).*)",
  ],
};
