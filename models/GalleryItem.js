import mongoose from "mongoose";

const GalleryItemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

export default mongoose.models.GalleryItem ||
  mongoose.model("GalleryItem", GalleryItemSchema);
