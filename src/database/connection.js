const sqlite3 = require('sqlite3').verbose();

class DB {
    static #db;

    static open() {
        if (this.#db == undefined) {
            this.#db = new sqlite3.Database('./Programacion_3.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_FULLMUTEX, (err) => {
                if (err) {
                    console.error(err.message);
                } else {
                    console.log('Connection is ready');
                }
            });
        }
        return this.#db;
    }

    static createTables() {
        const db = this.open();

        db.serialize(() => {
            db.run(`
                CREATE TABLE IF NOT EXISTS Categorias (
                    ID INTEGER PRIMARY KEY,
                    Categoria TEXT NOT NULL
                )
            `);

            db.run(`
                CREATE TABLE IF NOT EXISTS Productos (
                    ID INTEGER PRIMARY KEY,
                    Codigo INTEGER NOT NULL,
                    Producto TEXT NOT NULL,
                    Categoria_ID INTEGER NOT NULL,
                    Existencia_actual INTEGER NOT NULL,
                    Precio REAL NOT NULL,
                    FOREIGN KEY (categoria_id) REFERENCES categorias(id)
                )
            `);
        });

    }
}

DB.createTables();
module.exports = DB;
