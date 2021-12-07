const { default: knex } = require("knex")

// STRETCH
const cars =[
    {
        vin:'12345678987654321',
        make: 'toyota',
        module: 'prius',
        milage: 2000,
        title: 'salvage',
        
    },
    {
        vin:'12345678909876543',
        make: 'gmc',
        module: 'seirra',
        milage: 250000,
        title: 'clean',
        transmission: 'automatic'
    },
    {
        vin:'98765432123456789',
        make: 'chevrolet',
        module: 'trax',
        milage: 6000,
        
    },
]
exports.seed= async function(knex){
   await knex('cars').truncate()
   await knex('cars').insert(cars)
    
}