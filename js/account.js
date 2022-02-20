// Login/Register Open/Close JS
const changeForm = () =>{
    var login = document.getElementById('login');
    var register = document.getElementById('register');

    if(login.style.display === 'block'){
        register.style.display = 'block';
        login.style.display = 'none';
    } else{
        register.style.display = 'none';
        login.style.display = 'block';
    }
}


// User Option Change JS
const changeTab = (event,tabs) => {
    let accountTab = document.querySelector('.accountSection');
    let wishlistTab = document.querySelector('.wishlistSection');
    let cartTab = document.querySelector('.cartSection');
    let tabLinks = document.querySelectorAll('.tabLinks');

    for(let i = 0; i < tabLinks.length; i++){
        tabLinks[i].className = tabLinks[i].className.replace("active", " ");
    }

    if(tabs == 'account'){
        console.log('Account Tab')
        accountTab.style.display = 'block';
        wishlistTab.style.display = 'none';
        cartTab.style.display = 'none';
        event.currentTarget.className += " active";
    } else if(tabs == 'wishlist'){
        accountTab.style.display = 'none';
        cartTab.style.display = 'none';
        wishlistTab.style.display = 'block';
        event.currentTarget.className += " active";
    } else if(tabs == 'cart'){
        accountTab.style.display = 'none';
        cartTab.style.display = 'block';
        wishlistTab.style.display = 'none';
        event.currentTarget.className += " active";   
    }
}