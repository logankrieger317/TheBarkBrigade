const db = require('../db/index')
const Users = require('../models/user')


// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const users = [{
        name: 'test userName',
        phone:'1234567890' ,
        email: 'test@123.com', }
    ]

    await Users.insertMany(users)
    console.log("Created some users!!!")
}
const run = async () => {
    await main()
    db.close()
}

run()