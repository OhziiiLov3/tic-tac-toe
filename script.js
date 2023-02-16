//  Store Game Status 
const gameStatus = document.querySelector('.game-status')
// Create variables to track game state 
let gameIsActive = true ;
let currentPlayer = "X";
let gameState = ["","","","","","","","",""]

gameStatus.innerHTML = currentPlayerTurn()

  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

// Declare messages to display to user during the game ex. current player, draw, and winner

function winningMessage(){
    return `Player ${currentPlayer} has won!`
}

function drawMessage() {
    return `Game ended in a draw!`
}

function currentPlayerTurn(){
    return `It's ${currentPlayer}'s turn`
}
// we set the inital message to let players know whose turn it is 
function handleCellPlayed(clickedCell, clickedCellIndex) {
    
}

function handlePlayerChange() {
  
}


function handleResult() {
 

}

function handleCellClick(ClickedCellEvent) {
  
}

function handleRestartGame() {
  
}

// Add Event Listeners to the actual game cells, and restart game 
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click',handleCellClick))
document.querySelector('.game-restart').addEventListener('click',handleRestartGame)



