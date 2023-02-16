//  Store Game Status -> selects element by tag
const gameStatus = document.querySelector('.game-status')
// Create variables to track game state 
let gameIsActive = true ;
let currentPlayer = "X";
let gameState = ["","","","","","","","",""]
// sets content to "X" our currentPlayer variable 
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

// Function Checks if clickedCell already has been clicked and if it has not continue the game
function handleCellClick(ClickedCellEvent) {
  // Saves the clicked html element in a variable for easier use
  const clickedCell = ClickedCellEvent.target;
//   inside our function we want to grab 'data-cell-index' from the clicked cell
// we use getAttribute(get,set, or check if) string value return a string value
    const clickedCellIndex = parseInt(
        clickedCell.getAttribute('data-cell-index')
    );
   
// Next we check whether or not the call has already been played, or if the game is paused. if either is true we ignore the clicks
    if(gameState[clickedCellIndex] != "" || !gameIsActive){
        return;
    }
    // We will accept a ClickEvent from our cell event listener. That will allow us to track which cell has been clicked and get its’ index attribute more easily.
    // If everything is in order proceed with the game
    handleCellPlayed(clickedCell,clickedCellIndex);
    handleResult()

}

function handleRestartGame() {
  
}

// Add Event Listeners to the actual game cells, and restart game 
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click',handleCellClick))
document.querySelector('.game-restart').addEventListener('click',handleRestartGame)



