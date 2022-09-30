console.log("Hello World");

let Dice = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    let rand = Dice[Math.floor(Math.random() * Dice.length)];
    console.log("Computer has picked", rand)

    return rand
}
function playerSelectionArray() {
    let rand = Dice[Math.floor(Math.random() * Dice.length)];
    return rand
}

function Round(playerSelection, computerSelection) {
    Wins=0
     //1-Set computer pick to a variable
    //2-Computer plays
    //3-compare playerSelection to Array list
    if (playerSelection == 'Rock' && computerSelection == 'Scissors' || 'Rock') {
    console.log('Player wins')
    Wins++
    }
    else {
    console.log('please try again')
    }
    if (playerSelection == 'Paper' && computerSelection == 'Rock') {
    console.log('Player wins')
    Wins++
    }
    else {
    console.log('please try again')
    }
    if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
    console.log('Player wins')
    Wins++
    }
    else {
    console.log('please try again')
    }
    console.log('Number of Wins =', Wins)
}
playerSelection= playerSelectionArray()
computerSelection=getComputerChoice()
//getComputerChoice();
Round(playerSelection, computerSelection);
