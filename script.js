let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("game-status");

cells.forEach((cell, index) => {
    cell.addEventListener("click", () => makeMove(index));
});

function makeMove(index) {
    if (board[index] === "" && gameActive) {
        board[index] = currentPlayer;
        cells[index].innerText = currentPlayer;
        if (checkWinner()) {
            statusText.innerText = `Player ${currentPlayer} Wins! 🎉`;
            gameActive = false;
        } else if (board.every(cell => cell !== "")) {
            statusText.innerText = "It's a Draw! 🤝";
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}

function checkWinner() {
    const winPatterns = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
    return winPatterns.some(pattern => pattern.every(i => board[i] === currentPlayer));
}

function resetGame() {
    board.fill("");
    gameActive = true;
    currentPlayer = "X";
    statusText.innerText = "";
    cells.forEach(cell => cell.innerText = "");
}
