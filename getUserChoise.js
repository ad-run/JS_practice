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
a valid choice: ‘rock’, ‘paper’, or ‘scissors’.*/

const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log('Error!');
    }
}

/*4. Test the function by calling it with valid and invalid input, and printing the results to the console.
You can delete this when you know your function works.*/

console.log(getUserChoice('Paper')); // should print 'paper'
console.log(getUserChoice('fork')); // should print 'Error!' and `undefined`

/*5. Now we need to have the computer make a choice.
Create a new function named getComputerChoice with no parameters. 
Inside its block, utilize Math.random() and Math.floor() to get a whole number 
between 0 and 2. Then, depending on the number, return either 'rock', 
'paper', or 'scissors'.*/


const getComputerChoice =  () => {
    randomNumber = Math.floor(Math.random () * 3);
    switch (randomnNumber) {
      case 0:
      return 'rock';
      break;
      case 1:
      return 'paper';
      break;
      case 2:
      return 'scissors';
      break;
    }
  }

/*6. Test the function by calling it multiple times and printing the results to the console.
You can delete this when you know your function works.*/

console.log(getComputerChoice());

  /* 7. Now it’s time to determine a winner.
Create a function named determineWinner that takes two parameters named userChoice and computerChoice. This function will compare the two choices played and then return if the human player won, lost, or tied.
Let’s deal with the tie condition first. Within the determineWinner() function, write an if statement that checks if the userChoice parameter equals the computerChoice parameter. If so, return a string that the game was a tie.
*/

  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return console.log('The game was a tie.');
    }
    
/* 8. If the game is not a tie, you’ll need to determine a winner.
Begin by writing an if statement that checks if the userChoice is 'rock'. 
Inside the if statement’s block, write another if/else statement. 
The inner if/else should check if the computerChoice is 'paper'. 
If so, return a message that the computer won. 
If not, return a message that the user won.*/
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return console.log('The computer won!');                    
        } else {
            console.log('The user won!');
        }
    }
/*
Next, write another if statement for if the userChoice is 'paper'.
Inside this if statement, the computerChoice must be either 'scissors' or 'rock'. 
Write logic that will return a winner. 
*/
  }