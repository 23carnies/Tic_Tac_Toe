/*------Variables (state)------*/
let board = [null, null, null, null, null, null, null, null, null];
let turn = 1;   //playerX or playerO
let winner = null; //player that won(1 or -1), a tie(T), or game in play(null)
let gameStatus;


/*------Cached Element References------*/
const messageEl = document.getElementById('message');
const sq0El = document.getElementById('sq0');
const sq1El = document.getElementById('sq1');
const sq2El = document.getElementById('sq2');
const sq3El = document.getElementById('sq3');
const sq4El = document.getElementById('sq4');
const sq5El = document.getElementById('sq5');
const sq6El = document.getElementById('sq6');
const sq7El = document.getElementById('sq7');
const sq8El = document.getElementById('sq8');
const resetEl = document.getElementById('reset');

/*------Event Listeners------*/





/*------Functions------*/
init();

function init(){
    winner = false;
    turn: 1;
    //gamestatus.textcontent = it's x turn
    messageEl.innerText = 'Ready to play?!';
}

function changeTurn(){
    turn *= -1;
}


/*       IS THERE A WINNER?     */
function isThereAWinner(){
    const winCombos = [[board[0],board[4],board[8]], [board[6],board[4],board[2]], [board[0],board[3],board[6]], [board[1],board[4],board[7]], [board[2],board[5],board[8]], [board[0],board[1],board[2]], [board[3],board[4],board[5]], [board[6],board[7],board[8]]];
    //loop through the wincombos array
        //if something in the board status i think === one of these
        //add the 3 numbers?
    
    //total 3 board positions??? (what about when there's more? includes() maybe??)

    //convert total to abs value Math.abs()

    //set winner var to winCombos[i][0]

    //exit loop

    //if no winner, check for tie, if so set winner = T

    //set message for winner or tie!! this should be in render i think
}


/*      RENDER FUNCTION         */
function render(){
    gameStatus.innerText = `It's `
}