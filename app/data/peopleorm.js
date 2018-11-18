// The orm.js middleware interacts with the database.  orm.js requires connection.js and is required
// by autos.js

const chalk = require("chalk");
const connection = require("./peopleconnection.js");

const orm =
{   login: function (query, email, callback)
    {   // SELECT data from the users table

        connection.query (query, email, function (error, results)
        {   
            if (error)
            {   // Log any errors to the console
                console.log(chalk.red(error));
            
                // And return some useful but unspecific text to display on the browser.

                callback (500, "An unspecified error occured on the server.  Please contact " +
                               "your IT support staff.");
            }
            else
            {   // There was no error, but that doesn't mean the SELECT returned any records.  If no
                // records were returned, the combination of user ID and password is invalid

                if (results.length === 0)
                {
                    callback(500, "Invalid UserID or password.  Try again?")
                }
                else
                {   // Success!

                    callback (200, results);
                }
            }
        })
    },

    signup: function (query, name, email, password, callback)
    {   // INSERT a new record for the user attempting to sign up

        connection.query (query, [name, email, password], function (error, results)
        {   if (error)
            {   // Log any errors to the console
                console.log(chalk.red(error));
            
                // And return some useful but unspecific text to display on the browser.

                callback (500, "An unspecified error occured on the server.  Please contact " +
                               "your IT support staff.");
            }
            else
            {   // Success!
                callback (200, results);
            }
        })
    }
}

module.exports = orm;
