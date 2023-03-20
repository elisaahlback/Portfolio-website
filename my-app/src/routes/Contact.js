import '.././styles/MainPage.css';
import React from "react";
import NavBar from '.././components/NavBar';
import Line from '.././components/Line';
import Footer from '.././components/Footer';

function Contact() {
  return (
    <div className="App">
        <NavBar></NavBar>

        <div class="row project-row">
            <div class="col col-12 d-flex justify-content-left">
            <h2 id="projects-title">
                Projects
            </h2>
            </div>
        </div>
        <Line></Line>

        <div class="row">
            <div class="col col-7">

            </div>

            <div class="col col-5">
                <div class="row">
                    <div class="col col-1 justify-content-right">
                        <a
                        href=""
                        ><img src=".././assets/"/></a>
                    </div>
                    <div class="col">

                    </div>
                </div>

                <div class="row">
                    <div class="col col-1 justify-content-right">

                    </div>
                    <div class="col">

                    </div>
                </div>

                <div class="row">
                    <div class="col col-1 justify-content-right">

                    </div>
                    <div class="col">

                    </div>
                </div>
            </div>
        </div>

        <Footer></Footer>
    </div>
  );
};

export default Contact;