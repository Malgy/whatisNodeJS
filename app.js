// Introduction to Node JS
// created by: Anthony Malgapo
// Code Samurai: Pilot Workshop

//-----//-----//----- adding requirements  //-----//-----//-----

// express is an open-source framework of Node.js where we can use REST API with Node!
// how to download express:
var express = require('express');
// these modules are already given with barebones NodeJS
var http = require('http');
var path = require('path');


var app = express();
var server = http.createServer(app);

//-----//-----//----- creating middleware //-----//-----//-----
// every time the app recieves a REQUEST, it prints to the console
// var logger = function(req, res, next){
// 	console.log('Logging...');
// 	next();
// }

// var requestTime = function(req, res, next){
// 	req.requestTime = Date.now();
// 	next();
// }

// app.use(logger);
// app.use(requestTime);

//-----//-----//----- using ExpressJS //-----//-----//-----
// set static path
app.use(express.static(path.join(__dirname, 'public')));

// GET (HTTP) method used to show the index.html page created instead of simpler prints
app.get('/', function(req, res) {
    // res.send("Hello World!");

		// uncomment the lines below to use the requestTime middleware we created earlier
		// var responseText = 'Hello World!<br>'
  	// responseText += '<small>Requested at: ' + req.requestTime + '</small>'
  	// res.send(responseText)

		res.sendFile(path.join(__dirname + '/index.html'));

});

// POST (HTTP) method route
// app.post('/', function (req, res) {
//   res.send('POST request to the homepage')
// })

// GET (HTTP) method route
// app.get('/', function (req, res) {
//   res.send('GET request to the homepage')
// })

// setting the port to 8080
// apparently, Yoda server will only allow Node.js & express to be deployed to port 8080
// but the port can be changed within local host testing!
server.listen(8080);
console.log('Express server started on port %s', server.address().port);
