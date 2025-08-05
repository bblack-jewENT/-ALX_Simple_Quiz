const submit = document.getElementById('submit-answer');
const feedback = document.getElementById('feedback');
const quiz = document.querySelector('#quiz');

const correctAnswer = "4";

function checkAnswer() {
    // Find the checked radio button inside #quiz
    const selected = quiz.querySelector('input[name="quiz"]:checked');
    const userAnswer = selected ? selected.value : null;

    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "green";
    } else if (!userAnswer) {
        feedback.textContent = "Please select an answer.";
        feedback.style.color = "red";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "red";
    }
}

submit.addEventListener('click', checkAnswer);