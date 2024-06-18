import React from 'react';
import Nav from './components/nav';
import Intro from './components/intro/intro';
import Pro from './components/pro/pro';
import About from './components/about/about';
import Cont from './components/contact/cont';

function App() {
  return (
    <div className="App">
      <Nav />
      <section id="home">
        <Intro />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="pro">
        <Pro />
      </section>
      <section id="cont">
        <Cont />
      </section>
    </div>
  );
}

export default App;
