
const express = require("express");
const bodyParser = require("body-parser");


var result="";
//var app = express();
const restService = express();

restService.use(
  bodyParser.urlencoded({
      extended: true
  })
);

restService.use(bodyParser.json());
restService.post("/echo", function(req, res) {
    var speech =
      req.body.result &&
      req.body.result.parameters &&
      req.body.result.parameters.echoText
        ? req.body.result.parameters.echoText
        : "wrong";


    return res.json({
        speech: speech,
        displayText: speech,
        source: "wms"
    });
});
restService.listen(process.env.PORT || 1337, function() {
  console.log("Server up and listening");
});

