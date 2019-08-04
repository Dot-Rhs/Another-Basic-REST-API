const express = require("express"),
  app = express(),
  port = process.env.PORT || 3000;
(mongoose = require("mongoose")), (Task = require("./api/models/model"));
bodyParser = require("body-parser");

//initialise mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/Tododb", { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let routes = require("./api/routes/routes"); //imports the route
routes(app); //registers the route

app.use(function(req, res) {
  res.status(404).send({ url: req.originalUrl + " not found" });
});

app.listen(port);

console.log(`todo list RESTful API server started on port: ${port}`);
