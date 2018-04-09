"use strict";

const express = require("express");
const bodyParser = require("body-parser");

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
    var slack_message={
  
  expect_user_response: true,
  rich_response: {
  items: [
    {
      simpleResponse: {
          textToSpeech:"This is the first simple response for a basic card"
      }
    },
    {
      basicCard: {
        title:"Title: this is a title",
        formattedText:"This is a basic card.  Text in a\n      basic card can include \"quotes\" and most other unicode characters\n      including emoji 📱.  Basic cards also support some markdown\n      formatting like *emphasis* or _italics_, **strong** or __bold__,\n      and ***bold itallic*** or ___strong emphasis___ as well as other things\n      like line  \nbreaks",
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
        textToSpeech:"This is the 2nd simple response ",
        displayText:"This is the 2nd simple response"
      }
    }
  ],
  suggestions:
  [
    {"title":"Basic Card"},
    {"title":"List"},
    {"title":"Carousel"},
    {"title":"Suggestions"}
  ]
}

    };
    return res.json({
    speech: "",
    displayText: "",
    source: "webhook-echo-sample",
    data: {
      slack: slack_message
    }
  });
});



restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});




