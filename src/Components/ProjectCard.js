import React from "react";

import { motion } from "framer-motion";

const ProjectCard = () => {
  return (
    <motion.div whileHover={{ scale: 1.2 }} className='project-card'>
      <div className='project-desc'>
        <h3 className='project-desc__title'>Project Name</h3>
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Accumsan lacus vel facilisis
          volutpat. Risus feugiat in ante metus dictum at tempor commodo. Sed augue lacus
          viverra vitae congue eu consequat ac felis. Dui id ornare arcu odio. Gravida
          arcu ac tortor dignissim convallis aenean et tortor. Viverra suspendisse potenti
          nullam ac tortor vitae. Viverra tellus in hac habitasse platea. Sit amet nisl
          purus in mollis nunc sed. Ipsum a arcu cursus vitae congue mauris rhoncus
          aenean. At risus viverra adipiscing at in tellus integer. Adipiscing vitae proin
          sagittis nisl rhoncus. Faucibus et molestie ac feugiat sed. Turpis massa sed
          elementum tempus egestas sed sed risus. Interdum posuere lorem ipsum dolor sit
          amet consectetur adipiscing. Imperdiet nulla malesuada pellentesque elit.
        </p>
        <div className='project-desc__links'>
          <ul>
            <li>
              <a>Tech</a>
            </li>
            <li>
              <a>GitHub</a>
            </li>
            <li>
              <a>Demo</a>
            </li>
          </ul>
        </div>
      </div>
      <div className='project-desc__img'>image placeholder for project SS</div>
    </motion.div>
  );
};

export default ProjectCard;
