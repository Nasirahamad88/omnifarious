import dbConnect from "../../../../libs/mongodb";
import User from "../../../../models/User";
import bcrypt from "bcryptjs";





export async function POST(req) {
  await dbConnect();
  const { name, email, password } = await req.json();

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response(JSON.stringify({ userExists: true }), {
        status: 400,
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = await User.create({ name, email, password: hashedPassword });
    return new Response(JSON.stringify({ user }), { status: 201 });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "User registration failed." }),
      { status: 500 }
    );
  }
}

export async function GET() {
  await dbConnect();

  try {
    const users = await User.find({}, { password: 0 }); // Exclude passwords from the response
    return new Response(JSON.stringify(users), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch users." }), {
      status: 500,
    });
  }
}