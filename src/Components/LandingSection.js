import React from "react";

import "../css/LandingSection.css";
import myCV from "../assets/CV/Phung_Tuan_CV.pdf";
//Material UI icons
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import AttachmentIcon from "@material-ui/icons/Attachment";
import ArrowDownIcon from "../assets/icons/arrow_down.svg";
import ArrowDDIcon from "../assets/icons/arrow-double-down.svg";

import { motion, useSpring } from "framer-motion";

const LandingSection = () => {
  // framer-motion animations
  const containerVariants = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        delay: 0.5,
        when: "beforeChildren",
      },
    },
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <section id='landing-section'>
      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        className='landing-section__title'
      >
        <h1 className='main-title'>
          Hi, I'm <strong>Tuan Phung</strong>
        </h1>
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        className='landing-section__icon_links'
      >
        <motion.ul variants={listVariants}>
          <motion.li variants={itemVariants}>
            <a href='https://www.linkedin.com/in/tuan-h-phung/' target='_blank'>
              <LinkedInIcon className='landing-section__icon' fontSize='large' />
              <div>LinkedIn</div>
            </a>
          </motion.li>
          <motion.li variants={itemVariants}>
            <a href='https://github.com/tuanhphung' target='_blank'>
              <GitHubIcon className='landing-section__icon' fontSize='large' />
              <div>GitHub</div>
            </a>
          </motion.li>
          <motion.li variants={itemVariants}>
            <a href={myCV} download>
              <AttachmentIcon className='landing-section__icon' fontSize='large' />
              <div>CV</div>
            </a>
          </motion.li>
        </motion.ul>
      </motion.div>
      <motion.a
        variants={itemVariants}
        initial='hidden'
        animate='visible'
        transition={{ delay: 3.5 }}
        href='#technologies-section'
        className='arrow-down-container'
      >
        <motion.img
          whileHover={{
            scale: 1.5,
            transition: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 0.5,
            },
          }}
          src={ArrowDDIcon}
          className='arrow-down'
        />
      </motion.a>
      <section id='anchor'></section>
    </section>
  );
};

export default LandingSection;
