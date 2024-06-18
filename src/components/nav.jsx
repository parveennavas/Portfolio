import React from 'react';
import './nav.css';
import { Link } from 'react-scroll';
import logo from '../assets/logo.jpg';
import CallIcon from '@mui/icons-material/Call';

const Nav = () => {
  
  // const handleProjectsClick = () => {

  //   // Reload the page when "Projects" is clicked
  //   window.location.reload();
  // };

  return (
    <nav className='navbar'>
      <img src={logo} alt="" className="logo" />
      <div className="desktopMenu">
        <Link className="desktopMenuListItem" to="home" smooth={true} duration={500}>Home</Link>
        <Link className="desktopMenuListItem" to="about" smooth={true} duration={500}>About</Link>
        <Link
          className="desktopMenuListItem"
          to="pro"
          smooth={true}
          duration={500}
          
        >
          Projects
        </Link>
        <Link className="desktopMenuListItem" to="portfolio" smooth={true} duration={500}>Portfolio</Link>
      </div>
      <Link to="cont">
        <button className="Contact">
          <CallIcon className="callicon" />
          Contact Me
        </button>
      </Link>
    </nav>
  );
}

export default Nav;
