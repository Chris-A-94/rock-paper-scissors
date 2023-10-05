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
    let letterAux = letter.toUpperCase();

    playerSelection = playerSelection.replace(letter,letterAux);
    return playerSelection;
}

function getPlayerSelection()
{
    let playerSelection = prompt("Jugada: ");
    playerSelection = correctFormat(playerSelection);
    while((playerSelection != "Paper")&&(playerSelection != "Rock")&&(playerSelection != "Scissors"))
    {
        alert("Wrong input. Enter paper, rock or scissors.");
        playerSelection = prompt("Jugada: ");
        playerSelection = correctFormat(playerSelection);
    }
    return playerSelection;
}


function oneRound(playerSelection,computerSelection)
{
    let result;
    let playerWin, computerWin = 0;
    if(playerSelection === computerSelection)
        return result = 2;
    if((playerSelection==="Paper"&&computerSelection==="Rock")||(playerSelection==="Rock"&&computerSelection==="Scissors")||(playerSelection==="Scissors"&&computerSelection==="Paper"))
        result = 1;
       
    return result;
    

}

function displayResult(number,computerSelection,playerSelection)
{
    if(number === 2)
        console.log("It's a tie!");
    else if(number === 1)
        console.log(`Player Wins! ${playerSelection} beats ${computerSelection}`);
    else
        console.log(`Computer Wins! ${computerSelection} beats ${playerSelection}`)
}

function game()
{
    let playerSelection = getPlayerSelection();
    let computerSelection = getComputerChoice();
    let result = oneRound(playerSelection,computerSelection);
}

game();



