import exporess from "express";
import {createcreerspage , getcreerspage,updatecreerspage,deletecreerspage} from "../controller/careers.js";
import uploade from "../service/multer.js";
const  careersrouter  = exporess.Router();






careersrouter.route("/createcreerspage").post(uploade.single("bannerImage"),createcreerspage);
careersrouter.route("/updatecreerspage").put(uploade.single("bannerImage"),updatecreerspage);
careersrouter.route("/deletecreerspage/:id").delete(deletecreerspage);
careersrouter.route("/getcreerspage").get(getcreerspage);

export default careersrouter;