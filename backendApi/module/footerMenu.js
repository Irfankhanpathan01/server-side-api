import mongoose from "mongoose";

const  FooterSchema = new mongoose.Schema({
  title:   {type : String },
  FooterContacts : String,
  submenu: [{submenuItems:[{   
      subtitle:  {type : String },
      sublink: String,
     }]}
  ],
},{Timestamp : true});

const MenuItemFooter  = mongoose.model('footermenu',FooterSchema)


export default  MenuItemFooter;


