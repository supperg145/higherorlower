//Get elements and store in variables
const input = document.getElementById("number");
const button = document.getElementById("guess");
const attempts = document.getElementById("attempts");
const message = document.getElementById("message");

//Get a random number store it in a variable

const randomNumber = Math.floor(Math.random() * 100) + 1;
//Used for testing
console.log(randomNumber);
//Declare a base attempt number so we can count the attempts
let attemptsValues = 0;

//Logic for comparing the random number and the guess
function compare() {
    //Convert string received from input to number for the comparison
    const inputValue = parseInt(input.value);


    if(randomNumber > inputValue) {
        message.textContent="Try again! Aim higher"
        attemptsValues++
        attempts.textContent = attemptsValues;
    }else if(randomNumber < inputValue){
        message.textContent="Try again! Aim lower"
        attemptsValues++
        attempts.textContent = attemptsValues;
    }
     else {
        message.textContent=`You guessed the right number in ${attemptsValues} attempt(s)! Congratulations!`
        attempts.textContent = null;
    }
}

//Making the button functional
button.addEventListener("click", compare)