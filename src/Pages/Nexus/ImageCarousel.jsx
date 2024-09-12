import React, { useRef } from "react";
import Slider from "react-slick";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import "./ImageCarousel.css"; // Import the CSS for styling

const ImageCarousel = ({ images }) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    arrows: false, // Disable default arrows
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    ref: sliderRef,
  };

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div className="carousel-container">
      <Slider {...settings} ref={sliderRef}>
        {images.map((image, index) => (
          <div key={index} className="carousel-slide">
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>
      <div className="carousel-arrows">
        <button className="arrow-button prev" onClick={prevSlide}>
          <ArrowBackIosNew />
        </button>
        <button className="arrow-button next" onClick={nextSlide}>
          <ArrowForwardIos />
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
