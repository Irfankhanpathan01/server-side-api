import  LogoImage  from "../module/Logo.js";
export const uploadLogoImage = async (req, res) => {
  try {

    const oldLogo = await LogoImage.findOne();
    if (oldLogo) {
      await LogoImage.findByIdAndDelete(oldLogo._id);
    }
 
    const newLogo = new LogoImage({
      Image: req.file  
    });
    const savedLogo = await newLogo.save();

    res.status(200).send({
      status: true,
      msg: 'LogoImage data is created and updated',
      data: savedLogo,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      status: false,
      msg: 'Error creating or updating LogoImage',
    });
  }
};





  export const getAllLogoImage = async (req, res) => {
    try {
        const LogoImageItems = await   LogoImage.find();
        res.json(LogoImageItems);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
 

 