"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

//const App = require("actions-on-google").DialogflowApp;
//const  ActionsSdkApp  = require("actions-on-google");
const ActionsSdkApp = require('actions-on-google').ActionsSdkApp;
var obj = [];
var myObj = [];
const a="";
var i = 0;


restService.use(
  bodyParser.urlencoded({
      extended: true
  })
);

restService.use(bodyParser.json());


restService.post("/slack-test", function (req, res) {
//const app = new ActionsSdkApp({ request:, response: res });
//const app = new DialogflowApp({request: req, response: res});
	//var a=app.getSelectedOption() ;
	

   // const app = new App({req, res});

   // const param = app.getContextArgument('actions_intent_option',
   //  'OPTION').value;

	
	
	const assistant = new ActionsSdkApp({request: req, response: res});
let actionMap = new Map();
actionMap.set(assistant.StandardIntents.OPTION, () => {
  const param = assistant.getSelectedOption();
	
 // assistant.askForText({ text_to_speech: param });

	
	
	
	
    var speech =
      req.body.result &&
      req.body.result.action
        ? req.body.result.action
        : "wrong";


    //var key=JSON.stringify(req.body);

    var speech11 =
      req.body.result &&
      req.body.result.parameters &&
      req.body.result.parameters.key
        ? req.body.result.parameters.key
        : "xx";
	


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
                          textToSpeech: param
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
        speech: "",
        displayText: "",

        source: "webhook-echo-sample",

        data: {
            google: slack_message
        }



    });

});


});



restService.listen(process.env.PORT || 8000, function () {
    console.log("Server up and listening");
});
