import { NextResponse } from "next/server";
import dbConnect from "../../../../libs/mongodb";
import Gallery from "../../../../models/GalleryItem";
import fs from "fs";
import multer from "multer";
import nextConnect from "next-connect";

const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/uploads",
    filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
  }),
});

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Something went wrong! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  },
});

apiRoute.use(upload.single("image"));

apiRoute.put(async (req, res) => {
  await dbConnect();

  const { file } = req;

  try {
    const newImage = new Gallery({
      image: file.filename,
    });

    await newImage.save();

    res
      .status(201)
      .json({ message: "File uploaded successfully", file: newImage });
  } catch (error) {
    res.status(500).json({ error: "Error saving file" });
  }
});

apiRoute.get(async (req, res) => {
  await dbConnect();

  try {
    const images = await Gallery.find({});
    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ error: "Error fetching images" });
  }
});

apiRoute.delete(async (req, res) => {
  await dbConnect();

  const { id } = req.query;

  try {
    const image = await Gallery.findByIdAndDelete(id);

    if (image) {
      fs.unlinkSync(`./public/uploads/${image.image}`); // Remove file from filesystem
      res.status(200).json({ message: "File deleted successfully" });
    } else {
      res.status(404).json({ error: "File not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error deleting file" });
  }
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, since we're using multer
  },
};
