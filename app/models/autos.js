// The auto middleware handles any logic required to process the data as received from the orm.

const chalk = require("chalk");
const orm = require("../data/orm.js");

const autos =
{
    getAllMakes: function (callback)
    {   // Retrieve a list of all auto manufacturers in the database

        query = "select make from CarsDB group by make;"
        orm.selectAllMakes (query, function (status, data)
        {
            callback (status, data);
        })
    },

    getAllModels: function (make, year, callback)
    {   // Retrieve a list of all model available from a manufacturer

        query = "select model from CarsDB where make=? and year=? group by model;"
        orm.selectAllModels (query, make, year, function (status, data)
        {
            callback (status, data);
        })
    },

    getAllYears: function (make, callback)
    {   // Retrieve a list of available model years for the model

        query = "select model, year from CarsDB where make=?;"
        orm.selectAllYears (query, make, function (status, data)
        {
            callback (status, data);
        })
    },

    getThisModel: function (id, callback)
    {   // Retrieve all data for the model year...identified by make, model and year

        query = "select * from CarsDB where id=?;"
        orm.selectThisModel (query, id, function (status, data)
        {
            callback (status, data);
        })
    },

    addThisModel: function (inputData, callback)
    {   // Add a new model to the database...
    
        // Make sure that all of the fields are accounted for...
        if ((!inputData.Make) || (inputData.Model) || (inputData.Year)) callback(204, "One or more of the fields is invalid.")
        if (!inputData.Engine_size_L_) inputData.Engine_size_L_ = "null"
        if (!inputData.Vehicle_Type) inputData.Vehicle_Type = "null"
        if (!inputData.Horsepower) inputData.Horsepower = "null"
        if (!inputData._of_Cylinders) inputData._of_Cylinders = "null"
        if (!inputData.Transmission) inputData.Transmission = "null"
        if (!inputData._of_Gears) inputData._of_Gears = "null"
        if (!inputData.Drive_System_Description) inputData.Drive_System_Description = "null"
        if (!inputData.Equivalent_Test_Weight_lbs) inputData.Equivalent_Test_Weight_lbs = "null"
        if (!inputData.Test_Fuel_Type_Cd) inputData.Test_Fuel_Type_Cd = "null"
        if (!inputData.Test_Fuel_Type_Description) inputData.Test_Fuel_Type_Description = "null"
        if (!inputData.MPG) inputData.MPG = "null"

        query = "insert into CarsDB (Year, Make, Model, Engine_size_L_, Vehicle_Type, Horsepower, " +
                                    "_of_Cylinders, Transmission, _of_Gears, Drive_System_Description, " +
                                    "Equivalent_Test_Weight_lbs, Test_Fuel_Type_Cd, " +
                                    "Test_Fuel_Type_Description, MPG) " +
                "values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);"

        orm.addThisModel (query, inputData, function (status, data)
        {
            callback (status, data);
        })
    }
}

module.exports = autos;