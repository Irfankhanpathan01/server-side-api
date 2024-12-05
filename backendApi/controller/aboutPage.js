import aboutpage from "../module/aboutPage.js";
import fs from 'fs/promises';


export const createaboutpage = async (req, res) => {
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
    const pageData = new aboutpage({
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



export const getaboutpage = async (req, res) => {
  try {
    const dataItems = await aboutpage.find();
    res.json(dataItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateaboutpage = async (req, res) => {
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

const  dataItem = await aboutpage.findById(_id);
    if (!dataItem) {
      return res.status(404).json({ msg: 'aboutpage item not found' });
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
 

export const deleteaboutpage = async (req, res) => {
  try {
    const  dataItem = await aboutpage.findById(req.params.id);

    if (!dataItem) {
      return res.status(404).json({ error: "aboutpage  data not found!" });
    }
    if (dataItem.bannerImage) {
      const imagePath = `${dataItem.bannerImage.path}`;
      try {
        await fs.unlink(imagePath);
      } catch (error) {
        console.error('Error deleting image:', error);
      }
    }
    await aboutpage.findByIdAndDelete(req.params.id);
    res.json({ message: "aboutpage data and associated images deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



 