const mongoose  = require('mongoose');
const userSchema = require ('./user');

const user= mongoose.model('user',userSchema);

module.exports= {
    user,
}