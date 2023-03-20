import './styles/App.css';
import React from "react";
import NavBar from './components/NavBar';

function App() {
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
        <img id="profile-pic" src={require('./assets/profile.png')} />
        </div>

        <div class="col col-7">

          <div class="row">
            <div class="col">
              <h2>Hi, I'm Elisa!</h2>
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
              <img id="location-icon" src={require('./assets/location.png')} />
              <p><b>Gothenburg, Sweden</b></p>
            </div>
          </div>

        </div>
      </div>

        <div class="projects">
          <h2>
            Projects
          </h2>

        </div>

        <div class="contact">
          <h2>
            Contact Me <br/>
          </h2>
          <p>
            <a 
            href="https://www.linkedin.com/in/elisa-ahlbäck-norris-1102991b6"
            target="_blank"
            > Linkedin
            </a>
            <br/>
            <a 
            href="https://github.com/elisaahlback"
            target="_blank"
            > Github
            </a>
            <br/>
            {/* <ButtonMailto label="Write me an E-Mail" mailto="mailto:no-reply@example.com" /> */}
          </p>
        </div>
    </div>
  );
}

export default App;
