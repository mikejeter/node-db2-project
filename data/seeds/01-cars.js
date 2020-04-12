
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
     return knex('cars').insert([
        { VIN: 'vin678910', make: 'dodge', model: 'charger', mileage: 2000, transmission: 'auto', title: 'clean' },
        { VIN: 'vin111213', make: 'nissan', model: 'altima', mileage: 3000, transmission: 'auto', title: 'clean' },
        { VIN: 'vin141516', make: 'dodge', model: 'challenger', mileage: 4000, transmission: 'auto', title: 'clean' },
        { VIN: 'vin171819', make: 'ferrari', model: '812 superfast', mileage: 5000, transmission: 'auto', title: 'clean' },
        { VIN: 'vin202122', make: 'ferrari', model: 'spider', mileage: 6000, transmission: 'auto', title: 'clean' }
      ]);
    });
};
