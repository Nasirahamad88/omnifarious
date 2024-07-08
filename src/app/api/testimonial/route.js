import dbConnect from "../../../../libs/mongodb";
import Testimonial from "../../../../models/Testimonial";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();

  try {
    const testimonials = await Testimonial.find({});
    return NextResponse.json(testimonials);
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return NextResponse.json(
      { error: "Failed to fetch testimonials" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  await dbConnect();

  try {
    const body = await req.json();
    const { name, message, post } = body;

    if (!name || !message || !post) {
      return NextResponse.json(
        { error: "Name, message, and post are required" },
        { status: 400 }
      );
    }

    const newTestimonial = new Testimonial({ name, message, post });
    await newTestimonial.save();
    return NextResponse.json(newTestimonial, { status: 201 });
  } catch (error) {
    console.error("Error adding testimonial:", error);
    return NextResponse.json(
      { error: "Failed to add testimonial", details: error.message },
      { status: 500 }
    );
  }
}
