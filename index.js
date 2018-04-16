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

      
    var  ordernum =
      req.body.result &&
      req.body.result.parameters &&
      req.body.result.parameters.ordernum
        ? req.body.result.parameters.ordernum
        : "Noordernum";

    var confirmvalue =
    req.body.result &&
    req.body.result.parameters &&
    req.body.result.parameters.confirmvalue
      ? req.body.result.parameters.confirmvalue
      : "Noconfirmvalue";


    var  speech =
        req.body.result &&
        req.body.result.parameters &&
        req.body.result.parameters.echoText
          ? req.body.result.parameters.echoText
          : "Wrong";

    var param =
    req.body.result &&
    req.body.result.parameters &&
    req.body.result.parameters.orderID
      ? req.body.result.parameters.orderID
      :"Noparam";

    //const url = "http://services.odata.org/V3/Northwind/Northwind.svc/Customers('ALFKI')?$format=json";
    // const url = "http://services.odata.org/V3/Northwind/Northwind.svc/Customers('" + speech + "')?$format=json";

    
    // const url="https://mdcs0014121431trial.hanatrial.ondemand.com/ChatBotProject/services/order.xsjs"
    //const url = `https://mdcs0014121431trial.hanatrial.ondemand.com/ChatBotProject/services/orderitems.xsjs?ToNum=${speech}`;
    //let url = `https://mdcs0014121431trial.hanatrial.ondemand.com/ChatBotProject/services/orderitems.xsjs?ToNum=${x}`
    // const url = `https://mdcs0014121431trial.hanatrial.ondemand.com/ChatBotProject/services/orderitems.xsjs?ToNum=${speech}`

    if(param=="Noparam" && confirmvalue=="Noconfirmvalue" && ordernum=="Noordernum")
    {
        url="https://mdcs0014121431trial.hanatrial.ondemand.com/ChatBotProject/services/order.xsjs"
        // const url = `https://mdcs0014121431trial.hanatrial.ondemand.com/ChatBotProject/services/orderitems.xsjs?ToNum=${param}`
    }

    else if(param!="Noparam" && confirmvalue=="Noconfirmvalue" && ordernum=="Noordernum")
    {
        url = `https://mdcs0014121431trial.hanatrial.ondemand.com/ChatBotProject/services/orderitems.xsjs?ToNum=${param}`
    }
    else 
    {
        if(confirmvalue=="yes"||confirmvalue=="Yes"||confirmvalue=="YES")
        {
            url=`https://mdcs0014121431trial.hanatrial.ondemand.com/ChatBotProject/services/orderconfirm.xsjs?ToNum=${ordernum}`
            
        }
        else{
            url="";
            cresult="Select Order Number To Pick";
        }
    }

   

    request.get(url, function (error, response, body) {
       
        if (!error && response.statusCode == 200) {
            //  let json = JSON.parse(body);
            //console.log(" city :" + json.value[0].CompanyName);
            //result = speech+ " ,"+ json.value[0].CompanyName;
            // result = speech + " ," + json.CompanyName;

         
            result =body ;
          result=="You do not seem to have any active Orders!"
          if(result=="You do not seem to have any active Orders!")
            {
                var a =false;
            }
            else{
                var a =true;
            }
         
          
         
        }
        else
        {
            if(cresult!="")
            {
                result=cresult;
            }
            else{
                result = "No data";
                var a =false;
            }
          
        }

        return res.json({
            speech: result,
            displayText: result,

            data: {
                google: {
                    expect_user_response: a
                
                }
            },
            source: "wms"
        });

    });

  

});

restService.listen(process.env.PORT || 8005, function () {
    console.log("Server Running");
});
