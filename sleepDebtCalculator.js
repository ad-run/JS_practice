/*
Did you know that giraffes sleep 4.6 hours a day? We humans need more than that. 
If we don’t sleep enough, we accumulate sleep debt. 
In this project we’ll calculate if you’re getting enough sleep each week using a sleep debt calculator.
The program will determine the actual and ideal hours of sleep for each night of the last week.
Finally, it will calculate, in hours, how far you are from your weekly sleep goal.
*/

//Tasks

/*
1. The first problem to solve is determining how many hours of sleep you got each night of the week.
You can create a function that returns any given night’s number of hours of rest. 
Instead of writing seven different functions 
(one for each day of the week), let’s write one function with a parameter for the day.
Create a function named getSleepHours with a single parameter named day.

2.The function should accept a day as an argument and return the number of hours you slept that night.
For instance, if you got 8 hours of sleep on Monday night, calling getSleepHours('monday') should return 8.
Use an if/else or switch statement to implement this.
*/

const getSleepHours = day => {
 let day;
 switch (day) {
    case 'monday':
        return 8;
        break;
    case 'tuesday':
        return 8;
        break;
    case 'wednesday':
        return 8
        break;
    case 'thursday':
        return 8
        break;
    case 'friday':
        return 8
        break;
    case 'saturday':
        return 8
        break;
    case 'sunday':
        return 8
        break;
    default:
    return 'Error, please type day of the week.'
 }
}
/* Test the function by calling it multiple times and printing the results to the console.
You can remove the tests when you know your function works.*/

//console.log(getSleepHours('monday'));