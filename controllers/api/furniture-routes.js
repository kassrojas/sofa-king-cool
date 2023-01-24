const router = require('express').Router();
const { Furniture, Room } = require ('../../models');


router.get('/:type', async (req, res) => {
  try {
  const furnitureData = await Furniture.findAll({ where: { type: req.params.type } });
  const roomData = await Room.findAll();

  const rooms = roomData.map((room) => room.get({ plain: true }));
  const furnitures = furnitureData.map((furniture) => furniture.get({ plain: true }));

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

router.post('/', async (req, res) => {
    try {
      const newFurniture = await Furniture.create({
        name: req.body.name,
        type: req.body.type,
        price: req.body.price,
        notes: req.body.notes, 
      });
  
      req.session.save(() => {
        req.session.name = newFurniture.name;
        req.session.type = newFurniture.type;
        res.json(newFurniture);
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.put('/:id', async (req, res) => {
  try {
  const newImage = await Furniture.update({
    url: result.secure_url
  });
  } catch {
    res.status(500).json(err);
  }
})

  module.exports = router;