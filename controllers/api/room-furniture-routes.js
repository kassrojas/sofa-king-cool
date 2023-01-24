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

router.delete('/:id', async (req, res) => {
  try {
    const roomData = await Furniture.destroy({ where: { id: req.params.id } });

    if (!roomData){
      return res.status(404).json({ "message" : "Cannot update room-id does not exist! " });
    }
    res.status(200).json(roomData);

  } catch (err) {
    console.error(err);
    res.json(err);
  }
})

module.exports = router;
