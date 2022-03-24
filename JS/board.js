// Welcome to the Tic Tac Toe Board Logic

// This is primarily* where the Game Logic interacts with the Board aka the DOM

// * I say primarily as I couldn't help but sneak some DOM manipulation into the Game Logic file. Please don't judge me harshly.

let turnCounter = 1; // Set turn counter so the game knows who's turn it is

let xPlayerScore = 0; // Set Player X score to 0
let oPlayerScore = 0; // Set Player O score to 0

const playerSwitch1 = function() { // Function to switch animation from Player X to Player O
    $('.player1').removeClass('animate__pulse'); // Deactivate animation on Player x
    $('.player2').addClass('animate__pulse'); // Activate animation on Player O
};

const playerSwitch2 = function() { // Function to switch animation from Player O to Player X
    $('.player2').removeClass('animate__pulse'); // Deactivate animation on Player O
    $('.player1').addClass('animate__pulse'); // Activate animation on Player X
};

$('.tile').on('click', function () { // The big on click function that brings it all together
    if (turnCounter %2 !== 0) { // Check if it is Player X's turn
        $(this).text('X'); // Add 'X' to the selected game tile text
        $(this).addClass('x'); // Add 'X' class to the selected game tile HTML
        $(this).attr('disabled', true); // Disable the selected game tile

        let xIndex = $('.tile').index(this) // Store the selected game tile index as the variable xIndex
        gameBoard[xIndex] = 'X'; // Claim the xIndex index in the game board array for Player X

        winCheck(); // Check if win conditions have been met by this click
        if (gameWon === true) { // If game has been won
            $('.whoWon').text('X is the winner!'); // Change winner window text to display Player X
            xPlayerScore++ // Add one to the Player X score
            $('.xScore').text(`X = ${xPlayerScore}`); // Update Player X's score in the lower window
        };

        drawCheck(); // Check if the game has ended in a draw
        hatTrick(); // Check if Player X has scored a hat trick
        embarrassing(); // Check if one player is losing by 4

        turnCounter++; // Increase the turn counter by one
        playerSwitch1(); // Switch to Player O

    }
    else { // If it is not Player X's turn - it must be Player O's
        $(this).text('O'); // Add 'O' to the selected game tile text
        $(this).addClass('o'); // Add 'O' class to the selected game tile HTML
        $(this).attr('disabled', true); // Disable the selected game tile

        let oIndex = $('.tile').index(this) // Store the selected game tile index as the variable xIndex
        gameBoard[oIndex] = 'O'; // Claim the xIndex index in the game board array for Player X
    
        winCheck(); // Check if win conditions have been met by this click
        if (gameWon === true) { // If game has been won
            $('.whoWon').text('O is the winner!'); // Change winner window text to display Player O
            oPlayerScore++ // Add one to the Player O score
            $('.oScore').text(`O = ${oPlayerScore}`); // Update Player O's score in the lower window
        };

        drawCheck(); // Check if the game has ended in a draw
        hatTrick(); // Check if Player O has scored a hat trick
        embarrassing(); // Check if one player is losing by 4

        turnCounter++; // Increase the turn counter by one
        playerSwitch2(); // Switch to Player X

    }
});

$('.reset').on('click', function () { // Click reset button function
    gameBoard = ['', '', '', '', '', '', '', '', '']; // Reset gameBoard array with empty values
    gameWon = false; // Set game state to active
    $('.tile').attr('disabled', false); // Re-enable each game tile
    $('.tile').text(''); // Reset game tile text
    $('.tile').removeClass('x'); // Remove 'x' class on game tiles
    $('.tile').removeClass('o'); // Remove 'o' class on game tiles
    $('.whoWon').removeClass('draw'); // Reset draw winner window formatting
    $('.winner').css('visibility', 'hidden'); // Hide winner window
});