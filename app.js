require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const Sequelize = require('sequelize');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

const sequelize = new Sequelize(process.env.DB_CONNECT, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'postgres'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database: ', err);
  });

app.get('/', (req, res) => {
    res.send('Hello')
});


app.listen(8080, (req, res) => console.log('Leads app server listening on port 8080...'));