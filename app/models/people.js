// The people middleware handles any logic required to process users.

const chalk = require("chalk");
const orm = require("../data/peopleorm.js");

const people =
{
    login: function (email, password, callback)
    {   // Retrieve a login information for the specified user

        query = "select * from Users where Email=?;"
        orm.login (query, email, function (status, data)
        {
            if (status != 200)
                callback (status, data)
            else
                callback (status, data);
        })
    },

    signup: function (name, email, password, callback)
    {   // INSERT data into the users table to create a new user account

        query = "insert into users (email, password, name) values (?, ?, ?);"
        orm.signup (query, email, password, name, function (status, data)
        {
            if (status != 200)
                callback (500, "Could not create this account.  Try again?")
            else
                callback (status, data);
        })
    }
}

module.exports = people;