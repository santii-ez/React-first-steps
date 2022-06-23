const fs = require ('fs');
const path = require ('path');

const controller = {
    logIn: (req, res) => {
        res.render('login')},
};

module.exports = controller;