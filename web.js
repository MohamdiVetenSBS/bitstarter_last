 var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
 var fileContent =  fs.readFileSync('index.html');
	response.send(fileContent.toString());
});

app.get('/img/:id', function (req, res) {
    res.sendfile(__dirname + '/img/' + req.params.id);
  //  console.log(req);
});
var port = process.env.PORT || 5000;
app.listen(port, function() {
	var cont = fs.readFileSync('index.html');
	

  console.log("Listening on " + port);
});

