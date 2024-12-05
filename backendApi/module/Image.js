import mongoose from "mongoose";
const  imageSchema = mongoose.Schema({
    path : String,
  // mimetype : String,
  // Images :{
  //   fieldname: String,
  //   originalname: String,
  //   encoding: String,
  //   mimetype: String,
  //   destination: String,
  //   filename: String,
  //   path: String,
  //   size: Number,
  // },
}
);

const Image = mongoose.model("Image", imageSchema);
export default Image;