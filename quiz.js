function checkAnswer() {
    const correctAnswer = '4';

    const quiz = document.querySelector('#quiz');

    const userAnswer = quiz.value;

    if (userAnswer === correctAnswer) {
        quiz.innerHTML.feedback = 'Correct! Well done.';
    } else if (userAnswer === '') {
        quiz.innerHTML.feedback = 'Please select an answer.';
    } else if (userAnswer !== correctAnswer) {
        quiz.innerHTML.feedback =  "That's incorrect. Try again!";
    }
}