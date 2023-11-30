// array : Correct Answers
const correctAnswer = ["C","B","C","D","B","D","C"];
// capturing form
const form =document.querySelector(".quiz-form");
const result = document.querySelector(".result");
const questions = document.querySelectorAll(".question");

// adding EVENT LISTENER when user clicked submit
form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value ,form.q7.value];
    
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswer[index]){
            score += 1;
            // adding green background
            questions[index].classList.add("correct");
        } else {
            // adding red background
            questions[index].classList.add("wrong");
        }
    });

    scrollTo(0, 0);
    result.classList.remove("hide");
    result.querySelector("p").textContent = `You scored ${score} out of ${correctAnswer.length}`;
});