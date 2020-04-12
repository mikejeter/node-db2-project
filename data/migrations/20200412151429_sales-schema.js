
exports.up = function(knex) {
  return knex.schema.createTable('sales', tbl => {
        tbl.increments();
        tbl.varchar('VIN', 255).unique().notNullable();
        tbl.date('purchaseDate').notNullable();
        tbl.decimal('purchasePrice').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('sales');
};
