//TO DOS
// Present which players turn it is - Done
// Switch turns - Done
// Disable button/div after it has been filled - Done
// Display winner - Done
// Reset button - Done
// Win counter
// Change font in buttons & title
// Title banner = page width

let turnCounter = 1;

let xPlayerScore = 0;
let oPlayerScore = 0;

const playerSwitch1 = function() {
    $('.player1').removeClass('animate__pulse');
    $('.player2').addClass('animate__pulse');
};

const playerSwitch2 = function() {
    $('.player2').removeClass('animate__pulse');
    $('.player1').addClass('animate__pulse');
};

$('.tile').on('click', function () {
    if (turnCounter %2 !== 0) {
        $(this).text('X');
        $(this).addClass('x');
        $(this).attr('disabled', true);

        xIndex = $('.tile').index(this)
        gameBoard[xIndex] = 'X';

        winCheck();
        if (gameWon === true) {
            $('.whoWon').text('X is the winner!');
            xPlayerScore++
            $('.xScore').text(`X = ${xPlayerScore}`);
        };

        drawCheck();
        hatTrick();
        embarrassing();

        turnCounter++;
        playerSwitch1();

    }
    else {
        $(this).text('O');
        $(this).addClass('o');
        $(this).attr('disabled', true);

        oIndex = $('.tile').index(this)
        gameBoard[oIndex] = 'O';
    
        winCheck();
        if (gameWon === true) {
            $('.whoWon').text('O is the winner!');
            oPlayerScore++
            $('.oScore').text(`O = ${oPlayerScore}`);
        };

        drawCheck();
        hatTrick();
        embarrassing();

        turnCounter++;
        playerSwitch2();

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