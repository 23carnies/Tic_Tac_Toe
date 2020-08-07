/*------Constants------*/
const colors = {
    '1': 'X',
    '-1': 'O'
}
const winCombos = [[0,4,8], [6,4,2], [0,3,6], [1,4,7], [2,5,8], [0,1,2], [3,4,5], [6,7,8]];

 

/*------Variables (state)------*/
let board = [null, null, null, null, null, null, null, null, null];
let turn = 1;  
let winner = null;
let turnCount = 1;




/*      CACHED ELEMENT REFERENCES       */
const messageEl = document.getElementById('message');
const resetEl = document.getElementById('reset');
const gameStat = document.getElementById('gameStatus');
const ticTac = document.getElementsByTagName('h1');

/*      EVENT LISTENERS     */

document.getElementById('mainBoard').addEventListener('click', handleClick);




/*-------FUNCTIONS--------*/

init();

function init(){
    winner = null;
    turn = 1;
    gameStat.textContent = `It's ${colors[turn]}'s turn.`
    messageEl.innerText = 'Ready to play?!';
    ticTac.className = 'animate__tada';
}

/*      HANDLE CLICK        */

function handleClick(evt){
    let squareIndex = parseInt(evt.target.id.replace('sq',''));
    console.log(squareIndex);
    for(let i=0;i<board.length;i++){
        if(board[squareIndex] !== null){
            return;
    } 
    } 
    render(squareIndex);
}

/*      WINNER FUNCTION        */

function isWinner() {
    for(let i=0;i<winCombos.length;i++){
        if(Math.abs(board[winCombos[i][0]] + board[winCombos[i][1]] + board[winCombos[i][2]]) === 3) {
            winner = turn;
            messageEl.textContent = `${colors[turn]} is the winner!`;
            gameStat.textContent = '';
            confetti.start(4000);
        } 
        } return winner;
}

/*      RENDER FUNCTION         */

function render(squareIndex) {
    messageEl.innerText = ' ';
    
    if (winner === null) {
        let addLetter = document.getElementById(`sq${squareIndex}`);
        board[squareIndex] = turn;
        if (turn === 1) {
            gameStat.textContent = `It's O's turn.`;
            addLetter.textContent = 'X';
            turnCount++; 
        } else {
            addLetter.textContent = 'O';
            gameStat.textContent = `It's X's turn.`;
            turnCount++;
        } 
    } isWinner(); 
    if (winner === null && turnCount === 10){
        winner = "T"
        gameStat.textContent = `It's a draw!`;
     } 
    turn *= -1; 
    return;
}

