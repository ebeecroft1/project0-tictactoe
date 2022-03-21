//TO DOS
// Define win condition & write function to check for it
const topLeft = $('#top left').text();
const topCenter = $('#top center').text();
const topRight = $('#top right').text();


const topWin = function(x, y, z) { // Function to check if someone won in the top row
    if (x === y && x === z) {
        console.log(`${x} is the winner`);
    }
    else {
        console.log('No winner yet');
    }
};
topWin('x', 'o', 'o');
topWin('x', 'x', 'o');
topWin('x', 'x', 'x');
topWin('o', 'o', 'o');