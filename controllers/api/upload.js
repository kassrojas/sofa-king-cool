const { unlinkSync } = require('fs');
const { upload, uploadToCloudinary } = require('../../utils/upload');
const router = require('express').Router();
const { Furniture } = require ('../../models');

// Uses middleware to process the file upload
router.post('/:id', upload, async (req, res) => {
  const { file } = req;
  console.log('FILE', file);
  // Captures the file data from the upload process and sends it to Cloudinary
  const result = await uploadToCloudinary(file.path, { folder: 'Images' });
  // When the upload is complete, delete it from the /tmp directory
  if (file) unlinkSync(file.path);

  // Create the Gallery item
  const furnitureData = await Furniture.findAll({
    order: [['id', 'DESC']]
  });
  const id = furnitureData[0].id;
  console.log(id);

  const item = await Furniture.findByPk(id);

  // Ensure it exists before return the result otherise send a 404
  if (item && result) {
    item.update({ image: result.secure_url });
    return res.json(item);
  }
  return res.statusCode(404);
});

// router.get('/', async (req, res) => {
//   const galleryData = await Gallery.findAll();
//   const photos = galleryData.map(item => item.get({ plain: true }));
//   // res.render('home', { photos });
// });

module.exports = router;

