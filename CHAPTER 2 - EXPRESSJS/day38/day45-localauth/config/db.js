const mongoose = require('mongoose');
const dotenv = require('dotenv');
const validator = require('validator');

const bcrypt = require{}

dotenv.config();

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.DB_URI);
        console.log('Databass kanakted suskesfullie')
    } catch (err){
        console.log('Database connection error',err);
        process.exit(1);
    }
};

module.exports = connectDB; 