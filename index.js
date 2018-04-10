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
 
 var res=[];
 myObj = [
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

   
    for (i = 0; i < myObj.length; i++) {

        var tmp = {
            'optionInfo': { 'key': myObj[i].CustomerID },
            'title': myObj[i].CompanyName,
            'description': myObj[i].ContactName
        };

        obj.push(tmp);
    }
   res=obj;
        var slack_message = {

            expect_user_response: true,
            rich_response: {
                items: [
                  {
                      simpleResponse: {
                          textToSpeech:"test"
                      }
                  },
               {
      basicCard: {
        title:"Title: this is a title",
        formattedText:"This is a basic card.  Text in a\n      basic card can include \"quotes\" and most other unicode characters\n      including emoji ??.  Basic cards also support some markdown\n      formatting like *emphasis* or _italics_, **strong** or __bold__,\n      and ***bold itallic*** or ___strong emphasis___ as well as other things\n      like line  \nbreaks",
        subtitle:
        "This is a subtitle",
        image: {
          url:"https://developers.google.com/actions/images/badges/XPM_BADGING_GoogleAssistant_VER.png",
          accessibilityText:"Image alternate text"
        },
        buttons: [
          {
            title:"This is a button",
            openUrlAction:{
              url:"https://assistant.google.com/"
            }
          }
        ]
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




