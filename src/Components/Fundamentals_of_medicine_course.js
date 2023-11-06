import { Link } from 'react-router-dom';
import React, { useState } from 'react';
const Fundamentals_of_medicine_course = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };
    return (
        <div>
            <div className="grid place-items-center mt-5">
                <div className="flex flex-col md:flex-row 2xl:w-8/12 xl:w-8/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 justify-center gap-8">
                    <div className="2xl:w-1/4 xl:w-1/4 lg:1/3 md:w-1/3 sm:w-full w-full">
                        <div className="bg-slate-200 p-1">
                            <h5 className="block px-4 py-2 text-sm text-gray-700 bg-teal-500">
                                Training</h5>
                            <hr className="h-1 bg-white" />
                            <Link
                                to="Essentials"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                            >
                                Essentials
                            </Link>
                            <hr className="h-1 bg-white" />
                            <Link
                                to="Exam_Preparation"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                            >
                                Exam preparation
                            </Link>
                            <hr className="h-1 bg-white" />
                            <Link
                                to="ContinuingEdu"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                            >
                                Continuing education
                            </Link>
                            <hr className="h-1 bg-white" />
                            <Link
                                to="Professional"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                            >
                                Professional development
                            </Link>
                            <hr className="h-1 bg-white" />
                            <Link
                                to="Instructor"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                            >
                                Certified instructor
                            </Link>
                            <hr className="h-1 bg-white" />
                            <Link
                                to="Corporate"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                            >
                                Corporate and teams
                            </Link>
                            <hr className="h-1 bg-white" />
                            <Link
                                to="Medicode"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                            >
                                CEU search
                            </Link>
                        </div>
                    </div>
                    <div className="2xl:w-3/4 xl:w-3/4 lg:3/4 md:w-2/3 sm:w-full w-full">
                        <div className='text-lg'>
                            <h3 className='text-3xl text-teal-700'>Fundamentals of Medicine Course</h3>
                            <p>Medical coding and billing takes time and practice to learn. And getting up to speed on the terminology and knowledge required can be like learning a whole new language.
                                Fundamentals of Medicine provides new students the opportunity to learn medical terminology, anatomy, and pathophysiology in an instructor-led format. This training provides
                                the most essential learning in each of these areas to ensure that you’re fully prepared for your certification training and examination.</p>
                            <p>Fundamentals of Medicine is a 12-week structured program with live, weekly classes. In addition to class time, you’ll have access to your
                                instructor’s office hours for guidance and to have any questions answered. This course is designed to set you up to achieve success as students who take our
                                instructor-led training have higher pass rates in the certification exams.</p>
                            <h4 className='text-2xl'>Prepare yourself for success:</h4>
                            <ul className='list-disc pl-10'>
                                <li>Identify how to use medical terminology to prepare a medical record</li>
                                <li>Use anatomic reference systems to identify anatomic positions and landmarks</li>
                                <li>Understand an overview of the pathophysiology of common conditions</li>
                            </ul>
                        </div>
                        <div>
                            <div className="flex">
                                <div
                                    className={`p-2 cursor-pointer ${activeTab === 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                                        }`}
                                    onClick={() => handleTabClick(1)}
                                >
                                    Enroll
                                </div>
                                <div
                                    className={`p-2 cursor-pointer ${activeTab === 2 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                                        }`}
                                    onClick={() => handleTabClick(2)}
                                >
                                    Course Features
                                </div>
                                <div
                                    className={`p-2 cursor-pointer ${activeTab === 3 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                                        }`}
                                    onClick={() => handleTabClick(3)}
                                >
                                    Certificate & CEUs
                                </div>
                                <div
                                    className={`p-2 cursor-pointer ${activeTab === 4 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                                        }`}
                                    onClick={() => handleTabClick(4)}
                                >
                                    Course/System Requirements
                                </div>
                            </div>

                            <div className="p-4">
                                {activeTab === 1 &&
                                    <p>
                                        <h5 className="text-xl">Enroll in the Online Medical Terminology Anatomy Bundle</h5>
                                        <p>You must read the course/system requirements, before enrolling.</p>
                                        <p>Online <span className="text-darksky">Medical Terminology + Anatomy </span>Bundle - $1,209.90 (<span className="text-darksky">Members:</span><span className="text-red-500"> $695.00:)
                                            *Members save $514.90 over list price</span></p>
                                        <div className="flex flex-col space-y-2">
                                            <label className="inline-flex items-center">
                                                <input
                                                    type="checkbox" className="form-checkbox h-5 w-5"
                                                />
                                                <span className="ml-2">Not an AAPC Member? Add AAPC Student Membership for $140 to get member prices.</span>
                                            </label>
                                        </div>
                                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-5 rounded">
                                            ENROLL
                                        </button>
                                        <p className="py-5 px-5 mt-5 bg-slate-300">Purchase of Medical Terminology & Anatomy courses must be made in same transaction to receive $95 instant discount.</p>
                                        <p>Both the Anatomy and Medical Terminology Courses are recommended for students taking any coding or billing course. These 2 courses must be completed within a 4 month period, however AAPC allows for an additional 2 month grace period, giving you a full 6 months access from the date of purchase.
                                        </p>
                                        <p>By purchasing any online course and other items, I certify that I have read and agree to the online course Terms and Conditions and the Refund Policy.
                                        </p>
                                        <p>Date of purchase is considered your course start date, additional time will be given for processing of your order.
                                        </p>
                                    </p>
                                }
                                {activeTab === 2 &&
                                    <p>
                                       <h5 className='text-xl font-bold'> Fundamentals of Medicine Course Description</h5>
                                       <p>The students will learn medical terminology, anatomy, and pathophysiology for a wide range of topics, applying what is
                                         learned to reading and interpreting a medical record. This course is valuable for anyone preparing for a career in any
                                          non-clinical medical profession, and strongly recommended for anyone who is preparing for an AAPC certification examination.</p> 
                                         <h5 className='text-xl font-bold'>Course Objectives</h5> 
                                         <ul className='list-disc pl-10'>
                                            <li>Identify how to use medical terminology to prepare a medical record</li>
                                            <li>Use anatomic reference systems to identify anatomic positions and landmarks</li>
                                            <li>Understand an overview of the pathophysiology of common conditions</li>
                                        </ul>
                                        <h5 className='text-xl font-bold'>Course Content</h5>
                                        <ul className='list-disc pl-10'>
                                            <li>Introduction to the body, disease, and treatment</li>
                                            <li>Integumentary system</li>
                                            <li>Musculoskeletal system</li>
                                            <li>Nervous system and mental health</li>
                                            <li>Special senses and endocrine system</li>
                                            <li>Cardiovascular and lymphatic systems</li>
                                            <li>Respiratory system</li>
                                            <li>Digestive system</li>
                                            <li>Urinary system</li>
                                            <li>Male reproductive system</li>
                                            <li>Female reproductive system, pregnancy and birth</li>
                                            <li>Final exam</li>
                                        </ul>
                                    </p>

                                }
                                {activeTab === 3 && <p>
                                   <h5 className='text-xl font-bold'>Fundamentals of Medicine Certificate & CEUs</h5> 
                                   <p>Successful completion of this course requires students to achieve a 
                                    score of 70% or higher on all module review exams and on the final exam. 
                                    Upon passing the course, students will receive a Fundamentals of Medicine 
                                    Certificate. AAPC certified members will also receive 20 CEUs.</p>
                                   <p>Fundamentals of Medicine course CEUs are only applicable to CPC, CPPM, COC, CPB, 
                                    CIC, and CRC credentials.</p>
                                </p>}
                                {activeTab === 4 && <p>
                                    <h5 className='text-xl font-bold'> Fundamentals of Medicine Course/System Requirements</h5>
                                    <h5 className='text-xl font-bold'>Prerequisites</h5>
                                        There are no prerequisites for Fundamentals of Medicine
                                    <h5 className='text-xl font-bold'>Recommended Textbooks/Supplies (not included):</h5>
                                        Medical dictionary, any publisher
                                    <h5 className='text-xl font-bold'>Computer Requirements</h5>
                                        High-speed internet connection with Blackboard supported Operating System & Web browser, Adobe Flash Player; Adobe Acrobat Reader. For best experience, use of a mobile device is not recommended.
                                    <h5 className='text-xl font-bold'> Clock Hours</h5>   
                                        40 hours. Note: 40 clock hours accounts only for time spent in the online course, and does not include time spent outside of the course or study time. Study time will vary widely per individual.
                                    <h5 className='text-xl font-bold'> Course Length</h5> 
                                         This is a 12-week course. Each week your instructor will provide a live lecture and opportunity to ask questions based on current weekly material. You will be required to complete weekly textbook reading and online course work prior to each weekly live instructor lecture.
                                    <h5 className='text-xl font-bold'>Class Hours</h5>
                                        Weekly classroom meetings for 12 weeks; one hour per week. Office hours are also available weekly; one hour per week.
                                    <h5 className='text-xl font-bold'>System Requirements</h5>
                                    <ul className='list-disc pl-10'>
                                        <li> High-speed Internet access with supported computer operating systems and Internet/Web browsers
                                       </li>
                                        <li> Adobe Acrobat Reader (free download available)
                                       </li>
                                        <li>For best experience, use of a mobile device is not recommended
                                        </li>
                                    </ul>
                                </p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Fundamentals_of_medicine_course
