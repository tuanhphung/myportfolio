import React from "react";

import "../css/Projects.css";
import portfolioimg from "../assets/projectimgs/portfolioSS.jpg";
import ProjectCard from "./ProjectCard";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const { ref, inView } = useInView({ threshold: 0 });

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.5,
        when: "beforeChildren",
      },
    },
  };

  const isInView = () => {
    if (inView) {
      return (
        <motion.div
          variants={sectionVariants}
          initial='hidden'
          animate='visible'
          className='projects-container'
        >
          <h1 className='section-titles'>Projects</h1>
          <ProjectCard title='Portfolio' img={portfolioimg}>
            <p>
              This current porfolio was a remake of my old portfolio, which was built on a
              boilerplate.
              <br />
              After grasping the fundamentals of React, I decided that it was a good time
              to rebuild my portfolio from the start without using any boilerplates.
              <br />I felt it was appropiate for me, doing front-end development, to use
              parts of what I have learnt from React and apply it on my own personal
              website.
            </p>
            <p>
              This is an ongoing project for me, and I will continue to apply more as I
              learn new skills.
            </p>
            <p>
              Technologies Used :
              <ul>
                <li>Javascript / React</li>
                <li>CSS</li>
                <li>Framer-Motion</li>
                <li>React-Intersection-Observer </li>
              </ul>
            </p>
          </ProjectCard>
        </motion.div>
      );
    }
    return (
      //return a normal div so anchor can scroll without getting stuck and stopping.
      <div className='projects-container'>
        <h1 className='section-titles'>Projects</h1>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    );
  };

  return (
    <section id='projects-section' ref={ref}>
      {isInView()}
    </section>
  );
};

export default Projects;
