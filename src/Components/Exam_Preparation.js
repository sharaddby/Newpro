import React from 'react';
import Certificattab from './Certificattab';
import Bluefooter from './Bluefooter';
const Certifications = () => {
 
  return (
    <div>
         <div className="grid w-full">
         <img src="../banner.jpg" alt="..." className="w-full"/>
        </div>
        <div className="grid place-items-center mt-10">
            <div className="2xl:w-8/12 xl:w-8/12 lg:w-full md:w-full sm:w-full w-full justify-center mx-auto ">
                <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 w-100 gap-8">
                    <div className="bg-slate-200 p-5">
                        <h1 className="text-3xl mb-5">Virtual instructor-led (Popular)</h1>
                        <ul className="text-lg list-disc pl-10">
                            <li>Exploring a career in medical coding and billing raises questions</li>
                            <li>one being which certification should I choose? Fortunately, identifying the </li>
                            <li>certification that’s right for you is easy once you see how they differ.</li>
                        </ul>
                    </div>
                    <div className="bg-slate-200 p-5">
                        <h1 className="text-3xl mb-5">Self-paced instruction</h1>
                        <ul className="text-lg list-disc pl-10">
                            <li>Exploring a career in medical coding and billing raises questions</li>
                            <li>one being which certification should I choose? Fortunately, identifying the </li>
                            <li>certification that’s right for you is easy once you see how they differ.</li>
                        </ul>
                     </div>
                </div>
            </div>
        </div>
        <div className="grid place-items-center mt-16">
            <div className="2xl:w-8/12 xl:w-8/12 lg:w-full md:w-full sm:w-full w-full justify-center mx-auto">
                <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 w-100 gap-8">
                    <div>
                        <img src="../im.webp" alt="..." className="w-full"/>
                    </div>
                    <div className="bg-slate-200 p-5 col-span-2">
                        <h1 className="text-3xl mb-5">Find the right certification in medical coding.</h1>
                        <p className="text-lg text-why">Exploring a career in medical coding and billing raises questions,
                            one being
                            which certification should I choose? Fortunately, identifying the certification that’s right
                            for
                            you is easy once you see how they differ.</p>
                        <button className="px-12 py-3 rounded-full">
                            <a href="./Fundamentals_of_medicine_course" className="rounded-full text-lg text-teal-900">LEARN MORE ABOUT ESSENTIAL TRAINING</a>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                            <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
        <Certificattab/>
        <Bluefooter />
    </div>
  );
};

export default Certifications;
