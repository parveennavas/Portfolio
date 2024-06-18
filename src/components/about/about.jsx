import React from 'react';
import './about.css';
import image from '../../assets/aboutimg1.jpg';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';

const About = () => {
  return (
    <div className='about'>
      <div className='abtcont'>
        <div className='abouthead'>
          About<span className='me'>Me</span>
        </div>
        <div className="contentabt">
          I am a student of TKM College Of Engineering, Kollam, Kerala pursuing BTech in Computer Science.<br />
          Currently working as a Software Engineer Intern at Hartree Research Atlanta.<br></br>
          I am also a member of ACM Web Team
        </div>
        <div className='icon'>
          <InstagramIcon className='icons' />
          <a href='https://www.linkedin.com/in/parveen-navas-0a915224b/' className='icons'>
            <LinkedInIcon />
          </a>
          <a href='https://github.com/parveennavas' className='icons'>
            <GitHubIcon />
          </a>
          <a href='https://www.linkedin.com/in/parveen-navas-0a915224b/' className='icons'>
            <MailOutlineIcon />
          </a>
        </div>
      </div>
      <img src={image} alt="" className="bgimg" />
    </div>
  );
}

export default About;
