let openBtn = document.querySelector('.bi-list');

let closeBtn = document.querySelector('.bi-x-lg');
let menuBlc = document.querySelector('.navbar__menu')


openBtn.addEventListener('click',()=>{
    openBtn.classList.toggle('hide');
    closeBtn.classList.toggle('hide');
    menuBlc.classList.toggle('hidden');
});

closeBtn.addEventListener('click',()=>{
    closeBtn.classList.toggle('hide');
    openBtn.classList.toggle('hide');
    menuBlc.classList.toggle('hidden');
});



const templateElement = document.getElementById('templateHB');
const templateSource = templateElement.innerHTML;
const template = Handlebars.compile(templateSource);

const context = {
  subtitle: "Welcome",
  title: "Web Development Portfolio Projects",
  body: "Hi, I’m  Aukse or you can find me in Git Hub as @ad-run. I’m interesting in web development and design and want to become a front end developer. This HTML CSS JavaScrip Responsive Website is my playground and I’m currently learning in Codecademy. I’m looking to collaborate with Front End developers on Web Pages. Front End Developer Roadmap is so exiting and intresting. Here you can find some projects, which I made and still doing in my learning way.",
  button: "Services",
  projects: [
    {
      image: "src/images/Sleeping Debt/sleeping.jpeg",
      label: "JAVASCRIPT SYNTAX",
      name: "Sleep Debt Calculator",
      description: "Did you know that giraffes sleep 4.6 hours a day? We humans need more than that. If we don’t sleep enough, we accumulate sleep debt. In this project we’ll calculate if you’re getting enough sleep each week using a sleep debt calculator.The program will determine the actual and ideal hours of sleep for each night of the last week.Finally, it will calculate, in hours, how far you are from your weekly sleep goal.",
      tasks: "",
      link: "SleepDebtCalculator/sleep-debt-calculator.html",
      video: "",
      finished: false,
      progress: 'Under contruction...',
      progressIcon: ''
      /*progressIcomLink: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hourglass-split" viewBox="0 0 16 16">
      <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z"/>
    </svg>*/

    },
  
    {
      image: "src/images/Rock Paper Scissors/rockpaperscissors.jpeg",
      label: "JAVASCRIPT SYNTAX",
      name: "Rock Paper Scissors",
      description: 'Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins. The possible outcomes are: Rock destroys scissors. Scissors cut paper. Paper covers rock. If there is a tie, then the game ends in a draw.',
      tasks: "",
      link: "RockPaperScissors/index.html",
      video: "",
      finished: false,
      progress: 'Under contruction...',
      progressIcon: ''
    },
    {
      image: "src/images/mealMaker/meal_maker_logo.jpeg",
      name: "Meal maker",
      description: "A home restaurant each day shows Today’s Special meal and dessert. Every day is different. Do you want to check it out?",
      tasks: "",
      link: "MealMaker/meal-maker.html",
      video: "",
      finished: true,
      progress: 'Progress under contruction...',
      progressIcon: '<i class="bi bi-hourglass-split"></i>'
    },
    {
      image: "src/images/Chore Door/door.jpeg",
      label: "BUILDING INTERACTIVE JAVASCRIPT WEBSITES",
      name: "Chore Door",
      description: "Your mission is to open all of the doors without running into the ChoreBot. If you manage to avoid the ChoreBot until you open the very last door, you win!",
      tasks: "",
      link: "Chore Door/index.html",
      video: "", 
      finished: true,
      progress: 'Progress under contruction...',
      progressIcon: '<i class="bi bi-hourglass-split"></i>'
    },
    {
      image: "src/images/Piano/pianokeys.jpeg",
      label: "DOM EVENTS WITH JAVASCRIPT",
      name: "Piano Player",
      description: "An Interactive Piano Game. Follow the song below to play the piano.",
      tasks: "",
      link: "Piano Player/index.html",
      video: "",
      finished: true,
      progress: 'Progress under contruction...',
      progressIcon: '<i class="bi bi-hourglass-split"></i>'
    },
  ],
};
const compiledHtml = template(context);
const projectText = document.getElementById('information');
projectText.innerHTML = compiledHtml;
