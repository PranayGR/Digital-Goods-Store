// Login/Register Open/Close JS
changeForm = () =>{
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