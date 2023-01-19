const sequelize = require('../config/connection');
const seedRooms = require('./roomSeeds');
// const seedFurniture = require('./furnitureData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedRooms();

  // await seedFurniture();

  process.exit(0);
};

seedAll();