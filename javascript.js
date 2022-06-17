humanScore = 0;
machineScore = 0;

function computerPlay() {
    var possibleReturn = [
        "rock",
        "paper",
        "scissors"
    ];

    const choice = possibleReturn[Math.floor(Math.random() * possibleReturn.length)]
    console.log("Machine chose " + choice)
    return choice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection) {
        humanScore++
        machineScore++
        return "It is a draw";
    }
    else if (playerSelection.toLowerCase() == 'rock') {
        if (computerSelection == 'paper') {
            machineScore++;
            return "You lose, paper beats rock";
        }
        else if (computerSelection == 'scissors') {
            humanScore++;
            return "You win, rock beats scissors";
        }
    }
    else if (playerSelection.toLowerCase() == 'paper') {
        if (computerSelection == 'rock') {
            humanScore++;
            return "You win, paper beats rock";
        }
        else if (computerSelection == 'scissors') {
            machineScore++;
            return "You lose, rock beats scissors";
        }
    }
    else if (playerSelection.toLowerCase() == 'scissors') {
        if (computerSelection == 'rock') {
            machineScore++;
            return "You lose, rock beats scissors";
        }
        else if (computerSelection == 'paper') {
            humanScore++;
            return "You win, scissors beats paper";
        }
    }
}

function game() {
    humanScore = 0;
    machineScore = 0;

    for (let i = 0; i < 5; i++) {
        console.log(playRound(prompt("make your move!"), computerPlay()));
    }

    if (humanScore > machineScore) {
        return "You win, with a score of " + humanScore + " - " + machineScore;
    }
    else if (machineScore > humanScore) {
        return "You lose, with a score of " + humanScore + " - " + machineScore;
    }
    else {
        return "Draw, with a score of " + humanScore + " - " + machineScore;
    }
}

console.log(game())