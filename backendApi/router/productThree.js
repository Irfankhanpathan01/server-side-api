import exporess from "express";
import {getproductThree,updateproductThree} from "../controller/productThree.js";

import upload from "../service/multer.js";       
const productThreeRouter = exporess.Router();


//productThree
productThreeRouter.route("/getproductThree").get(getproductThree);
productThreeRouter.route("/updateproductThree").put(upload.single('Image'),updateproductThree);



export default productThreeRouter;