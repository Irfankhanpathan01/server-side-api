import  Events from  '../module/events.js';

export const EventCreateApi = async (req, res) => {
  try {
    const EventCreate = new Events({
      EventName: req.body.EventName,
      Date: req.body.Date,
      Desc: req.body.Desc,  
      Titel: req.body.Titel,
    });

    const EventData = await EventCreate.save();
    res.status(200).send({
      status: true,
      msg: 'Event data is created',
      EventData: EventData
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: false,
      msg: 'Error creating event',
    });
  }
};

export const getAllEvent = async (req, res) => {
    try {
        const  EventAll = await  Events.find();
         res.status(200).send({
            status :true,
            msg : 'ALL  Eventes is cuccessfully',
            EventAllData  : EventAll
         })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const  getEventById = async (req, res) => {
    try {
        const  EventById = await   Events.findById(req.params.id);
        if (!EventById) {
            return res.status(404).json({ error: 'Event item not found' });
        }
        res.json(EventById);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

 

export const updateEventItem = async (req, res) => {
    try {
        const  EventItem = await   Events.findByIdAndUpdate(req.params.id,{ new: true });
        if (!EventItem) {
            return res.status(404).json({ error: 'Event item not found' });
        }
        res.json(EventItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
 
 
 
export const deleteEventItem = async (req, res) => {
    try { 
        const  deleteEventItem = await  Events.findByIdAndDelete(req.params.id);
        if (!deleteEventItem) {
            return res.status(404).json({ error: ' Event  item not found' });
        }
        res.json({ message: 'Event item deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};