/*------Constants------*/
const colors = {
    emptySpace: null,
    x: 1,
    o: -1
}
//const winCombos = [[sq0El,sq4El,sq8El], [sq6El,sq4El,sq2El], [sq0E,sq3El,sq6El], [sq1El,sq4El,sq7El], [sq2El,sq5El,sq8El], [sq0E,sq1El,sq2El], [sq3El,sq4El,sq5El], [sq6El,sq7El,sq8El]];
const winCombos = [[0,4,8], [6,4,2], [0,3,6], [1,4,7], [2,5,8], [0,1,2], [3,4,5], [6,7,8]];



/*------Variables (state)------*/

// Variables might include (board/turn/winner)
//turn is to remember whose turn it is

let board, turn, winner, player;
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

// You might choose to put your game status here
    //  %%% cache message, board?, each piece of board?, resetbtn, title
/*------Event Listeners------*/
    //  %%%    reset, click squares, startbtn?
// This is where you should put the event listener
// for a mouse-click

/*------Functions------*/


// Some functions you might choose to use:

// Initialization function:
// Where you set your initial state, setting up 
// what the board will look like upon loading

// On-Click function:
// Set up what happens when one of the elements
// is clicked


// Check winner function:
// Checks the current state of the board for    HOW TO CHECK THE STATE OF THE BOARD??
// a winner and changes the state of the winner
// variable if so


// Render function:
// Displays the current state of the board
// on the page, updating the elements to reflect
// either X or O depending on whose turn it is

/*  RENDER THE BOARD  */

function renderBoard() {
    for(let i=0;i<board.length;i++){
        boardEl = board.map(function(index, board){
            return board;
        });
        boardEl = colors.emptySpace;
        console.log(boardEl); //i think i finally did it!
    }
}


/*     RENDER A MESSAGE     */

// if (winner === null) {  //game in progress
//     turn = 1;
//     messageEl.innerText = 'It\'s your turn. Mark your square.'; 
    
// }

/*      CHANGE TURN         */
function changeTurn(){
    Math.abs(turn);
    return turn;
    console.log(turn);
}

/*   RENDER WHOSE TURN      */
function renderTurn(){
    if(turn = 1){
        player = colors.x;
    } else {
        player = colors.o;
    }
}




// if (winner !== null) { 
    
//         messageEl.innerText = 'It\'s your turn. Mark your square.';     //} 
// else if (winner === T) {        //tie
// messageEl.innerText = 'It\'s a tie!';
// //add to totals
// //onclick on any square, run init()
//     }
// else {
//     //message which player has won
//     //add to totals
//     //onclick any square, run init
// }
// return
// }


//4.2.2) Render a message:
// 			4.2.2.1) If winner has a value other than null (game still in progress), render whose turn it is - use the color name for the player, converting it to upper case.
// 			4.2.2.2) If winner is equal to 'T' (tie), render a tie message.
// 			4.2.2.3) Otherwise, render a congratulatory message to which player has won - use the color name for the player, converting it to uppercase.
// 	4.3) Wait for the user to click a square


//start setup should include 1)blank board, 2)welcome message, 3)play button?
    //if yes to play button, it should notify player if player/comp has first turn
    //when a square is clicked, 1)change color/add x/o, 2)make sound, 3)disable the square's ability to be clicked again
    //change turn 
        //repeat these 3 steps
//if a winning combo is reached by player/comp, 1)give win/lose message to player, 2)confetti or hammer, 3)and sound accordingly
//if a tie combo is reached, 1)give player tie message, 2)play sound
    //add last game info to totals div player:win/tie/loss
//click on reset button should return app to original set up except for the totals
    //totals should only be reset onload






// Programs, including games, are frequently focused on manipulating data and displaying that data to a user. Decide on the data structures, held in variables, that will maintain the state (data / status) of the game.
// Note that the values you use to represent the state of your game, doesn't necessarily have to match what you want to display. For example, just because you want to display X and Os doesn't mean that you have to use those letters in your data structure. You might choose to use 1 to represent player X and -1 to represent player O for example. Then, in your render function you would have the logic to translate data to what you want to display.
// Wire up your click event listener(s). Using a single listener with event bubbling is recommended but not required.
//              %%%%%%           Lots of little functions!      %%%%%%%%









// 4) Upon loading the app should:
// 	4.1) Initialize the state variables:
// 		✅4.1.1) Initialize the board array to 9 nulls to represent empty squares. The 9 elements will "map" to each square, where index 0 maps to the top-left square and index 8 maps to the bottom-right square.
// 		✅4.1.2) Initialize whose turn it is to 1 (player 'X'). Player 'O' will be represented by -1.
// 		✅4.1.3) Initialize winner to null to represent that there is no winner or tie yet. Winner will hold the player value (1 or -1) if there's a winner. Winner will hold a 'T' if there's a tie. 
// 	4.2) Render those state variables to the page:
// 		✅4.2.1) Render the board:
// 			✅4.2.1.1) Loop over each of the 9 elements that represent the squares on the page, and for each iteration:
// 				✅4.2.1.1.2) Use the index of the iteration to access the mapped value from the board array.
// 				✅4.3.1.1.3) Set the background color of the current element by using the value as a key on the colors lookup object (constant).
// 		4.2.2) Render a message:
// 			4.2.2.1) If winner has a value other than null (game still in progress), render whose turn it is - use the color name for the player, converting it to upper case.
// 			4.2.2.2) If winner is equal to 'T' (tie), render a tie message.
// 			4.2.2.3) Otherwise, render a congratulatory message to which player has won - use the color name for the player, converting it to uppercase.
// 	4.3) Wait for the user to click a square

// 5) Handle a player clicking a square:
// 	5.1) Obtain the index of the square that was clicked by either:
// 		5.1.1) "Extracting" the index from an id assigned to the element in the HTML, or
// 		5.1.2) Looping through the cached square elements using a for loop and breaking out when the current square element equals the event object's target.
// 	5.2) If the board has a value at the index, immediately return because that square is already taken.
// 	5.3) If winner is not null, immediately return because the game is over.
// 	5.4) Update the board array at the index with the value of turn.
// 	5.5) Flip turns by multiplying turn by -1 (flips a 1 to -1, and vice-versa).
// 	5.6) Set the winner variable if there's a winner:
// 		5.6.1) Loop through the each of the winning combination arrays defined.
// 		5.6.2) Total up the three board positions using the three indexes in the current combo.
// 		5.6.3) Convert the total to an absolute value (convert any negative total to positive).
// 		5.6.4) If the total equals 3, we have a winner! Set winner to the board's value at the index specified by the first index in the combo array. Exit the loop.
// 	5.7) If there's no winner, check if there's a tie:
// 		5.7.1) Set winner to 'T' if there are no more nulls in the board array.
// 	5.8) All state has been updated, so render the state to the page (step 4.2).
		

// 6) Handle a player clicking the replay button:
// 	6.1) Do steps 4.1 (initialize the state variables) and 4.2 (render).
// Using a numbered outline is not required but helps organize the more complex steps into detailed steps.

// Bonuses
// Display whose turn it is ("X" or "O").
// Provide win logic and display a winning message.
// Provide logic for a cat's game (tie), also displaying a message.
// Add your personal touch with unique styling.
// Resources