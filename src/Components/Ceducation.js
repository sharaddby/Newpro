import React from 'react';
import Slider1 from '../Components/Slider1';
import Certificattab from './Certificattab';
import Bluefooter from './Bluefooter';
const Ceducation = () => {
    return (
        <div>
            <div className="grid w-full h-72" style={{ backgroundImage: 'url("../hbg.webp")' }}>
                <div className="2xl:w-8/12 xl:w-8/12 lg:w-full md:w-full sm:w-full w-full justify-center mx-auto">
                    <p className="text-white pt-24">EXAM PREPARATION</p>
                    <p className="text-white text-5xl">People learn best in different ways.<br /> We let you choose yours.</p>
                </div>
            </div>
            <div className="grid place-items-center mt-10 px-10 py-10">
                    <div className="2xl:w-8/12 xl:w-8/12 lg:w-full md:w-full sm:w-full w-full justify-center mx-auto">
                        <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 w-100 justify-center mx-auto">
                            <Slider1 />
                        </div>
                    </div>
            </div>
           <Certificattab/>
           <Bluefooter/>
        </div>
    )
}

export default Ceducation