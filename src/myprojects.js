import portfolioimg from "./assets/projectimgs/portfolioSS.jpg";
import budgetappimg from "./assets/projectimgs/budgetappSS.jpg";
import youtubecloneimg from "./assets/projectimgs/youtubecloneSS.jpg";
import pianilistimg from "./assets/projectimgs/pianilist.jpg";

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
          <li>React.js</li>
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
          This was built when learning vanilla JavaScript around the Model View Controller
          model (MVC). This seperates each sections of the code to handle logic (Model),
          visually display data (View) and handle event listeners (Controller).
        </p>
        <p>
          I aim to refactor this project using the React framework in the future to apply
          what I know and to help me understand its effectiveness of using the framework
          to build apps over vanilla JS.
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
  {
    title: "YouTube Clone",
    description: (
      <div>
        <p>
          A clone of the video sharing platform YouTube, built using React, Redux, and the
          YouTube API.
        </p>
        <p>
          <p>
            My main focus for this project was utilising the functionality of the Redux
            library on a web application, and understand how components connect and use
            the Redux store.
          </p>
          I decided to test my knowledge of Redux by building an application that will
          manage state through action creators and reducers.
          <br />I decided that making a YouTube clone will be appropiate for this
          challenge, since the API will retrieve data that will be used in multiple
          components.
          <p>
            I wanted the app also to allow you to view your watch history and favourite
            videos.
            <br />
            Therefore using Redux will reduce the use of 'props drilling' in to
            components, and instead store all data in a centralised location where
            componenets can directly connect to.
          </p>
        </p>
      </div>
    ),
    technologies: (
      <div>
        <ul>
          <li>React</li>
          <li>YouTube API</li>
          <li>CSS</li>
          <li>React-Router</li>
          <li>Redux</li>
          <li>Redux-Thunk</li>
          <li>React-Redux</li>
          <li>Axios</li>
        </ul>
      </div>
    ),
    githublink: "https://github.com/tuanhphung/youtube-clone",
    demolink: "https://tuan-myyoutubeclone.netlify.app/",
    img: youtubecloneimg,
  },
  {
    title: "Pianilist",
    description: (
      <div>
        <p>
          <p>
            A React application that allows you to post piano music information and find
            piano sheets in one place.
          </p>
          <p>
            This project came about when my friend and myself started learning how to read
            and play piano through music sheets. We would often share piano music and
            sheets to eachother online, and would occasionally get confused which link to
            the sheets refer to which piano piece.
            <br />
            Therefore I wanted to make a simple web application where we can share piano
            music along with their piano sheets as entries that we can refer to.
          </p>
          <p>
            This application uses Redux to store certain states, and utilises Google's
            Firebase Realtime Database for CRUD operations. This allows the application to
            listen and dynamically update the list as the database updates.
            <br />
            It also features tags for each entry that can filter between free and paid
            sheets.
          </p>
        </p>
      </div>
    ),
    technologies: (
      <div>
        <p>Technologies Used :</p>
        <ul>
          <li>React.js</li>
          <li>Redux</li>
          <li>CSS</li>
          <li>Firebase Realtime Database & API</li>
          <li>React-Router</li>
          <li>React-Modal</li>
          <li>Framer-Motion</li>
        </ul>
      </div>
    ),
    githublink: "https://github.com/tuanhphung/Pianilist",
    demolink: "https://pianilist.netlify.app/",
    img: pianilistimg,
  },
];

export default myprojects;
