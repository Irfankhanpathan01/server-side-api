import mongoose from "mongoose";
const    ApplictionServiceSchema= mongoose.Schema({
    title :  String, 
    Slug  : String,
    createdAt: {
        type: Date,
        default: Date.now,
      },
      editedContent  : String,
   },{Timestamp : true})
 
const   ApplictionService  = mongoose.model("ApplictionService",ApplictionServiceSchema);

export default  ApplictionService;