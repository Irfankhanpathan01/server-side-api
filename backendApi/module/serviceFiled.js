import mongoose from "mongoose";
const ServiceSchema = mongoose.Schema(
  {
    pageId: String,
    title :  String, 
    Slug  : String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
    editedContent : String,
    bannerImage: {
      fieldname: String,
      originalname: String,
      encoding: String,
      mimetype: String,
      destination: String,
      filename: String,
      path: String,
      size: Number,
    },
  },
  { timestamp: true }
);

const ServicePage = mongoose.model("ServicePage",ServiceSchema);

export default ServicePage;


