import React from 'react';
import Slider1 from '../Components/Slider1';
import Bluefooter from './Bluefooter';
import Bluebanner from './Bluebanner';
import Banner from './Banner';
const Training = () => {
    return (
        <div>
            <Banner/>
            <div className="grid place-item-center">
                <div className="2xl:w-8/12 xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 mx-auto my-20">
                    <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8 mb-28">
                        <div>
                            <p>essinitial</p>
                            <h1 className="text-3xl font-semibold">Start with the basics.</h1>
                            <p>Unless you have at least two years of experience working in healthcare, you will need a
                                foundation of the basics before you begin your medical coding or medical billing training. From
                                learning the language of healthcare with our Medical Terminology course to basic Anatomy to
                                pathophysiology, these courses prepare you in full to start training for a certification. </p>
                            <a href="Essentials" className="text-darksky text-lg font-semibold">GET THE ESSENTIALS</a>
                        </div>
                        <div> <img src="../age.webp" alt="#" /></div>
                    </div>
                    <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8">
                        <div> <img src="../corp.webp" alt="#" /></div>
                        <div>
                            <p>zzinitial</p>
                            <h1 className="text-3xl font-semibold">Start with the basics.</h1>
                            <p className="text-lg">Unless you have at least two years of experience working in healthcare, you will
                                need a
                                foundation of the basics before you begin your medical coding or medical billing training. From
                                learning the language of healthcare with our Medical Terminology course to basic Anatomy to
                                pathophysiology, these courses prepare you in full to start training for a certification. </p>
                            <a href="Essentials" className="text-darksky text-lg font-semibold">GET STARTED</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid place-items-center mt-5">
                <div className="2xl:w-8/12 xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-10/12 justify-center mx-auto">
                    <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 grid-cols-1">
                        <Slider1 />
                    </div>
                </div>
            </div>
            <Bluebanner />
            <div className="font-serif">
                <div className="grid place-items-center mt-10">
                    <div className="2xl:w-8/12 xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 justify-center mx-auto mt-20 mb-20">
                        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 w-100 gap-8">
                            <div>
                                <p>CONTINUING EDUCATION</p>
                                <h1 className="text-3xl">Differentiate yourself. Expand your knowhow.</h1>
                                <p className="text-xl">You can never learn too much in this line of work. The more you know, the more you can do. And
                                    the more you can do, the more valuable you are to employers. Here, you can round out your
                                    training and education with deep dives into a wide range of topics. Take a look around. Give
                                    yourself an advantage with continuing education certificates. They also look nice on your
                                    resume.</p>
                            </div>
                            <div>
                                <img src="../im.webp" className='W-100' alt="#" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid place-items-center mt-5">
                    <div className="2xl:w-8/12 xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-10/12 justify-center mx-auto">
                        <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 grid-cols-1">
                            <Slider1 />
                        </div>
                    </div>
                </div>
                <div className="grid place-items-center mt-10">
                    <div className="2xl:w-8/12 xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 justify-center mx-auto mt-10 mb-10">
                        <h1 className="text-3xl">You might also like</h1>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-100 gap-4">
                            <div className="pt-6 max-h-full">
                                <img src="../corp.webp" alt="hello" className="h-72 w-full" />
                                <div className="bg-slate-200 hover:bg-slate-300 py-10 p-10">
                                    <p className="text-darksky">E-BRIEF</p>
                                    <p className="text-2xl">Meet The Team: Get the Revenue Cycle Expertise Your Business Needs, Now
                                    </p>
                                    <p>From large-scale outsourcing to a professional opinion of your revenue process, our
                                        nationwide network of certified</p>
                                    <p className="text-darksky font-bold mt-3 mb-5">LEARN MORE</p>
                                </div>
                            </div>
                            <div className="pt-6 max-h-full">
                                <img src="../corp.webp" alt="hello" className="h-72 w-full" />
                                <div className="bg-slate-200 hover:bg-slate-300 py-10 p-10">
                                    <p className="text-darksky">E-BRIEF</p>
                                    <p className="text-2xl">Meet The Team: Get the Revenue Cycle Expertise Your Business Needs, Now
                                    </p>
                                    <p>From large-scale outsourcing to a professional opinion of your revenue process, our
                                        nationwide network of certified</p>
                                    <p className="text-darksky font-bold mt-3 mb-5">LEARN MORE</p>
                                </div>
                            </div>
                            <div className="pt-6 max-h-full">
                                <img src="../corp.webp" alt="hello" className="h-72 w-full" />
                                <div className="bg-slate-200 hover:bg-slate-300 py-10 p-10">
                                    <p className="text-darksky">E-BRIEF</p>
                                    <p className="text-2xl">Meet The Team: Get the Revenue Cycle Expertise Your Business Needs, Now
                                    </p>
                                    <p>From large-scale outsourcing to a professional opinion of your revenue process, our
                                        nationwide network of certified</p>
                                    <p className="text-darksky font-bold mt-3 mb-5">LEARN MORE</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <Bluefooter />
            </div>

        </div>

    );
};

export default Training