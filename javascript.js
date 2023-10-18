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
    /*let playerSelection = prompt("Jugada: ");
    playerSelection = correctFormat(playerSelection);
    while((playerSelection != "Paper")&&(playerSelection != "Rock")&&(playerSelection != "Scissors"))
    {
        alert("Wrong input. Enter paper, rock or scissors.");
        playerSelection = prompt("Jugada: ");
        playerSelection = correctFormat(playerSelection);
    }
    return playerSelection;*/

    let btn_rock,btn_paper,btn_scissors,playerSelection;
    btn_rock = document.querySelector('#rock');
    btn_paper = document.querySelector('#paper');
    btn_scissors = document.querySelector('#scissors');

    
    btn_rock.addEventListener('click',()=>{
        playerSelection = 'Rock';
        return playerSelection;
    });
    btn_paper.addEventListener('click',()=>{
        playerSelection = 'Paper';
        return playerSelection;
    });
    btn_scissors.addEventListener('click',()=>{
        playerSelection = 'Scissors';
        return playerSelection;
    });
    


}


function oneRound(playerSelection,computerSelection)
{
    let result = 0;
    
    if(playerSelection === computerSelection)
        return result = 2;
    if((playerSelection==="Paper"&&computerSelection==="Rock")||(playerSelection==="Rock"&&computerSelection==="Scissors")||(playerSelection==="Scissors"&&computerSelection==="Paper"))
        result = 1;

    return result;
    

}

function displayResult(number,computerSelection,playerSelection)
{
    const result = document.getElementById('winner');
    const player = document.getElementById('playerPicks');
    const computer = document.getElementById('computerPicks');
    if(number === 2)
        result.textContent = "It's a tie!"
    else if(number === 1)
    {
        player.textContent = `You picked ${playerSelection}`;
        computer.textContent = `The computer picked ${computerSelection}`;
        result.textContent = `Player Wins! ${playerSelection} beats ${computerSelection}`
    }
    else
    {
        player.textContent = `You picked ${playerSelection}`;
        computer.textContent = `The computer picked ${computerSelection}`;
        result.textContent = `Computer Wins! ${computerSelection} beats ${playerSelection}`;
    }
        
}

function game()
{
    let playerSelection;
    let computerSelection;
    let counterPlayer = 0, counterPC = 0;
    let result,i;

    for(i = 0; i < 5; i++)
    {
        playerSelection = getPlayerSelection();
        computerSelection = getComputerChoice();
        result = oneRound(playerSelection,computerSelection);
        displayResult(result,computerSelection,playerSelection);
        if(result === 1)
          counterPlayer++;
        else if(result === 0) //it's possible result takes the value 2, in which case no one wins.
          counterPC++;
        
    }
    if(counterPlayer < counterPC)
    {
        alert("PC wins!");
        console.log(`Final count: PC has ${counterPC} wins while player has ${counterPlayer} wins`);
    }
    else if(counterPC < counterPlayer)
    {
        alert("You win!");
        console.log(`Final count: You won ${counterPlayer} times against the PC's ${counterPC} wins`);
    }
    else
    {
        alert("It's a tie!");
        console.log(`You both won ${counterPC} times`);
    }

}

function game1(playerSelection)
{
   
    let computerSelection;
    
    let result,i;    
        
        computerSelection = getComputerChoice();
        result = oneRound(playerSelection,computerSelection);
        displayResult(result,computerSelection,playerSelection);
        if((result === 1)||(result === 0))
          return result;
        
        
}

let btn_rock,btn_paper,btn_scissors,playerSelection;
let result;
btn_rock = document.querySelector('#rock');
btn_paper = document.querySelector('#paper');
btn_scissors = document.querySelector('#scissors');

let scorePlayer,scoreComputer;
scorePlayer = document.getElementById('playerScore');
scoreComputer = document.getElementById('computerScore');
    
btn_rock.addEventListener('click',()=>{
    playerSelection = 'Rock';
    result = game1(playerSelection); //0 pc 1 player
    if(result === 1)
        scorePlayer.textContent++;
    else if(result === 0)
        scoreComputer.textContent++;
});

btn_paper.addEventListener('click',()=>{
    playerSelection = 'Paper';
    result = game1(playerSelection);
    if(result === 1)
        scorePlayer.textContent++;
    else if(result === 0)
        scoreComputer.textContent++;
});
    
btn_scissors.addEventListener('click',()=>{
    playerSelection = 'Scissors';
    result = game1(playerSelection);
    if(result === 1)
        scorePlayer.textContent++;
    else if(result === 0)
        scoreComputer.textContent++;
});
