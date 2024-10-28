const express= require('express');
const bodyParser=require('body-parser');

const dotenv=require('dotenv');

const connectDB = require('./config/db');

const authRouter = require('./routes/authRouter')

const cors=require('cors');

dotenv.config();
connectDB();

const app=express();

app.use(cors());

app.use(bodyParser.json());

app.use('/api/v1/auth',authRouter)

const port= process.env.PORT||3000;
app.listen(port,()=>{
    console.log(`app running on port ${port}`);
})

