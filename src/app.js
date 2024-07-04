const express = require('express');
const app = express();
const path = require('path');



//rutas
const routeindex = require('./routes/index');
app.use ('/', routeindex);
const routedashboard = require('./routes/routedashboard');
app.use ('/', routedashboard);




//motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//archivos estaticos
app.use(express.static(path.join(__dirname, '../public')));

//error
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, '../public/html/error.html'));
})

//servidor
app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
})