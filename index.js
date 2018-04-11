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
         description: "Choose me for item 1",
                    image: {
                        accessibilityText: "Item 1 image fallback",
                        url: "https://assetscdn.paytm.com/images/catalog/product/L/LA/LAPAPPLE-MACBOOROSE73954D5B64792/1.jpg"
                    },
                    optionInfo: {
                        key: "item_one",  
                        synonyms: [
                            "first",
                            "number one", "one",
                            "top"
                        ]
                    },
                    title: "Item One" 
                          },
         {
         description: "Choose me for item 2",
                    image: {
                        accessibilityText: "Item 2 image fallback",
                        url: "https://assetscdn.paytm.com/images/catalog/product/L/LA/LAPAPPLE-MACBOOROSE73954D5B64792/1.jpg"
                    },
                    optionInfo: {
                        key: "item_two", 
                        synonyms: [
                            "two",
                            "number two", "two",
                            "last"
                        ]
                    },
                    title: "Item two" 
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




