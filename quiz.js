
function checkAnswer() {
    const correctAnswer = "4";

    // Find the checked radio button inside #quiz
      const userAnswer = document.querySelector('input[name="quiz"]:checked').value;
      const feedback = document.getElementById("feedback");

     if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
            feedback.style.color = 'green';
        } else {
            feedback.textContent = "That's incorrect. Try again!";
            feedback.style.color = 'red'
        }
}


const submit = document.getElementById('submit-answer');
submit.addEventListener('click', checkAnswer);