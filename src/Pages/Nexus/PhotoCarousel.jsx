import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import photo1 from "../../assets/NexusPage/gallery/1.png";
import photo2 from "../../assets/NexusPage/gallery/2.png";
import photo3 from "../../assets/NexusPage/gallery/3.png";
import photo4 from "../../assets/NexusPage/gallery/4.png";
import photo5 from "../../assets/NexusPage/gallery/5.png";
import photo6 from "../../assets/NexusPage/gallery/6.jpg";
import photo7 from "../../assets/NexusPage/gallery/7.jpg";
import photo8 from "../../assets/NexusPage/gallery/8.jpg";
import photo9 from "../../assets/NexusPage/gallery/9.jpg";
import photo10 from "../../assets/NexusPage/gallery/10.jpg";
import photo11 from "../../assets/NexusPage/gallery/11.jpg";
import photo12 from "../../assets/NexusPage/gallery/12.jpg";
import photo13 from "../../assets/NexusPage/gallery/13.jpg";
import photo14 from "../../assets/NexusPage/gallery/14.jpg";
import photo15 from "../../assets/NexusPage/gallery/15.jpg";
import photo16 from "../../assets/NexusPage/gallery/16.jpg";
import photo17 from "../../assets/NexusPage/gallery/17.jpg";
import photo18 from "../../assets/NexusPage/gallery/18.jpg";
import "./PhotoCarousel.css"; // Import the CSS file for styling

const PhotoCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false
  };

  const photos = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
    photo9,
    photo10,
    photo11,
    photo12,
    photo13,
    photo14,
    photo15,
    photo16,
    photo17,
    photo18,
  ];

  return (
    <Slider {...settings} className="photo-carousel">
      {photos.map((photo, index) => (
        <div key={index} className="photo-carousel-item">
          <img
            src={photo}
            alt={`Photo ${index}`}
            className="photo-carousel-image"
          />
        </div>
      ))}
    </Slider>
  );
};

export default PhotoCarousel;