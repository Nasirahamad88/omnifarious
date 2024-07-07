import { NextResponse } from "next/server";
import dbConnect from "../../../../libs/mongodb";

export async function GET() {
  try {
    await dbConnect();
    return NextResponse.json({ message: "MongoDB connected successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "MongoDB connection failed", details: error.message },
      { status: 500 }
    );
  }
}
