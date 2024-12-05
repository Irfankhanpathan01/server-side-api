import WebService from "../module/productThree.js";

//productThree

export const getproductThree = async (req, res) => {
  try {
    const   getItems = await  WebService.find();

    res.json(getItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const updateproductThree = async (req, res) => {
  try {
        
    const {
      _id,
      title,
      Slug,
      editedContent
    } = req.body;

 
const menuItem = await   WebService.findById(_id);
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
 
 