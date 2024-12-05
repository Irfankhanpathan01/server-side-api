import MenuItemFooter from "../module/footerMenu.js";
export const FooterApi = async (req, res) => {
  try {
       const FooterCreate =await MenuItemFooter.create({
        title:   req.body.title, 
        FooterContacts : req.body.FooterContacts,                           
        submenu: req.body.submenu,
       })
       if(!FooterCreate){
        return res.status(401).json({
          status : false,
          msg : 'Data not Create !',
          data : null
        })
       }
           
       res.status(200).json({
        status : true,
        msg : 'Data IS Create Successfully ',
        data : FooterCreate
       })

  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};


export const getAllFooterdata = async (req, res) => {
  try {
      const  Allgetdata  = await   MenuItemFooter.find();
       res.status(200).send({
          status :true,
          msg : 'ALL   data is successfully',
          AllDataFooter  : Allgetdata
       })
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};


export const  getFooterById = async (req, res) => {
  try {
      const  getdataById = await   MenuItemFooter.findById(req.params.id);
      if (!getdataById) {
          return res.status(404).json({ error: 'data item not found' });
      }
      res.json(getdataById);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};
  export const updatedataFooter = async (req, res,next) => {
    const dataId = await  MenuItemFooter.findById({_id:req.params.id});
   console.log("_id",dataId)
    if (!dataId) {
        return res.status(404).send({ status: false, msg: "data is not found!", data: null })
    }
     const  DataUpdate = await MenuItemFooter.findByIdAndUpdate(dataId,req.body);
        // console.log("data......",DataUpdate)
 
    res.status(200).send({ status: true, mgs: "Footer update succefully...", data: DataUpdate});
  }


export const deletedataFooter = async (req, res) => {
  try { 
      const  deletedataItem = await  MenuItemFooter.findByIdAndDelete(req.params.id);
      if (!deletedataItem) {
          return res.status(404).json({ error: 'data  item not found' });
      }
      res.json({ message: 'data item deleted' });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};