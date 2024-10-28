const express= require('express');
const dataRoutes= require('./routes/dataRoutes')


const app=express();
const PORT= 3000;

//middleware

app.use(express.json());

//routes

app.use('/data',dataRoutes);


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});