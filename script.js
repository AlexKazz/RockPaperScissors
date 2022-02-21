let array = ['rock', 'paper', 'scissors'];
// let compSelection = computerPlay();
let score = 0;
let compScore = 0;
let yourScoreDisplay = document.getElementById('yourScoreDisplay');
let compScoreDisplay = document.getElementById('compScoreDisplay');
let loseAudio = document.getElementById("loseAudio");
let winAudio = document.getElementById("winAudio");
console.log(winAudio);

function winPlay() {
    winAudio.currentTime=0;
    winAudio.play();
}

function losePlay() {
    loseAudio.currentTime=0;
    loseAudio.play();
}

function computerPlay() {
    return array[Math.floor(Math.random() * array.length)];
} 

function playRound() {
    let compSelection = computerPlay();
   
    if (playerSelection === 'rock') {
        
        if (compSelection === 'rock') {
            score += 0;
            compScore += 0;
            yourScoreDisplay.textContent = 'You: ' + score;
            compScoreDisplay.textContent = 'Computer: ' + compScore;
            
        } else if (compSelection === 'paper') {
            score += 0;
            compScore += 1;
            yourScoreDisplay.textContent = 'You: ' + score;
            compScoreDisplay.textContent = 'Computer: ' + compScore;
        } else if (compSelection === 'scissors') {
            score += 1;
            compScore += 0;
            yourScoreDisplay.textContent = 'You: ' + score;
            compScoreDisplay.textContent = 'Computer: ' + compScore;
        } 
    }
    else if (playerSelection === 'paper') {
        if (compSelection === 'rock') {
            score += 1;
            compScore += 0;
            yourScoreDisplay.textContent = 'You: ' + score;
            compScoreDisplay.textContent = 'Computer: ' + compScore;
        } else if (compSelection === 'paper') {
            score += 0;
            compScore += 0;
            yourScoreDisplay.textContent = 'You: ' + score;
            compScoreDisplay.textContent = 'Computer: ' + compScore;
        } else if (compSelection === 'scissors') {
            score += 0;
            compScore += 1;
            yourScoreDisplay.textContent = 'You: ' + score;
            compScoreDisplay.textContent = 'Computer: ' + compScore;
        }
    }
    else if (playerSelection === 'scissors') {
        if (compSelection === 'rock') {
            score += 0;
            compScore += 1;
            yourScoreDisplay.textContent = 'You: ' + score;
            compScoreDisplay.textContent = 'Computer: ' + compScore;
        } else if (compSelection === 'paper') {
            score += 1;
            compScore += 0;
            yourScoreDisplay.textContent = 'You: ' + score;
            compScoreDisplay.textContent = 'Computer: ' + compScore;
        } else if (compSelection === 'scissors') {
            score += 0;
            compScore += 0;
            yourScoreDisplay.textContent = 'You: ' + score;
            compScoreDisplay.textContent = 'Computer: ' + compScore;
        }
    }
    else if (playerSelection === '') {
        alert('you didn\'t type anything, silly!')
    }
    else {
        alert('huh? refresh the page and try again.')
    }

    if (compScore === 5 && score < 5) {
        loseAudio.play();
        window.location.href = "lose.html";
        
        
        // alert('You lost to the computer! C\'mon, man!');
        // location.reload();
    } else if (score === 5 && compScore < 5) {
        winAudio.play();
        window.location.href = "win.html";
        
        // alert('You beat the computer! What are you, a genius?');
        // location.reload();
    }
}

function game() {
    playRound()    
}



let rockAudio = new Audio("audio/rock_audio.mp3");
let paperAudio = new Audio("audio/paper_audio.mp3");
let scissorsAudio = new Audio("audio/scissors_audio.mp3");


function rockPlay() {
    rockAudio.currentTime=0;
    rockAudio.play();
}

function paperPlay() {
    paperAudio.currentTime=0;
    paperAudio.play();
}

function scissorsPlay() {
    scissorsAudio.currentTime=0;
    scissorsAudio.play();
}



const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const checkbox = document.getElementById('checkbox');

const rockClick = rockBtn.addEventListener('click', function() {
    playerSelection = 'rock';
    game();
    if (checkbox.checked) {
        rockPlay();
    }
});

const paperClick = paperBtn.addEventListener('click', function() {
    playerSelection = 'paper';
    game();
    if (checkbox.checked) {
        paperPlay();
    }
});

const scissorsClick = scissorsBtn.addEventListener('click', function() {
    playerSelection = 'scissors';
    game();
    if (checkbox.checked) {
        scissorsPlay();
    }
    
});

// const homeBtn = document.getElementsByClassName('homeBtn');
// homeBtn.addEventListener('click', function(){
//     window.location.href = 'index.html';
// })






