let currentQuestion = 1;
let totalQuestions = 7;
let lives = 3;
let correctAnswer;
let count = 0;
const lifeHearts = document.getElementById("lifeHearts");
const scoreDiv = document.getElementById("scoreDiv");
const reviewBoard = document.getElementById("reviewBoard");

function generateQuestion() {
    let num1 = Math.floor(Math.random() * 100);
    let num2 = Math.floor(Math.random() * 100);

    if (num1 < num2) {
        [num1, num2] = [num2, num1];
    }

    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = `- ${num2}`;

    correctAnswer = num1 - num2;
}

function appendToAnswerBox(value) {
    document.getElementById("answerBox").innerHTML += value;
}

function removeLastDigit() {
    let answer = document.getElementById("answerBox").innerHTML;
    document.getElementById("answerBox").innerHTML = answer.slice(0, -1);
}

function updateHearts() {
    document.getElementById("lifeHearts").innerHTML = "❤️".repeat(lives);
}

function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answerBox").innerHTML, 10);

    if (userAnswer === correctAnswer) {
        if (currentQuestion < totalQuestions) {
            currentQuestion++;
            generateQuestion();
            document.getElementById("questionCount").innerHTML = `${currentQuestion}/${totalQuestions}`;
            document.getElementById("answerBox").innerHTML = "";
        } else {
            if (lives > 0) {
                scoreDiv.innerHTML = currentQuestion;
                if (currentQuestion === 7) {
                    reviewBoard.textContent = "EXCELLENT JOB. HIGH SCORE!";
                    console.log(reviewBoard);
                } else if (currentQuestion === 6 || currentQuestion === 5 || currentQuestion === 4) {
                    reviewBoard.textContent = "GOOD JOB. AVERAGE JOB!";
                    console.log(reviewBoard);
                } else if (currentQuestion === 3 || currentQuestion === 2 || currentQuestion === 1) {
                    reviewBoard.textContent = "BETTER LUCK NEXT TIME...";
                    console.log(reviewBoard);
                }
                // alert("You Win! Your final score is: " + currentQuestion);
            } else {
                scoreDiv.innerHTML = currentQuestion - 1;
                if (currentQuestion === 7) {
                    reviewBoard.textContent = "EXCELLENT JOB. HIGH SCORE!";
                    console.log(reviewBoard);
                } else if (currentQuestion === 6 || currentQuestion === 5 || currentQuestion === 4) {
                    reviewBoard.textContent = "GOOD JOB. AVERAGE SCORE!";
                    console.log(reviewBoard);
                } else if (currentQuestion === 3 || currentQuestion === 2 || currentQuestion === 1) {
                    reviewBoard.textContent = "BETTER LUCK NEXT TIME...";
                    console.log(reviewBoard);
                }                
                // alert("Game Over! Your final score is: " + (currentQuestion - 1));
                displayResult();
            }
        }
    } else {
        count++;
        lives--;

        if (lives > 0) {
            updateHearts();
            lifeHearts.innerHTML += '💔'.repeat(count);
            generateQuestion();
            document.getElementById("answerBox").innerHTML = "";
        } else {
            lifeHearts.innerHTML = '💔💔💔';
            scoreDiv.innerHTML = currentQuestion - 1;
            if (currentQuestion === 7) {
                reviewBoard.textContent = "EXCELLENT JOB. HIGH SCORE!";
                console.log(reviewBoard);
            } else if (currentQuestion === 6 || currentQuestion === 5 || currentQuestion === 4) {
                reviewBoard.textContent = "GOOD JOB. AVERAGE SCORE!";
                console.log(reviewBoard);
            } else if (currentQuestion === 3 || currentQuestion === 2 || currentQuestion === 1) {
                reviewBoard.textContent = "BETTER LUCK NEXT TIME...";
                console.log(reviewBoard);
            }
            
            // alert("Game Over! Your final score is: " + (currentQuestion - 1));
            displayResult();
        }
    }
}

function displayResult() {
    document.getElementById("instructions").style.display = "none";
    document.getElementById("puzzle").style.display = "none";
    document.getElementById("resultPage").style.display = "block";
}

function startGame() {
    document.getElementById("instructions").style.display = "none";
    document.getElementById("loading-animation").style.display = "flex";
    setTimeout(() => {
        document.getElementById("loading-animation").style.display = "none";
        document.getElementById("puzzle").style.display = "block";
        document.getElementById("resultPage").style.display = "none";
        generateQuestion();
        document.getElementById("questionCount").innerHTML = `${currentQuestion}/${totalQuestions}`;
        updateHearts();
    },3000);
    
}

function homePage(){
    currentQuestion = 1;
    lives = 3;
    count = 0;

    lifeHearts.innerHTML = '❤️❤️❤️';
    scoreDiv.innerHTML = '';
    document.getElementById("answerBox").innerHTML = "";

    document.getElementById("loading-animation").style.display = "none";
    document.getElementById("resultPage").style.display = "none";
    document.getElementById("instructions").style.display = "flex";
}

function replayGame(){
    currentQuestion = 1;
    lives = 3;
    count = 0;

    lifeHearts.innerHTML = '❤️❤️❤️';
    scoreDiv.innerHTML = '';
    document.getElementById("answerBox").innerHTML = "";

    document.getElementById("resultPage").style.display = "none";
    document.getElementById("instructions").style.display = "none";
    document.getElementById("loading-animation").style.display = "flex";
    setTimeout(() => {
        document.getElementById("loading-animation").style.display = "none";
        document.getElementById("puzzle").style.display = "block";
        document.getElementById("resultPage").style.display = "none";
        generateQuestion();
        document.getElementById("questionCount").innerHTML = `${currentQuestion}/${totalQuestions}`;
        updateHearts();
    },3000);
}


document.getElementById("playButton").addEventListener("click", startGame);
document.getElementById("homepage").addEventListener("click", homePage);
document.getElementById("replay").addEventListener("click", replayGame);
