import express  from "express";
import connectDB from "./db/mongoose.js";
import  cors from 'cors';
import routerAdmin from "./router/admin.js";
import defultPage from "./router/defultPage.js";
import homepage from "./router/homePage.js";
import Eventrouter from "./router/event.js";
import Contactrouter from  "./router/contact.js";
import webDevelopmentRouter from  "./router/webDevelopmentQuote.js";
import Footerrouter from "./router/footerMenu.js";
import LogoImagerouter from "./router/Logo.js";
import ServiceFiledRouter   from "./router/defulteProduct.js";
import Headerrouter from "./router/headerMenu.js";
import  aboutpage  from "./router/aboutPage.js";
import  productServicerouter  from "./router/productService.js";
import productThreeRouter from "./router/productThree.js";
import  careersrouter from   "./router/careers.js"
 
const app   =   express();
import dotenv from "dotenv";
import webDevelopmentQuote from "./router/webDevelopmentQuote.js";
 
dotenv.config(); 
const  DATABASE_URL  =  process.env.DATABASE_URL 
const port = 3002;




app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use('/uploads', express.static('uploads'));
app.use('/uploadEditorImage', express.static('uploadEditorImage'));



 

app.use(webDevelopmentQuote)
app.use(routerAdmin);
app.use(Eventrouter);
app.use(Contactrouter);
app.use(webDevelopmentRouter);
app.use(Footerrouter);
app.use(LogoImagerouter);
app.use(defultPage)
app.use(ServiceFiledRouter);
app.use(Headerrouter);
app.use(homepage);
app.use(aboutpage);
app.use(careersrouter)
app.use(productServicerouter);
app.use(productThreeRouter);
connectDB(DATABASE_URL)

app.listen(port,(req,res)=>{
    console.log(`server is running on port ${port}`)
})
