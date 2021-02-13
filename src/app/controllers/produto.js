const api = require('../services/api');

api.get("products")
    .then((response) => constole.log(response.data))
    .catch((err) => {
        console.error("Ocorreu um erro" + err);
    });