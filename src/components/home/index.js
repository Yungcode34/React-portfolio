import React from 'react';
import './index.scss'
import About from  '../about/index'
import Contact from '../contact/index'
import Hero from '../hero/index'
import Work from '../work/index'
import Footer from '../footer/index'
function Home() {
  return (
    <div className="Home">
      <Hero/>
      <Footer/>
      <About/>
      <Contact/>
      <Work/>
    </div>
  );
}

export default Home;
