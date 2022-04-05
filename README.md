Tic Tac Toe
===================
This is the first project I completed during my Software Engineering Immmersive at General Assembly.

The project deliverable was to render a game board in the browser with a fully functioning game of Tic Tac Toe which would switch turns between X and O as well as visually display the result of a game.

[Play Tic Tac Toe](https://ebeecroft1.github.io/project0-tictactoe/)

### Skills Tested
- HTML
- CSS
- Javascript
- jQuery
- DOM manipulation

How to Play
===========
You know! Get three in a row!

How I did it
============
First I built a simple 3x3 grid of buttons using HTML and CSS which I could use to test my game logic.

Next I created the first of my Javascript files titled which would house the Game Logic. This file would have little to no interaction with the DOM. A second Javascript file would handle the Board, that is the interaction between player, the game, and the DOM itself. My goal was to produce a working game logic before moving into design.

My first attempt was to use vanilla Javascript and a series of if statements. I created 8 functions that would test possible winning combinations and console.log the winner. These I called in a winCheck function which contained 9 if statements checking for each possible winning combination. The hardest part to figure out with this approach was how to record each players input. In my Board JS, I settled on a click function which would add the class of X or O to the selected button. For testing purposes I set X on click and O on double click (which did lead to errors later on). With that done, my if statements checked if there were three matching classes in one of the 9 possible win conditions. If so, an alert would pop up noting the winner. I did not attempt checking for a draw as this was already near 80 lines of code. I had a functional game for the most part but was sure I could make it dryer.

My second attempt was to record the user selections into an array. My first impulse was to mimic the gameboard with an object containing three arrays of three.

```javascript
const gameBoard = {
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
}
```

However this approach led to more if statements since I had to reference multiple arrays. Finally I settled on a single array with 9 empty values, the indexes would correspond with the 9 positions on the game board.

```javascript
let gameBoard = ['', '', '', '', '', '', '', '', ''];
```

Using a much cleaner winCheck function, I could loop through the gameBoard array and compare with the 9 possible winning combinations. This approach also made writing a drawCheck function easy, if the gameBoard array had no empty values but did not match the winning combinations, then the result was a draw.

Design
======
Naturally I took inspiration from Wordle in terms of the board and tile positioning. In terms of colour pallete, I wanted something more bright. This led me to a colour gradient of teals and greys as well as rounded edges on the divs and a fuller font.

In line with my interest in User Interface design, I elected for a simple, repeated bounce animation to highlight which players turn it is. I am very interested in these subtle signifiers which can guide the user.

What was hard
=============
There were a few things I struggled with in this project. It took me a long time and some guidance to understand how to record the players selection into the gameBoard array. I toyed with giving each button an individual id but that wouldn't necessarily solve the problem. This code below (shown for player X) made all the difference.

```javascript
let xIndex = $('.tile').index(this) // Store the selected game tile index as the variable xIndex
gameBoard[xIndex] = 'X'; // Claim the xIndex index in the game board array for Player X
```

Understanding that jquery would inherintly treat `$('.tile')` as an object meant I could take the index # of it and was a breakthrough.

I also struggled with the positioning of my end game modal. I still have not been able to position the div so that it always appears on top of the game board.

Responsive web design is a growth area for me.

Bugs I still have
-----------------
- Correct responsive web design
- Proper positioning on the end game modal
- Disabling the bounce animation once the game is won
- Hover animation on tiles