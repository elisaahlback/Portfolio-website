import '.././styles/MainPage.css';
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // to get the URL to scroll down to about me section
import NavBar from '.././components/NavBar';
import Footer from '.././components/Footer';
import { Element, scroller } from 'react-scroll';
import projectData from '../data/projectData';
import ContactPage from '../components/ContactPage';
import MainProjectCard from '.././components/MainProjectCard';


const MainPage = () => {
  
  const location = useLocation();
  
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

  

  return (
    <div className="App">
      <NavBar />

      {/* Hero */}
      <div className="row d-flex align-items-center hero-full-screen">
        <div className="col">
          <h1 className="name">elisa<br/>ahlbäck</h1>
        </div>
      </div>

      {/* About Me */}
      <Element name="aboutme" className="aboutme">
        <div className="container-fluid h-100">
          <div className="row h-100">

            {/* Tagline (mobile only) */}
            <div className="col-12 about-me-right-sm d-block d-lg-none justify-content-center align-items-center">
              <h1 className="about-me-right-text-sm">
                A software engineering graduate, with a passion for UI & UX
              </h1>
            </div>


            {/* About text (always visible, full width on mobile, half on desktop) */}
            <div className="col-12 col-lg-6 about-left d-flex flex-column justify-content-center align-items-center">
              <h2 className="about-greeting">Hi there!</h2>

                <p className="about-intro">
                  I'm Elisa - a half English, half Swedish creative thinker passionate about design and trying new things.
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

          {/* Tagline (desktop only) */}
            <div className="col-6 about-me-right d-none d-lg-flex justify-content-center align-items-center">
              <h1 className="about-me-right-text">
                A software engineering graduate, with a passion for UI & UX
              </h1>
            </div>
            
          </div>
        </div>
      </Element>

      {/* Projects */}
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
                  image1={process.env.PUBLIC_URL + project.images[1]?.url}
                  image2={process.env.PUBLIC_URL + project.images[2]?.url}
                />
              ))}
            </div>
          </div>

          <div className="row">
            <div className="col d-flex align-items-center justify-content-center">
              <Link to="/Projects" className="more-projects-button">View more</Link>
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
