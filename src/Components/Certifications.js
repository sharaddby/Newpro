import React from 'react';
import Certificattab from './Certificattab';
import Bluefooter from './Bluefooter';
import Bluebanner from './Bluebanner';
const Certifications = () => {
  return (
    <div>
        <div class="grid w-full bg-green-800 bg-cover bg-center h-96" style={{ backgroundImage: 'url("../banner.jpg")' }}>
            <div class="2xl:w-8/12 xl:w-8/12 lg:w-full md:w-full sm:w-full w-full justify-center mx-auto">
                <p class="text-blue-500 pt-24">TRAINING</p>
                <p class="text-blue-500 text-5xl">people learn best in different ways.<br /> We let you choose yours.</p>
            </div>
        </div>
        <div class="grid place-items-center mt-16">
            <div class="2xl:w-8/12 xl:w-8/12 lg:w-full md:w-full sm:w-full w-full justify-center mx-auto">
                <div class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 w-100 gap-8">
                    <div class="bg-slate-200 p-5">
                        <h1 class="text-3xl mb-5">Find the right certification in medical coding.</h1>
                        <p class="text-lg text-why">Exploring a career in medical coding and billing raises questions,
                            one being which certification should I choose? Fortunately, identifying the certification 
                            that’s right for you is easy once you see how they differ.</p>
                        <button class="px-12 py-3 rounded-full">
                            <a href="./Certifications" class="rounded-full text-lg text-teal-900">View Options</a>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                            <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>
                        </button>
                    </div>
                    <div class="bg-slate-200 p-5">
                        <h1 class="text-3xl mb-5">Prepare for a certification exam.</h1>
                        <p class="text-lg">Exploring a career in medical coding and billing raises questions, one being
                            which certification should I choose? Fortunately, identifying the certification that’s right
                            for
                            you is easy once you see how they differ.</p>
                        <button class="px-12 py-3 rounded-full">
                            <a href="./Exam_Preparation"
                                class="rounded-full text-lg text-teal-900">Take a prep course</a>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                            <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>
                       
                        </button>
                    </div>
                    <div class="bg-slate-200 p-5">
                        <h1 class="text-3xl mb-5">Schedule your certification exam.</h1>
                        <p class="text-lg">Exploring a career in medical coding and billing raises questions, one being
                            which certification should I choose? Fortunately, identifying the certification that’s right
                            for you is easy once you see how they differ.</p>
                        <button class="px-12 py-3 rounded-full">
                            <a href="./Locate_examination"class="rounded-full text-xl text-teal-900">Schedule your exam                               </a>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                            <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid place-items-center mt-10">
            <div class="2xl:w-8/12 xl:w-8/12 lg:w-full md:w-full sm:w-full w-full justify-center mx-auto ">
                <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 w-100 gap-8">
                    <div class="bg-slate-200 p-5">
                        <h1 class="text-3xl mb-5">Find the right certification in medical coding.</h1>
                        <p class="text-lg">Exploring a career in medical coding and billing raises questions, one being
                            which certification should I choose? Fortunately, identifying the certification that’s right
                            for
                            you is easy once you see how they differ.</p>
                        <button class="px-12 py-3 rounded-full">
                            <a href="./Medicode" class="rounded-full text-xl text-teal-900">Earn Ceus Today
                                </a>
                        </button>
                    </div>
                    <div class="bg-slate-200 p-5">
                        <h1 class="text-3xl mb-5">Prepare for a certification exam.</h1>
                        <p class="text-lg">Exploring a career in medical coding and billing raises questions, one being
                            which certification should I choose? Fortunately, identifying the certification that’s right
                            for
                            you is easy once you see how they differ.</p>
                        <button class="px-12 py-3 rounded-full">
                            <a href="./Credential" class="rounded-full text-xl text-teal-900">Verify a Certification</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <Bluebanner/>
        <Certificattab/>
        <Bluefooter/>
    </div>
  );
};

export default Certifications;
