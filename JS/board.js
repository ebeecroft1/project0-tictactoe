//TO DOS
// Present which players turn it is - Done
// Switch turns - Done
// Disable button/div after it has been filled - Done
// Display winner - Done
// Reset button
// Win counter

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

$('button').on('click', function () {
    if (turnCounter %2 !== 0) {
        $(this).text('X');
        $(this).addClass('x');
        $(this).attr('disabled', true);

        xIndex = $('button').index(this)
        gameBoard[xIndex] = 'X';

        winCheck();
        if (gameWon === true) {
            $('.winner').text('X is the winner!');
            // $('.player1').text('I'); // Can't get this counter to work
            // $(this).removeClass('animate__pulse'); // Can't get this cancel to work
        };

        drawCheck();

        turnCounter++;
        playerSwitch1();

    }
    else {
        $(this).text('O');
        $(this).addClass('o');
        $(this).attr('disabled', true);

        oIndex = $('button').index(this)
        gameBoard[oIndex] = 'O';
    
        winCheck();
        if (gameWon === true) {
            $('.winner').text('O is the winner!');
            // $(this).removeClass('animate__pulse'); // Can't get this cancel to work
        };

        drawCheck();

        turnCounter++;
        playerSwitch2();

    }
});