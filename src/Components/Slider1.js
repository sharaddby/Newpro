import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; // Import slick-carousel styles
import 'slick-carousel/slick/slick-theme.css'; // Import slick-carousel theme styles

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4, // Number of slides to show at once
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768, // Adjust the number of slides shown at this breakpoint
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const SliderComponent = () => {
  return (
    <Slider {...settings}>
      <div className="p-4">
        <div className="bg-tgreen px-5 py-5">
          <h1 className="text-2xl">Coding exam preparation courses</h1>
          <p>Get everything you need in one place to prepare  and take an AAPC coding
            certification exam.</p>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-8 w-6 inline-block text-gray-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
            <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>
                     
        </div>
      </div>
      <div className="p-4">
        <div className="bg-gray-300 px-5 py-5">
          <h1 className="text-2xl">Coding exam preparation courses</h1>
          <p>Get everything you need in one place to prepare  and take an AAPC coding
            certification exam.</p>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-8 w-6 inline-block text-gray-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
            <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>
         
        </div>
      </div>
      <div className="p-4">
        <div className="bg-darkble px-5 py-5">
          <h1 className="text-2xl text-white">Coding exam preparation courses</h1>
          <p className="text-white">Get everything you need in one place to prepare  and take an AAPC coding
            certification exam. </p>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-8 w-6 inline-block text-gray-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
            <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>
        
        </div>
      </div>
      <div className="p-4">
        <div className="bg-tgreen px-5 py-5">
          <h1 className="text-2xl">Coding exam preparation courses</h1>
          <p>Get everything you need in one place to prepare  and take an AAPC coding
            certification exam. </p>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-8 w-6 inline-block text-gray-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
            <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>
        
        </div>
      </div>
      <div className="p-4">
        <div className="bg-gray-300 px-5 py-5">
          <h1 className="text-2xl">Coding exam preparation courses</h1>
          <p>Get everything you need in one place to prepare  and take an AAPC coding
            certification exam.</p>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-8 w-6 inline-block text-gray-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
            <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>

        </div>
      </div>
      <div className="p-4">
        <div className="bg-darkble px-5 py-5">
          <h1 className="text-2xl text-white">Coding exam preparation courses</h1>
          <p className="text-white">Get everything you need in one place to prepare  and take an AAPC coding
            certification exam. </p>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-8 w-6 inline-block text-gray-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
            <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>
        
        </div>
      </div>
    </Slider>
  );
};

export default SliderComponent;
