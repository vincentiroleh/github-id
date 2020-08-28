const Router = require('express').Router();
const axios = require('axios');

Router.get('/', (req, res) => {
    res.render('index')
})


Router.post('/', async (req, res) => {
    let username = req.body.username.trim();
    await axios(`https://api.github.com/users/${username}`)
        .then((response) => res.render('user', { info: response.data }))
        .catch(err => res.render('404', { err: err.message }));
})
module.exports = Router;