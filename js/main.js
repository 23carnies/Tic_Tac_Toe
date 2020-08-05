/*------Constants------*/
const colors = {
    'null': 'white',
    '1': 'gold',
    '-1': 'green'
}

/*------Variables (state)------*/
let board = [null, null, null, null, null, null, null, null, null];
let turn = 1;   //playerX or playerO
let winner = null; //player that won(1 or -1), a tie(T), or game in play(null)
let gameStatus;



/*------Cached Element References------*/
const messageEl = document.getElementById('message');
const resetEl = document.getElementById('reset');
const boardSquares = document.getElementById('mainBoard');

/*------Event Listeners------*/
resetEl.addEventListener('click', function(){
    init();
});
boardSquares.addEventListener('click', handleClick);




/*------Functions------*/
init();

function init(){
    winner = false;
    turn = 1;
    //player = 1;
    gameStatus.innerText = `It's ${colors["-1"]}'s turn. `
    messageEl.innerText = 'Ready to play?!';
}

/*--------HandleClick-------*/
function handleClick(evt){
    //getting the index of the square
    let squareIndex = parseInt(evt.target.id.replace('sq', ''));
    //see if square is empty, return if no
    for(let i=0;i<board.length;i++){
        if(board[squareIndex] !== null){
            return;
    } 
    } //console.log(squareIndex);
    render(squareIndex);
}


/*      RENDER FUNCTION         */
function render(squareIndex) {
    if (winner === null) {
        addLetter = document.getElementById(`sq${squareIndex}`);
        board[squareIndex] = turn;
        if (turn === 1) {
            addLetter.innerText = "X";
        } else {
            addLetter.innerText = "O";
        }
        turn *= -1;
        return turn;
    }
}



/*       IS THERE A WINNER?     */
function isWinner() {
    const winCombos = [[0,4,8], [6,4,2], [0,3,6], [1,4,7], [2,5,8], [0,1,2], [3,4,5], [6,7,8]];
    for(let i=0;i<winCombos.length;i++){
        if(Math.abs((board[winCombos[i][0]] + board[winCombos[i][1]] + board[winCombos[i][2]] === 3))){
            winner = turn;
        } return winner;   
        messageEl.innerText = `${colors["-1"]} is the winner!`
        //add confetti                
    } 
    if(board.includes(null) === false){
        winner = 'T';
        gameStatus.innerText = `It's a draw!`;
    } 
    
}



