import React from 'react';
import Certificattab from './Certificattab';
import Bluefooter from './Bluefooter';
const Exam = () => {
    return (
        <div>
            <div className="grid w-full bg-lightgreen h-96" style={{ backgroundImage: 'url("../hbg.webp")' }}>
                <div className="2xl:w-8/12 xl:w-8/12 lg:w-full md:w-full sm:w-full w-full justify-center mx-auto">
                    <p className="text-white pt-24">EXAM PREPARATION</p>
                    <p className="text-white text-5xl">People learn best in different ways.<br /> We let you choose yours.</p>
                </div>
            </div>
            <div className="grid w-full bg-gray-200">
                <div className="2xl:w-8/12 xl:w-8/12 lg:w-full md:w-full sm:w-full w-full justify-center mx-auto">
                    <p className="text-gray-700 text-lg font-semibold">Did you know that students who take our instructor-led
                        courses are 3x more likely to pass <br />their
                        certification exam on the first attempt?</p>
                </div>
            </div>

            <div className="font-serif">
                <div className="grid place-items-center mt-16">
                    <div className="2xl:w-8/12 xl:w-8/12 lg:w-full md:w-full sm:w-full w-full justify-center mx-auto">
                        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 w-100 gap-8">
                            <div className="bg-slate-200 p-5">
                                <h1 className="text-3xl mb-5">Virtual instructor-led (Popular)</h1>
                                <p className="text-lg">Exploring a career in medical coding and billing raises questions, one being
                                    which certification should I choose? Fortunately, identifying the certification that’s right
                                    for
                                    you is easy once you see how they differ.</p>
                            </div>
                            <div className="bg-slate-200 p-5">
                                <h1 className="text-3xl mb-5">Self-paced instruction</h1>
                                <p className="text-lg">Exploring a career in medical coding and billing raises questions, one being
                                    which certification should I choose? Fortunately, identifying the certification that’s right
                                    for
                                    you is easy once you see how they differ.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid place-items-center mt-10">
                    <div className="2xl:w-8/12 xl:w-8/12 lg:w-full md:w-full sm:w-full w-full justify-center mx-auto ">
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 w-100">
                            <div className="p-5">
                                <img src="../ban.jpg" alt="gg" />
                            </div>
                            <div className="p-5 col-span-2">
                                <h1 className="text-3xl mb-5">Understanding the fundamentals of medicine is essential.</h1>
                                <p className="text-lg text-justify">Anatomy Graphic
                                    Understanding the fundamentals of medicine is essential.
                                    A solid understanding of medical terminology, anatomy, and pathophysiology is essential for
                                    medical coders before undertaking a medical coding certification. Medical coders who
                                    understand these areas can code accurately and efficiently, communicate effectively with
                                    other healthcare professionals, and have increased job opportunities.<br />

                                    If your education or employment background has provided you with reliable knowledge of
                                    medical terminology, anatomy, and pathophysiology, you can skip past the essential training
                                    courses. Otherwise, you should take our Fundamentals of Medicine course series as all
                                    certification exams will thoroughly test your knowledge in the fundamentals of medicine.</p>
                                <button className="px-12 py-3 rounded-full">
                                    <a href="https://tailwindui.com/documentation"
                                        className="rounded-full text-xl text-teal-900">Learn more about this aricle</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <Certificattab />
                <Bluefooter />

            </div>
            
        </div>
    )
}

export default Exam