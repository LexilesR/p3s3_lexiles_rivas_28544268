const express = require('express');
const router = express.Router()

//pagina de incio
router.get('/', function(req, res){
    res.render('index')
})

module.exports = router