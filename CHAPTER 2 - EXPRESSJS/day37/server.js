
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');;
const compression = require('compression')
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('public'));

app.use(cookieParser());

app.use(compression());

app.post('/api/submit', (req, res) => {
    console.log(req.body);
    res.send('this is a post request to api/submit');
})



app.listen(port, () => {
    console.log(`app started running on port ${port}`);
})
