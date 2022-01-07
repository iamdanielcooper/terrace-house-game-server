const db = require('../DB/dbConfig');
const dbQueries = require('../DB/queries/dbQueries');
const getData = require('../data/parseData');

class Housemates {
  constructor(data) {}
  static get all() {
    return;
  }
  static seedHousemates() {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await getData.getHousemateData();
        const result = dbQueries.dbSeedHousemates(db, data);
        resolve(result);
      } catch (error) {
        reject('error');
      }
    });
  }
}

module.exports = Housemates;