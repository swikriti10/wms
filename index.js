"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();
 var obj = [];
 var myObj=[];
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
                      textToSpeech: "This is the first simple response for a basic card"
                  }
              },
              {
                  list_card: {
                     title: "Awesome List",
                      items: [
                     {
              optionInfo: {
                key: "One",
                synonyms: []
              },
              title: "Item one"
            },
            {
              optionInfo: {
                key: "Two",
                synonyms: []
              },
              title: "Item Two"
            }
          ]
                       }
               
              }
               
              ]
                     
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




