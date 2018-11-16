// The orm.js middleware interacts with the database.  orm.js requires connection.js and is required
// by autos.js

const chalk = require("chalk");
const connection = require("./connection.js");

const orm =
{   selectAllMakes: function (query, callback)
    {   // generic function to handle all SELECT queries

        connection.query (query, function (error, results)
        {   if (error)
            {   // console.log(error);
                callback (500, "An unspecified error occured on the server.  Please contact " +
                               "your IT support staff.");
            }
            else
            {
                callback (200, results);
            }
        })
    },

    selectAllModels: function (query, make, year, callback)
    {   // generic function to handle all SELECT queries

        connection.query (query, [make, year], function (error, results)
        {   if (error)
            {   // console.log(error);
                callback (500, "An unspecified error occured on the server.  Please contact " +
                               "your IT support staff.");
            }
            else
            {
                callback (200, results);
            }
        })
    },

    selectAllYears: function (query, make, callback)
    {   // generic function to handle all SELECT queries

        connection.query (query, make, function (error, results)
        {   if (error)
            {   // console.log(error);
                callback (500, "An unspecified error occured on the server.  Please contact " +
                               "your IT support staff.");
            }
            else
            {
                callback (200, results);
            }
        })
    },

    selectThisModel: function (query, id, callback)
    {   // generic function to handle all SELECT queries

        connection.query (query, id, function (error, results)
        {   if (error)
            {   // console.log(error);
                callback (500, "An unspecified error occured on the server.  Please contact " +
                               "your IT support staff.");
            }
            else
            {
                callback (200, results);
            }
        })
    }

}

module.exports = orm;
