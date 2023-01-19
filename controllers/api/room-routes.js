const router = require('express').Router();
const { Room } = require ('../../models');

router.post('/', async (req, res) => {
    try {
      const newRoom = await Room.create({
        name: req.body.name,
      });
  
      req.session.save(() => {
        req.session.name = newRoom.name;
        res.json(newRoom);
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;