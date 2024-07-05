const express = require('express');
const router = express.Router();
const db = require('../database/connection');
const conn = db.open();

const categorias= require('../models/categorias.model');

router.get('/', (req, res) => {
    res.render('categorias/view', { categorias: categorias });
})


module.exports = router;