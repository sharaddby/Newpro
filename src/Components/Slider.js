import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Change the speed as needed
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src="../ban1.webp" alt="I" className='w-screen h-96' />
        </div>
        <div>
          <img src="../ban2.webp" alt="Ima" className='w-screen h-96' />
        </div>
        <div>
          <img src="../ban3.webp" alt="ge 3" className='w-screen h-96' />
        </div>
        {/* Add more images here */}
      </Slider>
    </div>

  );
};

export default ImageSlider;
