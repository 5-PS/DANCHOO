import { NextResponse } from 'next/server';

import ROUTE_PATHS from './constants/route';
import { decodeJWT } from './utils/decodeJWT';

import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('accessToken');

  if (!token) {
    return NextResponse.redirect(new URL(ROUTE_PATHS.SIGN_IN, request.url));
  }

  const decodedPayload = decodeJWT(token.value);

  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/users/${decodedPayload.userId}`);
  const {
    item: { type },
  } = await response.json();

  if (type === 'employee' && request.nextUrl.pathname.startsWith(ROUTE_PATHS.STORE)) {
    return NextResponse.redirect(new URL(ROUTE_PATHS.PROFILE, request.url));
  }

  if (type === 'employer' && request.nextUrl.pathname.startsWith(ROUTE_PATHS.PROFILE)) {
    return NextResponse.redirect(new URL(ROUTE_PATHS.STORE, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/my-store/:path*', '/my-profile/:path*'],
};
