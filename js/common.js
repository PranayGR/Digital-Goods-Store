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

// Dropdown Open on Click
document.getElementById('opencategories').addEventListener('click', function() {
    let collapsableCategory = document.getElementById('collapsableCategory');

    if (collapsableCategory.style.display == 'none') {
        collapsableCategory.style.display = 'flex';
    } else {
        collapsableCategory.style.display = 'none';
    }
})


// Currency Converter
let converterURL = "https://freecurrencyapi.net/api/v2/latest?apikey=55db6ac0-7b7c-11ec-8082-d5ad37ab331c&base_currency=INR";
let currencySelect = document.querySelector('.currencySelect');
let Prices = document.querySelectorAll('.price');
let currencySymbol = document.querySelectorAll('.currencySymbol');

currencySelect.addEventListener('change',priceChange)
function priceChange() {
    let currency = currencySelect.value;
    fetch(converterURL)
    .then(res => res.json())
    .then((Data) => {
        for(let i = 0; i < Prices.length; i++) {
            if(currency == 'usd'){
                for(let j = 0; j < currencySymbol.length; j++) {
                    currencySymbol[j].innerText = '$';
                }
                Prices[i].innerText = `${Number(Number(Prices[i].innerText) * Data.data.USD).toFixed(2)}`;
            } else if(currency == 'eur'){
                for(let j = 0; j < currencySymbol.length; j++) {
                    currencySymbol[j].innerText = '€';
                }
                Prices[i].innerText = `${Number(Number(Prices[i].innerText) * Data.data.EUR).toFixed(2)}`
            }
        }
    })
}