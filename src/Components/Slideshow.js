import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Styles/slider.scss";

const Slideshow = () => {
  return (
    <div className="slider">
      <div className="slide-container">
        <Slide>
          <div className="each-slide">
            <div className="slide0">
              <span className="slideSpan">Bezpłatny projekt komputerowy</span>
            </div>
          </div>
          <div className="each-slide">
            <div className="slide1">
              <span className="slideSpan">
                Nowoczesne kuchnie z bezpłatnym pomiarem
              </span>
            </div>
          </div>
          <div className="each-slide">
            <div className="slide2">
              <span className="slideSpan">
                Doradztwo i nastawienie na indywidualne potrzeby klienta
              </span>
            </div>
          </div>
          <div className="each-slide">
            <div className="slide3">
              <span className="slideSpan">
                Konkurencyjne ceny - bezpłatna wycena
              </span>
            </div>
          </div>
          <div className="each-slide">
            <div className="slide4">
              <span className="slideSpan">
                Darmowy transport do 10 kilometrów
              </span>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};
export default Slideshow;
