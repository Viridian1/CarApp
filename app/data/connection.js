// The connections.js middleware connects to the MySQL database

const chalk = require("chalk");
const mysql = require("mysql");

const connection = mysql.createConnection(
{   server:     "localhost",
    port:       3306,
    user:       "root",
    password:   "root",
    database:   "CarsDB"    
});

connection.connect (function (error)
{   // Connect to the MySQL database

    if (error) throw error;

    console.log (chalk.green("Connected to CarsDB as", connection.threadId));
});

module.exports = connection;