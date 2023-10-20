const db =require('./db');
const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const userController = require('./controllers/userController');
const dogController = require('./controllers/dogController');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(logger('dev'));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'API root' });
});

app.get('/users', userController.getAllUsers);
app.get('/users/:id', userController.getUserById);
app.delete('/users/:id', userController.deleteUser);
app.post('/users/:id', userController.updateUser);
app.post('/users/:id', userController.createUser);

app.get('/dogs', dogController.getAllDogs);
app.get('/dogs/:id', dogController.getDogsById);
app.delete('/dogs/:id', dogController.deleteDog);
app.post('/dogs/:id', dogController.updateDog);
app.post('/dogs/:id', dogController.createDog);

// app.get('/reservations', reservationsController.getAllReservations);
// app.get('/reservations/:id', reservationsController.getReservationsById);
// app.delete('/reservations/:id', reservationsController.deleteReservations);
// app.post('/reservations/:id', reservationsController.updateReservations);
// app.post('/reservations/:id', reservationsController.createReservations);


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))