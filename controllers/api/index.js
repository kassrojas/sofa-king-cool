const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const roomRoutes = require('./room-routes.js');

router.use('/users', userRoutes);
router.use('/rooms', roomRoutes);

module.exports = router;
