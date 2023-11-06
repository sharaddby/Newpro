import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; // Import slick-carousel styles
import 'slick-carousel/slick/slick-theme.css'; // Import slick-carousel theme styles

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6, // Number of slides to show at once
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 630,
          settings: {
            slidesToShow: 3,
          },
        },
      ],
  };
  
  const Slider2 = () => {
    return (
      
            <Slider {...settings}>
                <div className="p-2">
                    <img src="../wrk.webp" className='w-100' alt="..."/>
                </div>
                <div className="p-2">
                    <img src="../wrk.webp" className='w-100' alt="..."/>
                </div>
                <div className="p-2">
                    <img src="../wrk.webp" className='w-100' alt="..."/>
                </div>
                <div className="p-2">
                    <img src="../wrk.webp" className='w-100' alt="..."/>
                </div>
                <div className="p-2">
                    <img src="../wrk.webp" className='w-100' alt="..."/>
                </div>
                <div className="p-2">
                    <img src="../wrk.webp" className='w-100' alt="..."/>
                </div>
                <div className="p-2">
                    <img src="../wrk.webp" className='w-100' alt="..."/>
                </div>
                <div className="p-2">
                    <img src="../wrk.webp" className='w-100' alt="..."/>
                </div>
                <div className="p-2">
                    <img src="../wrk.webp" className='w-100' alt="..."/>
                </div>
                <div className="p-2">
                    <img src="../wrk.webp" className='w-100' alt="..."/>
                </div>
                <div className="p-2">
                    <img src="../wrk.webp" className='w-100' alt="..."/>
                </div>
                <div className="p-2">
                    <img src="../wrk.webp" className='w-100' alt="..."/>
                </div>
                <div className="p-2">
                    <img src="../wrk.webp" className='w-100' alt="..."/>
                </div>
                <div className="p-2">
                    <img src="../wrk.webp" className='w-100' alt="..."/>
                </div>
                <div className="p-2">
                    <img src="../wrk.webp" className='w-100' alt="..."/>
                </div>
                <div className="p-2">
                    <img src="../wrk.webp" className='w-100' alt="..."/>
                </div>
                <div className="p-2">
                    <img src="../wrk.webp" className='w-100' alt="..."/>
                </div>
                <div className="p-2">
                     <img src="../wrk.webp" className='w-100' alt="..."/>
                </div>
            </Slider>
            
    );
  };
  
  export default Slider2;
