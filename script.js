
const apikey = "f90c0e13d9662c46928c6047bee2a084";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";



const searchbox = document.querySelector(".search input");

// when ever the user press the search button it should send the city information in this checkWeather function
const searchbtn = document.querySelector(".search button");

const weatherimage = document.querySelector(".weather-icon");

async function checkWeather(city){

    const response = await fetch(apiUrl + city + `&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    }
    else{

        // this data will have all the data realted to the weather of bangalore
    var data = await response.json();

    const cityname = document.querySelector('.city');
    cityname.innerHTML = data.name;

    const temps = document.querySelector(".temp");
    // we want to do round off the temp we do not want to display the decimal so we use math.round
    temps.innerHTML = Math.round(data.main.temp) + "°C";

    const hum = document.querySelector('.humidity');
    hum.innerHTML = data.main.humidity + "%";

    const windspeed = document.querySelector('.wind');
    windspeed.innerHTML = data.wind.speed + " km/h";

    // here we are going to change the image
    if(data.weather[0].main == "Clouds"){
        weatherimage.src = "images/clouds.png"; 
    }
    else if(data.weather[0].main == "Clear"){
        weatherimage.src = "images/clear.png"; 
    }
    else if(data.weather[0].main == "Rain"){
        weatherimage.src = "images/Rain.png"; 
    }
    else if(data.weather[0].main == "Haze"){
        weatherimage.src = "images/drizzle.png"; 
    }
    else if(data.weather[0].main == "Mist"){
        weatherimage.src = "images/mist.png"; 
    }
    else if(data.weather[0].main == "Snow"){
        weatherimage.src = "images/snow.png"

    }
    else if(data.weather[0].main == "Humidity"){
        weatherimage.src = "images/humidity.png";
    }
    else if(data.weather[0].main == "Wind"){
        weatherimage.src = "images/wind.png";
    }

    document.querySelector('.weather').style.display = "block";
    document.querySelector('.error').style.display = 'none';
    }
}

searchbtn.addEventListener('click', ()=>{

   checkWeather(searchbox.value);
});