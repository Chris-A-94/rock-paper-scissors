function getComputerChoice()
{
    let number = Math.floor(Math.random() * 3) + 1; //returns number between 1 and 3
    let choice;
    switch(number)
    {
        case(1): choice = "Rock";
        break;
        case(2): choice = "Paper";
        break;
        case(3): choice = "Scissors";
        break;
    }
    return choice;
}

function correctFormat(playerSelection)
{
    playerSelection = playerSelection.toLowerCase();
    let letter = playerSelection.charAt(0);
    letterAux = letter.toUpperCase();

    playerSelection = playerSelection.replace(letter,letterAux);
    return playerSelection;

}

function oneRound(playerSelection,computerSelection)
{
    computerSelection = getComputerChoice();

}

let playerSelection = prompt("Jugada: ");
console.log(correctFormat(playerSelection));