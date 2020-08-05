/*------Constants------*/
const colors = {
    '1': 'X',
    '-1': 'O'
}
const winCombos = [[0,4,8], [6,4,2], [0,3,6], [1,4,7], [2,5,8], [0,1,2], [3,4,5], [6,7,8]];
const play = new Audio(TicTacExtras/sounds/B5Door.wav);
const good = new Audio(TicTacExtras/sounds/b5KoshGood.wav);
const perhaps = new Audio(TicTacExtras/sounds/b5KoshPerhaps.wav);
const yes = new Audio(TicTacExtras/sounds/b5KoshYes.wav);
const commence = new Audio(TicTacExtras/sounds/Comencng.wav);
const online = new Audio(TicTacExtras/sounds/Online.wav);

/*------Variables (state)------*/
let board = [null, null, null, null, null, null, null, null, null];
let turn = 1;  
let winner = null;
let turnCount;




/*      CACHED ELEMENT REFERENCES       */
const messageEl = document.getElementById('message');
const resetEl = document.getElementById('reset');
const gameStat = document.getElementById('gameStatus');
const ticTac = document.getElementsByTagName('h1');

/*      EVENT LISTENERS     */
document.getElementById('resetEl').addEventListener('click', init);
document.getElementById('mainBoard').addEventListener('click', handleClick);




/*      FUNCTIONS       */
init();

function init(){
    winner = null;
    turn = 1;
    gameStat.textContent = `It's ${colors[turn]}'s turn.`
    messageEl.innerText = 'Ready to play?!';
    ticTac.className = 'animate__tada';
    commence.play();
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
function isWinner(winCombos) {
    for(let i=0;i<winCombos.length;i++){
        if(Math.abs((board[winCombos[i][0]] + board[winCombos[i][1]] + board[winCombos[i][2]] === 3))) {
            winner = turn
            messageEl.innerText = `${colors[turn]} is the winner!`;
            yes.play();
            confetti.start(2000);
            messageEl.className = 'animate__animated animate__bounce';

        } else if (turnCount === 10 && winner === false){
            winner = 'T';
            gameStatus.textContent = `It's a draw!`;
            perhaps.play();
        }  
        
    } return winner;
}

/*      RENDER FUNCTION         */
function render(squareIndex) {
    messageEl.innerText = ' ';
    if (winner === null) {
        addLetter = document.getElementById(`sq${squareIndex}`);
        board[squareIndex] = turn;
        if (turn === 1) {
            addLetter.textContent = 'X';
            gameStat.textContent = `It's O's turn.`;
            play.play();

        } else {
            addLetter.textContent = 'O';
            gameStat.textContent = `It's X's turn.`;
            play.play();
        }
        turnCount++;
    }    
     turn *= -1; 
     isWinner();
     
}

