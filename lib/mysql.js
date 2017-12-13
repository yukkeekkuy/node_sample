'use strict';

const knex = require('knex');
const config = require('config');

// mysqlのコネクションを返す
module.exports = (() => {
  return knex(config.get('mysql'));
})();
