// computer random choice generator 

function getComputerChoice() {
    let cpuChoices = ['rock', 'paper', 'scissor'];
    let choices = cpuChoices[Math.floor(Math.random() * cpuChoices.length)];
    return choices;
}



let playerSelection = "Rock";
let computerSelection = getComputerChoice();

// single round function to be used in best of 5 game later in project 


function playRound(playerSelection, computerSelection) {
    if (computerSelection == "rock" && playerSelection == "Rock") {
        alert("It's a tie")
    } else if (computerSelection == "scissor") {
        alert ("You win");
    } else {
        alert ("You Lose")
    }
}

playRound(playerSelection, computerSelection);

console.log(playerSelection, computerSelection);
