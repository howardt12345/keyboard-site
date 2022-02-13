import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  switch (url.pathname) {
    case '/':
      url.pathname = '/designs';
      url.search = "home=true";
      return NextResponse.redirect(url);
    default:
      return NextResponse.next();
  }
}