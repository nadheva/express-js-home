let mysql = require('mysql');

let connection = mysql.createConnection({
    host:   'localhost',
    user:   'root',
    password: '',
    database: 'express-app'
});

connection.connect(function(error){
    if(!error){
        console.log(error);
    }else{
        console.log('Koneksi berhasil');
    }
})

module.exports = connection;