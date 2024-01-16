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
/* 
3. Test the function by calling it multiple times and printing the results to the console.
You can remove the tests when you know your function works.*/

//console.log(getSleepHours('monday'));

/*
5. Now that you’ve written a function to get the sleep hours for each night, we need to do three things:
Get the total sleep hours that you actually slept
Get the ideal sleep hours that you prefer
Calculate the sleep debt, if any.
To get the total sleep hours that you actually slept, 
create a new function named getActualSleepHours that takes no parameters.
*/
const getActualSleepHours = () => 
/*
5. Inside the getActualSleepHours() function, call the getSleepHours() function 
for each day of the week. Add the results together and return the sum using an implicit return.
*/
    getSleepHours('monday') + 
    getSleepHours('tuesday') + 
    getSleepHours('wednesday') + 
    getSleepHours('thursday') + 
    getSleepHours('friday') +
    getSleepHours('saturday') + 
    getSleepHours('sunday');

/*
6.To get the ideal sleep hours that you prefer, create a function named getIdealSleepHours with no parameters.
Inside the function, declare a variable named idealHours and set its value to your ideal hours per night. 
Then return the idealHours multiplied by 7.
You’ll want to multiply by 7 to get the total hours you prefer per week.
*/

    const getIdealSleepHours = () => {
        const idealHours = 8;
        return idealHours * 7;
    }


