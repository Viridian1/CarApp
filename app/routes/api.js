const chalk = require("chalk");
const express = require("express");
const path = require("path");

// Configure express
const app = express();
const router = express.Router ();

app.use ("/", router);

router
.use (function (request, response, next)
{   console.log(chalk.blue("html.js"));
	console.log(chalk.blue("requesting: ", request.url));

	next();
})

module.exports = router;