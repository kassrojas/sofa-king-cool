// Middleware to enable file uploads
const multer = require('multer');
// Cloudinary Configuration
const cloudinary = require('../config/cloudinary');
// Uses the /tmp directory to save files
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './tmp/');
  },
  // Creates a unique filename using the current timestamp in milliseconds
  filename(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now().toString().toLowerCase());
  }
});

// Passes the configration into Multer to allow for a single file upload
const upload = multer({ storage }).single('file');

// Promised wrapped function to confirm upload to Cloudinary
const uploadToCloudinary = (file, options) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(file, options, (error, result) => {
      (result) ? resolve(result) : reject(error);
    });
  });
};

module.exports = { upload, uploadToCloudinary };
