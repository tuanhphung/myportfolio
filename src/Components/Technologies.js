import React from "react";

import "../css/Technologies.css";
import cssicon from "../assets/icons/css.svg";
import htmlicon from "../assets/icons/html.svg";
import jsicon from "../assets/icons/js.svg";
import reacticon from "../assets/icons/react.svg";
import reduxicon from "../assets/icons/redux.svg";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Technologies = () => {
  const icons = [htmlicon, cssicon, jsicon, reacticon, reduxicon];
  const { ref, inView } = useInView({ threshold: 0 });

  //framer-motion variant
  const techVariants = {
    hidden: { x: "-100vw" },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 80,
      },
    },
  };

  // render icons
  const renderIcons = (iconlist) => {
    return iconlist.map((icon, index) => {
      return (
        <motion.li whileHover={{ scale: 1.5 }} key={index}>
          <img className='technologies-icons' src={icon} />
        </motion.li>
      );
    });
  };

  // Render component if it is within view
  const isInView = () => {
    if (inView) {
      return (
        <motion.div
          variants={techVariants}
          initial='hidden'
          animate='visible'
          className='container'
        >
          <ul className='technologies-list'>{renderIcons(icons)}</ul>
        </motion.div>
      );
    }
    return (
      <div
        variants={techVariants}
        initial='hidden'
        animate='visible'
        className='container'
      >
        <ul className='technologies-list'>{renderIcons(icons)}</ul>
      </div>
    );
  };

  return (
    <section id='technologies-section' ref={ref}>
      {isInView()}
    </section>
  );
};

export default Technologies;
