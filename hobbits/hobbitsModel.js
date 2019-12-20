const db = require('../data/dbconfig.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

async function insert(hobbit) {
  return db('hobbit')
  .insert(hobbit)
  .returning('id');
}

async function update(id, changes) {
  return null;
}

function remove(id) {
  return db('hobbit')
    .where("id", id)
    .del();
}

function getAll() {
  return db('hobbit');
}

function findById(id) {
  return null;
}