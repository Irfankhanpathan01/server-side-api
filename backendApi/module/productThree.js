import mongoose from "mongoose";
const  WebServiceSchema   = new mongoose.Schema({
title  :String,
Slug : String,       
createdAt: {
     type: Date,
     default: Date.now,
     },
editedContent : String,

},{Timestamp : true});
const  WebService  = mongoose.model('WebService',WebServiceSchema)


export default   WebService;