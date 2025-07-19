import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher(["/auth(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  const url = req.nextUrl.clone();
  const { pathname, search } = url;
  const res = NextResponse.next();

  if (
    !isPublicRoute(req) &&
    !pathname.startsWith("/_next") &&
    !pathname.match(/\.\w+$/) &&
    !pathname.startsWith("/api") &&
    !pathname.startsWith("/trpc")
  ) {
    res.cookies.set("lastPath", pathname + search, {
      path: "/",
      sameSite: "lax",
      httpOnly: true,
      maxAge: 60 * 60,
    });
  }

  const { userId } = await auth();

  if (userId && isPublicRoute(req)) {
    const returnTo = req.cookies.get("lastPath")?.value || "/";
    return NextResponse.redirect(new URL(returnTo, req.url));
  }

  return res;
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
