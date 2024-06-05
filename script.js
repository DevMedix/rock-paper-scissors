let humanScore = 0;
let computerScore = 0;

function capitalise(word) {
    let capLetter = word[0].toUpperCase().concat(word.substring(1).toLowerCase());

    return capLetter;
}

function getHumanChoice() {
    let choice = prompt("Enter rock, paper or scissors: ").toLowerCase();
    return choice;
}

function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);
    let choice;

    switch (number) {
        case 0:
            choice = "rock"
            break;

        case 1:
            choice = "paper"
            break;

        case 2:
            choice = "scissors"
            break;

        default:
            choice = "unknown"
            break;
    }

    return choice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("This is a tie, No winner!");
    } else if ((humanChoice == "rock" && computerChoice == "scissors") || 
        (humanChoice == "paper" && computerChoice == "rock") || 
        (humanChoice == "scissors" && computerChoice == "paper")
    ) {
        console.log(`You win! ${capitalise(humanChoice)} beats ${capitalise(computerChoice)}`);
        humanScore++;
    } else {
        console.log(`You lose! ${capitalise(computerChoice)} beats ${capitalise(humanChoice)}`);
        computerScore++;
    }

    console.log(`Your Score: ${humanScore}\nComputer Score: ${computerScore}`);
}



function playGame() {

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
        
    }
    if (humanScore > computerScore) {
        console.log("You win!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins!");
    }  else if (humanScore === computerScore) {
        console.log("This is a tie! No winner.");
    }
}



playGame();