import HeaderMenu from  '../module/headerMenu.js';
export const  HeaderMenuCreate = async (req, res) => {
  try {
    const newHeaderItem = new HeaderMenu (req.body);
    const savedHeaderItem = await newHeaderItem.save();
    res.status(201).json(savedHeaderItem);  
  } catch (error) {
    console.error('Error in HeadertestApi:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
 
export const getAllHeaderdata = async (req, res) => {
  try {
      const  Allgetdata  = await   HeaderMenu.find();
       res.status(200).send({
          status :true,
          msg : 'ALL   data is successfully',
          AllDataHeader  : Allgetdata
       })
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};


export const  getHeaderById = async (req, res) => {
  try {
      const  getdataById = await   HeaderMenu.findById(req.params.id);
      if (!getdataById) {
          return res.status(404).json({ error: 'data item not found' });
      }
      res.json(getdataById);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};
  export const updatedataHeader = async (req, res,next) => {
    const dataId = await  HeaderMenu.findById({_id:req.params.id});
   console.log("_id",dataId)
    if (!dataId) {
        return res.status(404).send({ status: false, msg: "data is not found!", data: null })
    }
     const  DataUpdate = await HeaderMenu.findByIdAndUpdate(dataId,req.body);
        // console.log("data......",DataUpdate)
 
    res.status(200).send({ status: true, mgs: "Header update succefully...", data: DataUpdate});
  }


export const deletedataHeader = async (req, res) => {
  try { 
      const  deletedataItem = await  HeaderMenu.findByIdAndDelete(req.params.id);
      if (!deletedataItem) {
          return res.status(404).json({ error: 'data  item not found' });
      }
      res.json({ message: 'data item deleted' });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};