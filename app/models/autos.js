// The auto middleware handles any logic required to process the data as received from the orm.

const chalk = require("chalk");
const orm = require("../data/orm.js");

const autos =
{
    getAllMakes: function (callback)
    {
        query = "select make from CarsDB group by make;"
        orm.selectAllMakes (query, function (status, data)
        {
            callback (status, data);
        })
    },

    getAllModels: function (make, year, callback)
    {
        query = "select model from CarsDB where make=? and year=? group by model;"
        orm.selectAllModels (query, make, year, function (status, data)
        {
            callback (status, data);
        })
    },

    getAllYears: function (make, callback)
    {
        query = "select model, year from CarsDB where make=?;"
        orm.selectAllYears (query, make, function (status, data)
        {
            callback (status, data);
        })
    },

    getThisModel: function (id, callback)
    {
        query = "select * from CarsDB where id=?;"
        orm.selectThisModel (query, id, function (status, data)
        {
            callback (status, data);
        })
    }
}

module.exports = autos;