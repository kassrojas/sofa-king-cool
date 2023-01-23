const fs = require('fs');
const path = require('path');

const User = require('./User');
const Furniture = require('./Furniture');
const Room = require('./Room');
const RoomFurniture = require('./RoomFurniture');

User.hasMany(Room);
Room.hasMany(Furniture);

Furniture.belongsToMany(Room, {
    through: {
       model: RoomFurniture,
       unique: false,
    },
});

Room.belongsToMany(Furniture, {
    through: {
       model: RoomFurniture,
       unique: false,
    },
});

Room.belongsTo(User);

module.exports = {
  User,
  Furniture,
  Room,
  RoomFurniture
};