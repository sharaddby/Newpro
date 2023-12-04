import React from 'react'
import Slider1 from './Slider1';
import Bluefooter from './Bluefooter';
import Bluebanner from './Bluebanner';
import Banner1 from './Banner1';
const Business = () => {
    return (
        <div>
            <Banner1/>
            <div className="grid place-items-center mt-16">
                <div className="2xl:w-8/12 xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 justify-center mx-auto">
                    <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 w-100">
                        <div className="p-5">
                            <h1 className="text-3xl mb-5">How AAPC Can Help Your Organization</h1>
                            <p className="text-lg text-why">Exploring a career in medical coding and billing raises questions,
                                one being which certification should I choose? Fortunately, identifying the certification that’s right
                                for you is easy once you see how they differ.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid place-items-center mt-16">
             <div className="2xl:w-8/12 xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 justify-center mx-auto">
                    <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 w-100 gap-8">
                        <div className="bg-slate-200 p-5">
                            <h1 className="text-3xl mb-5">Find the right certification in medical coding.</h1>
                            <p className="text-lg text-why">Exploring a career in medical coding and billing raises questions,
                                one being
                                which certification should I choose? Fortunately, identifying the certification that’s right
                                for
                                you is easy once you see how they differ.</p>
                            <button className="px-12 py-3 rounded-full">
                                <a href="https://tailwindui.com/documentation"
                                    className="rounded-full text-xl text-teal-900">Get Started </a>
                            </button>
                        </div>
                        <div className="bg-slate-200 p-5">
                            <h1 className="text-3xl mb-5">Prepare for a certification exam.</h1>
                            <p className="text-lg">Exploring a career in medical coding and billing raises questions, one being
                                which certification should I choose? Fortunately, identifying the certification that’s right
                                for
                                you is easy once you see how they differ.</p>
                            <button className="px-12 py-3 rounded-full">
                                <a href="https://tailwindui.com/documentation"
                                    className="rounded-full text-xl text-teal-900">Get Started </a>
                            </button>
                        </div>
                        <div className="bg-slate-200 p-5">
                            <h1 className="text-3xl mb-5">Schedule your certification exam.</h1>
                            <p className="text-lg">Exploring a career in medical coding and billing raises questions, one being
                                which certification should I choose? Fortunately, identifying the certification that’s right
                                for
                                you is easy once you see how they differ.</p>
                            <button className="px-12 py-3 rounded-full">
                                <a href="https://tailwindui.com/documentation"
                                    className="rounded-full text-xl text-teal-900">Get Started </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid place-items-center mt-10">
                <div className="2xl:w-8/12 xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 justify-center mx-auto ">
                    <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-8">
                        <div className="bg-slate-200 p-5">
                            <h1 className="text-3xl mb-5">Find the right certification in medical coding.</h1>
                            <p className="text-lg">Exploring a career in medical coding and billing raises questions, one being
                                which certification should I choose? Fortunately, identifying the certification that’s right
                                for
                                you is easy once you see how they differ.</p>
                            <button className="px-12 py-3 rounded-full">
                                <a href="https://tailwindui.com/documentation"
                                    className="rounded-full text-xl text-teal-900">Get Started </a>
                            </button>
                        </div>
                        <div className="bg-slate-200 p-5">
                            <h1 className="text-3xl mb-5">Prepare for a certification exam.</h1>
                            <p className="text-lg">Exploring a career in medical coding and billing raises questions, one being
                                which certification should I choose? Fortunately, identifying the certification that’s right
                                for
                                you is easy once you see how they differ.</p>
                            <button className="px-12 py-3 rounded-full">
                                <a href="https://tailwindui.com/documentation"
                                    className="rounded-full text-xl text-teal-900">Get Started </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Bluebanner/>
            <div className="grid place-items-center mt-10 px-10 py-10">
                <div className="2xl:w-8/12 xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 justify-center mx-auto">
                    <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 w-100 justify-center mx-auto">
                        <Slider1 />
                    </div>
                </div>
            </div>
            <div className="grid place-items-center mt-5">
                <div className="2xl:w-8/12 xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 justify-center mx-auto">
                    <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-8">
                        <div className="bg-white p-5 hover:shadow-2xl">
                            <div className="flex justify-center">
                                <img src={"./happ.webp"} alt="logo" />
                            </div>
                            <h4 className="text-2xl my-2">
                                Prepare for a certification exam.
                            </h4>
                            <p className='text-teal-700'>15 CEUs | In-Person Event | August 8 - 10, 2023</p>
                            <p className="text-lg">
                                Exploring a career in medical coding and billing raises
                                questions, one being which certification should I choose?
                                Fortunately, identifying the certification that’s right for you
                                is easy once you see how they differ.
                            </p>
                            <button className="px-8 py-2 mt-3 bg-teal-700">
                                <a
                                    href="https://tailwindui.com/documentation"
                                    className="rounded-full text-xl text-white"
                                >
                                    Register Now{" "}
                                </a>
                            </button>
                        </div>
                        <div className="bg-slate-200 p-5 hover:shadow-2xl">
                            <h3 className="text-3xl mb-5 font-semibold">
                                Schedule your
                            </h3>
                            <p className='text-teal-700'>15 CEUs | In-Person Event | August 8 - 10, 2023</p>
                            <p className="text-lg">
                                Exploring a career in medical coding and billing raises
                                questions, one being which certification should I choose?
                                Fortunately, identifying the certification that’s right for you
                                is easy once you see how they differ.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid place-items-center mt-5">
                <div className="flex flex-col md:flex-row 2xl:w-8/12 xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12">
                    <div className="md:w-2/5 w-full">
                        <img src={"./happ.webp"} alt="logo" />
                    </div>
                    <div className="md:w-3/5 w-full">
                        <div className="bg-slate-200 p-5 hover:shadow-2xl">
                            <h3 className="text-3xl mb-5">
                                Find the right certification in medical coding in medical
                                coding.
                            </h3>
                            <p className="text-lg text-why">
                                Exploring a career in medical coding and billing raises
                                questions, one being which certification should I choose?
                                Fortunately, identifying.
                                Exploring a career in medical coding and billing raises
                                questions, one being which certification should I choose?
                                Fortunately, identifying.
                            </p>
                            <button className="px-12 py-3 rounded-full">
                                <a
                                    href="https://tailwindui.com/documentation"
                                    className="rounded-full text-xl text-teal-900"
                                >
                                    Watch Now{" "}
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid place-items-center">
                <div className="2xl:w-8/12 xl:w-8/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 justify-center mx-auto">
                    <div className="w-full">
                        <h3 className="text-3xl mt-5"> Additional Resources</h3>
                    </div>
                </div>
            </div>
            <div className="grid place-items-center mt-5">
                <div className="2xl:w-8/12 xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 justify-center mx-auto">
                    <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 w-100 gap-8">
                        <div className="bg-slate-200 p-5 hover:shadow-2xl">
                            <div className="flex justify-center">
                                <img src={"./happ.webp"} alt="logo" />
                            </div>
                            <h5 className="text-xl mb-5 font-semibold">
                                Find the right certification in medical coding.
                            </h5>
                            <p className="text-lg text-why">
                                Exploring a career in medical coding and billing raises
                                questions, one being which certification should I choose?
                                Fortunately, identifying the certification that’s right for you
                                is easy once you see how they differ.
                            </p>
                            <button className="px-12 py-3 rounded-full">
                                <a
                                    href="https://tailwindui.com/documentation"
                                    className="rounded-full text-xl text-teal-900"
                                >
                                    Get Started{" "}
                                </a>
                            </button>
                        </div>
                        <div className="bg-slate-200 p-5 hover:shadow-2xl">
                            <div className="flex justify-center">
                                <img src={"./happ.webp"} alt="logo" />
                            </div>
                            <h5 className="text-xl mb-5 font-semibold">
                                Prepare for a certification exam.
                            </h5>
                            <p className="text-lg">
                                Exploring a career in medical coding and billing raises
                                questions, one being which certification should I choose?
                                Fortunately, identifying the certification that’s right for you
                                is easy once you see how they differ.
                            </p>
                            <button className="px-12 py-3 rounded-full">
                                <a
                                    href="https://tailwindui.com/documentation"
                                    className="rounded-full text-xl text-teal-900"
                                >
                                    Get Started{" "}
                                </a>
                            </button>
                        </div>
                        <div className="bg-slate-200 p-5 hover:shadow-2xl">
                            <div className="flex justify-center">
                                <img src={"./happ.webp"} alt="logo" />
                            </div>
                            <h5 className="text-xl mb-5 font-semibold">
                                Schedule your certification exam.
                            </h5>
                            <p className="text-lg">
                                Exploring a career in medical coding and billing raises
                                questions, one being which certification should I choose?
                                Fortunately, identifying the certification that’s right for you
                                is easy once you see how they differ.
                            </p>
                            <button className="px-12 py-3 rounded-full">
                                <a
                                    href="https://tailwindui.com/documentation"
                                    className="rounded-full text-xl text-teal-900"
                                >
                                    Get Started{" "}
                                </a>
                            </button>
                        </div>
                    </div>
                   
                </div>
                
            </div>
           
            <Bluefooter/>  
        </div>
    )
}

export default Business