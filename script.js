// computer random choice generator 

function getComputerChoice() {
    let cpuChoices = ['rock', 'paper', 'scissor'];
    let choices = cpuChoices[Math.floor(Math.random() * cpuChoices.length)];
    return choices;
}

getComputerChoice();

