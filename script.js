const apikey="25c442e1eb65b198e7ff9107f0e88ebd";
const apiurl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';

const citytag = document.querySelector('.city');
const temptag = document.querySelector('.temp');
const humidity = document.querySelector('.humidity');
const windspeed = document.querySelector('.windspeed');
const searchinp = document.querySelector('.search input');
const searchbtn = document.querySelector('.search button');
const weathericon = document.querySelector('.weather-icon');
const weatherbox = document.querySelector(".weather")
const error = document.querySelector('.error')



async function checkWheather(city) {
    const response = await fetch(apiurl+city+`&appid=${apikey}`);
    if (response.status==404){
        weatherbox.style.display="none";
        error.style.display='block';
    }
    else {
        error.style.display='none';
        let data = await response.json()


    citytag.textContent=data.name;
    temptag.textContent=Math.round(data.main.temp)+"°C";
    humidity.textContent=data.main.humidity+"%";
    windspeed.textContent=data.wind.speed+"km/h";

    if(data.weather[0].main == 'Clouds'){
        weathericon.src='/Images/clouds.png'
        
    }
    else if(data.weather[0].main == 'Clear'){
        weathericon.src='/Images/sunny.png'
    }
    else if(data.weather[0].main == 'Rain'){
        weathericon.src='/Images/heavy-rain.png'
    }
    else if(data.weather[0].main == 'Drizzle'){
        weathericon.src='/Images/drizzle.png'
    }
    weatherbox.style.display="block";
    }
    

}   

searchbtn.addEventListener('click',()=>{
    cityname=searchinp.value
    checkWheather(cityname)
    
})