// Geolocation + Weather JS

function geolocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    } else{
        console.log('Geolocation is Not Supported on this Device');
    }
}

showPosition = (data) => {
    let x = document.getElementById('weatherImage');
    let y = document.getElementById('temperature');

    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${data.coords.latitude}&lon=${data.coords.longitude}&mode=json&units=metric&cnt=1&APPID=2b5ab3bc294fc9f57cd2c0e0acaa541a`;

    fetch(url)
    .then((res) => res.json())
    .then((data)=> {
            x.innerHTML = `<img src='http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png' alt='weather'/>`
            y.innerText = `${data.main.temp}\u00B0C`;
    })
}