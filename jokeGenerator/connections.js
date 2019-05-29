const mysql = require("mysql");
let pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "admin1",
    password: "admin",
    database: "signup"
})

module.exports.pool = pool;
