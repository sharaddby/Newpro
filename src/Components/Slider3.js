import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; // Import slick-carousel styles
import 'slick-carousel/slick/slick-theme.css'; // Import slick-carousel theme styles

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of slides to show at once
    slidesToScroll: 2,
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
            <div>
                <img src="../blog1.jpg" alt="hello" />
            </div>
            <div>
                <div className="bg-gray-300 px-5 h-52">
                    <p className='pt-3 text-green-700'>TESTIMONIAL</p>
                    <p className='text-lg'>I want to thank AAPC for providing me the tools to teach a successful coding program.
                        Myrtle Walcott, MSA, BS, CPC, CPC-I, President</p>
                    <p className='text-green-800'>supora unolova</p>
                    <p className='text-green-800'>New York Medical Coding Academy</p>
                </div>
            </div>
            <div>
                <img src="../blog1.jpg" alt="hello" />
            </div>
            <div>
                <div className="bg-gray-300 px-5 h-52">
                    <p className='pt-3 text-green-700'>TESTIMONIAL</p>
                    <p className='text-lg'>I want to thank AAPC for providing me the tools to teach a successful coding program.
                        Myrtle Walcott, MSA, BS, CPC, CPC-I, President</p>
                    <p className='text-green-800'>supora unolova</p>
                    <p className='text-green-800'>New York Medical Coding Academy</p>
                </div>
            </div>
            <div>
                <img src="../blog1.jpg" alt="hello" />
            </div>
            <div>
                <div className="bg-gray-300 px-5 h-52">
                    <p className='pt-3 text-green-700'>TESTIMONIAL</p>
                    <p className='text-lg'>I want to thank AAPC for providing me the tools to teach a successful coding program.
                        Myrtle Walcott, MSA, BS, CPC, CPC-I, President</p>
                    <p className='text-green-800'>supora unolova</p>
                    <p className='text-green-800'>New York Medical Coding Academy</p>
                </div>
            </div>
        </Slider>
    );
};

export default SliderComponent;
