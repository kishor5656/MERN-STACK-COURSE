const express = require('express');
const app = express();

const port = 3000;


app.use(logger);

app.get('/',(req,res)=>{
    console.log('home page');
    res.send('H O M E P A G E');
});

app.use(auth);

app.get('/users',(req,res)=>{
    console.log('users page');
    res.send('users page');
});

function logger(req,res,next) {
    console.log('log');
    next();
}

function auth(req,res,next) {
    if (req.query.admin === 'true'){
        console.log('authenticated');
        next()
    }else{
        console.log('not authenticated');
        res.status(403).send('not authenticated')
    }
}


app.listen(port,()=>{
    console.log(`app started running on port ${port}`);
})