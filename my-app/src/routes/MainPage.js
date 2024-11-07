import '.././styles/MainPage.css';
import React, {useEffect} from "react";
import { useLocation } from "react-router-dom"; // to get the URL to scroll down to about me section
import NavBar from '.././components/NavBar';
import Footer from '.././components/Footer';
import { Element, scroller } from 'react-scroll';
import { Link } from 'react-router-dom';
import projectData from '../data/projectData';


const MainPage = ({project}) => {
  
  const location = useLocation();

  useEffect(() => {
    // Check if the user came to the page with a hash in the URL (e.g., /#about-me)
    if(location.hash === "#about-me-rectangle") {
      // Delay the scroll until the component is fully rendered
      setTimeout(() => {
        scroller.scrollTo("about-me-rectangle", {
          duration: 0,
          delay: 0,
          smooth: "easeInOutQuart"
        });
      }, 100); // Wait for 100ms to ensure the page has rendered
    }
  }, [location]); // Watch for changes in the location to trigger scrolling

  return (
    <div className="App">
      <NavBar />
      <div class="row d-flex align-items-center hero-full-screen">
        <div class="col">
          <h1 class="name col-3">
             elisa ahlbäck
          </h1>
        </div>
      </div>

      <Element name="about-me-rectangle" className="about-me-rectangle">
        <div className="container-fluid h-100">
          <div className="row h-100">
            <div className="col-6 about-me-left d-flex justify-content-center align-items-center">
              <h1 class="about-me-left-text">
                A software engineering graduate, with a passion for front-end development and UI&UX.
              </h1>
            </div>
            <div className="col-6 about-me-right">
              <div class="row">
                <div class="col about-me-right-text">
                  Hi there! I'm Elisa, a half-English, half-Swedish creative thinker, passionate about design, problem-solving and trying new things.
                  <br/> After growing up in Spain, I moved to Sweden to pursue a Software Engineering & Management bachelors degree, a conjoined program between Chalmers and Gothenburg University, from which I graduated in May 2024.
                  <br/>I strive to continuously improve and gain further experience, as well as enjoy learning from others around me, being easily adaptable to a team or individual work environments.
                  <br/><br/>Passionate and detail-oriented front-end designer with a software engineering degree, driven by a love for problem-solving and crafting visually engaging, user-friendly designs. Known for a collaborative mindset and adaptability, excited to bring fresh ideas and a positive attitude to a dynamic team.

                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>

      <div className="projects-row">
        <div className="container-fluid h-100">
          <div className="row">
            <div className="col d-flex justify-content-start projects-title">
              Projects
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="projects-block d-flex align-items-center justify-content-center flex-wrap">
                {projectData.map((project) => (
                    <Link to={`/Projects/${project.projectid}`} className="link project-item">
                        {project.title}
                    </Link>
                ))}
            </div>
          </div>
          <div className="row">
            <div className="col d-flex align-items-center justify-content-center">
              <a href="/Projects" class="more-projects-button">View more</a>
            </div>
          </div>
        </div>
      </div>  
      

    <Footer></Footer>
    </div>
  );
};

export default MainPage;
