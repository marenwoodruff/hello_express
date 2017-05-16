var express = require('express'); // Loading the express module on our server
var app = express(); // Creates a new instance of express on our server


app.get('/', function(req, res) { 
  // when a request comes in at localhost:3000, it will respond 
  res.send('Hello WDI 10!');
});

app.get('/greeting', function(req, res) {
  res.send('HEY, WDI 10!');
  console.log('req route: ' + req.route);
  console.log('req query: ' + req.query);
});

app.get('/rihanna', function(req, res) {
  res.send("Work work work work work");
});

app.get("/hello/:name", function(req, res){
  console.log(req.params);
  console.log(req.route);
  console.log(req.query);
  // parameter is name, query parameter is first_name
  res.send(`Hello, my last name is ${req.params.name}. My first name is ${req.query.first_name}.`);
});

var port = process.env.PORT || 3000; // tells the server where to listen for requests

app.listen(port, function() {
  // tells the server where to listen for requests on port 3000
  console.log('hello-express is listening on port ' + port);
}); // actualizing the line above
