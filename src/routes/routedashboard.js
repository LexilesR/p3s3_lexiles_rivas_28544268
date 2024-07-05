const express = require('express');
const router = express.Router()

//pagina de incio
router.get('/dashboard', function(req, res){
    res.render('dashboard')
})

module.exports = router