var API_KEY = "3aa07c78922b4e4f557f27f03fd0d08d";

var http = require('http');

var zipCode = process.argv[2];

if(!zipCode)
  zipCode=10012;

var request = http.get('http://api.openweathermap.org/data/2.5/weather?zip='+zipCode+',us&APPID='+API_KEY,function(response){

var body = "";

  response.on('data',function(chunk){

    body+=chunk; //store response into var
  });

  response.on('end',function(){

    var weather = JSON.parse(body);

    //print the current weather!
    console.log("The weather in "+weather.name+" is "+weather.weather[0].main);
  })
});
