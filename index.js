"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const restService = express();

restService.use(
  bodyParser.urlencoded({
      extended: true
  })
);

restService.use(bodyParser.json());

restService.post("/slack-test", function (req, res) {

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

    var obj = [];
    for (i = 0; i < myObj.length; i++) {

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
                          textToSpeech: "This is the first simple response for a basic card"
                      }
                  },
                {
                    listSelect: {
                        title: "work order details",
                        items: obj
                    }
                },



                  
                  {
                      simpleResponse: {
                          textToSpeech: "This is the 2nd simple response ",
                          displayText: "This is the 2nd simple response"
                      }
                  }
                ],
                suggestions:
                [
                  { "title": "Basic Card" },
                  { "title": "List" },
                  { "title": "Carousel" },
                  { "title": "Suggestions" }
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




