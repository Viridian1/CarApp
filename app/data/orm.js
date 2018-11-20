// The orm.js middleware interacts with the database.  orm.js requires connection.js and is required
// by autos.js

const chalk = require("chalk");
const connection = require("./connection.js");

const orm =
{   selectAllMakes: function (query, callback)
    {   // SELECT a unique list of manufacturere

        connection.query (query, function (error, results)
        {   if (error)
            {   callback (500, "An unspecified error occured on the server.  Please contact " +
                               "your IT support staff.");
                               console.log(error)
            }
            else
            {
                callback (200, results);
            }
        })
    },

    selectAllModels: function (query, make, year, callback)
    {   // SELECT a unique list of all models available from a manufacturer

        connection.query (query, [make, year], function (error, results)
        {   if (error)
            {   callback (500, "An unspecified error occured on the server.  Please contact " +
                               "your IT support staff.");
            }
            else
            {
                callback (200, results);
            }
        })
    },

    selectAllYears: function (query, make, callback)
    {   // SELECT all available model years for the specified model

        connection.query (query, make, function (error, results)
        {   if (error)
            {   callback (500, "An unspecified error occured on the server.  Please contact " +
                               "your IT support staff.");
            }
            else
            {
                callback (200, results);
            }
        })
    },

    selectThisModel: function (query, id, callback)
    {   // SELECT all data for specific make, model and year

        connection.query (query, id, function (error, results)
        {   if (error)
            {   callback (500, "An unspecified error occured on the server.  Please contact " +
                               "your IT support staff.");
            }
            else
            {
                callback (200, results);
            }
        })
    },

    addThisModel: function (query, data, callback)
    {   // INSERT a new record for the indicated make and model

        const { Year, Make, Model, Engine_size_L_, Vehicle_Type, Horsepower, _of_Cylinders, Transmission, 
                _of_Gears, Drive_System_Description, Equivalent_Test_Weight_lbs, Test_Fuel_Type_Cd, 
                Test_Fuel_Type_Description, MPG } = data;
        connection.query (query,
        [   Year, Make, Model, Engine_size_L_, Vehicle_Type, Horsepower, _of_Cylinders, Transmission, 
            _of_Gears, Drive_System_Description, Equivalent_Test_Weight_lbs, Test_Fuel_Type_Cd, 
            Test_Fuel_Type_Description, MPG
        ], function (error, results)
        {   if (error)
            {   
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
