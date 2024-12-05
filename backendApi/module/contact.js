import mongoose from "mongoose";
const ContactSchema   = mongoose.Schema({
  Name   : {type : String ,required : true},
  Company  :  {type : String , required : true},
  Email   : {type : String , required : true},
  Message : {type : String , required : true},
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const Contact  = mongoose.model('Contact',ContactSchema)

export default  Contact;