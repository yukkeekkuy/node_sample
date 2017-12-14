
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('sample').del()
    .then(() => {
      // Inserts seed entries
      return knex('sample').insert([
        { name: 'sample' },
        { name: 'test' },
        { name: 'yoshitani' },
        { name: 'sugaya' }
      ]);
    });
};
