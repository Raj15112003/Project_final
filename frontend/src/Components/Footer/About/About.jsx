import React from 'react';
import f1 from '../../Assets/images/f1.png';
import f2 from '../../Assets/images/f2.png';
import f3 from '../../Assets/images/f3.png';
import f4 from '../../Assets/images/f4.png';
import f5 from '../../Assets/images/f5.png';
import f6 from '../../Assets/images/f6.png';
import a3 from '../../Assets/images/a3.png';
import './About.css'; // Import your CSS file

const About = () => {
  return (
    <div className='about'>
      <section id="page-header" className="about-header">
        <h2>#Knowme</h2>
        <p>I am Mysterious! Wanna know me.</p>
      </section>
    
      <section id="about-head" className="section-p1">
        <img src={a3} alt="" />
        <div>
          <h2>Who am I?</h2>
          <p>I am College Student.</p>
          <p>I am an Intern.</p>
          <p>Web Development is my Passion.</p>
          <p>I am Raj Shukla.</p>
          <p>The Founder of Boosha.</p>
          <p>Currently Handling all the work by myself.</p>
          <br/><br/>
        </div>
      </section>

      {/* Add the marquee container */}
      <div className="marquee-container">
        {/* Wrap the text content inside the marquee */}
        <div className="marquee-content">
          Want to know more about me. Join me
        </div>

      <section id="feature" className="section-p1">
        <div className="f1-box">
          <img src={f1} alt="" />
          <h6>Free Shipping</h6>
        </div>
        <div className="f1-box">
          <img src={f3} className="fship" alt="" />
          <h6>Save Money</h6>
        </div>
        <div className="f1-box">
          <img src={f5} className="fship" alt="" />
          <h6>Happy Sell</h6>
        </div>
        <div className="f1-box">
          <img src={f2} className="fship" alt="" />
          <h6>Online Orders</h6>
        </div>
        <div className="f1-box">
          <img src={f4} className="fship" alt="" />
          <h6>Promotions</h6>
        </div>
        <div className="f1-box">
          <img src={f6} className="fship" alt="" />
          <h6>Support</h6>
        </div>
      </section>

      
      </div>
    </div>
  );
}

export default About;
