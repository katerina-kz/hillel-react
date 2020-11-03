const express = require('express');
const bodyParser = require('body-parser');
const weatherRouter = require('./api');
// const fs = require('fs');
const axios = require('axios')

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/weather', weatherRouter);



app.use((req, res) => {
    res
        .status(404)
        .send('Page not found');
});

app.use((err, req, res, next) => {
    res
        .status(500)
        .send(`Error: ${err.message}`);
});

const port = 3002;
app.listen(port, () => {
    console.log('We are live on ' + port);
});