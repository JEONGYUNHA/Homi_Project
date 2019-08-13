'use strict';

let jsonData = require('./user.json');
console.log(jsonData.date);

//mysql 모듈 사용
const mysql = require('mysql');

//연결할 DB 정보 입력
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'homi98',
    database: 'homi',
    port: '3306',
});

//데이터베이스 연결
connection.connect();

let sql = 'insert into  homi01 (path, date, weather, temp, day) values (?,?,?,?,?)';

let params = [jsonData.path,jsonData.date,jsonData.weather,jsonData.temp,jsonData.day];
connection.query(sql, params, function (err, rows, fields) {
    if (err) {
        console.log(err);
    } else {
        console.log(rows.insertId);
    }
});


//연결종료
connection.end();