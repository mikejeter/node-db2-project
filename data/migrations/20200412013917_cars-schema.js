
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();
        tbl.varchar('VIN', 255).unique().notNullable();
        tbl.text('make').notNullable();
        tbl.text('model').notNullable();
        tbl.decimal('mileage');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};
