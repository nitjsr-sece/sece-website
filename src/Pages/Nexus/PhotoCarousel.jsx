import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import photo1 from "../../assets/NexusPage/compressed_galler/1.jpg"
// import photo1 from "../../assets/NexusPage/gallery/1.png";
import photo8 from "../../assets/NexusPage/compressed_gallery/2.jpg";
import photo3 from "../../assets/NexusPage/compressed_galler/3.jpg"
// import photo4 from "../../assets/NexusPage/compressed_gallery/4.jpg";
import photo5 from "../../assets/NexusPage/compressed_galler/5.jpg"; 
import photo6 from "../../assets/NexusPage/compressed_galler/6.jpeg";
import photo7 from "../../assets/NexusPage/compressed_gallery/7.jpg";
import photo2 from "../../assets/NexusPage/compressed_gallery/8.jpg";
import photo9 from "../../assets/NexusPage/compressed_gallery/9.jpg";
import photo10 from "../../assets/NexusPage/compressed_galler/10.jpg";
import photo11 from "../../assets/NexusPage/compressed_gallery/11.jpg";
import photo12 from "../../assets/NexusPage/compressed_galler/12.jpg";
import photo13 from "../../assets/NexusPage/compressed_gallery/2.jpg";
import photo14 from "../../assets/NexusPage/compressed_galler/3.jpg";
import photo15 from "../../assets/NexusPage/compressed_gallery/7.jpg";
import photo16 from "../../assets/NexusPage/compressed_gallery/4.jpg";
import photo17 from "../../assets/NexusPage/compressed_galler/5.jpg";
import photo18 from "../../assets/NexusPage/compressed_gallery/11.jpg";
import "./PhotoCarousel.css"; // Import the CSS file for styling

const PhotoCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 10000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false
  };

  const photos = [
    photo1,
    photo2,
    photo3,
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
