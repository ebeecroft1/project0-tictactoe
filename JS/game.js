//TO DOS
// Define win condition & write function to check for it

// const turnCounter = 0;

const winCheck = function () { // Check if any win conditions are met
    if ($('.top').hasClass('x') || $('.top').hasClass('o')) { // If top is all filled - check for top win
        topWin($('.top.left').text(), $('.top.center').text(), $('.top.right').text());
    }
    if ($('.mid').hasClass('x') || $('.mid').hasClass('o')) { // If mid is all filled - check for mid win
        midWin($('.mid.left').text(), $('.mid.center').text(), $('.mid.right').text());
    }
    if ($('.bot').hasClass('x') || $('.bot').hasClass('o')) { // If bot is all filled - check for bot win
        botWin($('.bot.left').text(), $('.bot.center').text(), $('.bot.right').text());
    }
    if ($('.left').hasClass('x') || $('.left').hasClass('o')) { // If left is all filled - check for left win
        leftWin($('.top.left').text(), $('.mid.left').text(), $('.bot.left').text());
    }
    if ($('.center').hasClass('x') || $('.center').hasClass('o')) { // If center is all filled - check for center win
        centerWin($('.top.center').text(), $('.mid.center').text(), $('.bot.center').text());
    }
    if ($('.right').hasClass('x') || $('.right').hasClass('o')) { // If right is all filled - check for right win
        rightWin($('.top.right').text(), $('.mid.right').text(), $('.bot.right').text());
    }
    if ($('.center').hasClass('x') || $('.center').hasClass('o')) { // If diagonal is all filled - check for diagonal win
        diagonalWin($('.top.right').text(), $('.mid.center').text(), $('.bot.left').text());
        diagonalWin($('.top.left').text(), $('.mid.center').text(), $('.bot.right').text());
    }
}

const topWin = function(x, y, z) { // Function to check if someone won in the top row
    if (x === y && x === z) {
        console.log(`${$('.top.left').text()} is the winner`);
    }
};

const midWin = function(x, y, z) { // Function to check if someone won in the mid row
    if (x === y && x === z) {
        console.log(`${$('.mid.left').text()} is the winner`);
    }
};

const botWin = function(x, y, z) { // Function to check if someone won in the bot row
    if (x === y && x === z) {
        console.log(`${$('.bot.left').text()} is the winner`);
    }
};

const leftWin = function(x, y, z) { // Function to check if someone won in the left column
    if (x === y && x === z) {
        console.log(`${$('.top.left').text()} is the winner`);
    }
};

const centerWin = function(x, y, z) { // Function to check if someone won in the center column
    if (x === y && x === z) {
        console.log(`${$('.top.center').text()} is the winner`);
    }
};

const rightWin = function(x, y, z) { // Function to check if someone won in the right column
    if (x === y && x === z) {
        console.log(`${$('.top.right').text()} is the winner`);
    }
};

const diagonalWin = function(x, y, z) { // Function to check if someone won in the right column
    if (x === y && x === z) {
        console.log(`${$('.mid.center').text()} is the winner`);
    }
};