exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex('hobbit')
    .truncate()
    .then(function() {
      return knex('hobbit').insert([
        { name: 'sam' },
        { name: 'frodo' },
        { name: 'pippin' },
        { name: 'merry' },
      ]);
    });
};
