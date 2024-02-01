// Accessing the elements of the door images.
let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');

// Accessing start button

let startButton = document.getElementsByClassName('button');

// Initialising doors

let botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg';
let beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg';
let spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg';
let closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';
let currentlyPlaying = true;

//Checking if door is closed

const isClicked = (door) => {
    if (door.src === closedDoorPath) {
        return true;
    } else {
        return false;
    }
}
 // Cheking if door is Chore Door

 const isBot = (door) => {
    if (door.src === botDoorPath) {
        return true;
    } else {
        return false;
    }
 }

// Writing Play and Game Over Logic

let gameOver = (status) => {
    if (status === 'win') {
        return document.getElementsByClassName('button')[0].innerHTML = 'You win! Play again?'
    } else {
        return document.getElementsByClassName('button')[0].innerHTML = 'Game over! Play again?'
    }
    currentlyPlaying = false;
}

//Check game progress

 let playDoor = (door) => {
    //variable vill decrease by one every time a door is opened
    numClosedDoor --;
    if (numClosedDoor === 0) {
        gameOver('win');
    }
    /*Check if calling the isBot() function with the argument of door returns 
    true. */
   
    if (isBot(door) === true) {
        gameOver();
    }
 }

 //Choosing a Random Chore Door