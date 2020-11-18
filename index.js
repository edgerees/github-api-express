const express = require('express');
const axios = require('axios');

const app = express ();

const PORT = process.env.PORT || 3000;
// https .com/___
app.get('/edrees', (req, res) => {

    axios.get('https://api.github.com/users/edgerees')
    .then(response => {

        const edreesObject = {
            login: response.data.login,
            url:response.data.html_url,
            name: response.data.name
        };
        console.log(edreesObject);
        res.send(edreesObject);

    });
});

app.get('/thomas', (req, res) => {

    axios.get('https://api.github.com/users/tcgilbert')
    .then(response => {

        const thomasObject = {
            login: response.data.login,
            url:response.data.html_url,
            name: response.data.name
        };
        console.log(thomasObject);
        res.send(thomasObject);

    });
});

app.get('/jaxon', (req, res) => {

    axios.get('https://api.github.com/users/jaxonnarramore')
    .then(response => {

        const jaxonObject = {
            login: response.data.login,
            url:response.data.html_url,
            name: response.data.name
        };
        console.log(jaxonObject);
        res.send(jaxonObject);

    });
});

app.get('/richard', (req, res) => {

    axios.get('https://api.github.com/users/richardleung1')
    .then(response => {

        const richardObject = {
            login: response.data.login,
            url:response.data.html_url,
            name: response.data.name
        };
        console.log(richardObject);
        res.send(richardObject);

    });
});

app.get('/nykywan', (req, res) => {

    axios.get('https://api.github.com/users/nykywanp')
    .then(response => {

        const nykywanObject = {
            login: response.data.login,
            url:response.data.html_url,
            name: response.data.name
        };
        console.log(nykywanObject);
        res.send(nykywanObject);

    });
});

app.listen(PORT, () => {
    console.log(`Vibing to sounds on PORT ${PORT} `);
});