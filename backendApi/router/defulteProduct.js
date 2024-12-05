import exporess from "express";
import {
      getServicePage,
    updateServicePages,
    deleteServicePage,
    createServicePages,
    isSlugUniqueServicePage,
} from "../controller/defulteProduct.js";
import uploade from "../service/multer.js";
const ServiceFiledRouter = exporess.Router();
 
ServiceFiledRouter.route("/createServicePage").post(
  uploade.single("bannerImage"),
  createServicePages
);
ServiceFiledRouter.route("/getServicePage").get(getServicePage);
ServiceFiledRouter.route("/updateServicePages").put(
  uploade.single("bannerImage"),
  updateServicePages
);
ServiceFiledRouter.route("/deleteServicePage/:id").delete(deleteServicePage);
ServiceFiledRouter.route("/isSlugUniqueServicePage").get(isSlugUniqueServicePage);
export default ServiceFiledRouter;