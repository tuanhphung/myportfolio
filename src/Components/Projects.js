import React from "react";

import "../css/Projects.css";
import ProjectCard from "./ProjectCard";
import myprojects from "../myprojects";

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
          {myprojects.map((project) => (
            <ProjectCard project={project} />
          ))}
        </motion.div>
      );
    }
    return (
      //return a normal div so anchor can scroll without getting stuck and stopping.
      <div className='projects-container'>
        <h1 className='section-titles'>Projects</h1>
        {myprojects.map((project) => (
          <ProjectCard project={project} />
        ))}
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
