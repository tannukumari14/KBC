const questions = [
    {
        question: "What is the capital of France?",
        options: ["Madrid", "Berlin", "Paris", "Rome"],
        correctAnswer: 2,
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        correctAnswer: 1,
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Giraffe", "Blue Whale", "Lion"],
        correctAnswer: 2,
    },
    // Add more questions here...
];

let currentQuestionIndex = 0;

const questionText = document.getElementById("question");
const optionsDiv = document.getElementById("options");
const nextButton = document.getElementById("next-button");
const resultDiv = document.getElementById("result");

function displayQuestion() {
    const questionObj = questions[currentQuestionIndex];
    questionText.innerText = questionObj.question;
    
    optionsDiv.innerHTML = "";
    questionObj.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.addEventListener("click", () => checkAnswer(index + 1));
        optionsDiv.appendChild(button);
    });
}

function checkAnswer(userAnswer) {
    const questionObj = questions[currentQuestionIndex];
    if (userAnswer === questionObj.correctAnswer) {
        resultDiv.innerText = "Correct answer! You've won!";
    } else {
        resultDiv.innerText = "Sorry, that's incorrect.";
    }
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
        resultDiv.innerText = "";
        nextButton.style.display = "none";
    } else {
        resultDiv.innerText = "Congratulations! You've completed the game!";
        nextButton.style.display = "none";
    }
});

displayQuestion();

