const router = require('express').Router();
const { Furniture, Room } = require ('../../models');

router.get('/:type', async (req, res) => {
  try {
  const furnitureData = await Furniture.findAll({ where: { type: req.params.type } });
  const roomData = await Room.findAll();

  const rooms = roomData.map((room) => room.get({ plain: true }));
  const furnitures = furnitureData.map((furniture) => furniture.get({ plain: true }));

  console.log(furnitures);
  console.log(rooms);

    res.render('results', {
      furnitures,
      rooms,
      type: furnitures.type,
      loggedIn: req.session.loggedIn

    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.post('/', async (req, res) => {
//     try {
//       const newFurniture = await Furniture.create({
//         name: req.body.name,
//         type: ,
//         price: ,
//         notes: , 
//       });
  
//       req.session.save(() => {
//         req.session.name = newFurniture.name;
//         res.json(newFurniture);
//       });
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

  module.exports = router;