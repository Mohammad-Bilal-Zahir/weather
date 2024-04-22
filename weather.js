//const API_key = `3265874a2c77ae4a04bb96236a642d2f`
//const API_key = `a3ee17d1db217f59d7f9b38ef7d21f46`
const API_key = `be8984e530722af1c6f59f7dfc566255`
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")

const getWeather = async(city) =>{
    weather.innerHTML = `<h2>Loading...</h2>`
  //  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`
   // const url = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`
     
    const  responce = await fetch(url);
    const data = await responce.json()
    console.log(data)
    return showWeather(data)
  
}  

const showWeather=(data)=>{
  if(data.cod=="404")
  {
    weather.innerHTML= ` <h2>Data Not Found</h2>`
    return;
  }
    weather.innerHTML = 
    `
    <div class="row" id="weather"> 
<div>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
</div>
<div>

<h2)>${data.main.temp} C</h2>
<h4>${data.weather[0].main}</h4>
<h5> Feels like ${data.main.feels_like}</h5>
<h5> Wind speed ${data.wind.speed}</h5>
</div>  
</div>
    `
}

form.addEventListener("submit",
function(event){
    getWeather(search.value)
    event.preventDefault();
}
)