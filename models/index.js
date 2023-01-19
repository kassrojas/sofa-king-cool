const User = require('./User');
const Furniture = require('./Furniture');
const Room = require('./Room');

User.hasMany(Room);
Room.hasMany(Furniture);

Furniture.belongsToMany(User, {
    through: {
       model: Room,
       unique: false,
    },
});

Furniture.belongsTo(Room);

module.exports = {
  User,
  Furniture,
  Room
};