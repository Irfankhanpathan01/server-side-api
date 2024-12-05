import mongoose from "mongoose";

const  LogoSchema  = new mongoose.Schema({
    Image :{
        fieldname: String,
        originalname: String,
        encoding: String,
        mimetype: String,
        destination: String,
        filename: String,
        path: String,
        size: Number,
    }
},{timestamps : true});

const  LogoImage  = mongoose.model('LogoImage',LogoSchema)

export default  LogoImage;



