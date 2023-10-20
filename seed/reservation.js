const db = require('../db/index')
const Reservation = require('../models/reservations')


// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const reservations = [{
       date: "2021-09-24",
       time: "12:00:00",
    },

    {   
        date: "2021-09-24",
        time: "13:00:00", 
    }
    ]


    await Reservation.insertMany(reservations)
    console.log("Created some Reservations!!!")
}
const run = async () => {
    await main()
    db.close()
}

run()