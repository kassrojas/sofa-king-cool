const router = require('express').Router();
const { Room } = require ('../../models');
const { User } = require ('../../models');


router.get('/:id', async (req, res) => {
  try {
  const roomData = await Room.findByPk(req.params.id);
    res.json(roomData);
  } catch (err) {
    res.status(500).json(err);
  }
});

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

  router.put('/:id', async (req, res) => {
    // update a category by its `id` value
  try {
    const roomData = await Room.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!roomData){
      return res.status(404).json({ "message" : "Cannot update room-id does not exist! " });
    }
    res.status(200).json(roomData);

  } catch (err) {
    console.error(err);
    res.json(err);
  }
  });

  router.delete('/:id', async (req, res) => {
    // delete a category by its `id` value
  try {
    const roomData = await Room.destroy({ where: { id: req.params.id } });

    if (!roomData){
      return res.status(404).json({ "message" : "Cannot update room-id does not exist! " });
    }
    res.status(200).json(roomData);

  } catch (err) {
    console.error(err);
    res.json(err);
  }
  });





  module.exports = router;