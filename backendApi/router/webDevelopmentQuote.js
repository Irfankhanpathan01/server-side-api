import  express  from "express";
import { sendEmailApi }  from  '../controller/webDevelopmentQuote.js';
const webDevelopmentQuote  = express.Router()


webDevelopmentQuote.route('/sendEmailApiss').post(sendEmailApi)


export default webDevelopmentQuote;

