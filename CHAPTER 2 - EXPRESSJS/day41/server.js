//step 1
const express = require('express');

//step 2
const app = express();


//step 4
//import the products module
const products = require('./routes/products');
//import the users module
const users = require('./routes/users');

//step 5
const server = express();

//step 6
app.use('/products',products);

app.use('/users',users);


//step3
app.listen(4000,()=>{
    console.log("The server is listening to the port 4000");
    
})
