let now = new Date ();
let h2 = document.querySelector ("h2");


let date = now.getDate();
let hour = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = months[now.getMonth()];
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[now.getDay()];

h2.innerHTML= `${day} ${month} ${date}, ${year} ${hour}:${minutes}`;

//





function handleSubmit (event) {
  event.preventDefault();
 let currentCity = document.querySelector ("#city");
 let searchResult = document.querySelector ("#search-input-text");
 currentCity.innerHTML = searchResult.value;
}
let form = document.querySelector ("#search-form");
form.addEventListener("submit", handleSubmit);


function displayCurrentWeather (response) {
document.querySelector("#city").innerHTML = response.data.name;
document.querySelector("#currentTemp").innerHTML = Math.round (response.data.main.temp);
document.querySelector("#humidity").innerHTML = response.data.main.humidity;
document.querySelector("#wind").innerHTML = Math.round (response.data.wind.speed);

}


function searchCity (response){
let apiKey = "7c75ef2add296b6f945a9da4661b32d6";
let city = document.querySelector ("#search-input-text").value;
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayCurrentWeather)
}

let button = document.getElementById("enter-search");
button.addEventListener("click", searchCity);  

 //

function navigation (event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(immediateLocation)
}

function immediateLocation (position) {
  console.log (position);
let lat = position.coords.latitude;
let long = position.coords.longitude;
let apiKey = "7c75ef2add296b6f945a9da4661b32d6";
let units = "metric";
let apiUrl = "api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}";
axios.get(apiUrl).then(displayCurrentWeather)
}


