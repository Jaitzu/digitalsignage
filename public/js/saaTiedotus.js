const appKey = "912f5a677a5eede71addd2390963dbb1";

let cityName = document.getElementById("city-name");
let icon = document.getElementById("icon");
let temperature = document.getElementById("temp");
let humidity = document.getElementById("humidity-div");
let city = "vantaa";

function findWeatherDetails() {
        let searchLink = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid="+appKey;
        httpRequestAsync(searchLink, theResponse);
}

function theResponse(response) {
    let jsonObject = JSON.parse(response);
    console.log(jsonObject);
    console.log(jsonObject);
    cityName.innerHTML = jsonObject.name;
    icon.src = "http://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";
    temperature.innerHTML =parseInt(jsonObject.main.temp - 273) + "°C";
    humidity.innerHTML ="Humidity: " + jsonObject.main.humidity + "%";
}

function httpRequestAsync(url, callback)
{
    console.log("hello");
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => {
        if (httpRequest.readyState == 4 && httpRequest.status == 200)
            callback(httpRequest.responseText);
    }
    httpRequest.open("GET", url, true); // true for asynchronous
    httpRequest.send();
}

findWeatherDetails();

setInterval(findWeatherDetails(), 40000);