const router = require('express').Router();
const { Furniture } = require ('../../models');

router.post('/', async (req, res) => {
    try {
      const newFurniture = await Furniture.create({
        name: req.body.name,
        type: ,
        price: ,
        notes: , 
      });
  
      req.session.save(() => {
        req.session.name = newFurniture.name;
        res.json(newFurniture);
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;