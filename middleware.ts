import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req) {
    // Redirect if already logged in and trying to access login page
    if (req.nextUrl.pathname === '/admin/login' && req.nextauth.token) {
      return NextResponse.redirect(new URL('/admin', req.url))
    }
  },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        // Login page is public
        if (req.nextUrl.pathname === '/admin/login') {
          return true
        }
        // Protect all other /admin routes
        if (req.nextUrl.pathname.startsWith('/admin')) {
          return !!token
        }
        return true
      }
    },
    pages: {
      signIn: '/admin/login',
    }
  }
)

export const config = {
  matcher: ['/admin/:path*']
}
