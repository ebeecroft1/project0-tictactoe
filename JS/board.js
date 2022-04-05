// Welcome to the Tic Tac Toe Board Logic

// This is primarily* where the Game Logic interacts with the Board aka the DOM

// * I say primarily as I couldn't help but sneak some DOM manipulation into the Game Logic file. Please don't judge me harshly.

let turnCounter = 1;

let xPlayerScore = 0; // Set Player X score to 0
let oPlayerScore = 0; // Set Player O score to 0

const playerSwitch1 = function() {
    $('.player1').removeClass('animate__pulse'); // Deactivate animation on Player x
    $('.player2').addClass('animate__pulse'); // Activate animation on Player O
};

const playerSwitch2 = function() {
    $('.player2').removeClass('animate__pulse'); // Deactivate animation on Player O
    $('.player1').addClass('animate__pulse'); // Activate animation on Player X
};

$('.tile').on('click', function () {
    if (turnCounter %2 !== 0) { // Check if it is Player X's turn
        $(this).text('X'); // Add 'X' to the selected game tile text
        $(this).addClass('x'); // Add 'X' class to the selected game tile HTML
        $(this).attr('disabled', true); // Disable the selected game tile

        let xIndex = $('.tile').index(this) // Store the selected game tile index as the variable xIndex
        gameBoard[xIndex] = 'X'; // Claim the xIndex index in the game board array for Player X

        winCheck(); // Check if win conditions have been met by this click
        if (gameWon === true) {
            $('.whoWon').text('X is the winner!');
            xPlayerScore++ // Add one to the Player X score
            $('.xScore').text(`X = ${xPlayerScore}`); // Update Player X's score in the lower window
        };

        drawCheck(); // Check if the game has ended in a draw
        hatTrick(); // Check if Player X has scored a hat trick
        embarrassing(); // Check if one player is losing by 4

        turnCounter++; // Increase the turn counter by one
        playerSwitch1(); // Switch to Player O

    }
    else {
        $(this).text('O'); // Add 'O' to the selected game tile text
        $(this).addClass('o'); // Add 'O' class to the selected game tile HTML
        $(this).attr('disabled', true); // Disable the selected game tile

        let oIndex = $('.tile').index(this) // Store the selected game tile index as the variable xIndex
        gameBoard[oIndex] = 'O'; // Claim the xIndex index in the game board array for Player X
    
        winCheck(); // Check if win conditions have been met by this click
        if (gameWon === true) {
            $('.whoWon').text('O is the winner!');
            oPlayerScore++ // Add one to the Player O score
            $('.oScore').text(`O = ${oPlayerScore}`); // Update Player O's score in the lower window
        };

        drawCheck(); // Check if the game has ended in a draw
        hatTrick(); // Check if Player O has scored a hat trick
        embarrassing(); // Check if one player is losing by 4

        turnCounter++;
        playerSwitch2();

    }
});

$('.reset').on('click', function () {
    gameBoard = ['', '', '', '', '', '', '', '', '']; // Reset gameBoard array
    gameWon = false; // Set game state to active
    $('.tile').attr('disabled', false); // Re-enable each game tile
    $('.tile').text(''); // Reset game tile text
    $('.tile').removeClass('x');
    $('.tile').removeClass('o');
    $('.whoWon').removeClass('draw'); // Reset draw winner window formatting
    $('.winner').css('visibility', 'hidden'); // Hide winner window
});