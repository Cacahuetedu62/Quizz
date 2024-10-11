function calculateScore(callback){
    
    // calculateScore => CALCUL création de la variable qui va déclarer les réponces correctes
    const correctAnswers = {
        q1: "Paris",
        q2: "Mercure",
        q3: "Jupiter",
    }
    
    // création de la variable qui va récupérer le formulaire id="quiz-form"    
    const form = document.getElementById("quiz-form")
    
    // création de la variable qui va récupérer le score
    let score =0;
    
    //boucle pour chaque questions on va vérifié si la réponse choisie est ok avec le tableau : OK
    for(const question in correctAnswers){
    const userAnswer = form[question].value
    if(userAnswer===correctAnswers[question]){
    score++
    }}
    
    callback(score)
}

function displayResult(score, callback){
//displayResult => AFFICHE recuperation du score : OK
const resultDiv = document.getElementById("result")
resultDiv.innerHTML = `Votre score est de ${score}`    
callback(score)
}

function handleMessage(score){
//affiche un message en fonction du score
const resultDiv = document.getElementById("result")
// pour remettre le style à 0 et pouvoir avoir un style par score
resultDiv.classList.remove("excellent","good","tray-again")
if(score ===3){
    resultDiv.innerHTML += "<br> Excellent !"
    //ajout d'une class css pour chaque
    resultDiv.classList.add("excellent")
} else if (score ===2){
    resultDiv.innerHTML += "<br> Bon ravail !"
    resultDiv.classList.add("good")
} else if (score ===1){
    resultDiv.innerHTML += "<br> Vous pouvez mieux faire !"
    resultDiv.classList.add("try-again")
}
}


//submitQuiz => appel toutes les fonctions avec un callback
function submitQuiz(){
calculateScore(function(score){
    displayResult(score,function (){
        handleMessage(score)
    })
})
}

//fonction pour s'inscrire
function registerUser(){
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    if(username && password){
        localStorage.setItem("username", username)
        localStorage.setItem("password", password)
        alert("Inscription reussie, Vous pouvez maintenant vous connecter")
    } else {
        alert("Veillez remplir tous les champs")
    }
    }

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
    
        //fonction pour cnaitre l'état de ma conection
        function checkAuth(){
            const isAutenticated = localStorage.getItem("isAutenticated")

            if(isAutenticated !== "true")
                alert("veuillez vous connecter pour accèder au quiz")
                window.location.href ="login.html"
        }
