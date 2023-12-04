import React from 'react';
import Certificattab from './Certificattab';
import Slider1 from '../Components/Slider1';
import Bluefooter from './Bluefooter';
import Banner from './Banner';
const Certifications = () => {
    return (
        <div>
            <Banner/>
            <div className="grid place-items-center">
                 <div className="grid place-items-center mt-5">
                    <div className="2xl:w-8/12 xl:w-8/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-10/12 justify-center mx-auto">
                        <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 grid-cols-1">
                            <Slider1 />
                        </div>
                    </div>
                </div>
            </div>

            <Certificattab />
            <Bluefooter />
        </div>
    );
};

export default Certifications;
