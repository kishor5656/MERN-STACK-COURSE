//creating aproduct.js file
const express = require('express');

const router = express.Router();


//the url that you must give is     localhost:2000/product
router.get('/',(req, res)=>{
    res.send("Get request for products");
    console.log("this is the message for the method");
    
});

//localhost:2000/product/get-product-details
router.get('/get-product-details',(req, res)=>{
    res.send("Get request for the specific products");

});

module.exports = router;