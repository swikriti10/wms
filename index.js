
const express = require("express");
const bodyParser = require("body-parser");

const request = require("request");
var result="";
//var app = express();
const restService = express();
//var speech = "";
restService.use(
  bodyParser.urlencoded({
      extended: true
  })
);

restService.use(bodyParser.json());
restService.post("/echo", function(req, res) {
  var  speech =
      req.body.result &&
      req.body.result.parameters &&
      req.body.result.parameters.echoText
        ? req.body.result.parameters.echoText
        : "wrong";

  request.get({ url: "https://mdcs0014121431trial.hanatrial.ondemand.com/ChatBotProject/services/demo7.xsjs" }, function (error, response, body) {
      if (!error && response.statusCode == 200) {
          result = res.json(body);
      }
      else {
          result = "No data";
      }
  });
  return res.json({
      speech: result,
      displayText: result,
      source: "wms"
  });
  });

    
});
restService.listen(process.env.PORT || 1337, function () {
    console.log("running server");
});


