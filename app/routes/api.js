const chalk = require("chalk");
const express = require("express");
const autos = require("../models/autos.js");
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

module.exports = router;