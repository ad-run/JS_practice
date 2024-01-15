/*Rock, Paper, or Scissors
Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.

The possible outcomes are:

Rock destroys scissors.
Scissors cut paper.
Paper covers rock.
If there’s a tie, then the game ends in a draw.
Our code will break the game into four parts:

Get the user’s choice.
Get the computer’s choice.
Compare the two choices and determine a winner.
Start the program and display the results.*/

/* 
1. The user should be able to choose ‘rock’, ‘paper’, or ‘scissors’ when the game starts.
Using const and arrow function syntax, create a function named getUserChoice 
that takes a single parameter userInput.
2. Since a user can pass in a parameter, such as ‘Rock’ or ‘rock’ with different capitalizations, 
begin by utilizing JavaScript’s toLowerCase() function to make the userInput all lowercase.
3. When getting the user’s choice, you should also check to make sure that the user typed 
a valid choice: ‘rock’, ‘paper’, or ‘scissors’.
*/

const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log('Error!');
    }
}