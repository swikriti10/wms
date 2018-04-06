
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
//var speech = "";
restService.use(
  bodyParser.urlencoded({
      extended: true
  })
);

restService.use(bodyParser.json());
restService.post("/echo", function (req, res) {


    if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
        app.ask(app.buildRichResponse()
          // Create a basic card and add it to the rich response
                  .addSimpleResponse('My recommendations are')
                  .addBasicCard(app.buildBasicCard('With my recent trip to Goa')
                      .setTitle('Touxeachem feast cucumber festival Goa')
                      .addButton('Read more')
                      .setImage('https://firebasestorage.googleapis.com......', 'Culture,Heritage')
                      )
             );
    } else {
        app.ask(app.buildRichResponse().addSimpleResponse('Surfaceless!'));
    }
});
restService.listen(process.env.PORT || 8000, function () {
    console.log("Server Running");
});
