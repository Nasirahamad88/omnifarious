import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import dbConnect from '../../../../../libs/mongodb'
import User from '../../../../../models/User';
import bcrypt from "bcryptjs";


export const authOptions = {
  session: {
    strategy: "jwt", // Use JWT strategy
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials) {
        await dbConnect(); // Ensure database connection

        const { email, password } = credentials;

        try {
          // Check if the user exists
          const user = await User.findOne({ email });
          if (!user) {
            throw new Error("No user found with this email.");
          }

          // Validate the password
          const isPasswordValid = await bcrypt.compare(password, user.password);
          if (!isPasswordValid) {
            throw new Error("Incorrect password.");
          }

          // Return user object on successful authentication
          return { id: user._id, name: user.name, email: user.email };
        } catch (error) {
          throw new Error(error.message || "Login failed.");
        }
      },
    }),
  ],
  pages: {
    signIn: "/login", // Redirect to the login page if authentication fails
    error: "/auth/error", // Custom error page
  },
  callbacks: {
    async jwt({ token, user }) {
      // Attach user info to token if user is found
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      // Attach token info to session
      session.user.id = token.id;
      session.user.email = token.email;
      session.user.name = token.name;
      return session;
    },
  },
};


export const GET = NextAuth(authOptions);
export const POST = NextAuth(authOptions);