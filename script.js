function submitQuiz(){
// ici, avant il y avait, "console.log" de submitQuiz() test ok, quand on appuis sur soumettre 'coucou ca marche!" s'affiche = JS bien relié

// création de la variable qui va déclarer les réponces correctes
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
}
}

//recuperation du score : OK
const resultDiv = document.getElementById("result")
resultDiv.innerHTML = `Votre score est de ${score}`

//il fait une boucle pour affiché des commentaires : OK
if(score ===3){
    resultDiv.innerHTML += "<br> Excellent !"
} else if (score ===2){
    resultDiv.innerHTML += "<br> Bon ravail !"
} else if (score ===1){
    resultDiv.innerHTML += "<br> Vous pouvez mieux faire !"
}
}