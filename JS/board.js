//TO DOS
// Present which players turn it is
// Switch turns
// Disable button/div after it has been filled - done
// Display winner

let turnCounter = 1;

$('button').on('click', function () {
    if (turnCounter % 2 !== 0) {
        $(this).text('X');
        $(this).addClass('x');
        $(this).attr('disabled', true);

        xIndex = $('button').index(this)
        gameBoard[xIndex] = 'X';

        turnCounter++;
    }
    else {
        $(this).text('O');
        $(this).addClass('o');
        $(this).attr('disabled', true);

        oIndex = $('button').index(this)
        gameBoard[oIndex] = 'O';
    
        turnCounter++;
    }
    winCheck();
});