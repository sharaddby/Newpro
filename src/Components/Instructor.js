import React from 'react';
import Slider3 from './Slider3';
import Bluefooter from './Bluefooter';
const Instructor = () => {
    return (
        <div>
            <div class="grid w-full">
                <img src="../banner.jpg" alt="..." class="w-full" />
            </div>
            <div class="grid place-items-center mt-16">
                <div class="2xl:w-8/12 xl:w-8/12 lg:w-full md:w-full sm:w-full w-full justify-center mx-auto">
                    <div class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 w-100 gap-8">
                        <div class="bg-slate-200 p-5">
                            <h1 class="text-3xl mb-5">Find the right certification in medical coding.</h1>
                            <p class="text-lg text-why">Exploring a career in medical coding and billing raises questions,
                                one being
                                which certification should I choose? Fortunately, identifying the certification that’s right
                                for
                                you is easy once you see how they differ.</p>
                        </div>
                        <div class="bg-slate-200 p-5">
                            <h1 class="text-3xl mb-5">Prepare for a certification exam.</h1>
                            <p class="text-lg">Exploring a career in medical coding and billing raises questions, one being
                                which certification should I choose? Fortunately, identifying the certification that’s right
                                for
                                you is easy once you see how they differ.</p>
                        </div>
                        <div class="bg-slate-200 p-5">
                            <h1 class="text-3xl mb-5">Schedule your certification exam.</h1>
                            <p class="text-lg">Exploring a career in medical coding and billing raises questions, one being
                                which certification should I choose? Fortunately, identifying the certification that’s right
                                for
                                you is easy once you see how they differ.</p>
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
                        </div>
                        <div class="bg-slate-200 p-5">
                            <h1 class="text-3xl mb-5">Prepare for a certification exam.</h1>
                            <p class="text-lg">Exploring a career in medical coding and billing raises questions, one being
                                which certification should I choose? Fortunately, identifying the certification that’s right
                                for
                                you is easy once you see how they differ.</p>
                         </div>
                    </div>
                </div>
            </div>
            <div className="grid place-items-center mt-5">
                <div className="flex flex-col  md:flex-row 2xl:w-8/12 xl:w-8/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 gap-8">
                    <div className="md:w-1/2 w-full">
                        <div className="p-5 hover:shadow-2xl">
                            <h3 className="text-3xl mb-5">
                                Find the right certification in medical coding in medical
                                coding.
                            </h3>
                            <p className="text-lg text-why">
                                Exploring a career in medical coding and billing raises
                                questions, one being which certification should I choose?
                                Fortunately, identifying the
                                <ul className='list-disc ml-10'>
                                    <li>Exploring a career in medical coding and</li>
                                    <li>billing raises  questions, one being which </li>
                                    <li>certification should I choose? Fortunately,</li>
                                    <li> identifying the should I choose? one being</li>
                                    <li>Exploring a career in medical coding and</li>
                                </ul>
                                Exploring a career in medical coding and billing raises
                                questions, one being which certification should I choose?
                                Fortunately, identifying the
                            </p>
                        </div>
                    </div>
                    <div className="md:w-1/2 w-full">
                        <img src="../wrk.webp" alt="..." class="w-full" />
                    </div>
                </div>
            </div>
            <div class="grid place-items-center mt-10px-10 py-10">
                <div class="2xl:w-9/12 xl:w-9/12 lg:w-full md:w-full sm:w-full w-full justify-center mx-auto">
                    <div class="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 w-100 justify-center mx-auto">
                        <Slider3 />
                    </div>
                </div>
            </div>
            <div className="grid place-items-center mt-5">
                <div className="flex flex-col  md:flex-row 2xl:w-8/12 xl:w-8/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 gap-8">
                    <div className="md:w-1/2 w-full">
                        <div className="p-5 hover:shadow-2xl">
                            <h3 className="text-3xl mb-5">
                                Find the right certification in medical coding in medical
                                coding.
                            </h3>
                            <p className="text-lg text-why">
                                <ul className='list-disc ml-10'>
                                    <li>Exploring a career in medical coding and</li>
                                    <li>billing raises  questions, one being which </li>
                                    <li>certification should I choose? Fortunately,</li>
                                    <li> identifying the should I choose? one being</li>
                                    <li>Exploring a career in medical coding and</li>
                                    <li>Exploring a career in medical coding and</li>
                                    <li>billing raises  questions, one being which </li>
                                    <li>certification should I choose? Fortunately,</li>
                                    <li> identifying the should I choose? one being</li>
                                    <li>Exploring a career in medical coding and</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <Bluefooter/>  
        </div>

    )
}

export default Instructor