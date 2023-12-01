import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  const [servicesOpen1, setservicesOpen1] = useState(false);
  const [servicesOpen3, setservicesOpen3] = useState(false);
  const [servicesOpen4, setservicesOpen4]= useState(false);
  const [servicesOpen5, setservicesOpen5] =useState(false);
  const [servicesOpen6, setservicesOpen6] =useState(false);
  const [servicesOpen7, setservicesOpen7] =useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleServices1 = () => {
    setservicesOpen1(!servicesOpen1);
    setservicesOpen3(false);
    setservicesOpen4(false);
    setservicesOpen5(false);
    setservicesOpen6(false);
    setservicesOpen7(false);
  };

  const toggleServices3 =()=>{
    setservicesOpen3(!servicesOpen3);
    setservicesOpen1(false);
    setservicesOpen4(false);
    setservicesOpen5(false);
    setservicesOpen6(false);
    setservicesOpen7(false);

  };
  const toggleServices4 =()=>{
    setservicesOpen4(!servicesOpen4);
    setservicesOpen1(false);
    setservicesOpen3(false);
    setservicesOpen5(false);
    setservicesOpen6(false);
    setservicesOpen7(false);

  }
  const toggleServices5 =()=>{
    setservicesOpen5(!servicesOpen5);
    setservicesOpen1(false);
    setservicesOpen3(false);
    setservicesOpen4(false);
    setservicesOpen6(false);
    setservicesOpen7(false);

  }
  const toggleServices6=()=>{
    setservicesOpen6(!servicesOpen6);
    setservicesOpen1(false);
    setservicesOpen3(false);
    setservicesOpen4(false);
    setservicesOpen5(false);
    setservicesOpen7(false);
  }
  const toggleServices7=()=>{
    setservicesOpen7(!servicesOpen7);
    setservicesOpen1(false);
    setservicesOpen3(false);
    setservicesOpen4(false);
    setservicesOpen5(false);
    setservicesOpen6(false);
  }

  return ( 
    <nav className="bg-white p-6">
       <div className="grid place-items-center">
        <div className="flex items-center place-content-around 2xl:w-10/12 xl:w-10/12 lg:w-full md:w-full sm:w-full w-full">
          <div className="flex xl:w:2/5">
             <img src="../aapc-logo-new.svg" alt="..." className='w-24 h-20'/>
          </div>
           {/* desktop */}
          <div className="hidden md:block xl:w:3/5">
            <ul className="flex space-x-6">
               <li>
                <div className="relative group">
                  <button
                    onClick={toggleServices1}
                    className="text-footsky hover:text-orange-700  focus:outline-none px-4"
                  >
                   Certifications
                  </button>
                  {servicesOpen1 && (
                    <ul className="absolute mt-2 space-y-2 bg-white text-gray-700 border border-gray-300 rounded-md z-50">
                      <li>
                        <div className="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800 w-{32} z-[1]">
                          <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg-grid-cols-2">
                            <div>
                            <Link to="/Certifications" className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                            >View All Certifications</Link>
                            <Link to="/Training" className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                            >Prepare for a Certification Exam</Link>
                            <Link to="/Locate_examination" className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                            >Schedule Your Certification Exam</Link>
                            <Link to="/Medicode" className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                              >Maintain Your Certification</Link>
                            </div>
                            <div className='bg-gray-200'>
                             <Link to="/Business" className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                               ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm absolute left-0 h-5 w-5 inline-block xl:ml-60" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg> Business Solutions</Link>
                              <Link to="/Instructor" className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                               ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm absolute left-0 h-5 w-5 inline-block xl:ml-60" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg> Become an Instructor</Link>
                              <Link to="/Credential" className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                               ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm absolute left-0 h-5 w-5 inline-block xl:ml-60" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg> Verify a Credential</Link>
                                <Link to="/Curriculum" className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                                ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm absolute left-0 h-5 w-5 inline-block xl:ml-60" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg> License AAPC Curriculum</Link>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  )}
                  <button
                      onClick={toggleServices3}
                      className="text-footsky hover:text-orange-700  focus:outline-none px-4 py-2 text-left"
                    >
                     Training and Events
                    </button>
                    {servicesOpen3 && (
                     <ul className="w-[42rem] absolute mt-2 space-y-2 bg-white text-gray-700 border border-gray-300 rounded-md z-50">
                     <li>
                     <div className="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800">
                        <div className="grid 2xl:grid-cols-3 xl:grid-cols-2 lg-grid-cols-3">
                          <div>
                            <Link to="/Training" className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                             >Training Overview</Link>
                            <Link to="/Essentials" className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                              >Essentials</Link>
                            <Link to="/Exam_Preparation" className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                              >Exam Preparation</Link>
                             <Link to="/Cpc" className="block ml-5 px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                             ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm absolute left-0 h-5 w-5 inline-block ml-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>CPC (Medical Coding)</Link>
                             <Link to="/Cpc" className="block ml-5 px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                             ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm absolute left-0 h-5 w-5 inline-block ml-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>CPB (Medical Billing)</Link>
                             <Link to="/Certified_Professional_Coder" className="block ml-5 px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                             ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm absolute left-0 h-5 w-5 inline-block ml-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>CPC + CPB</Link>
                             <Link to="/Exam_Preparation" className="block ml-5 px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                             ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm absolute left-0 h-5 w-5 inline-block ml-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>All Certification Courses</Link>
                              <Link to="/ContinuingEdu" className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                              >Continuing Education</Link>
                               <Link to="/Medicode" className="block ml-5 px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                             ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm absolute left-0 h-5 w-5 inline-block ml-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>Search for CEUs</Link>
                             <Link to="/Workshops" className="block ml-5 px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                             ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm absolute left-0 h-5 w-5 inline-block ml-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>Webinars</Link>
                             <Link to="/Workshops" className="block ml-5 px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                             ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm absolute left-0 h-5 w-5 inline-block ml-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg> Workshops</Link>
                             <Link to="/ContinuingEdu" className="block ml-5 px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                             ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm absolute left-0 h-5 w-5 inline-block ml-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg> Specialty Certificates</Link>
                              <Link to="/newsletter" className="block ml-5 px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                             ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm absolute left-0 h-5 w-5 inline-block ml-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>eNewsletters</Link>
                            <Link to="/Professional" className="block ml-5 px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                             >Professional Development</Link>
                             </div>
                           <div>
                            <Link to="/Events"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                            >Events Overview</Link>
                            <Link to="/Riskcon"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                             > RISKCON</Link>
                            <Link to="/Riskcon"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                             >DOCUCON</Link>
                            <Link to="/Riskcon"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                              > AUDITCON</Link>
                            <Link to="/Riskcon"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                             >Collaborative Compliance Conference</Link>
                            <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                            >Local Chapter Events</Link>
                          </div>
                          <div className="bg-gray-200">
                           <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                             >Business Solutions</Link>
                            <Link to="/Corporate_training"  className="block px-6 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                            ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm absolute left-0 h-5 w-5 inline-block xl:ml-[28rem]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg> Find Custom Team Training</Link>
                            <Link to="/Exam_Preparation"  className="block px-6 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                            ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm absolute left-0 h-5 w-5 inline-block xl:ml-[28rem]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg> Evaluate Your Coders</Link>
                          </div>
                        </div>
                      </div>
                     </li>
                   </ul>
                    )}
                    <button
                      onClick={toggleServices4}
                      className="text-footsky hover:text-orange-700 focus:outline-none px-4 py-2 text-left"
                    >
                     Resources
                    </button>
                    {servicesOpen4 && (
                     <ul className="absolute lg:ml-36 mt-2 space-y-2 bg-white text-gray-700 border border-gray-300 rounded-md w-[27rem] z-50">
                     <li>
                      <div className="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800 w-{32}">
                          <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg-grid-cols-2">
                          <div>
                              <Link to="/Resources"  className="block px-4 py-2 mt-2 text-sm   hover:text-orange-700 md:mt-0"
                              >View All Resources</Link>
                              <Link to="/Career"  className="block px-4 py-2 mt-2 text-sm   hover:text-orange-700 md:mt-0"
                             >Career Center and Jobs</Link>
                              <Link to=""  className="block px-4 py-2 mt-2 text-sm   hover:text-orange-700 md:mt-0"
                              >Find A Job</Link>
                              <Link to="/#" className="block px-4 py-2 mt-2 text-sm   hover:text-orange-700 md:mt-0"
                              >Community Forum</Link>
                              <Link to="/Support" className="block px-4 py-2 mt-2 text-sm   hover:text-orange-700 md:mt-0"
                              >Get Support</Link>
                              <Link to="/Blog"  className="block px-4 py-2 mt-2 text-sm   hover:text-orange-700 md:mt-0"
                              >AAPC Blog</Link>
                              <Link to="/Events"  className="block px-4 py-2 mt-2 text-sm   hover:text-orange-700 md:mt-0"
                              >Healthcare Business Monthly</Link>
                            </div>
                            <div className='bg-gray-200'>
                               <Link to="/Business"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                              >Business Solutions</Link>
                               <Link to="/Subresources"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                              ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm absolute left-0 h-5 w-5 inline-block xl:ml-52" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>Case Studies</Link>
                                <Link to="/Subresources"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                               ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm absolute left-0 h-5 w-5 inline-block xl:ml-52" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>White Papers</Link>
                                <Link to="/Subresources"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                              ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm absolute left-0 h-5 w-5 inline-block xl:ml-52" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>Webinars</Link>
                                <Link to="/Subresources"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                              ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm absolute left-0 h-5 w-5 inline-block xl:ml-52" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>eBriefs</Link>
                                <Link to="/Subresources"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                              ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm absolute left-0 h-5 w-5 inline-block xl:ml-52" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>Podcasts</Link>
                            </div>
                          </div>
                        </div>
                     </li>
                   </ul>
                    )}
                    <button
                      onClick={toggleServices5}
                      className="text-footsky hover:text-orange-700  focus:outline-none px-4 py-2 text-left"
                    >
                     Software and Services 
                    </button>
                    {servicesOpen5 && (
                     <ul className="absolute lg:ml-60 mt-2 space-y-2 bg-white text-gray-700 border border-gray-300 rounded-md w-[27rem] z-50 ">
                     <li>
                        <div className="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800 w-{32}">
                          <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg-grid-cols-2">
                           <div>
                             <Link to="/Codes"  className="block px-4 py-2 mt-2 text-sm   hover:text-orange-700 md:mt-0"
                              >Codify</Link>
                              <Link to="/Practicod"  className="block px-4 py-2 mt-2 text-sm   hover:text-orange-700 md:mt-0"
                             >Practicode</Link>
                              <Link to="/xtern_program"  className="block px-4 py-2 mt-2 text-sm   hover:text-orange-700 md:mt-0"
                              >Xtern Program</Link>
                              <Link to="/Tools"  className="block px-4 py-2 mt-2 text-sm   hover:text-orange-700 md:mt-0"
                              >Calculators and Tools</Link>
                            </div>
                            <div className='bg-gray-200'>
                               <Link to="/Business"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                              ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm absolute left-0 h-5 w-5 inline-block xl:ml-52" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>Overview</Link>
                                <Link to="/Audit_Services"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                               ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm absolute left-0 h-5 w-5 inline-block xl:ml-52" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>Audit Services</Link>
                                <Link to="/Audit_Services"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                              ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm absolute left-0 h-5 w-5 inline-block xl:ml-52" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>Coding Services</Link>
                                <Link to="/Audit_Services"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                              ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm absolute left-0 h-5 w-5 inline-block xl:ml-52" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>Job Services</Link>
                                <Link to="/Audit_Services"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                              ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm absolute left-0 h-5 w-5 inline-block xl:ml-52" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>Codify for Teams</Link>
                              <Link to="/Practicode"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                              ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm absolute left-0 h-5 w-5 inline-block xl:ml-52" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>Practicode for Employers and Educators</Link>
                              <Link to="/Business_Solutions"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                              ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm absolute left-0 h-5 w-5 inline-block xl:ml-52" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>Data Files</Link>
                              <Link to="/corporate_membership"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                              ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm absolute left-0 h-5 w-5 inline-block xl:ml-52" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>Corporate Membership</Link>
                            </div>
                          </div>
                        </div>
                     </li>
                   </ul>
                    )}
                    <button
                      onClick={toggleServices6}
                      className="text-footsky hover:text-orange-700  focus:outline-none px-4 py-2 text-left"
                    >
                     Shop
                    </button>
                    {servicesOpen6 && (
                     <ul className="absolute lg:ml-80 mt-2 space-y-2 bg-white text-gray-700 border border-gray-300 rounded-md w-[30rem] z-50">
                     <li>
                     <div className="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800">
                        <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg-grid-cols-2">
                          <div>
                            <span className="font-semibold">View All Products</span>
                            <Link to="/Shop"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                            >Medical Coding Books</Link>
                            <Link to="/Shop"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                            ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm absolute left-0 h-5 w-5 inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>Bundles</Link>
                            <Link to="/Shop"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                            ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm absolute left-0 h-5 w-5 inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>ICD-10</Link>
                            <Link to="/Shop"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                            ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm absolute left-0 h-5 w-5 inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>CPT</Link>
                            <Link to="/Shop"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                            ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm absolute left-0 h-5 w-5 inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>HCPCS</Link>
                            <Link to="/Shop"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                            ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm absolute left-0 h-5 w-5 inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>Specialty Guides</Link>
                            <Link to="/Shop"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                            ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm absolute left-0 h-5 w-5 inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>Reference Guides</Link>
                            <Link to="/Shop"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                            ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm absolute left-0 h-5 w-5 inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>Coding Updates</Link>
                            <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                            >Exam Prep</Link>
                            <Link to="/Shop"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                            ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm absolute left-0 h-5 w-5 inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>Study Guides</Link>
                            <Link to="/Shop"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                            ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm absolute left-0 h-5 w-5 inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>Practice Exams</Link>
                          <Link to="/Shop"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                            >Partner Publications</Link>
                              <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                            ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm absolute left-0 h-5 w-5 inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>AAPC Merch</Link>
                          </div>
                        <div className='bg-gray-200'>
                           <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                            >Business Solutions</Link>
                            <Link to="/Group_purchasing"  className="block px-6 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                            ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm absolute left-0 h-5 w-5 inline-block xl:ml-60" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>Group Purchasing</Link>
                            <Link to="/group_webinars"  className="block px-6 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                            ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm absolute left-0 h-5 w-5 inline-block xl:ml-60" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>Group Webinars and Workshops</Link>
                            <Link to="/Shop"  className="block px-6 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                            ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm absolute left-0 h-5 w-5 inline-block xl:ml-60" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>Publisher Request Form</Link>
                          </div>
                        </div>
                       </div>
                     </li>
                   </ul>
                    )}
                    <button
                      onClick={toggleServices7}
                      className="text-footsky hover:text-orange-700  focus:outline-none px-4 py-2 text-left"
                    >
                     Membership
                    </button>
                    {servicesOpen7 && (
                     <ul className="absolute lg:ml-96 left-0 mt-2 space-y-2 bg-white text-gray-700 border border-gray-300 rounded-md w-[27rem] z-50 ">
                     <li>
                      <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg-grid-cols-2">
                        <div>
                            <Link to="/Membership"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                            >Membership Overview</Link>
                            <Link to="/Localchapter"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                            >Local Chapters</Link>
                            <Link to="#"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                            >Savings Center</Link>
                            <Link to="#"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                            >Learning Library</Link>
                        </div>
                          <div className='bg-gray-200'>
                           <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                            >Business Solutions</Link>
                             <Link to="/corporate_membership"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                            ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm absolute left-0 h-5 w-5 inline-block xl:ml-52" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>Corporate Membership</Link>
                          </div>
                      </div>
                     </li>
                   </ul>
                    )}
                </div>
              </li>
            </ul>
          </div>
           {/* Mobile */}
           <div className="md:hidden">
            <button
              onClick={toggleDropdown}
              className="text-footsky hover:text-orange-700  focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
            
            {isOpen && (
              <div className="absolute top-24 right-0 mt-2 space-y-2 bg-white text-gray-700 border border-gray-300 rounded-md">
                 <ul>
                  <li>
                  <div className="relative group">
                  <button
                    onClick={toggleServices1}
                    className="text-footsky hover:text-orange-700  focus:outline-none px-4"
                  >
                   Certifications
                  </button>
                  {servicesOpen1 && (
                    <ul className="absolute left-0 mt-2 space-y-2 bg-white text-gray-700 border border-gray-300 rounded-md z-50">
                      <li>
                        <div className="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800 w-{32}">
                          <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg-grid-cols-2">
                            <div>
                            <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                             certifications>View All Certifications</Link>
                            <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                             exam-preparation>Prepare for a Certification</Link>
                            <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                             locate-examination>Schedule Your Certification Exam</Link>
                            <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                             medical-coding-education>Maintain Your Certification</Link>
                            <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                             >Verify a Certification</Link> </div>
                            <div className='bg-gray-200'>
                            <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                              > Business Solutions</Link>
                              <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                               >Become an Instructor</Link>
                              <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                               credential>Verify a Credential</Link>
                                <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                               >License AAPC Curriculum</Link>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  )}
                     <button
                      onClick={toggleServices3}
                      className="text-gray-500 hover:text-gray-700 focus:outline-none px-4 py-2 w-[27rem] text-left"
                    >
                     Training and Events
                    </button>
                    {servicesOpen3 && (
                     <ul className="absolute left-0 mt-2 space-y-2 bg-white text-gray-700 border border-gray-300 rounded-md z-50">
                     <li>
                     <div className="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800">
                        <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg-grid-cols-2">
                          <div>
                            <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                             training>Training Overview</Link>
                            <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                             essentials>Essentials</Link>
                            <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                             exam-preparation>Exam Preparation</Link>
                            <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                             continuing-education>Continuing Education</Link>
                            <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                             professional>Professional Development</Link>
                              <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                             webinars>Webinars</Link>
                            <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                             workshops>Workshops</Link>
                            <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                             instructor-certification>Certified Instructor Training</Link>
                            <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                             corporate>Corporate Training</Link>
                              <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                             medical-coding-education>CEU Search</Link>
                          </div>
                          <div>
                            <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                             events>Events Overview</Link>
                            <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                             events>Regional Conference</Link>
                            <Link to="/Riskcon"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                             riskcon> RISKCON</Link>
                              <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                             riskcon>DOCUCON</Link>
                            <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                             riskcon> AUDITCON</Link>
                            <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                             riskcon>Collaborative Compliance Conference</Link>
                            <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                             localchapter>Local Chapter Events</Link>
                          </div>
                        </div>
                      </div>
                     </li>
                   </ul>
                    )}
                    <button
                      onClick={toggleServices4}
                      className="text-gray-500 hover:text-gray-700 focus:outline-none px-4 py-2 w-[27rem] text-left"
                    >
                     Resources
                    </button>
                    {servicesOpen4 && (
                     <ul className="absolute left-0 mt-2 space-y-2 bg-white text-gray-700 border border-gray-300 rounded-md z-50">
                     <li>
                     <div className="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800 w-{32}">
                          <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg-grid-cols-2">
                          <div>
                              <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm   hover:text-orange-700 md:mt-0"
                               resources>View All Resources</Link>
                              <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm   hover:text-orange-700 md:mt-0"
                               career-center>Career Center and Jobs</Link>
                              <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm   hover:text-orange-700 md:mt-0"
                               blog>AAPC Blog</Link>
                              <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm   hover:text-orange-700 md:mt-0"
                               >Community Forum</Link>
                              <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm   hover:text-orange-700 md:mt-0"
                               support>Knowledge Base</Link>
                              <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm   hover:text-orange-700 md:mt-0"
                               software-solutions>Software Solutions</Link>
                              <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm   hover:text-orange-700 md:mt-0"
                               codes>Codify</Link>
                              <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm   hover:text-orange-700 md:mt-0"
                               events>Healthcare Business Monthly</Link>
                            </div>
                            <div className='bg-gray-200'>
                               <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                               events>Business Solutions</Link>
                               <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                               events>Case Studies</Link>
                                <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                               riskcon>White Papers</Link>
                                <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                              riskcon>Webinars</Link>
                                <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                              riskcon>eBriefs</Link>
                                <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                              riskcon>Podcasts</Link>
                            </div>
                          </div>
                        </div>
                     </li>
                   </ul>
                    )}
                    <button
                      onClick={toggleServices5}
                      className="text-gray-500 hover:text-gray-700 focus:outline-none px-4 py-2 w-[22rem] text-left"
                    >
                     Business Solutions 
                    </button>
                    {servicesOpen5 && (
                     <ul className="absolute left-0 mt-2 space-y-2 bg-white text-gray-700 border border-gray-300 rounded-md z-50">
                     <li>
                     <div className="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800">
                        <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                        >Overview</Link>
                        <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                        >Corporate Training</Link>
                        <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                        >Audit Services</Link>
                        <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                        >Coding Services</Link>
                        <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                        >Tools and Software</Link>
                        <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                        >Curriculum Licensing</Link>
                        <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                        >Instructor Certification</Link>
                        <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                        >Recruiting Services</Link>
                        <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                         >Resources</Link>
                      </div>
                     </li>
                   </ul>
                    )}
                    <button
                      onClick={toggleServices6}
                      className="text-gray-500 hover:text-gray-700 focus:outline-none px-4 py-2 w-[27rem] text-left"
                    >
                      Shop
                    </button>
                    {servicesOpen6 && (
                     <ul className="absolute left-0 mt-2 space-y-2 bg-white text-gray-700 border border-gray-300 rounded-md z-50 ">
                     <li>
                     <div className="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800">
                        <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg-grid-cols-2 w-[32rem]">
                          <div>
                            <span className="font-semibold">Medical Coding Books</span>
                            <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                            >2024 Coding Books PRE-ORDER</Link>
                            <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                            >2023 Coding Books SHIPPING NOW</Link>
                            <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                            >2023 Coders' Specialty Guides SHIPPING NOW</Link>
                            <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                            >2024 Coders' Specialty Guides PRE-ORDER</Link>
                            <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                            >Reference Guides</Link>
                            <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                            >Partner Publications</Link>
                            <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                            >Certification Study Guides</Link>
                            <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                            >Instructor Resources</Link>
                            <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                            >Publisher Request Form</Link>
                            <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                            >Bulk Discount Books</Link>
                            <span className="font-semibold"> Most Popular Books</span>
                            <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                            >CPT Books</Link>
                            <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                            >ICD-10 Books</Link>
                            <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                            >HCPCS Books</Link>
                            <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                            >Code Book Bundles</Link>
                          </div>
                          <div>
                            <span className="font-semibold">Medical Coding Software</span>
                            <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                            >Codify (Code Lookup)</Link>
                            <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                            >Practicode (Online Intern Program)</Link>
                            <span className="font-semibold">eNEWSLETTERS</span>
                            <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                            >Medical Coding eNewsletters</Link>
                            <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                            >Compliance eNewsletters</Link>
                            <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                            >Post-Acute eNewsletters</Link>
                            <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                            >Tech & Innovation in Healthcare eNewsletter NEW!</Link>
                            <span className="font-semibold">Other Items</span>
                            <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                            > Logo Merchandise</Link>
                            <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                            >Clearance Items</Link>
                          </div>
                        </div>
                       </div>
                     </li>
                   </ul>
                    )}
                    <button
                      onClick={toggleServices7}
                      className="text-gray-500 hover:text-gray-700 focus:outline-none px-4 py-2 w-[27rem] text-left"
                    >
                      Membership
                    </button>
                    {servicesOpen7 && (
                     <ul className="absolute left-0 mt-2 space-y-2 bg-white text-gray-700 border border-gray-300 rounded-md z-50 ">
                     <li>
                     <div className="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800">
                        <span className="font-semibold">Membership</span>
                        <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                        >Individual</Link>
                        <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                        >Corporate</Link>
                        <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                        >Fellowship</Link>
                        <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                        >Local Chapters</Link>
                        <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                        >Find a Chapter</Link>
                        <Link to="/Exam_Preparation"  className="block px-4 py-2 mt-2 text-sm  hover:text-orange-700 md:mt-0"
                        >Chapter Association</Link>
                      </div>
                     </li>
                   </ul>
                    )}
                  </div>
                </li>
              </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
