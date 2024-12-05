import  ApplictionService from  "../module/productOne.js";
import  ManagedITServices from "../module/productTwo.js";
 
//productOne Services////////////////////

export const getproductOne = async (req, res) => {
  try {
    const SectionItems = await ApplictionService.find();

    res.json(SectionItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateproductOne = async (req, res) => {
  try {
     
    const {
      _id,
      title,
      Slug,
      editedContent
    } = req.body;

 
const menuItem = await  ApplictionService.findById(_id);
    if (!menuItem) {
      return res.status(404).json({ msg: 'Menu item not found' });
    }

 
    menuItem.title =  title;
    menuItem.Slug = Slug;
    menuItem.editedContent = editedContent;
 

    const updatedMenuItem = await menuItem.save();

    res.status(200).json({
      msg: 'Menu item updated successfully',
      data: updatedMenuItem,
    });
  } catch (error) {
    console.error('Error updating menu item:', error);
    res.status(500).json({
      msg: 'Error updating menu item',
      error: error.message,
    });
  }
};


  
       //getproductTwo//

export const getproductTwo = async (req, res) => {
    try {
      const DataSectionItems = await  ManagedITServices.find();     

      res.json(DataSectionItems);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

  export const updateproductTwo = async (req, res) => {
    try {
      const {
        _id,
        title,
        Slug,
        editedContent
      } = req.body;
  
   
  const menuItem = await   ManagedITServices.findById(_id);
      if (!menuItem) {
        return res.status(404).json({ msg: 'Menu item not found' });
      }
  
   
      menuItem.title =  title;
      menuItem.Slug = Slug;
      menuItem.editedContent = editedContent;
   
  
      const updatedMenuItem = await menuItem.save();
  
      res.status(200).json({
        msg: 'Menu item updated successfully',
        data: updatedMenuItem,
      });
    } catch (error) {
      console.error('Error updating menu item:', error);
      res.status(500).json({
        msg: 'Error updating menu item',
        error: error.message,
      });
    }
  };
    

  