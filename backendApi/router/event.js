import  express from 'express'
const Eventrouter  =  express.Router()
import {EventCreateApi,getAllEvent,getEventById,updateEventItem,deleteEventItem }   from "../controller/events.js"



Eventrouter.route('/EventItemCreate').post(EventCreateApi);
Eventrouter.route('/getAllEvent').get(getAllEvent);
Eventrouter.route('/getEventById/:id').get(getEventById);
Eventrouter.route('/updateEventItem/:id').put(updateEventItem);
Eventrouter.route('/deleteEventItem/:id').delete(deleteEventItem);


export default Eventrouter;