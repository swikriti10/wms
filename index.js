"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

var obj = [];
var myObj = [];
var a;
var i=0;

restService.use(
  bodyParser.urlencoded({
      extended: true
  })
);

restService.use(bodyParser.json());


restService.post("/slack-test", function (req, res) {
	
	
	
	var  speech =
      req.body.result &&
      req.body.result.action 
        ? req.body.result.action
        : "wrong";
	
	
		
	    var myObj = [
    {
        'CustomerID': "ALFKI",
        'CompanyName': "Alfreds Futterkiste",
        'ContactName': "Maria Anders"


    },
    {
        'CustomerID': "ANATR",
        'CompanyName': "Ana Trujillo Emparedados y helados",
        'ContactName': "Ana Trujillo"

    }];
	
 for (; i < myObj.length; i++) {

        var tmp = {
            'optionInfo': { 'key': myObj[i].CustomerID },
            'title': myObj[i].CompanyName,
            'description': myObj[i].ContactName
        };

        obj.push(tmp);
	 
    }

    var slack_message = {

        expect_user_response: true,
        rich_response: {
            items: [
                  {
                      simpleResponse: {
                          textToSpeech:speech11
                      }
                  }
            ],
            suggestions: [
				{
				    title: "List"
				},
				{
				    title: "Carousel"
				},
				{
				    title: "Suggestions"
				}
            ]


        },

        systemIntent: {
            intent: "actions.intent.OPTION",
            data: {
                "@type": "type.googleapis.com/google.actions.v2.OptionValueSpec",
                listSelect: {
                    title: "List Title", 
		    items: obj
                }
            }
        }



    };
	

	 return res.json({
        speech:"",
        displayText:"",
        
        source: "webhook-echo-sample",
		
	    data: {
            google:slack_message
        }
		

        
    });	
	
	
 

});



restService.listen(process.env.PORT || 8000, function () {
    console.log("Server up and listening");
});
