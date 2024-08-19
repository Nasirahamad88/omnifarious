// import { withAuth } from "next-auth/middleware";

// export default withAuth({
//   pages: {
//     signIn: "/login",
//   },
// });

// export const config = {
//   matcher: ["/dashboard"],
// };


import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("token");

  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    if (!token) {
      // Redirect to login page if token is not present
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}