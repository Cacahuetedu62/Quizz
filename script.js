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
if(score ===3){
    resultDiv.innerHTML += "<br> Excellent !"
    //ajout d'une class css pour chaque
    resultDiv.classList.add("excellent")
} else if (score ===2){
    resultDiv.innerHTML += "<br> Bon ravail !"
    resultDiv.classList.add("good")
} else if (score ===1){
    resultDiv.innerHTML += "<br> Vous pouvez mieux faire !"
    resultDiv.classList.add("tray-again")
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