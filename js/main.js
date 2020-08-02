/*------Constants------*/
const colors = {
    emptySpace: null,
    gold_X: 1,
    green_O: -1
}
//const winCombos = [[sq0El,sq4El,sq8El], [sq6El,sq4El,sq2El], [sq0E,sq3El,sq6El], [sq1El,sq4El,sq7El], [sq2El,sq5El,sq8El], [sq0E,sq1El,sq2El], [sq3El,sq4El,sq5El], [sq6El,sq7El,sq8El]];
const winCombos = [[0,4,8], [6,4,2], [0,3,6], [1,4,7], [2,5,8], [0,1,2], [3,4,5], [6,7,8]];



/*------Variables (state)------*/

// Variables might include (board/turn/winner)
//turn is to remember whose turn it is

let board, turn, winner;
//winner = [//player that won, a tie, game in play]

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
let boardEl = document.getElementsByClassName('board');
//let boardEl = [sq0El, sq1El, sq2El, sq3El, sq4El, sq5El, sq6El, sq7El, sq8El];

