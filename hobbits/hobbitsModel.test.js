const db = require('../data/dbConfig.js');
const Hobbits = require('./hobbitsModel');

// after each test clean up the database
afterEach(async () => {
  await db('hobbits').truncate();
});

describe('Hobbits model', () => {
  describe('Insert', () => {
    it('inserts hobbit into db', async () => {
      const newHobbit = await Hobbits.insert({ name: 'Popi' });
      expect(newHobbit.name).toBe('Popi');
    });

    it('inserts two hobbits into DB if two hobbits are in payload', async () => {
      const newHobbit1 = await Hobbits.insert({ name: 'Popi' });
      const newHobbit2 = await Hobbits.insert({ name: 'Bobas' });
      const allOfThem = await db('hobbits');
      expect(allOfThem.length).toBe(2);
    });
  });

  describe('Delete', () => {
    it('deletes hobbits correctly', async () => {
      // create a couple of hobbits
      const newHobbit1 = await Hobbits.insert({ name: 'Popi' });
      const newHobbit2 = await Hobbits.insert({ name: 'Bobas' });
      // remove the second one
      const deletedHobbit = await Hobbits.remove(newHobbit2.id);
      // returns 1 if deleted or 0 if not
      expect(deletedHobbit).toBeTruthy();
      // assert that only the first  one is in the DB
      const hobbitsInDb = await db('hobbits');
      expect(hobbitsInDb.length).toBe(1);
    });
  });
});
