import  express  from "express";
import { sendEmail }  from  '../controller/contact.js';
const Contactrouter  = express.Router()


Contactrouter.route('/sendEmail').post(sendEmail)


export default Contactrouter;

