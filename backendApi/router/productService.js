import express from  "express";
import  {getproductOne,updateproductOne, 
         getproductTwo,updateproductTwo
         } from  "../controller/productService.js";
import uploade from "../service/multer.js";
    const productServicerouter    =  express.Router();


    
///productOneService

productServicerouter.route("/getproductOne").get(getproductOne);
productServicerouter.route("/updateproductOne").put(uploade.single("Images"),updateproductOne);
 
/////productTwo

productServicerouter.route("/getproductTwo").get(getproductTwo);
productServicerouter.route("/updateproductTwo").put(uploade.single("bannerImage"),updateproductTwo);


 
export default  productServicerouter;