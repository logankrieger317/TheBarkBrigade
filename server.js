const db =require('./db');
const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const bodyParser = require('body-parser');
const userController = require('./controllers/userController');
const dogController = require('./controllers/dogController');
// const reservationsController = require('./controllers/reservationsController');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({ message: 'API root' });
});

app.get('/users', userController.getAllUsers);
app.get('/users/:id', userController.getUserById);
app.delete('/users/:id', userController.deleteUser);
app.post('/users', userController.updateUser);
app.put('/users', userController.createUser);

app.get('/dogs', dogController.getAllDogs);
app.get('/dogs/:id', dogController.getDogsById);
app.delete('/dogs/:id', dogController.deleteDog);
app.post('/dogs', dogController.updateDog);
app.put('/dogs', dogController.createDog);

// app.get('/reservations', reservationsController.getAllReservations);
// app.get('/reservations/:id', reservationsController.getReservationsById);
// app.delete('/reservations/:id', reservationsController.deleteReservations);
// app.post('/reservations/:id', reservationsController.updateReservations);
// app.put('/reservations/', reservationsController.createReservations);


 
// app.post('/', function(request, response){ 
//   console.log(request.body.data);   });    

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))