import mongoose from "mongoose";
const   ConmponentITSchema = mongoose.Schema({
    title      :  String, 
    paragraph  :  String,
    },{Timestamp : true})
    
    
const     ConmponentIT  = mongoose.model("ConmponentIT ",ConmponentITSchema);


export default  ConmponentIT;