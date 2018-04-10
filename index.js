"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
var result = "";

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());



restService.post("/video", function(req, res) {
  return res.json({
    speech:
      '<speak>  <audio src="https://www.youtube.com/watch?v=VX7SSnvpj-8">did not get your MP3 audio file</audio></speak>',
    displayText:
      '<speak>  <audio src="https://www.youtube.com/watch?v=VX7SSnvpj-8">did not get your MP3 audio file</audio></speak>',
    source: "webhook-echo-sample"
  });
});

  restService.post("/slack-test", function(req, res) {
	const url = `http://services.odata.org/V3/Northwind/Northwind.svc/Customers?$format=json`;
	  request.get(url, function (error, response, body) {
        let json = JSON.parse(body);
		    
		  result=json.value[0].ContactName;
	  });
	  
	  
	  
    var slack_message={
  
  expect_user_response: true,
  richResponse: {
           items: [
				{
				    simpleResponse: {
				        textToSpeech:"This is a simple response for a list"
				    }
				}
            ],
            suggestions: [
				{
				    title:"List"
				},
				{
				    title:"Carousel"
				},
				{
				    title:"Suggestions"
				}
            ]
        }
        
        
    };
    return res.json({
    speech: result,
    displayText: result,
    source: "webhook-echo-sample",
    data: {
      google: slack_message
    }
  });
});



restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});



