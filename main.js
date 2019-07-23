
// TRIED IT THIS WAY FIRST AND IT DIDNT WORK :(
//   want to keep trying it this way


// const paper = document.querySelector('paper')
// const scissors = document.querySelector('scissors')
// const lizard = document.querySelector('lizard')
// const spock = document.querySelector('spock')
// const result= document.querySelector('result')
//
// rock.addEventListener('click', function(e) {
//   randomThrow(rock.value)
//
// })
// paper.addEventListener('click', function(e) {
//   randomThrow(paper.value)
//
// })
//
// scissors.addEventListener('click', function(e) {
//   randomThrow(scissors.value)
//
// })
// lizard.addEventListener('click', function(e) {
//   randomThow(lizard.value)
//
// })
//
// spock.addEventListener('click', function(e) {
//   randomThrow(spock.value)
//
// })

// **************************************************************************

let userChoice = prompt("Choose your weapon: rock, paper, scissors, lizard, or spock?")
let computerChoice = Math.random();
if (computerChoice < 0.2) {
    computerChoice = 'rock';
} else if (computerChoice <= 0.4) {
    computerChoice = 'paper';
} else if (computerChoice <= 0.6) {
    computerChoice = 'scissors';
} else if (computerChoice <= 0.8) {
    computerChoice ='lizard';
} else {
    computerChoice = 'spock';
}

alert('The computer chose' + computerChoice);


// declaring the variable and running the function for choices

let compareChoices = function(choice1, choice2){
    if (choice1 === choice2) {
        alert('It is a tie');
    }

//if the user choose rock...
else if (choice1 === "rock") {
    if (choice2 === "scissors") {
        alert('Rock Wins');
    } else if (choice2 === "paper") {
        alert("Paper wins!");
    } else if (choice2 === "lizard") {
        alert("Rock wins!");
    } else {
        alert("Spock wins!");
    }
}

//if user chooses paper..
else if (choice1 === "paper") {
    if (choice2 === "scissors") {
        alert("Scissors wins!");
    } else if (choice2 === "rock") {
        alert("Paper wins!");
    } else if (choice2 === "lizard") {
        alert("Lizard wins!");
    } else {
        alert("Paper wins!");
    }
}

//if the user chooses scissors.
else if (choice1 === 'scissors') {
    if (choice2 === 'paper') {
        alert('scissors wins!');
    } else if (choice2 === "rock") {
        alert('rock wins!');
    } else if (choice2 === 'lizard') {
        alert('scissors wins!');
    } else {
        alert('spock wins!');
    }
}

//if the user chooses lizard...
else if (choice1 === 'lizard') {
    if (choice2 === 'scissors') {
        alert('scissors wins!');
    } else if (choice2 === 'rock') {
        alert('rock wins!');
    } else if (choice2 === 'paper') {
        alert('lizard wins!');
    } else {
        alert('lizard wins!');
    }
}

//if the user chooses spock
else if (choice1 === 'spock') {
    if (choice2 === 'scissors') {
        alert('spock wins!');
    } else if (choice2 === 'rock') {
        alert('spock wins!');
    } else if (choice2 === 'lizard') {
        alert('lizard wins!');
    } else {
        alert('paper wins!';
    }
}
};

// calling the function here
compareChoices(userChoice, computerChoice);
