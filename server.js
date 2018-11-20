const express = require('express');
const apiRoutes = require ("./app/routes/api.js");
const htmlRoutes = require ("./app/routes/html.js");

// Configure ExpressJS
const app = express();

const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, function()
{
  console.log("CarsDB listening on :", PORT);
});