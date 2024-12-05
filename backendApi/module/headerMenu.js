import mongoose  from "mongoose";

const menuItemSchema = new mongoose.Schema({
  title:  String,
  link : String,
  submenu: [{submenuItems:[{   
      subtitle: String,
      sublink: String,
     }]}
  ],
},{Timestamp : true});



const HeaderMenu  = mongoose.model('headerMenu',menuItemSchema)


export default  HeaderMenu;