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
        },
        systemIntent: {
            intent:"actions.intent.OPTION",
            data: {
                @type : "type.googleapis.com/google.actions.v2.OptionValueSpec",
                listSelect: {
                    title:"List Title","items": [
						{
						    optionInfo: {
						        key:"title",
						        synonyms: [
								"synonym of title 1",
								"synonym of title 2",
								"synonym of title 3"
						        ]
						    },
						    title:"Title of First ListItem",
						    description:"This is a description of a list item",
						    image: {
						        url:"https://developers.google.com/actions/images/badges/XPM_BADGING_GoogleAssistant_VER.png",
						        accessibilityText:"Image alternate text"}
						},
						{
						    optionInfo: {
						        key:"googleHome",
						        synonyms: [
									"Google Home Assistant","Assistant on the Google Home"
						        ]
						    },
						    title:"Google Home",
						    description:"Google Home is a voice-activated speaker powered by the Google Assistant.",
						    image: {
						        url:"https://lh3.googleusercontent.com/Nu3a6F80WfixUqf_ec_vgXy_c0-0r4VLJRXjVFF_X_CIilEu8B9fT35qyTEj_PEsKw",
						        accessibilityText:"Google Home"
						    }
						},
						{
						    optionInfo: {
						        key:"googlePixel",
						        synonyms: [
									"Google Pixel XL",
									"Pixel","Pixel XL"
						        ]
						    },
						    title:"Google Pixel",
						    description:"Pixel. Phone by Google.",
						    image: {
						        url:"https://storage.googleapis.com/madebygoog/v1/Pixel/Pixel_ColorPicker/Pixel_Device_Angled_Black-720w.png",
						        accessibilityText:"Google Pixel"
						    }
						},
						{
						    optionInfo: {
						        key:"googleAllo",
						        synonyms: [
									"Allo"
						        ]
						    },
						    title:"Google Allo",
						    description:"Introducing Google Allo, a smart messaging app that helps you say more and do more.",
						    image: {
						        url:"https://allo.google.com/images/allo-logo.png",
						        accessibilityText:"Google Allo Logo"
						    }
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



restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});




