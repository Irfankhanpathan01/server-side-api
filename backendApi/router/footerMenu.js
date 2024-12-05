import  express  from "express";
import {FooterApi,getAllFooterdata,getFooterById,updatedataFooter,deletedataFooter} from "../controller/footerMenu.js";  
import uploade from "../service/multer.js";
const Footerrouter = express.Router();


Footerrouter.route('/FooterCreate').post(FooterApi);
Footerrouter.route('/FooterAlldata').get(getAllFooterdata);
Footerrouter.route('/getFooterById/:id').get(getFooterById);
Footerrouter.route('/updatedataFooter/:id').put(uploade.single("Image"),updatedataFooter);
Footerrouter.route('/deletedataFooter/:id').delete(deletedataFooter);


export default Footerrouter;