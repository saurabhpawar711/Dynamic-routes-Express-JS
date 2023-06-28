const mysql = require('mysql2')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'nodejspractice',
    password: 'Saurabh@2023'
})

module.exports = pool.promise();