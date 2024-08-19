import GalleryItem from "../../../../models/GalleryItem";
import dbConnect from "../../../../libs/mongodb";
import { NextResponse } from "next/server";

import fs from "fs";
import path from "path";

// Disable body parsing by Next.js
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

export async function POST(req) {
  await dbConnect();

  // Prepare the upload directory
  const uploadDir = path.join(process.cwd(), "public/uploads");
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const formData = await req.formData();
  const title = formData.get("title");
  const description = formData.get("description");
  const image = formData.get("image");

  if (!title || !image) {
    return NextResponse.json(
      { error: "Title and image are required" },
      { status: 400 }
    );
  }

  const fileName = `${Date.now()}-${image.name}`;
  const filePath = path.join(uploadDir, fileName);

  try {
    // Save the image file
    const buffer = Buffer.from(await image.arrayBuffer());
    fs.writeFileSync(filePath, buffer);

    const imageUrl = `/uploads/${fileName}`;

    const newGalleryItem = new GalleryItem({
      title,
      imageUrl,
      description,
    });

    await newGalleryItem.save();

    return NextResponse.json(newGalleryItem, { status: 201 });
  } catch (error) {
    console.error("Error saving gallery item:", error);
    return NextResponse.json(
      { error: "Failed to add gallery item" },
      { status: 500 }
    );
  }
}

export async function GET() {
  await dbConnect();

  try {
    const galleryItems = await GalleryItem.find({});
    return NextResponse.json(galleryItems);
  } catch (error) {
    console.error("Error fetching gallery items:", error);
    return NextResponse.json(
      { error: "Failed to fetch gallery items" },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  await dbConnect();

  try {
    const { id } = await req.json();

    const galleryItem = await GalleryItem.findById(id);
    if (!galleryItem) {
      return NextResponse.json(
        { error: "Gallery item not found" },
        { status: 404 }
      );
    }

    // Delete the image file from the server
    const imagePath = path.join(process.cwd(), "public", galleryItem.imageUrl);
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }

    // Delete the item from the database
    await galleryItem.deleteOne();

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error deleting gallery item:", error);
    return NextResponse.json(
      { error: "Failed to delete gallery item" },
      { status: 500 }
    );
  }
}