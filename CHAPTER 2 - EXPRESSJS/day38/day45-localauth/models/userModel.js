const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please Enter Your UserName'],
        unique: true,
        minlength: 3,
    },
    password: {
        type: String,
        required: [true, 'Please Enter Your PassWord'],
        minlength: 7,
    },
});

const User = mongoose.model('User',userSchema);
module.exports = User;