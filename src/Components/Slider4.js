import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <div className="w-100 mx-auto mt-8">
      <Slider {...settings}>
        <div>
          <img src="../banner.jpg" alt="Ima" className="w-full" />
        </div>
        <div>
          <img src="../banner.jpg" alt="Ima" className="w-full" />
        </div>
        <div>
          <img src="../banner.jpg" alt="Ima" className="w-full" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
