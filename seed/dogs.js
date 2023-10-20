const db = require('../db/index')
const Dogs = require('../models/dogs')


// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const dogs = [{
        name: 'test Name',
        breed: 'test breed',
        age:"test age",
        owner:"test owner",
    },

    {   name: 'Ranger',
        breed: 'Lab',
        age:"5",
        owner:"Logan",   
    }
    ]


    await Dogs.insertMany(dogs)
    console.log("Created some Dogs!!!")
}
const run = async () => {
    await main()
    db.close()
}

run()