//TO DOS
// Present which players turn it is
// Switch turns
// Change buttons to divs
// Disable button/div after it has been filled
// Display winner

$('button').on('click', function () {
    $(this).text('X');
    $(this).addClass('x');
    
    winCheck();
});

$('button').on('dblclick', function () {
    $(this).text('O');
    $(this).removeClass('x');
    $(this).addClass('o');

    winCheck();
});