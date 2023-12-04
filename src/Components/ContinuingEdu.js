import React from 'react';
import Slider1 from '../Components/Slider1';
import Certificattab from './Certificattab';
import Bluefooter from './Bluefooter';
import Banner from './Banner';
const ContinuingEdu = () => {
  return (
    <div>
        <Banner/>
        <div className="grid place-items-center mt-10 px-10 py-10">
            <div className="2xl:w-8/12 xl:w-8/12 lg:w-full md:w-full sm:w-full w-full justify-center mx-auto">
                <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 w-100 justify-center mx-auto">
                    <Slider1 />
                </div>
            </div>
        </div>
        <div className="grid place-items-center">
            <div className="2xl:w-11/12 xl:w-11/12 lg:w-full md:w-full sm:w-full w-full justify-center mx-auto">
                <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 w-100 justify-center mx-auto">
                <Certificattab/>
                </div>
            </div>
        </div>
        
        <Bluefooter />
    </div>
  );
};

export default ContinuingEdu;

