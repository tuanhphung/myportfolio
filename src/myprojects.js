import portfolioimg from "./assets/projectimgs/portfolioSS.jpg";
import budgetappimg from "./assets/projectimgs/budgetappSS.jpg";

const myprojects = [
  {
    title: "Portfolio",
    description: (
      <div>
        <p>
          This current porfolio is a remake of my old portfolio, which was built on a
          boilerplate.
          <br />
          After grasping the fundamentals of React, I decided that it was a good time to
          rebuild my portfolio from the start without using any boilerplates.
          <br />I felt it was appropiate for me, doing front-end development, to use parts
          of what I have learnt from React and apply it on my own personal website.
        </p>
        <p>
          This is an ongoing project for me, and I will continue to apply more as I learn
          new skills.
        </p>
      </div>
    ),
    technologies: (
      <div>
        <p>Technologies Used :</p>
        <ul>
          <li>JavaScript / React</li>
          <li>CSS</li>
          <li>Framer-Motion</li>
          <li>React-Intersection-Observer </li>
        </ul>
      </div>
    ),
    githublink: "https://github.com/tuanhphung/myportfolio",
    demolink: "https://tuanhphung.netlify.app/",
    img: portfolioimg,
  },
  {
    title: "Budget App",
    description: (
      <div>
        <p>
          A simple app used to track your budget.
          <br />
          You can enter the amount and description of income and expenses. The budget
          amount is dynamic so that it calculates and updates as its expense and incomes
          is added or removed.
        </p>
        <p>
          This was built when learning vanilla JavaScript JavaScript around the Model View
          Controller model (MVC), to seperate each sections of the code to handle
          logic(Model), visually display data(View) and handle event listeners(Controller)
        </p>
        <p>
          I aim to rebuild this project using the React in the future, as I have now
          learnt the framework
        </p>
      </div>
    ),
    technologies: (
      <div>
        <ul>
          <li>JavaScript</li>
          <li>CSS</li>
          <li>HTML</li>
        </ul>
      </div>
    ),
    githublink: "https://github.com/tuanhphung/BudgetyApp",
    demolink: " ",
    img: budgetappimg,
  },
];

export default myprojects;
