const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello')
});


app.listen(8080, (req, res) => console.log('Leads app server listening on port 8080...'));