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
        port:       3306,
        user:       "root",
        password:   "root",
        database:   "loginDB"    
    });
}

connection.connect (function (error)
{   // Connect to the MySQL database

    if (error) throw error;

    console.log (chalk.green("Connected to LoginDB as", connection.threadId));
});

module.exports = connection;