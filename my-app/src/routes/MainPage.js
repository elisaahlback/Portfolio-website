import '.././styles/MainPage.css';
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom"; // to get the URL to scroll down to about me section
import NavBar from '.././components/NavBar';
import Footer from '.././components/Footer';
import { Element, scroller } from 'react-scroll';
import { Link } from 'react-router-dom';
import projectData from '../data/projectData';
import ContactPage from '../components/ContactPage';
import MainProjectCard from '.././components/MainProjectCard';


const MainPage = () => {
  
  const location = useLocation();

  //const pdfURL = "./assets/TechCV_ElisaAhlback.pdf";
  
  useEffect(() => {
  if (location.hash) {
    const section = location.hash.replace("#", "");
    setTimeout(() => {
      scroller.scrollTo(section, {
        duration: 0,
        delay: 0,
        smooth: "easeInOutQuart"
      });
    }, 100);
  }
}, [location]);


  // const openPdf = () => {
  //     window.open(pdfURL, "_blank");
  //     console.log("hi");
  //   }
  

  return (
    <div className="App">
      <NavBar />
      <div className="row d-flex align-items-center hero-full-screen">
        <div className="col">
          <h1 className="name col-3">
             elisa ahlbäck
          </h1>
        </div>
      </div>

      <Element name="aboutme" className="aboutme">
        <div className="container-fluid h-100">
          <div className="row h-100">
            {/* <div className="col-6 about-me-left">
              <div className="row">
                <div className="col about-me-left-text">
                  Hi there! I'm Elisa, a half-English, half-Swedish detail-oriented creative thinker, passionate about design and trying new things.
                  <br/> After growing up in Spain, I moved to Sweden to pursue a Software Engineering & Management bachelors degree, a conjoined program between Chalmers and Gothenburg University, from which I graduated in May 2024.
                  <br/><br /> I'm driven by a love for problem-solving and crafting visually engaging, user-friendly interfaces. Known for a collaborative mindset and adaptability - I strive to continuously improve and gain further experience, as well as enjoy learning from others around me. Excited to bring fresh ideas and a positive attitude to a dynamic team!
                  <br/>
                  <img
                    src={require('.././assets/CVicon.png')}
                    alt="CV icon"
                    style={{ cursor: 'pointer' }}
                    id="cv_icon"
                    onClick={() => window.open('.././assets/TechCV_ElisaAhlback.pdf', '_blank')}
                  />


                </div>
              </div>
            </div> */}

              <div className="col-6 about-left d-flex justify-content-center align-items-center">
                <h2 className="about-greeting">Hi there!</h2>

                  <p className="about-intro">
                    I'm Elisa - A half English, half Swedish creative thinker passionate about design and trying new things.
                  </p>

                  <p className="about-background">
                    After growing up in Spain, I moved to Sweden to pursue a <strong>Software Engineering & Management</strong> degree at Chalmers and Gothenburg University, graduating in May 2024.
                  </p>

                  <p className="about-values">
                    I'm driven by a love for <strong>problem-solving</strong> and crafting visually engaging, user-friendly interfaces. Known for my <strong>collaborative mindset</strong> and adaptability, I strive to continuously improve and learn from those around me.
                  </p>

                  <p className="about-cta">
                    Excited to bring fresh ideas and a positive attitude to a dynamic team!
                  </p>
                  <a href="/TechCV_ElisaAhlback.pdf" target="_blank" rel="noopener noreferrer">
                    <img
                      src={require('.././assets/CVicon.png')}
                      alt="CV icon"
                      style={{ cursor: 'pointer' }}
                      id="cv_icon"
                    />
                  </a>
                  
                  
                </div>


            <div className="col-6 about-me-right d-flex justify-content-center align-items-center">
              <h1 className="about-me-right-text">
                A software engineering graduate, with a passion for UI & UX
              </h1>
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
              {projectData.slice(0, 5).map((project) => (
                <MainProjectCard
                  key={project.projectid}
                  title={project.title}
                  projectid={project.projectid}
                  image1={project.images[0]?.url}
                  image2={project.images[1]?.url}
                />
              ))}
            </div>

          </div>
          <div className="row">
            <div className="col d-flex align-items-center justify-content-center">
              <a href="/Projects" className="more-projects-button">View more</a>
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
