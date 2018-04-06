
"use strict";

const App = require('actions-on-google').DialogflowApp;
 
const functions = require('firebase-functions');
exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) =&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt; {
    
    // connect functions to our intents here
    
});
const app = new App({request, response});

let actionMap = new Map();

actionMap.set('input.welcome', welcome);

app.handleRequest(actionMap);
function welcome(app) {
    
    app.tell("Hello World from Clearbridge Mobile!");
    
}



restService.listen(process.env.PORT || 8000, function () {
    console.log("Server Running");
});

