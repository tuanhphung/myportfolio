import React from "react";

import { motion } from "framer-motion";

const ProjectCard = (props) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} className='project-card'>
      <div className='project-desc'>
        <h3 className='project-desc__title'>{props.title}</h3>
        <hr />
        <p>{props.children}</p>
        <div className='project-desc__links'>
          <ul>
            <li>
              <a href={props.githublink} target='_blank'>
                GitHub
              </a>
            </li>
            <li>
              <a href={props.demolink} target='_blank'>
                Demo
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='project-desc__img'>
        <img src={props.img} />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
