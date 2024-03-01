function submitQuiz() {
    let score = 0;
    const correctAnswers = ['A', 'B', 'C', 'B', 'B', 'B', 'A', 'A', 'A', 'C']; 
    const userAnswers = [
      document.querySelector('input[name="question1"]:checked')?.value,
      document.querySelector('input[name="question2"]:checked')?.value,
      document.querySelector('input[name="question3"]:checked')?.value,
      document.querySelector('input[name="question4"]:checked')?.value,
      document.querySelector('input[name="question5"]:checked')?.value,
      document.querySelector('input[name="question6"]:checked')?.value,
      document.querySelector('input[name="question7"]:checked')?.value,
      document.querySelector('input[name="question8"]:checked')?.value,
      document.querySelector('input[name="question9"]:checked')?.value,
      document.querySelector('input[name="question10"]:checked')?.value,
      
    ];
  
    userAnswers.forEach((answer, index) => {
      if (answer === correctAnswers[index]) {
        score += 1;
      }
    });
  
    document.getElementById('result').innerHTML = `Your score is: ${score} out of 10`;
  }
  