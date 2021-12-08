exports.up =  async function (knex) {
  await knex.schema.createTable('cars',tbl =>{
    tbl.increments('id')
    tbl.text('vin',17).notNullable().unique()
    tbl.text('make', 128).notNullable()
    tbl.text('model', 256).notNullable()
    tbl.integer('mileage').unsigned().notNullable()
    tbl.text('title', 128)
    tbl.text('transmission', 128)
  })
};

exports.down =  async function (knex) {
  await knex.schema.dropTableIfExists('cars')
};
