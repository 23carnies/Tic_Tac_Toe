/*------Constants------*/
const playerX = 1;
const playerY = -1;

/*------Variables (state)------*/
let board = [null, null, null, null, null, null, null, null, null];
let turn = 1;   //playerX or playerO
let winner = null; //player that won(1 or -1), a tie(T), or game in play(null)
let gameStatus;



/*------Cached Element References------*/
const messageEl = document.getElementById('message');
// const sq0El = document.getElementById('sq0');
// const sq1El = document.getElementById('sq1');
// const sq2El = document.getElementById('sq2');
// const sq3El = document.getElementById('sq3');
// const sq4El = document.getElementById('sq4');
// const sq5El = document.getElementById('sq5');
// const sq6El = document.getElementById('sq6');
// const sq7El = document.getElementById('sq7');
// const sq8El = document.getElementById('sq8');
const resetEl = document.getElementById('reset');
const boardSquares = document.getElementById('mainBoard');

/*------Event Listeners------*/
resetEl.addEventListener('click', function(){
    init();
});
document.getElementById('mainBoard').addEventListener('click', handleClick());




/*------Functions------*/
init();

function init(){
    winner = false;
    turn: 1;
    //gamestatus.textcontent = it's x turn
    messageEl.innerText = 'Ready to play?!';
}

/*--------HandleClick-------*/
function handleClick(){
    //getting the index of the square
    let squareIndex = parseint(evt.target.id.replace('sq', ''));
    //see if square is empty, return if no
    for(let i=0;i<board.length;i++){
        if(board[squareIndex] !== null){
            return;
            console.log(squareIndex);
    }
}

/*      RENDER FUNCTION         */
function render() {
    for(let i=0;i<board.length;i++){
        if(board[squareIndex])
    }
}


function changeTurn(){
    turn *= -1;
}


function addLetterToSquare(){
    if (winner === null) {
        addLetter = document.getElementById(`sq${squareIndex}`);
        board[squareIndex] = turn;
        if (turn === 1) {
            addLetter.innerHTML = 'X';
        } else {
            addLetter.innerHTML = 'O';
        }
    }
}

/*       IS THERE A WINNER?     */
function isWinner() {
    const winCombos = [[0,4,8], [6,4,2], [0,3,6], [1,4,7], [2,5,8], [0,1,2], [3,4,5], [6,7,8]];
    for(let i=0;i<winCombos.length;i++){
        if(Math.abs((board[winCombos[i][0]] + board[winCombos[i][1] + board[winCombos[i][2]]] === 3))){
            winner = turn;
        } return winner;
    } 
    if(board.includes(null) === false){
        winner = 'T';
        //its a tie do something
    }
}



