"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

//const App = require("actions-on-google").DialogflowApp;
//const  ActionsSdkApp  = require("actions-on-google");
const ActionsSdkApp = require('actions-on-google').ActionsSdkApp;

restService.use(
  bodyParser.urlencoded({
      extended: true
  })
);

restService.use(bodyParser.json());


restService.post("/slack-test", function (req, res) {

    const assistant = new ActionsSdkApp({ request: req, response: res });

    function welcomeIntent(app) {
        app.askWithList('Which of these looks good?',
          app.buildList('List title')
           .addItems([
             app.buildOptionItem(SELECTION_KEY_ONE,
               ['synonym of KEY_ONE 1', 'synonym of KEY_ONE 2'])
               .setTitle('Number one'),
             app.buildOptionItem(SELECTION_KEY_TWO,
               ['synonym of KEY_TWO 1', 'synonym of KEY_TWO 2'])
               .setTitle('Number two'),
           ]));
    }

    function optionIntent(app) {
        if (app.getSelectedOption() === SELECTION_KEY_ONE) {
            app.tell('Number one is a great choice!');
        } else {
            app.tell('Number two is a great choice!');
        }
    }

    const actionMap = new Map();
    actionMap.set(app.StandardIntents.TEXT, welcomeIntent);
    actionMap.set(app.StandardIntents.OPTION, optionIntent);
    app.handleRequest(actionMap);
});



restService.listen(process.env.PORT || 8000, function () {
    console.log("Server up and listening");
});
