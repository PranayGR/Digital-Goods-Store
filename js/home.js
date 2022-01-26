// Coupon Open Function

window.addEventListener('load', function(){
    let coupon = document.getElementById('couponPopup');

    coupon.style.display = 'block';
})

function closePopup(){
    let coupon = document.getElementById('couponPopup');

    coupon.style.display = 'none';   
};