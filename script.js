const currentPlayer = {
    turn: 0,
    get text() {
        return this.turn % 2 == 0 ? "X" : "O";
    }
};

const bx1 = document.getElementById('bx1');
const bx2 = document.getElementById('bx2');
const bx3 = document.getElementById('bx3');
const bx4 = document.getElementById('bx4');
const bx5 = document.getElementById('bx5');
const bx6 = document.getElementById('bx6');
const bx7 = document.getElementById('bx7');
const bx8 = document.getElementById('bx8');
const bx9 = document.getElementById('bx9');
const clear = document.getElementById("btnClear");


bx1.addEventListener('click', addX);
bx2.addEventListener('click', addX);
bx3.addEventListener('click', addX);
bx4.addEventListener('click', addX);
bx5.addEventListener('click', addX);
bx6.addEventListener('click', addX);
bx7.addEventListener('click', addX);
bx8.addEventListener('click', addX);
bx9.addEventListener('click', addX);
btnClear.addEventListener('click', clearGame);


function addX() {
    if (this.innerHTML == "") {
    this.innerHTML = currentPlayer.text;
    currentPlayer.turn++;
    if (currentPlayer.turn > 4) {
        checkWinner();
    }
    }
} 

const winningConditions = [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
]


const boxes = [bx1, bx2, bx3, bx4, bx5, bx6, bx7, bx8, bx9];

function clearGame() {
    for(x=0; x<9; x++) {
        boxes[x].innerHTML = "";
    }
    currentPlayer.turn = 0;
}

function checkWinner() {
    for (const condition of winningConditions) {
        let [a, b, c] = condition;
        if (boxes[a].innerHTML === boxes[b].innerHTML && boxes[b].innerHTML === boxes[c].innerHTML) {
            alert('Winner');
            return;
        }  }
}

/*
const bx1 = document.getElementById('bx1');

bx1.addEventListener('click', addX);

function addX() {
    bx1.innerHTML = "X";
}*/