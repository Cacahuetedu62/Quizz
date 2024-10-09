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

//boucle pour chaque questions on va vérifié si la réponse choisie est ok avec le tableau
for(const question in correctAnswers){
    const userAnswer = form[question].value
if(userAnswer===correctAnswers[question]){
    score++
}
}

console.log('score de lutilisateur' + score)

}