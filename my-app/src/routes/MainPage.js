import '.././styles/MainPage.css';
import React from "react";
import NavBar from '.././components/NavBar';
import FigmaLogo from '.././assets/figma.svg';
import Line from '.././components/Line';
import Footer from '.././components/Footer';

function MainPage() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div class="row hero-row d-flex align-items-center">
        <div class="col col-7 ">
          <h1 class="hero">
            A software engineering student, with a passion for front-end development and UX.
          </h1>
        </div>
      </div>
        
      <div class="row aboutme-row d-flex align-items-center">
        <div class="col col-5">
        <img id="profile-pic" src={require('.././assets/profile.png')} />
        </div>

        <div class="col col-7">

          <div class="row">
            <div class="col">
              <h3 id="intro-title">Hi, I'm Elisa!</h3>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <p>A half-English, half-Swedish creative thinker, passionate about design and creating things?. After growing up in Spain, I moved to Sweden to pursue a Software Engineering & Management bachelors degree, which I’m currently in the second year.</p><br/>
              <p>I strive to continuously improve and gain further experience, as well as enjoying learning from others around me, being easily adaptable to a team or individual work environments.</p>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <img id="location-icon" src={require('.././assets/location.png')} />
              <p><b>Gothenburg, Sweden</b></p>
            </div>
          </div>

        </div>

        <div class="container-fluid">
        <div class="row tools-row d-flex align-items-center">
        <div class="col col-12 d-flex justify-content-center">
          <div class="d-flex justify-content-center" id="toolbox">
            <div class="row tools-row d-flex align-items-center justify-content-center">
              
              <div class="col col-1 d-flex justify-content-center">
                <img id="tool-icon" src={require('.././assets/html.png')}></img>
              </div>
              
              <div class="col col-1 d-flex justify-content-center">
                <img id="tool-icon" src={require('.././assets/css.png')}></img>
              </div>

              <div class="col col-1 d-flex justify-content-center">
                <img id="tool-icon" src={require('.././assets/javascript.webp')}></img>
              </div>

              <div class="col col-1 d-flex justify-content-center">
                <img id="tool-icon" src={require('.././assets/java.png')}></img>
              </div>

              <div class="col col-1 d-flex justify-content-center">
                <img id="tool-icon" src={require('.././assets/vue.png')}></img>
              </div>

              <div class="col col-1 d-flex justify-content-center">
                <img id="tool-icon" src={require('.././assets/bootstrap.png')}></img>
              </div>

              <div class="col col-1 d-flex justify-content-center">
                <img id="tool-icon" src={require('.././assets/git.png')}></img>
              </div>

              <div class="col col-1 d-flex justify-content-center">
                <img id="tool-icon" src={FigmaLogo} alt="Figma Logo"></img>
              </div>

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
