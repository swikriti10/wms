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
                  listSelect: {
                      title: "Things to learn about",
                      items: [
                          {
                              optionInfo: {
                                  "key": "MATH_AND_PRIME",
                                  synonyms: [
                                      "math",
                                      "math and prime",
                                      "prime numbers",
                                      "prime"
                                  ]
                              },
                              title: "Math & prime numbers",
                              description: "42 is an abundant number because the sum of its proper divisors 54 is greater…",
                              image: {
                                  url: "http://example.com/math_and_prime.jpg",
                                  accessibilityText: "Math & prime numbers"
                              }
                          }
                             

                      ]
                  }
              }
              ],
                      suggestions:
                      [
                        { title: "Basic Card" },
                        { title: "List" },
                        { title: "Carousel" },
                        { title: "Suggestions" }
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




