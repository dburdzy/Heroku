// web.js
var express = require("express");
var logfmt = require("logfmt");
var app = express();

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
  
var text = '{ "Recipes" : [' +
'{ "Name":"John" , "Description":"Doe" , "Img_URL: www.nope.com" , "Servings : "1782" },' +
'{ "Name":"John2" , "Description":"Doe2" , "Img_URL: www.nope2.com" , "Servings : "1783" },' +
'{ "Name":"John3" , "Description":"Doe3" , "Img_URL: www.nope3.com" , "Servings : "1784" },' +
'{ "Name":"John4" , "Description":"Doe4" , "Img_URL: www.nope4.com" , "Servings : "1888" } ]}';

  res.send(text);
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});
