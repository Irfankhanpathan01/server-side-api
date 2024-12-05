import multer from "multer";
import path from "path";


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploadEditorImage/'); // Folder where uploaded files will be stored
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname)); // File name with timestamp
    }
  });
  
  const uploadeEditor = multer({ storage: storage });



  app.post('/uploadeEditor', uploadeEditor.single('file'), (req, res) => {
    try {
      // File upload successful
      const filePath = req.file.path;
      res.status(200).json({ success: true, message: 'File uploaded successfully', filePath });
    } catch (error) {
      // Handle errors
      console.error(error);
      res.status(500).json({ success: false, error: 'Internal server error' });
    }
  });