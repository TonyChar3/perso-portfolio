import { NextResponse } from "next/server";

export function middleware(request) {
  const hiddenRouteOne = process.env.HIDDEN_ROUTE_ONE;
  const hiddenRouteTwo = process.env.HIDDEN_ROUTE_TWO;

  const isProduction = process.env.NEXT_PUBLIC_NODE_ENV === "production";

  const ishiddenRouteOne = request.nextUrl.pathname === hiddenRouteOne;
  const ishiddenRouteTwo = request.nextUrl.pathname === hiddenRouteTwo;

  if (
    (isProduction && ishiddenRouteOne) ||
    (isProduction && ishiddenRouteTwo)
  ) {
    return new NextResponse("403 Unauthorized", { status: 403 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};
