const { default: knex } = require("knex")

// STRETCH
const cars =[
    {
        vin:'12345678987654321',
        make: 'toyota',
        model: 'prius',
        mileage: 2000,
        title: 'salvage',
        
    },
    {
        vin:'12345678909876543',
        make: 'gmc',
        model: 'seirra',
        mileage: 250000,
        title: 'clean',
        transmission: 'automatic'
    },
    {
        vin:'98765432123456789',
        make: 'chevrolet',
        model: 'trax',
        mileage: 6000,
        
    },
]
exports.seed= async function(knex){
   await knex('cars').truncate()
   await knex('cars').insert(cars)
    
}