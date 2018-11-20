// The connections.js middleware connects to the MySQL database

const chalk = require("chalk");
const mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL)
{   connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else
{
    connection = mysql.createConnection(
    {   server:     "localhost",
        port:       8889,
        user:       "root",
        password:   "root",
        database:   "CarsDB"    
    });
}

connection.connect (function (error)
{   // Connect to the MySQL database

    if (error) throw error;

    console.log (chalk.green("Connected to CarsDB as", connection.threadId));
});

module.exports = connection;