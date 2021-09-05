const API_KEY="1e6496b6e66fee50adbe82a69d350a51";
function onGeoOk(position){
    const lat=position.coords.latitude;
    const lng=position.coords.longitude;
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const city=document.querySelector("#weather span:first-child");
        const weather=document.querySelector("#weather span:last-child");
        city.innerText=data.name;
        weather.innerText=`${data.weather[0].main}/${Math.round(data.main.temp)}`;
    });
}

function onGeoError(){
    alert("Can't fin you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);