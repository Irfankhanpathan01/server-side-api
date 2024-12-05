import mongoose from "mongoose";
const ProductSchema  =  mongoose.Schema({
    Name  :    String,
    Images:  {type: Array}, 
    Price :    Number,  
    Titel :   String,  
    Desc  :   String, 
})

const Product  = new mongoose.model('Product',ProductSchema)

export default Product;