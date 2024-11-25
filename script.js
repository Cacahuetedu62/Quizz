
    let currentQuestionIndex = 0
    let questions = []
    let selectedDifficulty = ""
    
    async function loadQuestions(difficulty) {
        try{
            const response = await fetch ("questions.json")
            const AllQuestions = await response.json()
    
            questions = AllQuestions.filter(
            (q) => q.difficulty === difficulty)
            selectedDifficulty = difficulty
            let currentQuestionIndex = 0
    
            starQuiz()
        } catch (error) {
            console.log("ERREUR LORS DU CHARGEMENT DU TRABLEAU QUESTIONS []", error)
    }  
}


        function starQuiz() {
            document.querySelector(".difficulty-selection").classList.add("hidden")
            document.getElementById("quiz-container").classList.remove("hidden")    
            showQuestion()
        }

        function showQuestion() {
            if(currentQuestionIndex < questions.length) { 
                console.log(questions)

                const questionData = questions[currentQuestionIndex]
                console.log("question data" + questionData)
                const questionContainer = document.getElementById("quiz-container")

                questionContainer.innerHTML=`           
                <div class="question">
                <p>${questionData.questions}<p/>
                </div>
                <form id="quiz-form">
                ${questionData.option
                .map((option, index) =>
                `<label type="radio" name="answer" value="${option}">${option}</label>`)
                .join("")}
<button type="button" onClick="submitAnswers()"> Soumettre </button>
</form>
                
                `    
            }
        }




    // calculateScore => CALCUL création de la variable qui va déclarer les réponces correctes
   function calculateScore(callback){ 
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
    
    callback(score)}

function displayResult(score, callback){
//displayResult => AFFICHE recuperation du score : OK
const resultDiv = document.getElementById("result")
resultDiv.innerHTML = `Votre score est de ${score} sur 3.`  
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

function showUserMenu(username) {
        const usernameDisplay = document.getElementById("username-display")
        usernameDisplay.textContent =username    
}

     document.addEventListener("DOMContentLoaded", function() {
        const storedUsername = localStorage.getItem("username")
        const isAutenticated = localStorage.getItem("isAutenticated")
        if (storedUsername && isAutenticated === "true"){
            showUserMenu(storedUsername)
        } else {
            window.location.href = "login.html"
        }
     })

document.getElementById("logout-btn").addEventListener("click", function(){
    // localStorage.removeItem("username")
    // localStorage.removeItem("password")
    localStorage.setItem("isAutenticated", false)
    window.location.href = "login.html"
})


document.querySelectorAll(".difficulty-button").forEach((button) => {
    button.addEventListener("click", function() {
        const level = button.getAttribute("data-level")
        loadQuestions(level)
    })
    
})