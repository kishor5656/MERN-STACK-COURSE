const express = require('express');
const app = express();
const port = 3000;

function errorHandler(err,req,res,next){
    console.error(err.stack);
    res.status(500).send('something went wrong');
    next();
}

app.get('/error',(req,res,next)=>{
    setTimeout(() => {
        next(new Error('This is a simulated error'))
    }, 100);
});

app.use(errorHandler);

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})