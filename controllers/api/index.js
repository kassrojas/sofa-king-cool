const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const roomRoutes = require('./room-routes.js');
const furnitureRoutes = require('./furniture-routes.js');
const roomFurnitureRoutes = require('./room-furniture-routes.js');
const uploadImageRoutes = require('./upload.js')

router.use('/users', userRoutes);
router.use('/rooms', roomRoutes);
router.use('/furniture', furnitureRoutes);
router.use('/room-furniture', roomFurnitureRoutes);
router.use('/upload', uploadImageRoutes);

module.exports = router;
