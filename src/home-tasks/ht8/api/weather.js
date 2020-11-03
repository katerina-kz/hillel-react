const { Router } = require('express');
const axios = require('axios')


const weatherRouter =  Router();


weatherRouter.get('/', (req, res) => {
    let url    = 'http://api.openweathermap.org/data/2.5/weather?q=';
    let appId  = 'appid=c41a419c1cc3d0f212b8f3de8d9bd6fc';
    let city = Object.values(req.query);

    const getData = axios.get(`${url}${city[0]}&${appId}`);

    if (+req.query.logo === 1) {
        axios
            .get(`${url}${city[0]}&${appId}`)
            .then(response => (
                    axios
                        .get('http://openweathermap.org/img/w/' + response.data.weather[0].icon + '.png')
                        .then(response => (
                            res.send(`<img src=${response.config.url}>`)
                        ))
                        .catch(err => {
                            res.send({"Error": err.message});
                        })
                )
            )
    } else {
        getData
            .then(response => res.send(response.data))
            .catch(err => {
                res.send({"Error": err.message});
            });
    }
});

module.exports = weatherRouter;