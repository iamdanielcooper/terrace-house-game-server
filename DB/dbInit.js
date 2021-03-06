const db = require('../DB/dbConfig');

const initDatabase = async () => {
    console.log('Creating database...');

    try {
        await db.any(`DROP TABLE IF EXISTS seasons cascade;

    CREATE TABLE seasons (
        seasonId SERIAL PRIMARY KEY,
        seasonName VARCHAR(255),
        seasonCode VARCHAR(255),
        coupleCount int,
        housemateCount int,
        dateCount int,
        lengthOfSeason int
    );
    
    DROP TABLE IF EXISTS housemates;
    
    CREATE TABLE housemates (
        housemateId SERIAL PRIMARY KEY,
        housemateName VARCHAR(255),
        nickname VARCHAR(255),
        housemateTagline VARCHAR(1000),
        weeksInHouse int,
        livedWith int,
        dates int,
        instagramFollowers int,
        ageNow int,
        ageWhenEntered int,
        imageURL VARCHAR(2555),
        seasonId int,
        FOREIGN KEY (seasonId) REFERENCES seasons(seasonId) 
    
    );`);

        console.log('Database successfully created.');
    } catch (error) {
        console.log('There was an error creating the database.');
    }
};

initDatabase();
