function registerUser(){
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    if(username && password){
        localStorage.setItem("username", username)
        localStorage.setItem("password", password)
        alert("Inscription reussie, Vous pouvez maintenant vous connecter")
        window.location.href="login.html"
    } else {
        alert("Veillez remplir tous les champs")
    }
    }