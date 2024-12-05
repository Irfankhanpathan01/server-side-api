import defaultPage from '../module/defultPage.js';
import fs from 'fs';
import  path from 'path'
import Image  from '../module/Image.js'
import { Api_url } from '../service/baseUrl.js';
export const getdefaultPage = async (req, res) => {
  try {
    const dataItems = await defaultPage.find();
    res.json(dataItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a menu item by ID

export const updatedefultpage = async (req, res) => {
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

const  dataItem = await defaultPage.findById(_id);
    if (!dataItem) {
      return res.status(404).json({ msg: 'defultpage item not found' });
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
 

export const deletedefultpage = async (req, res) => {
  try {
    const  dataItem = await defaultPage.findById(req.params.id);

    if (!dataItem) {
      return res.status(404).json({ error: "defultPage  data not found!" });
    }
    if (dataItem.bannerImage) {
      const imagePath = `${dataItem.bannerImage.path}`;
      // console.log("image",imagePath)
      // console.log("dataItemybannerImage",dataItem.bannerImage)
      try {
        await fs.unlink(imagePath);
        // console.log(`Deleted image: ${dataItem.bannerImage}`);
      } catch (error) {
        // console.error('Error deleting image:', error);
      }
    }
    await defaultPage.findByIdAndDelete(req.params.id);
    res.json({ message: "defultpage data and associated images deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};




export const createdefultpage = async (req, res) => {
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
 
    const pageData = new defaultPage({
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



// export const createdefultpage = async (req, res) => {
//   try {
//     const {
//       Slug,
//       title,
//       bannerTitle,
//       bannerText,
//       buttonLink,
//       pageMetatitle,
//       pageMetaDesc,
//       editedContent,
//     } = req.body;

//     const bannerImage = req.file;

//     const images = req.files.map(file => ({
//       filename: file.filename,
//       path: `/uploads/${file.filename}`,
//     }));

//     const pageData = new defaultPage({
//       Slug,
//       title,
//       bannerTitle,
//       bannerText,
//       buttonLink,
//       pageMetatitle,
//       pageMetaDesc,
//       editedContent,
//       bannerImage: bannerImage ? bannerImage : null,
//       images: images,
//     });

//     const savedData = await pageData.save();

//     res.status(200).json({
//       status: true,
//       message: "Data is successfully created",
//       result_data: savedData,
//       uploadedFiles: images,
//     });
//   } catch (error) {
//     console.error("Error creating data item:", error);
//     res.status(500).json({
//       status: false,
//       message: "Error creating data item",
//       error: error.message,
//     });
//   }
// };

export const isSlugUnique = async (req, res) => {
  // console.log("req.query",req.query)
try {
 const checkpageSlug  = await defaultPage.findOne({
  Slug : req.query.Slug
 })
  if (checkpageSlug) {
    return res.status(409).json({
      status : false,
      msg  :  "This Page URL already exists.",
      isSlugUnique  : false
    })
  } else {
 return res.status(200).json({
        status : true,
        msg :"page added successfully.",
        isSlugUnique : true
    })
   }
} catch (error) {
  console.error('Error checking slug uniqueness:', error);
  return res.status(500).json({ error: 'Internal Server Error' });
}
}


// export const uploadDocument = async (req, res) => {
//   try {
//       const files = req.files.map(file => ({
//         filename: file.filename,
//         path: `${file.path}`,
//       }));
      
//       console.log("file",files)
//       res.json({ files });

//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: 'Internal server error.' });
//   }
// };

export const uploadDocument = async (req, res) => {
  try {
      console.log(req.body);
      if (!req.files || req.files.length === 0) {
          console.log("no data", req.files);
          return res.status(400).json({
              status: false,
              msg: "No files uploaded",
              data: null,
          });
      }

      let documents = [];

      req.files.forEach((file) => {
          let document = new Image();
          console.log("file",file);
          //  document.Images   = file 
           document.path = file.path;
          // document.mimetype = file.mimetype;
          documents.push(document);
      });

      const data = await Image.insertMany(documents);
      
      return res.status(200).json({
          status: true,
          msg: "Files uploaded successfully",
          data: data,
      });
  } catch (error) {
      console.error(error);
      return res.status(500).json({
          status: false,
          msg: "An error occurred while uploading the files",
          data: null,
      });
  }
};