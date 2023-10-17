const db =require('./db');
const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const userController = require('./controllers/userController');

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

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))