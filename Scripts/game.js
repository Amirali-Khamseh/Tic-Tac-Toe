function newGame() {
    if (players[0].name && players[1].name) {
        gameBoard.style.display = 'flex';
    } else {
        alert('Please enter both Players name 😐👇')
        return;
    }

}

function switchPlayer() {
    currentRound++;
    if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
    activePlayerName.textContent = players[activePlayer].name;
}


function checkForWinner() {

    //checking for equality in rows
    for (let i = 0; i <= 2; i++) {
        if (gameData[i][0] > 0 &&
            gameData[i][0] === gameData[i][1] &&
            gameData[i][1] === gameData[i][2]) {
            return gameData[i][0];
        }
    }
    //checking for equality in columns
    for (let i = 0; i <= 2; i++) {
        if (gameData[0][i] > 0 &&
            gameData[0][i] === gameData[1][i] &&
            gameData[1][i] === gameData[2][i]) {
            return gameData[0][i];
        }
    }
    //diagnoal check for equality 
    if (gameData[0][0] > 0 &&
        gameData[0][0] === gameData[1][1] &&
        gameData[1][1] === gameData[2][2]) {
        return gameData[0][0];
    }

    if (gameData[2][0] > 0 &&
        gameData[2][0] === gameData[1][1] &&
        gameData[1][1] === gameData[0][2]) {
        return gameData[0][0];
    }
    if (currentRound === 9) {
        return -1;
    }
    return 0;
}
function resetGame() {

}
function selectGameField(event) {
    const selectedColumn = event.target.dataset.col - 1;
    const selectedRow = event.target.dataset.row - 1;
    if (gameData[selectedRow][selectedColumn] > 0) {
        alert('This on has been chosen before , try another one 🤔')
        return;
    }
    event.target.textContent = players[activePlayer].symbol;
    event.target.classList.add('disabled');

    gameData[selectedRow][selectedColumn] = activePlayer + 1;
    let winner = checkForWinner();
    gameOver(winner);


    switchPlayer();


}
var timeleft = 10;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
  }
  document.getElementById("progressBar").value = 10 - timeleft;
  timeleft -= 1;
}, 1000);

function gameOver(winner) {
    if (winner === -1) {
        winnerMessage.style.display = 'block';
        winnerMessage.innerHTML='Its a draw game within 10 seconds a new game will start'+'<br/>'+'<progress value="0" max="10" id="progressBar"></progress>'

        setTimeout(() => {
            window.location.reload();
         
        }, 6000)
    } else if (winner === 1) {
        winnerMessage.style.display = 'block';
        winnerName.textContent = players[0].name;
        setTimeout(() => {
            window.location.reload();
          
        }, 6000)

    } else if (winner === 2) {
        winnerMessage.style.display = 'block';
        winnerName.textContent = players[1].name;
        setTimeout(() => {
           
            window.location.reload();

        }, 6000)
    }

}