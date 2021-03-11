import React from "react";

import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} className='project-card'>
      <div className='project-desc'>
        <h3 className='project-desc__title'>{project.title}</h3>
        <hr />
        {project.description}
        {project.technologies}
        <div className='project-desc__links'>
          <ul>
            <li>
              <a href={project.githublink} target='_blank'>
                GitHub
              </a>
            </li>
            <li>
              <a href={project.demolink} target='_blank'>
                Demo
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='project-desc__img'>
        <img src={project.img} />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
