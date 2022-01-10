const Seasons = require('../models/seasons');
const Housemates = require('../models/housemates');

const index = async (req, res) => {
  try {
    res.status(200).send('Hit /builddatabase to build and seed database');
  } catch (error) {
    res.status(500).send('oops');
  }
};

const buildDatabase = async (req, res) => {
  try {
    await Seasons.initDatabase();
    await Seasons.seedSeasons();
    await Housemates.seedHousemates();
    res.status(200).send('seasons seeded');
  } catch (error) {
    res.status(500).send('oops');
  }
};

module.exports = { index, buildDatabase };