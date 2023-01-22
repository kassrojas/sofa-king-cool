const router = require('express').Router();
const { Room, User, Furniture } = require ('../../models');


router.get('/:id', async (req, res) => {
  try {
  const roomData = await Room.findByPk(req.params.id, {
    include: {
      model: Furniture
    }
  });


  const rooms = roomData.get({ plain: true })
    console.log(rooms);
    res.render('room', {
      rooms,
      loggedIn: req.session.loggedIn,
      
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  console.log(req.body);
    try {
      const newRoom = await Room.create({
        name: req.body.name,
        dashed_name: req.body.dashed_name,
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
        req.session.dashed_name = newRoom.dashed_name;
        res.json(newRoom);
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.put('/:id', async (req, res) => {
    // update a category by its `id` value
    
  try {
    const roomData = await Room.update({
      name: req.body.name,
      dashed_name: req.body.dashed_name
    }, {
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