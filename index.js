"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();
var obj = [];
var myObj = [];
restService.use(
  bodyParser.urlencoded({
      extended: true
  })
);

restService.use(bodyParser.json());

restService.post("/slack-test", function (req, res) {


    var slack_message = {

        expect_user_response: true,
        rich_response: {
            items: [
                  {
                      simpleResponse: {
                          textToSpeech: "This is a simple response for a list"
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

        possibleIntents: {
            intent: "actions.intent.OPTION",
            inputValueData: {
                @type: "type.googleapis.com/google.actions.v2.OptionValueSpec",
                listSelect: {
                    title: "List Title", 
		    items: [
						{
						    optionInfo: {
						        key: "title",
						        synonyms: [
								"synonym of title 1",
								"synonym of title 2",
								"synonym of title 3"
						        ]
						    },
						    title: "Title of First ListItem",
						    
						},
						{
						    optionInfo: {
						        key: "googleHome",
						        synonyms: [
									"Google Home Assistant", "Assistant on the Google Home"
						        ]
						    },
						    title: "Google Home",
						   
						},
						{
						    optionInfo: {
						        key: "googlePixel",
						        synonyms: [
									"Google Pixel XL",
									"Pixel", "Pixel XL"
						        ]
						    },
						    title: "Google Pixel",
						   
						}
						
                    ]
                }
            }
        }



    };

    return res.json({
        speech: "",
        displayText: "",
        source: "webhook-echo-sample",
        data: {
            google: slack_message
        }
    });





});



restService.listen(process.env.PORT || 8000, function () {
    console.log("Server up and listening");
});
