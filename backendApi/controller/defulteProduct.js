import  ServicePage from "../module/serviceFiled.js"; 
import { stage_url } from "../service/baseUrl.js";
// // Get all menu items

export const getServicePage = async (req, res) => {
  try {
    const menuItems = await ServicePage.find();
    res.json(menuItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateServicePages = async (req, res) => {
  try {
     
    const bannerImage = req.file;  
 
    const {
      _id,
      title, 
      Slug,
      editedContent
    } = req.body;

 
const menuItem = await ServicePage.findById(_id);
    if (!menuItem) {
      return res.status(404).json({ msg: 'Menu item not found' });
    }

 
    menuItem.Slug = Slug;
    menuItem.title = title;
    menuItem.editedContent = editedContent;
 
if (bannerImage) {
  menuItem.bannerImage = bannerImage;
 
}

 
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

/// DeleteMenuItem

export const deleteServicePage= async (req, res) => {
  try {
    const menuItem = await ServicePage.findByIdAndDelete(req.params.id);
    if (!menuItem) {
      return res.status(404).json({ error: "Menu item not found" });
    }
    res.json({ message: "Menu item deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//create page

export const createServicePages = async (req, res) => {
  try {
    // Extract data from the request
    const {
      title, 
      Slug,
      editedContent
    } = req.body;

 
    const bannerImage = req.file;  
 
    const pageData = new ServicePage({
      title, 
      Slug,
      editedContent,
      bannerImage: bannerImage ? bannerImage: null,
    });
 
    const savedData = await pageData.save();

    res.status(200).json({
      status: true,
      message: "Data is successfully created",
      result_data: savedData,
    });
  } catch (error) {
    console.error("Error creating menu item:", error);
    res.status(500).json({
      status: false,
      message: "Error creating menu item",
      error: error.message,
    });
  }
};




export const isSlugUniqueServicePage = async (req, res) => {
  const { slug, pageId } = req.query;
const predefinedSlug =  `${stage_url}`
try {
 
  if (!slug.startsWith(predefinedSlug) || slug !== predefinedSlug + slug.split(predefinedSlug).join('')) {
    return res.status(400).json({ error: 'Invalid slug format' });
  }

 
  if (pageId) {
    const existingPage = await ServicePage.findOne({Slug: slug, _id: { $ne: pageId } });
    if (existingPage) {
      return res.json({ isUnique: false });
    }
    
  } else {
 
    const existingPage = await ServicePage.findOne({ Slug: slug });

    if (existingPage) {
      return res.json({ isUnique: false });
    }
  }
  return res.json({ isUnique: true });
  
} catch (error) {
  console.error('Error checking slug uniqueness:', error);
  return res.status(500).json({ error: 'Internal Server Error' });
}
}