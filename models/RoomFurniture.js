const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our User model
class RoomFurniture extends Model {}

RoomFurniture.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    room_id: {
      type: DataTypes.STRING,
      allowNull: true,
      reference: {
        model: 'room',
        key: 'id',
        unique: false,
      }
    },
    furniture_id: {
      type: DataTypes.STRING,
      allowNull: true,
      reference: {
        model: 'furniture',
        key: 'id',
        unique: false,
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'room_furniture'
  }
);

module.exports = RoomFurniture;