import mongoose from "mongoose";

const EventsSchema  = mongoose.Schema({
     EventName  : String,
     Date    :  String,
     Titel   : String,
     Desc     : String,
})

const Events  = mongoose.model('Event',EventsSchema);

export default Events