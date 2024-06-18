import React,{useEffect} from 'react';
import './pro.css';
import roadassist from '../../assets/ASSIST2.png';
import addr from '../../assets/img.jpg';
import nike from '../../assets/nike.jpeg';
import amazon from '../../assets/amazon.jpg';
import rock from '../../assets/rock.jpg';
import id from '../../assets/id.jpg';
import car from '../../assets/car.png'
const Pro = () => {
  useEffect(() => {
    // Refresh the page or perform any other setup logic
    
  }, []);
  const navigateToRoadAssist = () => {
    window.open('http://road-assist-2.vercel.app', '_blank');
  };

  const navigateToAmazon = () => {
    window.open('https://parveennavas.github.io/amazon/', '_blank');
  };
  
  const navigateToAddr = () => {
    window.open('https://contact-book-phi.vercel.app/contacts', '_blank');
  };
  
  const navigateToNike = () => {
    window.open('https://www.figma.com/design/XTxgKZxLmg6agE3Fm7szOJ/Nike-shoe-website?node-id=0-1&t=yR40Zwm53qm7zHny-1', '_blank');
  };
  
  const navigateToRock = () => {
    window.open('https://parveennavas.github.io/project/', '_blank');
  };
  const navtoID=()=>{
    window.open('https://www.figma.com/design/4ZAaMtikPxxgVPTCu52Fix/ID-Card?node-id=0-1&t=GCEAcL641JWSjxwu-1');
  };
  const navtologin=()=>{
    window.open('https://www.figma.com/design/kyIzcmvb5Jn7WoXhiC7QAJ/Login-Page?node-id=0-1&t=TjUsVbapQw5IbDXi-1');
  };
  const navtocar=()=>{
    window.open('https://www.figma.com/design/SZfjY2sHao7tD92fa4eqC1/3D-Carousel-Slider?node-id=0-1&t=kOGZWy3SP7lcGEwY-1');
  };
  return (
    <div className='procontent'>
      <div className="images">
        <div className="project-item" onClick={navigateToRoadAssist}>
          <img src={roadassist} alt="Road Assist" className="proimg" />
          <div className="overlay">
            <span className="project-description">
              <span className="view-link">ROAD ASSIST WEBSITE</span><br />
              A fullstack website to locate nearby pumps and request fuel delivery.<br />
              Tech Stacks: React, TailwindCSS, Supabase, OpenStreetMap.
            </span>
            <span className="view-link">Click to view</span>
          </div>
        </div>
        
        <div className="project-item" onClick={navigateToAddr}>
          <img src={addr} alt="Contact Book" className="proimg" />
          <div className="overlay">
            <span className="project-description">
              <span className="view-link">CONTACT BOOK</span><br />
              Contact Book in which you can add contacts, their profile photo, and you can view, delete, or edit them.<br />
              Tech Stacks: Angular, Javascript, HTML, CSS.
            </span>
            <span className="view-link">Click to view</span>
          </div>
        </div>

        <div className="project-item" onClick={navigateToAmazon}>
          <img src={amazon} alt="Amazon Clone" className="proimg" />
          <div className="overlay">
            <span className="project-description">
              <span className="view-link">AMAZON CLONE WEBSITE</span><br />
              An Amazon clone frontend website built using HTML, CSS, JS.<br />
            </span>
            <span className="view-link">Click to view</span>
          </div>
        </div>

        <div className="project-item" onClick={navigateToRock}>
          <img src={rock} alt="Rock Paper Scissors" className="proimg" />
          <div className="overlay">
            <span className="project-description">
              <span className="view-link">ROCK PAPER SCISSORS</span><br />
              Rock Paper Scissors game with Computer.<br />
              Tech Stacks: HTML, CSS, JS.
            </span>
            <span className="view-link">Click to view</span>
          </div>
        </div>
      </div>
      
      <p className='head'><span className='yello'>WEB</span> Based Projects</p>
      <hr></hr>
      
      <div className="images">
        <div className="project-item" onClick={navigateToNike}>
          <img src={nike} alt="Nike" className="proimg1" />
          <div className="overlay">
            <span className="project-description">
              <span className="view-link">NIKE SHOE WEBSITE DESIGN IN FIGMA</span><br />
              UI for Nike Shoe Website with Prototype.<br />
              Tech Stacks: Figma.
            </span>
            <span className="view-link">Click to view</span>
          </div>
        </div>

        <div className="project-item" onClick={navtologin}>
          <img src={addr} alt="Contact Book" className="proimg1" />
          <div className="overlay">
            <span className="project-description">
              <span className="view-link">LOGIN UI</span><br />
             Log In Page UI with Prototype.<br />
              Tech Stacks: Figma
            </span>
            <span className="view-link">Click to view</span>
          </div>
        </div>

        <div className="project-item" onClick={navtocar}>
          <img src={car} alt="Amazon Clone" className="proimg1" />
          <div className="overlay">
            <span className="project-description">
              <span className="view-link">3D Carrousel Website</span><br />
              A UI design with 3D Carrousel for a Fruit Drink Company.
             <br />
            </span>
            <span className="view-link">Click to view</span>
          </div>
        </div>
        <div className="project-item" onClick={navtoID}>
          <img src={id} alt="Amazon Clone" className="proimg1" />
          <div className="overlay">
            <span className="project-description">
              <span className="view-link">Identity Card UI</span><br />
              Tech Stack:Figma<br />
            </span>
            <span className="view-link">Click to view</span>
          </div>
        </div>
      </div>
      
      <p className='head'><span className='yello'>UI/UX</span> Based Projects</p>
    </div>
  );
};

export default Pro;
