const express = require('express');
const apiRoutes = require ("./app/routes/api.js");
const htmlRoutes = require ("./app/routes/html.js");

// Configure ExpressJS
const app = express();

const PORT = process.env.PORT || 8080;

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, function()
{
  console.log("KennelLog listening on :", PORT);
});