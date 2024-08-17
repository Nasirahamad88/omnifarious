import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "../../../../libs/mongodb"
import User from "../../../../models/User"
import bcrypt from "bcryptjs"; // Make sure to install bcryptjs
import jwt from "jsonwebtoken";


export async function POST(req) {
  await dbConnect();
  const { email, password } = await req.json();

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return new Response(JSON.stringify({ error: "Invalid credentials" }), {
        status: 401,
      });
    }

    // Compare the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return new Response(JSON.stringify({ error: "Invalid credentials" }), {
        status: 401,
      });
    }

    // Generate a JWT token (optional, if using JWT-based auth)
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET, // Ensure JWT_SECRET is set in your environment variables
      { expiresIn: "1h" }
    );

    // Respond with the user data and token (optional)
    return new Response(
      JSON.stringify({
        message: "Login successful",
        token,
        user: { name: user.name, email: user.email },
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: "Login failed." }), {
      status: 500,
    });
  }
}

export async function GET() {
  return new Response(JSON.stringify({ message: "GET method not supported" }), {
    status: 405,
  });
}