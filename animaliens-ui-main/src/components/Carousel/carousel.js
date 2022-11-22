import React from "react";
import "./carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Carousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="section-slide">
      <div className="section-heading">
        <h1>DISCOVER</h1>
      </div>
      <div className="discover-slider">
        <Slider {...settings}>
          <div>
            <div className="indiv-slide no-margin">
              <h1 className="card-head">
                Plutus101 <br /> Course
              </h1>
              <p className="small-par">by</p>
              <div className="card-bttn">
                <button>Explore Now</button>
              </div>
            </div>
          </div>
          <div>
            <div className="indiv-slide bg1">
              <h1 className="card-head">
                Ilustration <br /> Course
              </h1>
              <span className="small-par"> by</span>
              <span className="anim-tag">
                ANIM<span className="petch-font">ALIENS</span>
              </span>
            </div>
          </div>

          <div>
            <div className="indiv-slide"></div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
