import mongoose from "mongoose";
const  defaultPageSchema = mongoose.Schema(
  {
    pageId: String,
    Slug  : String, 
    title   : String,
    bannerTitle:  String,
    bannerText :  String,
    buttonLink :  String,
    pageMetatitle : String,
    pageMetaDesc  : String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
    editedContent: String,
    // images: [{ filename: String, path: String }],
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
const defaultPage = mongoose.model("defaultPage", defaultPageSchema);
export default defaultPage;




