import  express  from "express";
import {uploadLogoImage,getAllLogoImage} from "../controller/Logo.js";
import upload from "../service/multer.js";
const LogoImagerouter     =  express.Router();
 
 LogoImagerouter.route('/uploadLogoImage').post(upload.single("Image"),uploadLogoImage)
 LogoImagerouter.route('/getAllLogoImage').get(getAllLogoImage); 
 


export default  LogoImagerouter;

