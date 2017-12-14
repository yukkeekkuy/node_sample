
exports.up = async (knex, Promise) => {
  await knex.schema.createTableIfNotExists('sample', (table) => {
    table.increments();
    table.string('name');
  });
};

exports.down = async (knex, Promise) => {
  await knex.schema.dropTableIfExists('sample');
};
