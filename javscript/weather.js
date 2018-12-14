var city='Calgary';

function getWeather(){
    var xhttp = new XMLHttpRequest();
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=9433fad3d5a66a43a710322260fa9155";
    xhttp.onreadystatechange = function(){
       if(xhttp.readyState==4 && xhttp.status==200){
            var parsedJSON = JSON.parse(xhttp.responseText);
               outputWeather(parsedJSON);
        }
    }
    xhttp.open("GET",url,true);
    xhttp.send();
}
function outputWeather(weatherData){
    var mainly = weatherData.weather[0].main;
    document.getElementById('main').innerHTML = mainly;
    var description = weatherData.weather[0].description;
    document.getElementById('detail').innerHTML = description;
    var icon = weatherData.weather[0].icon;
    icon = "https://openweathermap.org/img/w/" + icon +".png"
    document.getElementById('icon').src = icon;
    var temp = weatherData.main.temp;
    temp = parseInt(temp-273.15);
    document.getElementById('temp').innerHTML = temp;
    document.getElementById('city').innerHTML = city;
}
