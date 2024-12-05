import careers from '../module/careers.js';
import fs from 'fs/promises';

export const createcreerspage = async (req, res) => {
  try {
    const {
      Slug, 
      title,
      bannerTitle,
      bannerText,
      buttonLink,
      pageMetatitle,
      pageMetaDesc,
      editedContent,  
    } = req.body;
    const bannerImage = req.file;  
    const pageData = new careers({
      Slug, 
      title,
      bannerTitle,
      bannerText,
      buttonLink,
      pageMetatitle,
      pageMetaDesc,
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
    console.error("Error creating  data item:", error);
    res.status(500).json({
      status: false,
      message: "Error creating data item",
      error: error.message,
    });
  }
};



export const getcreerspage = async (req, res) => {
  try {
    const dataItems = await careers.find();
    res.json(dataItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updatecreerspage = async (req, res) => {
  try {
    const bannerImage = req.file; 
    const {
      _id,
      Slug, 
      title,
      bannerTitle,
      bannerText,
      pageMetatitle,
      pageMetaDesc,
      editedContent,   
      // bannerImage,
    } = req.body;

const  dataItem = await careers.findById(_id);
    if (!dataItem) {
      return res.status(404).json({ msg: 'careers item not found' });
    }

    dataItem.Slug = Slug;
    dataItem.title  =  title;
    dataItem.bannerTitle   = bannerTitle;
    dataItem.bannerText = bannerText;
    dataItem.pageMetatitle = pageMetatitle;
    dataItem.pageMetaDesc  = pageMetaDesc;
    dataItem.editedContent = editedContent;

if (bannerImage) {
  dataItem.bannerImage = bannerImage;
 
}
    const defultpageupdate = await dataItem.save();

    res.status(200).json({
      msg: 'data item updated successfully',
      data: defultpageupdate,
    });
  } catch (error) {
    console.error('Error updating data item:', error);
    res.status(500).json({
      msg: 'Error updatingitem',
      error: error.message,
    });
  }
};
 

export const deletecreerspage = async (req, res) => {
  try {
    const  dataItem = await careers.findById(req.params.id);

    if (!dataItem) {
      return res.status(404).json({ error: "careers  data not found!" });
    }
    if (dataItem.bannerImage) {
      const imagePath = `${dataItem.bannerImage.path}`;
      try {
        await fs.unlink(imagePath);
      } catch (error) {
        console.error('Error deleting image:', error);
      }
    }
    await careers.findByIdAndDelete(req.params.id);
    res.json({ message: "careers data and associated images deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



 