const sequelize = require('../config/connection');
const seedRooms = require('./roomSeeds');
const seedFurniture = require('./furnitureSeeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedRooms();

  await seedFurniture();

  process.exit(0);
};

seedAll();