import React from 'react';
import Slider1 from '../Components/Slider1';
import Bluefooter from './Bluefooter';
import Bluebanner from './Bluebanner';

const Training = () => {
    return (
        <div>
            <div class="grid w-full bg-green-800 bg-cover bg-center h-96" style={{ backgroundImage: 'url("../hbg.webp")' }}>
                <div class="2xl:w-8/12 xl:w-8/12 lg:w-full md:w-full sm:w-full w-full justify-center mx-auto">
                    <p class="text-white pt-24">TRAINING</p>
                    <p class="text-white text-5xl">people learn best in different ways.<br /> We let you choose yours.</p>
                </div>
            </div>
            <div class="grid place-items-center">
                <div class="w-full justify-center mx-auto">
                    <div class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 w-100 bg-gray-200 lg:mt-0 md:mt-72 sm:mt-72">
                        <div class="pb-5 pt-5 2xl:pl-72 xl:pl-72 xl:mt-0 lg:mt-0 col-span-2">
                            <p class="text-gray-700 text-lg text-center">
                            Take 50% off everything you need to get certified. Pay over time starting at 0% financing.</p>
                        </div>
                        <div class="pb-5 pt-5">
                            <p class="text-lg text-center text-green-700"> SAVE NOW<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></p>
                        </div>
                    </div>
                </div>
            </div>
                 <div class="grid place-item-center">
                <div class="2xl:w-8/12 xl:w-8/12 lg:w-8/12 md:w-8/12 sm:w-8/12 mx-auto mt-20">
                    <div class="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8">
                        <div>
                            <p>initial</p>
                            <h1 class="text-3xl font-semibold">Start with the basics.</h1>
                            <p>Unless you have at least two years of experience working in healthcare, you will need a
                                foundation of the basics before you begin your medical coding or medical billing training. From
                                learning the language of healthcare with our Medical Terminology course to basic Anatomy to
                                pathophysiology, these courses prepare you in full to start training for a certification. </p>
                            <a href="Essentials" class="text-darksky text-lg font-semibold">GET THE ESSENTIALS</a>
                        </div>
                        <div> <img src="../age.webp" alt="#" /></div>
                    </div>
                    <div class="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8">
                        <div> <img src="../corp.webp" alt="#" /></div>
                        <div>
                            <p>initial</p>
                            <h1 class="text-3xl font-semibold">Start with the basics.</h1>
                            <p class="text-lg">Unless you have at least two years of experience working in healthcare, you will
                                need a 
                                foundation of the basics before you begin your medical coding or medical billing training. From
                                learning the language of healthcare with our Medical Terminology course to basic Anatomy to
                                pathophysiology, these courses prepare you in full to start training for a certification. </p>
                            <a href="Essentials" class="text-darksky text-lg font-semibold">GET STARTED</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid place-items-center mt-10 px-10 py-10">
                <div class="2xl:w-8/12 xl:w-8/12 lg:w-full md:w-full sm:w-full w-full justify-center mx-auto">
                    <div class="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 w-100 justify-center mx-auto">
                        <Slider1 />
                    </div>
                </div>
            </div>
            <Bluebanner/>
            <div class="font-serif">
                <div class="grid place-items-center mt-10">
                    <div class="2xl:w-8/12 xl:w-8/12 lg:w-full md:w-full sm:w-full w-full justify-center mx-auto mt-20 mb-20">
                        <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 w-100 gap-8">
                            <div>
                                <p>CONTINUING EDUCATION</p>
                                <h1 class="text-3xl">Differentiate yourself. Expand your knowhow.</h1>
                                <p class="text-xl">You can never learn too much in this line of work. The more you know, the more you can do. And
                                    the more you can do, the more valuable you are to employers. Here, you can round out your
                                    training and education with deep dives into a wide range of topics. Take a look around. Give
                                    yourself an advantage with continuing education certificates. They also look nice on your
                                    resume.</p>
                            </div>
                            <div>
                                <img src="../im.webp" alt="#" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid place-items-center mt-10 px-10 py-10">
                    <div class="2xl:w-8/12 xl:w-8/12 lg:w-full md:w-full sm:w-full w-full justify-center mx-auto">
                        <div class="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 w-100 justify-center mx-auto">
                            <Slider1 />
                        </div>
                    </div>
                </div>
                <div class="grid place-items-center mt-10">
                    <div class="2xl:w-8/12 xl:w-8/12 lg:w-full md:w-full sm:w-full w-full justify-center mx-auto mt-10 mb-10">
                        <h1 class="text-3xl">You might also like</h1>
                        <div class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 w-100 gap-4">
                            <div class="pt-6 max-h-full">
                                <img src="../corp.webp" alt="hello" class="h-72 w-full" />
                                <div class="bg-slate-200 hover:bg-slate-300 py-10 p-10">
                                    <p class="text-darksky">E-BRIEF</p>
                                    <p class="text-2xl">Meet The Team: Get the Revenue Cycle Expertise Your Business Needs, Now
                                    </p>
                                    <p>From large-scale outsourcing to a professional opinion of your revenue process, our
                                        nationwide network of certified</p>
                                    <p class="text-darksky font-bold mt-3 mb-5">LEARN MORE</p>
                                </div>
                            </div>
                            <div class="pt-6 max-h-full">
                                <img src="../corp.webp" alt="hello" class="h-72 w-full" />
                                <div class="bg-slate-200 hover:bg-slate-300 py-10 p-10">
                                    <p class="text-darksky">E-BRIEF</p>
                                    <p class="text-2xl">Meet The Team: Get the Revenue Cycle Expertise Your Business Needs, Now
                                    </p>
                                    <p>From large-scale outsourcing to a professional opinion of your revenue process, our
                                        nationwide network of certified</p>
                                    <p class="text-darksky font-bold mt-3 mb-5">LEARN MORE</p>
                                </div>
                            </div>
                            <div class="pt-6 max-h-full">
                                <img src="../corp.webp" alt="hello" class="h-72 w-full" />
                                <div class="bg-slate-200 hover:bg-slate-300 py-10 p-10">
                                    <p class="text-darksky">E-BRIEF</p>
                                    <p class="text-2xl">Meet The Team: Get the Revenue Cycle Expertise Your Business Needs, Now
                                    </p>
                                    <p>From large-scale outsourcing to a professional opinion of your revenue process, our
                                        nationwide network of certified</p>
                                    <p class="text-darksky font-bold mt-3 mb-5">LEARN MORE</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                </div>
                <Bluefooter/>
            </div>

        </div>

    );
};

export default Training