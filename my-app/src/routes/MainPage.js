import '.././styles/MainPage.css';
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom"; // to get the URL to scroll down to about me section
import NavBar from '.././components/NavBar';
import Footer from '.././components/Footer';
import { Element, scroller } from 'react-scroll';
import { Link } from 'react-router-dom';
import projectData from '../data/projectData';
import ContactPage from '../components/ContactPage';


const MainPage = () => {
  
  const location = useLocation();

  const pdfURL = "./assets/TechCV_ElisaAhlback.pdf";
  

  useEffect(() => {
    // Check if the user came to the page with a hash in the URL (e.g., /#about-me)
    if(location.hash === "#aboutme") {
      // Delay the scroll until the component is fully rendered
      setTimeout(() => {
        scroller.scrollTo("aboutme", {
          duration: 0,
          delay: 0,
          smooth: "easeInOutQuart"
        });
      }, 100); // Wait for 100ms to ensure the page has rendered
    }
  }, [location]); // Watch for changes in the location to trigger scrolling

  useEffect(() => {
    // Check if the user came to the page with a hash in the URL (e.g., /#about-me)
    if(location.hash === "#contact") {
      // Delay the scroll until the component is fully rendered
      setTimeout(() => {
        scroller.scrollTo("contact", {
          duration: 0,
          delay: 0,
          smooth: "easeInOutQuart"
        });
      }, 100); // Wait for 100ms to ensure the page has rendered
    }
  }, [location]); // Watch for changes in the location to trigger scrolling

  const openPdf = () => {
      window.open(pdfURL, "_blank");
      console.log("hi");
    }
  

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

      <Element name="aboutme" className="aboutme">
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
                  Hi there! I'm Elisa, a half-English, half-Swedish detail-oriented creative thinker, passionate about design and trying new things.
                  <br/> After growing up in Spain, I moved to Sweden to pursue a Software Engineering & Management bachelors degree, a conjoined program between Chalmers and Gothenburg University, from which I graduated in May 2024.
                  <br/><br /> I'm driven by a love for problem-solving and crafting visually engaging, user-friendly interfaces. Known for a collaborative mindset and adaptability - I strive to continuously improve and gain further experience, as well as enjoy learning from others around me. Excited to bring fresh ideas and a positive attitude to a dynamic team!
                  <br/>
                  <img src={require('.././assets/CVicon.png')} alt="CV icon" onClick={openPdf()} style={{ cursor: 'pointer'}} id="cv_icon"/>

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
                    <Link to={`/Projects/${project.projectid}`} className="link project-item" key={project.projectid}>
                        {project.title}

                        {/* Top images */}
                        <div class="image-set bottom-left">
                          {project.images.map((image, index) => (
                            <img src={image.url} alt={image.title} key={index} />
                          ))}
                          {project.images.map((image, index) => (
                            <img src={image.url} alt={image.title} key={index} />
                          ))}
                        </div>

                        {/* Bottom images */}
                        <div class="image-set top-right">
                          {project.images.map((image, index) => (
                            <img src={image.url} alt={image.title} key={index} />
                          ))}
                          {project.images.map((image, index) => (
                            <img src={image.url} alt={image.title} key={index} />
                          ))}
                        </div>

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

      
      <Element name="contact" className="contact">
        <ContactPage></ContactPage>    
      </Element>
    

    <Footer></Footer>
    </div>
  );
};

export default MainPage;
