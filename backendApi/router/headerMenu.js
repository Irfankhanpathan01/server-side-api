import express from 'express'
import  {getAllHeaderdata,HeaderMenuCreate,getHeaderById ,updatedataHeader,deletedataHeader } from  '../controller/headerMenu.js' 
const Headerrouter   =  express.Router()

Headerrouter.route('/HeaderMenuCreate').post(HeaderMenuCreate)
Headerrouter.route('/getAllHeaderdata').get(getAllHeaderdata)
Headerrouter.route('/getHeaderById:id/').get(getHeaderById)
Headerrouter.route('/updatedataHeader/:id').put(updatedataHeader)
Headerrouter.route('/deletedataHeader/:id').delete(deletedataHeader)
 
export default Headerrouter;