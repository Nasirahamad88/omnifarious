import mongoose from "mongoose";

const TestimonialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  post: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Testimonial ||
  mongoose.model("Testimonial", TestimonialSchema);
