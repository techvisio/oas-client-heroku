var express = require('express');
var bodyParser = require('body-parser');
var jst = require('jst');

//initialise the application
var app = express();

//add body parser for all requests
app.use(bodyParser.json());

//set request headers for all requests
app.all('/*', function(req, res, next) {
// CORS headers
res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
// Set custom headers for CORS
res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
if (req.method == 'OPTIONS') {
res.status(200).end();
} else {
next();
}
});
//setting static Content
app.use(express.static('client'));

//setting home page
app.get('/',function (req, res) {
  res.sendFile('index.html');
});

// Start the server
app.set('port', process.env.PORT||3000);
var server = app.listen(app.get('port'), function() {
console.log('Express server listening on port ' + server.address().port);

});