const express = require('express');
const routes = express.Router();

const api = require('./app/services/api.js');

routes.get('', (req, res) => {
    res.send('inicio');
})

routes.get('/products', async (req, res) => {
    try {

        const { data } = await api.get('/products');

        return res.send({ data });

    } catch (error) {

    }
});


module.exports = routes;