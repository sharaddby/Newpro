import React from 'react';
import Slider1 from '../Components/Slider1';
import Certificattab from './Certificattab';
import Bluefooter from './Bluefooter';
const ContinuingEdu = () => {
  return (
    <div>
        <div class="grid w-full bg-green-800 bg-cover bg-center h-46" style={{ backgroundImage: 'url("../hbg.webp")' }}>
            <div class="2xl:w-8/12 xl:w-8/12 lg:w-full md:w-full sm:w-full w-full justify-center mx-auto">
                <p class="text-white pt-16">CONTINUING EDUCATION</p>
                <p class="text-white text-5xl pb-16">Ready to take your career to the next level?</p>
            </div>
        </div>
        <div class="grid place-items-center mt-10 px-10 py-10">
            <div class="2xl:w-8/12 xl:w-8/12 lg:w-full md:w-full sm:w-full w-full justify-center mx-auto">
                <div class="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 w-100 justify-center mx-auto">
                    <Slider1 />
                </div>
            </div>
        </div>
        <Certificattab/>
        <Bluefooter />
    </div>
  );
};

export default ContinuingEdu;

