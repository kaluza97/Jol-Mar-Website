import React from "react";
import "./Styles/mainPage.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Slideshow from "./Slideshow";

const MainPage = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <>
      <div className="mainPage">
        <a href="#top">
          <div className="up"></div>
        </a>

        <header className="header">
          <div className="translate"></div>
          <div className="callUs">
            <div className="phone"></div>
          </div>

          <div className="headerImg"></div>
          <h1 className="headerTextH">Jol&Mar</h1>
          <p className="headerTextP">
            Producent wyjątkowych mebli i zabudowy wnętrz
          </p>
        </header>
        <section className="section">
          <div className="sectionText">
            Dbamy o zadowolenie naszych klientów od roku 2010. Oferujemy
            produkty najwyższej jakości, dzięki pasji, z jaką je tworzymy. Nie
            czekaj i zmień swoje mieszkanie na lepsze.
          </div>
          <div className="sectionText2">
            W naszej ofercie znajdziesz wyjątkowe:
          </div>
          <div className="clipArt"></div>
          <div className="sectionOffer">
            <div className="sectionOfferItem" id="item1" data-aos="fade-up">
              <p className="sectionOfferText">Szafy</p>
            </div>
            <div className="sectionOfferItem" id="item2" data-aos="fade-up">
              <p className="sectionOfferText">Kuchnie</p>
            </div>
            <div className="sectionOfferItem" id="item3" data-aos="fade-up">
              <p className="sectionOfferText">Garderoby</p>
            </div>
            <div className="sectionOfferItem" id="item4" data-aos="fade-up">
              <p className="sectionOfferText">Biura</p>
            </div>
          </div>
          {/* DOWN */}
          <div className="sectionOffer">
            <div className="sectionOfferItem" id="item5" data-aos="fade-up">
              <p className="sectionOfferText">Przedpokoje</p>
            </div>
            <div className="sectionOfferItem" id="item6" data-aos="fade-up">
              <p className="sectionOfferText">Poddasza</p>
            </div>
            <div className="sectionOfferItem" id="item7" data-aos="fade-up">
              <p className="sectionOfferText">Meble na zamówienie</p>
            </div>
            <div className="sectionOfferItem" id="item8" data-aos="fade-up">
              <p className="sectionOfferText">Drzwi przesuwne, uchylne</p>
            </div>
          </div>
          <button className="sectionButton">
            <p className="sectionButtonText">Przejdź do oferty</p>
          </button>
        </section>
        <Slideshow></Slideshow>
      </div>
    </>
  );
};

export default MainPage;
