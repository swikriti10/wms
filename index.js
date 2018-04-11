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
                  browse_carousel_card: {
                      title: "Things to learn about",
                      items: [
                          {
          description: "at price of Rs. 57,999",
          title: "Apple MacBook Air Core i5 5th Gen - (8 GB/128 GB SSD/Mac OS Sierra) MQD32HN/A A1466",
          footer: "Apple MacBook Air Core i5 5th Gen - (8 GB/128 GB SSD/Mac OS Sierra) MQD32HN/A A1466",
          image: {
            url: "https://rukminim1.flixcart.com/image/200/200/j4irlow0/computer/j/8/c/apple-na-notebook-original-imaevdrcvuksg2zv.jpeg?q=90",
            accessibilityText: "Apple MacBook Air Core i5 5th Gen - (8 GB/128 GB SSD/Mac OS Sierra) MQD32HN/A A1466"
          },
          openUrlAction: {
            "url": "https://dl.flipkart.com/dl/apple-macbook-air-core-i5-5th-gen-8-gb-128-gb-ssd-mac-os-sierra-mqd32hn-a/p/itmevcpqqhf6azn3?pid=COMEVCPQBXBDFJ8C&affid=HotDeals20&affExtParam2=pricee-desktop-search-21"
          }
        },
        {
          description: "at price of Rs. 89,990",
          title: "Apple Macbook PRO MPXQ2/R2 Core i5 (6th Gen)/8 GB/128 GB/33.78 cm (13.3)/Mac OS)",
          footer: "Apple Macbook PRO MPXQ2/R2 Core i5 (6th Gen)/8 GB/128 GB/33.78 cm (13.3)/Mac OS)",
          image: {
            url: "https://assetscdn.paytm.com/images/catalog/product/L/LA/LAPAPPLE-MACBOOROSE73954D5B64792/1.jpg",
            accessibilityText: "Apple Macbook PRO MPXQ2/R2 Core i5 (6th Gen)/8 GB/128 GB/33.78 cm (13.3)/Mac OS)"
          },
         openUrlAction: {
            "url": "https://paytmmall.com/apple-macbook-pro-mpxq2-r2-core-i5-6th-gen-8-gb-128-gb-33-78-cm-13-3-mac-os-CMPLXLAPAPPLE-MACBOODUMM202563C836CCA-pdp?product_id=145129487&discoverability=online&src=grid&utm_source=NDTV&utm_medium=affiliate&utm_campaign=NDTV-recharge&utm_term=Gadget360"
          }
        }
                       ]
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




