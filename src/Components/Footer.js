import React from "react";

import "../css/Footer.css";
import myCV from "../assets/CV/TUAN_PHUNG_CV.pdf";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import AttachmentIcon from "@material-ui/icons/Attachment";

const Footer = () => {
  return (
    <section id='footer-section'>
      <div>tuanhphung21@gmail.com</div>
      <div className='footer-section__icon_links'>
        <ul>
          <li>
            <a href='https://www.linkedin.com/in/tuan-h-phung/' target='_blank'>
              <LinkedInIcon className=' social-links' fontSize='large' />
            </a>
          </li>
          <li>
            <a href='https://github.com/tuanhphung' target='_blank'>
              <GitHubIcon className=' social-links' fontSize='large' />
            </a>
          </li>
          <li>
            <a href={myCV} download>
              <AttachmentIcon className='social-links' fontSize='large' />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
