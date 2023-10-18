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



function getPlayerSelection()
{
  

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
    {
        player.textContent = `You picked ${playerSelection}`;
        computer.textContent = `The computer picked ${computerSelection}`;
        result.textContent = "It's a tie!"
    }
        
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



function game1(playerSelection)
{
   
    let computerSelection;
    
    let result;    
        
        computerSelection = getComputerChoice();
        result = oneRound(playerSelection,computerSelection);
        displayResult(result,computerSelection,playerSelection);
        return result;
        
        
}

function playGame(playerSelection)
{
    if((scorePlayer.textContent < 5)&&(scoreComputer.textContent < 5))
    {result = game1(playerSelection); //0 pc 1 player
    if(result === 1)
        scorePlayer.textContent++;
    else if(result === 0)
        scoreComputer.textContent++; 
    }
    if(scorePlayer.textContent == 5)
    {
        const finalWinner = document.getElementById('finalWinner');
        finalWinner.textContent = `Finished game! Player wins.`        
    }
    if(scoreComputer.textContent == 5)
    {
        const finalWinner = document.getElementById('finalWinner');
        finalWinner.textContent = `Finished game! Computer wins.`        
    }
    
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
    playGame('Rock');
});

btn_paper.addEventListener('click',()=>{
    playGame('Paper');
});
    
btn_scissors.addEventListener('click',()=>{
    playGame('Scissors');
});
