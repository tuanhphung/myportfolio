import React from "react";

import "../css/AboutMe.css";
import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";

const AboutMe = () => {
  const { ref, inView } = useInView({ threshold: 0 });

  const isInView = () => {
    if (inView) {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className='about-me__desc'
        >
          <h1 className='section-titles'>About Myself</h1>

          <div className='about-me__desc-content'>
            <p>
              An individual based in London with a passion for using web technologies to
              build products with user experience and functionality in mind.
            </p>
            <p>
              Front-end developer eager to continuously improve on my skillset by
              challenging myself, working diligently to solve problems until my goals are
              achieved.
            </p>
          </div>
        </motion.div>
      );
    }
  };

  return (
    <section id='about-me-section' ref={ref}>
      {isInView()}
    </section>
  );
};

export default AboutMe;
