import mongoose from "mongoose";

const GallerySchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Gallery ||
  mongoose.model("Gallery", GallerySchema);
