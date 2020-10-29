const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./api');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', apiRouter);


app.get("/", function (req, res) {
    res.send("Я есть CRUD!!!");
});


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