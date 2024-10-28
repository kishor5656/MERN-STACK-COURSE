//creating aproduct.js file
const express = require('express');

const router = express.Router();

//the url that you must give is     localhost:2000/users
router.get('/',(req, res)=>{
    res.send("Get request for users");
    console.log("this is the message for the method");
    
});


//localhost:2000/users/get-user-details
router.get('/get-user-details',(req, res)=>{
    res.send("Get request for the specific user");

});


module.exports = router;

