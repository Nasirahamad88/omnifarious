import jwt from "jsonwebtoken";

// Ensure you have your JWT_SECRET set in environment variables
const JWT_SECRET = process.env.JWT_SECRET;

export async function POST(req) {
  try {
    // Parse the request body to get the token
    const { token } = await req.json();

    // Verify the token
    const decoded = jwt.verify(token, JWT_SECRET);

    // Respond with user data or any other relevant info
    return new Response(
      JSON.stringify({
        valid: true,
        user: { userId: decoded.userId, email: decoded.email }, // Customize user data as needed
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Token verification failed:", error);
    return new Response(
      JSON.stringify({ valid: false, error: "Invalid token" }),
      { status: 401 }
    );
  }
}
