import '.././styles/MainPage.css';
import React from "react";
import NavBar from '.././components/NavBar';
import FigmaLogo from '.././assets/figma.svg';
import Line from '.././components/Line';
import Footer from '.././components/Footer';
import { Link, Element } from 'react-scroll';

function MainPage() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div class="row hero-row d-flex align-items-center">
        <div class="col col-12 ">
          <h1 class="name col-3">
             elisa ahlbäck
          </h1>
        </div>
      </div>

      <div className="about-me-rectangle">
      <div className="container-fluid h-100">
      <div className="row h-100">
        <div className="col-6 about-me-left d-flex justify-content-center align-items-center">
        <h1 class="about-me-left-text">
            A software engineering graduate, with a passion for front-end development and UX.
          </h1>
        </div>
        <div className="col-6 about-me-right">
          <div class="row">
            <div class="col">
              <p>A half-English, half-Swedish creative thinker, passionate about design and creating things?. After growing up in Spain, I moved to Sweden to pursue a Software Engineering & Management bachelors degree, which I’m currently in the second year.</p><br/>
              <p>I strive to continuously improve and gain further experience, as well as enjoying learning from others around me, being easily adaptable to a team or individual work environments.</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
        
      

      <div class="row projects-row">
        <div class="row project-row">
          <div class="col col-12 d-flex justify-content-left">
            <h2 id="projects-title">
              Projects
            </h2>
          </div>
        </div>

        <div class="row">
          <Line></Line>
        </div>
        


  
    </div>
    <Footer></Footer>
    </div>
  );
};

export default MainPage;
