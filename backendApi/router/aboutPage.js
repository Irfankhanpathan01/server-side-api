import express from "express";
import {createaboutpage, getaboutpage,updateaboutpage,deleteaboutpage} from "../controller/aboutPage.js";
import upload from "../service/multer.js";
const aboutpage  = express.Router();

aboutpage.route("/createaboutpage").post(upload.single("bannerImage"),createaboutpage);
aboutpage.route("/getaboutpage").get(getaboutpage);
aboutpage.route("/updateaboutpage").put(upload.single("bannerImage"),updateaboutpage);
aboutpage.route("/deleteaboutpage").delete(deleteaboutpage);

export default aboutpage;

 