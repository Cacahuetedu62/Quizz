function loginUser(){
    const username = document.getElementById("login-username").value
    const password = document.getElementById("login-password").value

    //les deux fonctions servent à récupérer les infos dans le local storage
    const storedUsername = localStorage.getItem("username")
    const storedPassword = localStorage.getItem("password")

    if(username === storedUsername && password === storedPassword){
        localStorage.setItem("isAutenticated", true)
        window.location.href="index.html"
    } else {
        alert("Le nom d'utilisateur ou le mot de passe est incorrect")
    }
    }