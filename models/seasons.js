const db = require('../DB/dbConfig');
const dbQueries = require('../DB/queries/dbQueries');
const getSeasonData = require('../data/parseData');

class Seasons {
  constructor(data) {}

  static get all() {
    // TODO Return all seasons.
  }

  static initDatabase() {
    return new Promise(async (resolve, reject) => {
      try {
        const result = dbQueries.dbInit(db);
        resolve(result);
      } catch (error) {
        reject('error');
      }
    });
  }

  static seedSeasons() {
    return new Promise(async (resolve, reject) => {
      try {
        const testData = await getSeasonData();
        const result = dbQueries.dbSeedSeasons(db, testData);
        resolve(result);
      } catch (error) {
        reject('error');
      }
    });
  }
}

module.exports = Seasons;
