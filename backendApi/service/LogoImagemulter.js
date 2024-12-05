import multer from "multer";
import path from "path";
const storage = multer.diskStorage({
   destination: (req, file, cb) => {
     cb(null, 'LogoImages/');
   },
   filename: (req, file, cb) => {

   cb(null,file.fieldname + '-' +  Date.now() + path.extname(file.originalname));
   
   }
 });
const uploade = multer({ storage: storage });
export default uploade;