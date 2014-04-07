 var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
 var fileContent =  fs.readFileSync('index.html');
	response.send(data.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
	var cont = fs.readFileSync('index.html');
	console.log(cont.toString());

  console.log("Listening on " + port);
});

