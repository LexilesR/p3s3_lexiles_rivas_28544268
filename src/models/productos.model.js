const db = require('../database/connection');
const productos = {
    ver_productos() {
        return new Promise((resolve, reject) => {
            db.open().all('SELECT * FROM Productos', (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    },



    insertar_productos(codigo, nombre, categoria, stock, precio) {
    return new Promise((resolve, reject) => {
        db.open().run('INSERT INTO Productos (Codigo, Producto, Categoria_ID, Existencia_actual, Precio) values (?, ?, ?, ?, ?)',[codigo, nombre, categoria, stock, precio], (err, resultados) => {
            if (err) reject(err);
            else resolve(resultados.insertId);
            });
        });
    },

    borrar_productos(id) {
        return new Promise((resolve, reject) => {
            db.open().run('delete from Productos where id=?', [id], (err) => {
                if (err) reject(err);
                else resolve();
            });
        });
    },

}

module.exports = productos;