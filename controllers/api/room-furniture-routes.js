const router = require('express').Router();
const { RoomFurniture, Room, Furniture } = require ('../../models');


router.post('/', async (req, res) => {
  try {
    const newRoomFurniture = await RoomFurniture.create({
      furniture_id: req.body.furniture_id,
      room_id: req.body.room_id
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
