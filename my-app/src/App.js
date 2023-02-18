import './App.css';
import React from "react";
import ButtonMailto from './modules/mail';

function App() {
  return (
    <div className="App">
        <h1>
          Hi! I'm Elisa 🤠
        </h1>
        <h2>
          Who am I?
        </h2>
        <p>
          A Software Engineering and Management student, with a passion for front-end development and user experience.
        </p>

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
