const router = require('express').Router();
const { Room } = require ('../../models');
const { User } = require ('../../models');

router.get('/', async (req, res) => {
  try {
    const roomDb = await Room.findAll();
    res.json(roomDb);
  } catch (err) {
    res.status(500).json(err);
  }
})

router.post('/', async (req, res) => {
    try {
      const newRoom = await Room.create({
        name: req.body.name,
        user_id: req.session.userId
      },
      {
        include: [{ 
          model: User,
          attributes: ['id'],
         }]
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