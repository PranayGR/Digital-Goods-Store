// Coupon Open Function
window.addEventListener('load', function(){
    let coupon = document.getElementById('couponPopup');

    coupon.style.display = 'block';
})

function closePopup(){
    let coupon = document.getElementById('couponPopup');

    coupon.style.display = 'none';   
};


// Deal Section Timer
let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('mins');
let seconds = document.getElementById('secs');

const countdown = () => {
    const countDate = new Date("February 10, 2022 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    // how does time work
    let second = 1000;
    let min = second * 60;
    let hour = min * 60;
    let day = hour*24;

    // Apply Formula for Time
    days.innerText = ("0" + Math.floor(gap / day)).slice(-2);
    hours.innerText = ("0" + Math.floor((gap % day) / hour)).slice(-2);
    minutes.innerText = ("0" + Math.floor((gap % hour) / min)).slice(-2);
    seconds.innerText = ("0" + Math.floor((gap % min) / second)).slice(-2);
    
}
// To call Function and keep updating every second
setInterval(countdown, 1000);
