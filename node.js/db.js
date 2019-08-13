const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'homi98',
    database: 'homi',
    port: '3306',
});
db.connect();
module.exports = db;