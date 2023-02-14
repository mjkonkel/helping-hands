// const faker = require('faker');
const userSeeds = require('./userSeed.json');
const requestSeeds = require('./requestSeed.json');
const db = require('../config/connection');
const { Request, User } = require('../models');

db.once('open', async () => {
  try {
    await Request.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < requestSeeds.length; i++) {
      const { _id, requestAuthor } = await Request.create(requestSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: requestAuthor },
        {
          $addToSet: {
            request: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});