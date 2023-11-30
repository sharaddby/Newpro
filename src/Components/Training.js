import React from 'react';
import Slider1 from '../Components/Slider1';
import Bluefooter from './Bluefooter';
import Bluebanner from './Bluebanner';

const Training = () => {
    return (
        <div>
            <div className="grid w-full bg-green-800 bg-cover bg-center" style={{ backgroundImage: 'url("../ris.webp")' }}>
                <div className="2xl:w-8/12 xl:w-8/12 lg:w-8/12 md:w-8/12 sm:w-8/12 w-8/12 justify-center mx-auto py-28">
                    <p className="text-white">TRAINING</p>
                    <h3 className="text-white text-3xl">people learn best in different ways.<br /> We let you choose yours.</h3>
                </div>
            </div>
           <div className="grid place-items-center">
                <div className="w-full justify-center mx-auto bg-gray-200">
                    <div className="flex flex-col 2xl:w-8/12 xl:w-full lg:w-full md:w-full sm:w-full w-full justify-center mx-auto">
                        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 w-100 bg-gray-200 mt-0">
                            <div className="py-5 col-span-2">
                                <p className="text-gray-700 text-lg text-center">
                                    Take 50% off everything you need to get certified. Pay over time starting at 0% financing.</p>
                            </div>
                            <div className="sm:pt-4">
                                <button className="text-green-700 hover:text-green-800 font-bold py-2 px-4 rounded text-lg">
                                    Save Now<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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