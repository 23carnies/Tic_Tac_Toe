/*------Constants------*/
const colors = {
    '1': 'X',
    '-1': 'O'
}

/*------Variables (state)------*/
let board = [null, null, null, null, null, null, null, null, null];
let turn = 1;  
let winner = null;




/*------Cached Element References------*/
const messageEl = document.getElementById('message');
const resetEl = document.getElementById('reset');
const gameStat = document.getElementById('gameStatus');

/*------Event Listeners------*/
resetEl.addEventListener('click', function(){
    init();
});
document.getElementById('mainBoard').addEventListener('click', handleClick);




/*------Functions------*/
init();

function init(){
    winner = false;
    turn = 1;
    gameStat.textContent = `It's ${colors["1"]}'s turn.`
    messageEl.innerText = 'Ready to play?!';
}

/*--------HandleClick-------*/
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


/*      RENDER FUNCTION         */
function render(squareIndex) {
    if (winner === null) {
        addLetter = document.getElementById(`sq${squareIndex}`);
        board[squareIndex] = turn;
        if (turn === 1) {
            addLetter.textContent = 'X';
        } else {
            addLetter.textContent = 'O';
        }
    }    
     turn *= -1; 
     isWinner();
}



/*       IS THERE A WINNER?     */
function isWinner() {
    const winCombos = [[0,4,8], [6,4,2], [0,3,6], [1,4,7], [2,5,8], [0,1,2], [3,4,5], [6,7,8]];
    for(let i=0;i<winCombos.length;i++){
        if(Math.abs((board[winCombos[i][0]] + board[winCombos[i][1]] + board[winCombos[i][2]] === 3))){
            winner = turn;
        } return winner;  
        confetti.start(2000); 
        messageEl.innerText = `${colors[turn]} is the winner!`
        messageEl.className = 'animate__animated animate__bounce';
        
    } 
    if(board.includes(null) === false){
        winner = 'T';
        gameStatus.innerText = `It's a draw!`;
    } 
    
}



