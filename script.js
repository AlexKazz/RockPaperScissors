let array = ['rock', 'paper', 'scissors'];
// let compSelection = computerPlay();
let score = 0;
let compScore = 0;

function computerPlay() {
    return array[Math.floor(Math.random() * array.length)];
} 

function playRound() {
    let playerSelection = prompt('rock, paper, or scissors?');
    let compSelection = computerPlay();

    if (playerSelection.toLowerCase() === 'rock') {
        if (compSelection === 'rock') {
            alert('you both picked rock. it\'s a tie!');
            alert(score = score + 0);
        } else if (compSelection === 'paper') {
            alert('paper beats rock. you lose!');
            alert(score = score + 0);
            compScore = compScore + 1;
        } else if (compSelection === 'scissors') {
            alert('rock beats scissors. you win!');
            alert(score = score + 1);
        } 
    }
    else if (playerSelection.toLowerCase() === 'paper') {
        if (compSelection === 'rock') {
            alert('paper beats rock. you win!');
            alert(score = score + 1);
        } else if (compSelection === 'paper') {
            alert('you both picked paper. it\'s a tie!');
            alert(score = score + 0);
        } else if (compSelection === 'scissors') {
            alert('scissors beats paper. you lose!');
            alert(score = score + 0);
            compScore = compScore + 1;
        }
    }
    else if (playerSelection.toLowerCase() === 'scissors') {
        if (compSelection === 'rock') {
            alert('rock beats scissors. you lose!');
            alert(score = score + 0);
            compScore = compScore + 1;
        } else if (compSelection === 'paper') {
            alert('scissors beats paper. you win!');
            alert(score = score + 1);
        } else if (compSelection === 'scissors') {
            alert('you both picked scissors. it\s a tie!');
            alert(score = score + 0);
        }
    }
    else if (playerSelection === '') {
        alert('you didn\'t type anything, silly!')
    }
    else {
        alert('huh? refresh the page and try again.')
    }
}

function game() {
    playRound()
    playRound()
    playRound()
    playRound()
    playRound()

    if (compScore > score) {
        alert('The computer wins!')
    } else if (compScore < score) {
        alert('You beat the computer!')
    } else {
        alert('You tied with the computer!')
    }
}

game()






