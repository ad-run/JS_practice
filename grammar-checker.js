/*
const numbers = [1, -1 ,2, 3];
const items = numbers
    .filter(n => n >= 0)
    .map(n => ({ value: n}))
    .filter(obj => obj.value > 1)
    .map(obj => obj.value);

console.log(items);
*/
/*
Grammar Checker
In this project, you’ll use what you know about 
iterating over arrays to gather information and improve the quality of a paragraph.

1.The 'story' variable holds the paragraph we’ll be editing. 
In order to edit the story, we turn it into an array. 
The .split() method separates the story string by the space character (' ') 
and stores each word as an element of the array.
To see the array we’ll be working with throughout the lesson, log storyWords to the console.
After you’ve viewed the storyWords array, comment out the console.log() statement before moving to the next task.
*/
let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');
//console.log(storyWords);

/* 
2. For a better visual comparison of the original and edited stories, 
we want to view the edited storyWords array as a string. 
To change the storyWords array back into a readable string, 
we can invoke the .join() method on storyWords.

Give the .join() method an argument of an empty space character (' ') 
to separate each array element with a space in the string.

Place the .join() method invocation as an argument of a console.log() 
statement to log the final story to the console.
*/

console.log(storyWords.join(' '));
