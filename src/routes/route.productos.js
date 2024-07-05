const express = require('express');
const router = express.Router();
const db = require('../database/connection');
const conn = db.open();

const productos= require('../models/productos.model');

router.get('/', (req, res) => {
    productos.ver_productos().then(productos => {
        console.log(productos);
        res.render('productos/view', { productos: productos });
    })
})

// agregar
router.get('/agregar', (req, res) =>{
    res.render('productos/add', {tittle: 'Agregar'})
})
router.post('/agregar', (req,res)=> {
    const {codigo, nombre, categoria, stock, precio} = req.body;
    if (!codigo || !nombre || !categoria || !stock || !precio) {
        return res.status(500).send('Todos los campos son obligatorios');
    }
    productos.insertar_productos(codigo, nombre, categoria, stock, precio).then((idProductoInsert) => {
        res.redirect('/productos');
    })
    .catch(err => {
        return res.status(500).send('Error en los productos agregar');
    });
});


router.get('/eliminar/:id', function(req,res) {
    productos.borrar_productos(req.params.id).then(() => {
        res.redirect('/productos');
    })
    .catch(err => {
        return res.status(500).send('Error en los productos borrar');
    })
})




module.exports = router;
