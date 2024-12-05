import mongoose from "mongoose";
const  ManagedITServicesSchema = mongoose.Schema({
    title      :  String, 
    paragraph  :  String,
    },{Timestamp : true})
    
    
export const   ManagedITServices  = mongoose.model("ManagedITServices",ManagedITServicesSchema);

export default  ManagedITServices;