
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
var result = "";
var cresult="";
let url="";
var a = "";
const DialogflowApp = require("actions-on-google");

//const functions = require('firebase-functions');
//var app = express();
const restService = express();
//var speech = "";
restService.use(
  bodyParser.urlencoded({
      extended: true
  })
);

restService.use(bodyParser.json());
restService.post("/test", function (req, res) {

    const app = new DialogflowApp({request, response});
    const WELCOME_INTENT = 'input.welcome';
    const OPTION_INTENT = 'option.select';

    function welcomeIntent (app) {
        app.askWithCarousel('Which of these looks good?',
          app.buildCarousel()
           .addItems([
             app.buildOptionItem(SELECTION_KEY_ONE,
               ['synonym of KEY_ONE 1', 'synonym of KEY_ONE 2'])
               .setTitle('Number one'),
             app.buildOptionItem(SELECTION_KEY_TWO,
               ['synonym of KEY_TWO 1', 'synonym of KEY_TWO 2'])
               .setTitle('Number two'),
           ]));
    }

    function optionIntent (app) {
        if (app.getSelectedOption() === SELECTION_KEY_ONE) {
            app.tell('Number one is a great choice!');
        } else {
            app.tell('Number two is a great choice!');
        }
    }

    const actionMap = new Map();
    actionMap.set(WELCOME_INTENT, welcomeIntent);
    actionMap.set(OPTION_INTENT, optionIntent);
    app.handleRequest(actionMap);

  

});

restService.listen(process.env.PORT || 8000, function () {
    console.log("Server Running");
});


