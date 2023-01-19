const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
// const roomRoutes = require('./room-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
// router.use('/api/rooms', roomRoutes);

module.exports = router;
