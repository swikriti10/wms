"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
var result = "";
var cresult="";
let url="";
var a = "";
//var app = express();
const restService = express();
const App = require('actions-on-google').DialogflowApp;
//var speech = "";
restService.use(
  bodyParser.urlencoded({
      extended: true
  })
);

restService.use(bodyParser.json());



    const app = new ActionsSdkApp({request, response});
    app.ask(app.buildRichResponse()
      // Create a basic card and add it to the rich response
      .addSimpleResponse('Math and prime numbers it is!')
      .addBasicCard(app.buildBasicCard('42 is an even composite number. It' +
        'is composed of three distinct prime numbers multiplied together. It' +
        'has a total of eight divisors. 42 is an abundant number, because the' +
        'sum of its proper divisors 54 is greater than itself. To count from' +
        '1 to 42 would take you about twenty-one…')
        .setTitle('Math & prime numbers')
        .addButton('Read more', 'https://example.google.com/mathandprimes')
        .setImage('https://example.google.com/42.png', 'Image alternate text')
        .setImageDisplay('CROPPED')
      )
    );

restService.listen(process.env.PORT || 8000, function () {
    console.log("Server Running");
});


