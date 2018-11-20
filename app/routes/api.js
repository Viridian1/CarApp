const chalk = require("chalk");
const express = require("express");
const autos = require("../models/autos.js");
const people = require("../models/people.js");
const path = require("path");

// Configure express
const app = express();
const router = express.Router ();

app.use ("/", router);

router
.use (function (request, response, next)
{   console.log(chalk.red("api.js"));
	console.log(chalk.red("requesting: ", request.url));

	next();
})
.get("/all", function(request, response)
{	// Get all manufacturers

	autos.getAll(function(status, data)
	{
		if (status != 200)
			response.status(status).send(data);
		else
			response.status(200).json(data);
	})

})
.get("/allmakes", function(request, response)
{	// Get all manufacturers

	autos.getAllMakes(function(status, data)
	{
		if (status != 200)
			response.status(status).send(data);
		else
			response.status(200).json(data);
	})

})
.get("/:make/allmodels/:year", function(request, response)
{
	autos.getAllModels(request.params.make, request.params.year, function(status, data)
	{
		if (status != 200)
			response.status(status).send(data);
		else
			response.status(200).json(data);
	})
})
.get("/:make/allyears", function(request, response)
{
	autos.getAllYears(request.params.make, function(status, data)
	{
		if (status != 200)
			response.status(status).send(data);
		else
			response.status(200).json(data);
	})
})
// .get("/:make/:model/:year/:id", function(request, response)
// {
// 	autos.getThisModel(request.params.id, function(status, data)
.get("/getModel/:make/:model/:year", function(request, response)
{
	autos.getThisModel(request.params.make, request.params.model, request.params.year, function(status, data)
	{
		if (status != 200)
			response.status(status).send(data);
		else
			response.status(200).json(data);
	})
})
.post("/addModel", function(request, response)
{   
	autos.addThisModel(request.body, function(status, data)
	{
		response.end();
	})
})
.post("/login", function(request, response)
{   // Someone is attempting to log in to the database

	var email = request.body.email;
	var password = request.body.password;

	if (!email || !password)
	{	// if email or password is not passed with this request, redirect to the log in page

		// response.redirect ("/");

		// Okay, for some reason I can't make redirect work.  The text of the page is passed to the
		// browser (as expected) but location.replace() throws an error.  Data with whitespace, \n,
		// \r, < or > is deprecated.   ??!!  But this does work, although I suppose it's not secure.

		response.status(404).send("Your UserID or passwrod is invalid.  Try again?")
	}
	else
	{	// proceed to validate the user

	 	people.login(email, password, function(status, data)
		{
			if (status != 200)
			{
				response.status(status).send(data)
			}
			else
			{
				response.redirect("/home.html");
			}
		})
	}
})
.post("/signup", function(request, response)
{   // Someone is attempting to log in to the database

	var name = request.body.name;
	var email = request.body.email;
	var password = request.body.password;

	if (!name || !email || !password)
	{	// if name, email or password is not passed with this request, redirect to the log in page

		// response.redirect ("/");

		// Okay, for some reason I can't make redirect work.  The text of the page is passed to the
		// browser (as expected) but location.replace() throws an error.  Data with whitespace, \n,
		// \r, < or > is deprecated.   ??!!  But this does work, although I suppose it's not secure.

		response.status(404).send("Please enter all required informention.  Try again?")
	}
	else
	{	// proceed to validate the user

	 	people.signup(name, email, password, function(status, data)
		{
			if (status != 200)
			{
				response.status(status).send(data)
			}
			else
			{
				response.redirect("/home.html");
			}
		})
	}
})

module.exports = router;