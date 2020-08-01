  
/*------Constants------*/
const colors {
    playerX = 1;
    playerO = -1;
}


/*------Variables (state)------*/

// Variables might include (board/turn/winner)
//turn is to remember whose turn it is
//winner player that won, tie, or game in play
let board, turn, winner;
board = [sq0El, sq1El, sq2El, sq3El, sq4El, sq5El, sq6El, sq7El, sq8El]




/*------Cached Element References------*/

// You might choose to put your game status here
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

console.log(board);
/*------Event Listeners------*/

// This is where you should put the event listener
// for a mouse-click

/*------Functions------*/
// Initialization function:
// Where you set your initial state, setting up 
// what the board will look like upon loading

function init() {
    //clear board
    board = null;  //??
}

// On-Click function:
// Set up what happens when one of the elements
// is clicked
function onClick() {

}


// Check winner function:
// Checks the current state of the board for
// a winner and changes the state of the winner
// variable if so
function ifWin() {

}


// Render function:
// Displays the current state of the board
// on the page, updating the elements to reflect
// either X or O depending on whose turn it is
function render() {}



// 1) Define required constants:    *****??????


// 	1.1) Define a colors object with keys of 'null' (when the square is empty), and players 1 & -1. The value assigned to each key represents the color to display for an empty square (null), player 1 and player -1.
// 	1.2) Define the 8 possible winning combinations, each containing three indexes of the board that make a winner if they hold the same player value.

// 2) Define required variables used to track the state of the game:
// 	2.1) Use a board array to represent the squares.✅	2.2) Use a turn variable to remember whose turn it is. ✅
// 	2.3) Use a winner variable to represent three different possibilities - player that won, a tie, or game in play.✅


// 3) Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant:
// 	3.1) Store the 9 elements that represent the squares on the page.✅

// 4) Upon loading the app should:
// 	4.1) Initialize the state variables:
// 		4.1.1) Initialize the board array to 9 nulls to represent empty squares. The 9 elements will "map" to each square, where index 0 maps to the top-left square and index 8 maps to the bottom-right square.
// 		4.1.2) Initialize whose turn it is to 1 (player 'X'). Player 'O' will be represented by -1.
// 		4.1.3) Initialize winner to null to represent that there is no winner or tie yet. Winner will hold the player value (1 or -1) if there's a winner. Winner will hold a 'T' if there's a tie. 
// 	4.2) Render those state variables to the page:
// 		4.2.1) Render the board:
// 			4.2.1.1) Loop over each of the 9 elements that represent the squares on the page, and for each iteration:
// 				4.2.1.1.2) Use the index of the iteration to access the mapped value from the board array.
// 				4.3.1.1.3) Set the background color of the current element by using the value as a key on the colors lookup object (constant).
// 		4.2.2) Render a message:
// 			4.2.2.1) If winner has a value other than null (game still in progress), render whose turn it is - use the color name for the player, converting it to upper case.