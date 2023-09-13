const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key:process.env. CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});


exports.upload = async (file) => {
    try {
      const response = await cloudinary.uploader.upload(file, {
        resource_type: 'auto',
        folder: 'globe'
      });
  
      return response;
    } catch (error) {
      throw new Error(`From Cloudinary: ${error}`);
    }
  };