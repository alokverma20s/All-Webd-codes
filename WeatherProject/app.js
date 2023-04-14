const express = require('express');
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

function timeManage(key){
    if(key<10){
        return "0"+key;
    }
    else
        return key;
}

app.post("/", function (req, res) {
    const apikey = "e59b756357d71e6b7605d0e125c692b5";
    const query = req.body.cityName;
    console.log(query);
    const locationUrl= "https://api.openweathermap.org/geo/1.0/direct?q="+query+"&limit=1&appid="+apikey;
    let latitude,longitude;
    const unit = "metric";
    https.get(locationUrl, function(cordinate){
        // console.log(response);
        cordinate.on("data", function(data){
            const locationData = JSON.parse(data);
            // console.log(locationData);
            latitude = locationData[0].lat;
            longitude = locationData[0].lon;
            const state = locationData[0].state;
            // console.log(latitude+" " + longitude);
            const url = "https://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&units=" + unit + "&appid=" + apikey;
            https.get(url, function (response) {
                response.on("data", function (data) {
                    const weatherData = JSON.parse(data);
                    console.log(weatherData);
                    const temp = weatherData.main.temp;
                    const desciption = weatherData.weather[0].description;
                    var sunset = weatherData.sys.sunset+weatherData.timezone;
                    const setSec = sunset%60;
                    sunset = (sunset-setSec)/60;
                    const setMin = sunset%60;
                    sunset = (sunset-setMin)/60;
                    const setHr = sunset%24;
                    var sunrise = weatherData.sys.sunrise+weatherData.timezone;
                    const riseSec = sunrise%60;
                    sunrise = (sunrise-riseSec)/60;
                    const riseMin = sunrise%60;
                    sunrise=(sunrise-riseMin)/60;
                    const riseHr = sunrise%24;
                    const imageUrl = "http://openweathermap.org/img/wn/" + weatherData.weather[0].icon + "@2x.png";
                    res.set("Content-Type", "text/html");
                    res.write('<link rel="stylesheet" href="style.css">')
                    res.write("<h2>The Weather is currently:- " + desciption + "</h2>");
                    res.write("<h1>The temperature in " + weatherData.name + ", " + state +", " + weatherData.sys.country + " is " + temp + " °C.</h1>");
                    res.write("<img src=" + imageUrl + " alt =\"Condition-image\">");
                    res.write("<p>Sunrise: "+timeManage(riseHr)+":"+timeManage(riseMin)+":"+timeManage(riseSec)+"</p>");
                    res.write("<p>Sunset: "+timeManage(setHr)+":"+timeManage(setMin)+":"+timeManage(setSec)+"</p>");
                    res.write("<div>Feels like : "+weatherData.main.feels_like+"</div>");
                    res.write("<div>Min temp : "+weatherData.main.temp_min+"°C</div>");
                    res.write("<div>Max temp : "+weatherData.main.temp_max+"°C</div>");
                    res.write("<div>Pressure : "+weatherData.main.pressure+"pa</div>");
                    res.write("<div>Humidity : "+weatherData.main.humidity+"%</div>");
                    res.send();
                });
            });
        });
    });
});

app.listen(3001, function () {
    console.log("Server is running on port 3001");
});