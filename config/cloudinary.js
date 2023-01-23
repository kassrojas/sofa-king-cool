const cloudinary = require('cloudinary').v2;

const options = { 
  cloud_name: process.env.CLOUDINARY_NAME, 
  api_key: process.env.CLOUDINARY_KEY, 
  api_secret: process.env.CLOUDINARY_SECRET
}

cloudinary.config(options);

module.exports = cloudinary;