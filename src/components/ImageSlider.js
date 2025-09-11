import React from "react";

const isYouTube = (url) =>
  url.includes("youtube.com") || url.includes("youtu.be");


const ImageSlider = ({ slides }) => {
  return (
    <div id="projectCarousel" className="carousel slide" data-ride="carousel">
      {/* Indicators */}
      <ol className="carousel-indicators">
        {slides.map((_, index) => (
          <li
            key={index}
            data-target="#projectCarousel"
            data-slide-to={index}
            className={index === 0 ? "active" : ""}
          ></li>
        ))}
      </ol>

      {/* Slides */}
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            {slide.url.endsWith(".mp4") ? (
              <video
                src={process.env.PUBLIC_URL + slide.url}
                className="d-block w-100"
                controls
                autoPlay
                onLoadedData={(e) => e.target.classList.add("loaded")}
                loop
              muted
              />
            ) : isYouTube(slide.url) ? (
              <div className="video-container">
                <iframe
                  src={process.env.PUBLIC_URL + slide.url}
                  title={slide.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <img
                src={process.env.PUBLIC_URL + slide.url}
                className="d-block w-100"
                alt={`Slide ${index + 1}`}
              />
            )}

            {/* Caption BELOW each slide */}
            <p className="project-caption text-center mt-2">
              {slide.title}
            </p>

          </div>
        ))}
      </div>

      {/* Arrows */}
      <a
        className="carousel-control-prev"
        href="#projectCarousel"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#projectCarousel"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>


      </div>
    );
  };
  
  export default ImageSlider;