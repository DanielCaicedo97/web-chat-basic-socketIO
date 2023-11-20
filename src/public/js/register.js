const buttonLogin = document.getElementById('login');

buttonLogin.addEventListener('click',()=>{
    const user = document.getElementById('usernameInput').value;

    if(user != ""){
        document.cookie = `username=${user}`;
        document.location.href = "/"
    } else {
        alert("¡Escribe un nombre de usuario!")
    }
    
});
