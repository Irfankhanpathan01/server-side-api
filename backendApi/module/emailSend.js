import mongoose from "mongoose";

const emailSendSchema  = mongoose.Schema(
    {
          Name: String,
          email:  String,
          company:  String,
          description:  String,
          moreInfo:  String
       
      }
)

const emailsend   =  mongoose.model('emailsend',emailSendSchema)
 

export default  emailsend