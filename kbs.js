const questions = [
    {
        question: "What is the capital of France?",
        options: ["Madrid", "Paris", "Berlin", "Rome"],
        correctAnswer: 2,
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correctAnswer: 1,
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correctAnswer: 2,
    },
];

let currentQuestionIndex = 0;
let winnings = [0, 1000, 2000, 5000, 10000, 20000, 40000, 80000, 160000, 320000, 640000, 1250000];

const kbcGame = document.getElementById("kbc-game");
const questionText = document.getElementById("question");
const optionsDiv = document.getElementById("options");
const nextButton = document.getElementById("next-button");
const resultDiv = document.getElementById("result");
const answerText = document.getElementById("answer");
const winningsText = document.getElementById("winnings");

function displayQuestion() {
    const questionObj = questions[currentQuestionIndex];
    questionText.innerText = `Question ${currentQuestionIndex + 1}: ${questionObj.question}`;
    let optionsHtml = "";
    questionObj.options.forEach((option, index) => {
        optionsHtml += `<button onclick="checkAnswer(${index + 1})">${index + 1}. ${option}</button><br>`;
    });
    optionsDiv.innerHTML = optionsHtml;
}

function checkAnswer(userAnswer) {
    const questionObj = questions[currentQuestionIndex];
    if (userAnswer === questionObj.correctAnswer) {
        answerText.innerText = `Correct answer! You've won $${winnings[currentQuestionIndex]}!`;
    } else {
        answerText.innerText = `Sorry, that's incorrect. You've won $${winnings[currentQuestionIndex - 1]}.`;
        currentQuestionIndex = questions.length; // End the game
    }
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
        answerText.innerText = "";
        nextButton.style.display = "none";
    } else {
        resultDiv.style display = "block";
        winningsText.innerText = "Congratulations! You've won $1,000,000!";
    }
});

displayQuestion();

