import { NextResponse } from 'next/server';

import ROUTE_PATHS from './constants/route';

import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('accessToken');

  if (!token) {
    return NextResponse.redirect(new URL(ROUTE_PATHS.SIGN_IN, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/my-store/:path*', '/my-profile/:path*'],
};
