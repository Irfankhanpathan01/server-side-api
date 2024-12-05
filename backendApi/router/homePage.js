import express from "express";
import { createhomePage, gethomePage,  updatehomePage} from "../controller/homePage.js";
import upload from "../service/multer.js";
const homepage = express.Router();




homepage.route("/createhomePage").post(upload.single("bannerImage"),createhomePage);
homepage.route("/gethomePage").get(gethomePage);
homepage.route("/updatehomePage").put(upload.single("bannerImage"),updatehomePage);
export default homepage;
