import exporess from "express";
import {createdefultpage,getdefaultPage,updatedefultpage,deletedefultpage,isSlugUnique,uploadDocument} from "../controller/defultPage.js";
import upload from "../service/multer.js";
const  defultPage  = exporess.Router();
import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploadEditorImage');
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname);
    },
  });
  
  const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only images are allowed!'), false);
    }
  };
  
  const uploadsImages = multer({
    storage: storage,
    fileFilter: fileFilter,
  });



defultPage.route("/createdefultpage").post(upload.single("bannerImage"),createdefultpage);
defultPage.route("/uploadDocument").post(uploadsImages.array('files[0]', 5), uploadDocument);
defultPage.route("/updatedefultpage").put(upload.single("bannerImage"),updatedefultpage); 
defultPage.route("/deletedefultpage/:id").delete(deletedefultpage);
defultPage.route("/getdefaultPage").get(getdefaultPage);
defultPage.route("/isSlugUnique").get(isSlugUnique);

export default defultPage;