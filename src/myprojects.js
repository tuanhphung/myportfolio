import portfolioimg from "./assets/projectimgs/portfolioSS.jpg";

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
          <li>Javascript / React</li>
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
];

export default myprojects;
