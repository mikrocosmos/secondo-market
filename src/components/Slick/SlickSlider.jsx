import React from "react";
import Slider from "react-slick";

function SlickSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="slider">
        <img className="slider__image" src="/img/slider_image.png" alt="" />
      </div>
    </Slider>
  );
}

export default SlickSlider;
