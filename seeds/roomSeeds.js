const { Room } = require('../models');

const roomData = [
  {
    name: "Living Room",
  },
  {
    name: "Bedroom",
  },
  {
    name: "Dining Room",
  },
  {
    name: "Mancave",
  },
  {
    name: "Office",
  }
]

const seedRooms = () => Room.bulkCreate(roomData);

module.exports = seedRooms;