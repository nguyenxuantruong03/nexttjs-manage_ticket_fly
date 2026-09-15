import { NextRequest, NextResponse } from "next/server";

import { getSession } from "./lib/session";

export default async function proxy(req: NextRequest) {
  const session = await getSession();

  if (!session?.user) {
    const redirectUrl = new URL("/auth/login", req.url);

    redirectUrl.searchParams.set("redirect", req.nextUrl.pathname);

    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile/:path*"],
};
