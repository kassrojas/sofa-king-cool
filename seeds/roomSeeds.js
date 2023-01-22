const { Room } = require('../models');

const roomData = [
  {
    name: "Living Room",
    dashed_name: "living-room"
  },
  {
    name: "Bedroom",
    dashed_name: "bedroom"
  },
  {
    name: "Dining Room",
    dashed_name: "dining-room"
  },
  {
    name: "Mancave",
    dashed_name: "mancave"
  },
  {
    name: "Office",
    dashed_name: "office"
  }
]

const seedRooms = () => Room.bulkCreate(roomData);

module.exports = seedRooms;