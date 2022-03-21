//TO DOS
// Present which players turn it is
// Switch turns
// Display winner

$('button').on('click', function () {
    $(this).text('X');
    $(this).addClass('x');
});

$('button').on('dblclick', function () {
    $(this).text('O');
    $(this).removeClass('x');
    $(this).addClass('o');
});