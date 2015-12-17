var API_KEY = "3aa07c78922b4e4f557f27f03fd0d08d";

var http = require('http');

var request = http.get('http://api.openweathermap.org/data/2.5/forecast?q=10032,us&APPID='+API_KEY,function(response){

  var body = "";

  response.on('data',function(chunk){

    body+=chunk;
  });

  response.on('end',function(){

    var weather = JSON.parse(response);

    console.log(weather);
  })
});
