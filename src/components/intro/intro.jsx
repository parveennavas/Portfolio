import React, { useEffect } from 'react';
import './intro.css';
import bg from '../../assets/bg11.jpg';
import { Link } from 'react-scroll';
import Typed from 'typed.js';

const Intro = () => {
  useEffect(() => {
    const typed = new Typed('#element', {
      strings: ['UI/UX designer', 'Web Developer'],
      typeSpeed: 100,
      backSpeed:100,
      loop: true, // Optional: loop through the strings
    });

    return () => {
      typed.destroy(); // Clean up the Typed instance
    };
  }, []);

  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="im">
          I'm <span className="introname">Parveen</span>
          <br />
          <span id="element">UI/UX designer</span>
        </span>
        <p className="intropara">
          Passionate about web development, UI/UX design, and coding, creating
          visually appealing, user-friendly, and responsive digital experiences.
          <br />
          I love bringing innovative ideas to life and enhancing user
          interactions with technology.
        </p>
        <Link to="cont" smooth={true} duration={500} >
          <button className="btn">Hire Me</button>
        </Link>
        {/* <button className="social">
        <box-icon type='logo' name='instagram' className="icons"></box-icon>
        </button> */}
      </div>
      <img src={bg} alt="" className="bg" />
    </section>
  );
};

export default Intro;
