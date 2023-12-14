import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  const [servicesOpen3, setservicesOpen3] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleServices3 =()=>{
    setservicesOpen3(!servicesOpen3);
    };
  return ( 
    <nav className="bg-white p-6">
       <div className="grid place-items-center">
        <div className="flex items-center place-content-around 2xl:w-10/12 xl:w-10/12 lg:w-full md:w-full sm:w-full w-full">
          <div className="flex xl:w:2/5">
             <img src="../aapc-logo-new.svg" alt="..." className='w-24 h-20'/>
          </div>
         
          <div className="hidden md:block xl:w:3/5">
            <ul className="flex space-x-6">
               <li>
               
              <div className="relative group add-to-cart">
                <Link to="./" className="text-footsky hover:text-theme  focus:outline-none px-4 py-2 text-left"
                    >Home</Link>
                <button
                      onClick={toggleServices3}
                      className="text-footsky hover:text-theme  focus:outline-none px-4 py-2 text-left"
                    >
                     Billing/Coding 
                    </button>
                    {servicesOpen3 && (
                     <ul className="w-[50rem] absolute mt-2 space-y-2 bg-white text-gray-700 border border-gray-300 rounded-md z-50">
                     <li>
                     <div className="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800">
                        <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg-grid-cols-4 md-grid-cols-4 sm-grid-cols-4 grid-cols-4">
                          <div>
                          <Link to="/Conference" className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                             >Multi-Specialty</Link>
                            <Link to="/Conference" className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                             >Multi-Specialty</Link>
                            <Link to="/Conference" className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                              >Dental Practice</Link>
                            <Link to="/Conference" className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                              >Cardiology</Link>
                             <Link to="/Conference" className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                             >Anesthesia</Link>
                             <Link to="/Conference" className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                             >Management</Link>
                             <Link to="/Conference" className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                             >E & M/Nurses</Link>
                              <Link to="/Conference"  className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                            >Pulmonology</Link>
                              <Link to="/Conference"  className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                            >Ob-Gyn</Link>
                            <Link to="/Conference"  className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                            >Podiatry</Link>
                             </div>
                           <div>
                           <Link to="/Conference"  className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                            >Dermatology</Link>
                            <Link to="/Conference"  className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                             >Emergency Medicine</Link>
                            <Link to="/Conference"  className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                             >Family Practice</Link>
                            <Link to="/Conference"  className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                              >Gastroenterology</Link>
                            <Link to="/Conference"  className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                             >General Surgery</Link>
                            <Link to="/Conference"  className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                            >Internal Medicine</Link>
                             <Link to="/Conference"  className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                            >Mental Health</Link>
                             <Link to="/Conference"  className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                            >Neurology</Link>
                             <Link to="/Conference"  className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                            >Neurosurgery</Link>
                          </div>
                          <div>
                           <Link to="/Conference"  className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                            >Oncology</Link>
                            <Link to="/Conference"  className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                            >Ophthalmology</Link>
                            <Link to="/Conference"  className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                            >Optometry</Link>
                            <Link to="/Conference"  className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                             >Orthopedics</Link>
                            <Link to="/Conference"  className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                            >Otolaryngology</Link>
                            <Link to="/Conference"  className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                            >Pain Management</Link>
                            <Link to="/Conference"  className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                             >Pathology</Link>
                            <Link to="/Conference"  className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                            >Pediatrics</Link>
                          </div>
                         <div>
                           <Link to="/Conference"  className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                             >Radiology</Link>
                            <Link to="/Conference"  className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                            >Urology</Link>
                            <Link to="/Conference"  className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                            >Wound Care</Link>
                            <Link to="/Conference" className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                             >ICD-10 Training</Link>
                             <Link to="/Conference" className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                             >Dental Practice</Link>
                             <Link to="/Conference" className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                             >All Certification Courses</Link>
                              <Link to="/Conference" className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                              >Modifiers</Link>
                               <Link to="/Conference" className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                             >2015 Coding Updates</Link>
                          </div>
                        </div>
                      </div>
                     </li>
                   </ul>
                    )}
                    <Link to="/Conference" className="text-footsky hover:text-theme  focus:outline-none px-4 py-2 text-left"
                    >Home Health</Link>
                    <Link to="/Conference" className="text-footsky hover:text-theme  focus:outline-none px-4 py-2 text-left"
                    >Hospice</Link>
                     <Link to="/Conference" className="text-footsky hover:text-theme  focus:outline-none px-4 py-2 text-left"
                    >Long Term Care</Link>
                     <Link to="/Conference" className="text-footsky hover:text-theme  focus:outline-none px-4 py-2 text-left"
                    >Hospitals</Link>
                     <Link to="/Conference" className="text-footsky hover:text-theme  focus:outline-none px-4 py-2 text-left"
                    >Compliance/HIPAA</Link>
                    <Link to="/Conference" className="text-footsky hover:text-theme  focus:outline-none px-4 py-2 text-left"
                    >ASCs</Link>
                     <Link to="/Conference" className="text-footsky hover:text-theme  focus:outline-none px-4 py-2 text-left"
                    >Pharma & Biotech</Link>
                     <Link to="/Conference" className="text-footsky hover:text-theme  focus:outline-none px-4 py-2 text-left"
                    >Food Safety</Link>
                    <Link to="/Conference" className="text-footsky hover:text-theme  focus:outline-none px-4 py-2 text-left"
                    >Cart</Link>
                 </div>
                 
              </li>
            </ul>
          </div>
           {/* Mobile */}
           <div className="md:hidden">
            <button
              onClick={toggleDropdown}
              className="text-footsky hover:text-theme  focus:outline-none"
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
                      onClick={toggleServices3}
                      className="text-footsky hover:text-theme  focus:outline-none px-4 py-2 text-left"
                    >
                     Billing/Coding 
                    </button>
                    {servicesOpen3 && (
                     <ul className="w-[50rem] absolute mt-2 space-y-2 bg-white text-gray-700 border border-gray-300 rounded-md z-50">
                     <li>
                     <div className="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800">
                        <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg-grid-cols-4 md-grid-cols-4 sm-grid-cols-4 grid-cols-1">
                          <div>
                            <Link to="/Conference" className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                             >Multi-Specialty</Link>
                            <Link to="/Conference" className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                              >Dental Practice</Link>
                            <Link to="/Conference" className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                              >Cardiology</Link>
                             <Link to="/Conference" className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                             >Anesthesia</Link>
                             <Link to="/Conference" className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                             >Management</Link>
                             <Link to="/Conference" className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                             >E & M/Nurses</Link>
                              <Link to="/Conference"  className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                            >Pulmonology</Link>
                              <Link to="/Conference"  className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                            >Ob-Gyn</Link>
                            <Link to="/Conference"  className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                            >Podiatry</Link>
                             </div>
                           <div>
                           <Link to="/Conference"  className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                            >Dermatology</Link>
                            <Link to="/Conference"  className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                             >Emergency Medicine</Link>
                            <Link to="/Conference"  className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                             >Family Practice</Link>
                            <Link to="/Conference"  className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                              >Gastroenterology</Link>
                            <Link to="/Conference"  className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                             >General Surgery</Link>
                            <Link to="/Conference"  className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                            >Internal Medicine</Link>
                             <Link to="/Conference"  className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                            >Mental Health</Link>
                             <Link to="/Conference"  className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                            >Neurology</Link>
                             <Link to="/Conference"  className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                            >Neurosurgery</Link>
                          </div>
                          <div>
                           <Link to="/Conference"  className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                            >Oncology</Link>
                            <Link to="/Conference"  className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                            >Ophthalmology</Link>
                            <Link to="/Conference"  className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                            >Optometry</Link>
                            <Link to="/Conference"  className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                             >Orthopedics</Link>
                            <Link to="/Conference"  className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                            >Otolaryngology</Link>
                            <Link to="/Conference"  className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                            >Pain Management</Link>
                            <Link to="/Conference"  className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                             >Pathology</Link>
                            <Link to="/Conference"  className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                            >Pediatrics</Link>
                          </div>
                         <div>
                           <Link to="/Conference"  className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                             >Radiology</Link>
                            <Link to="/Conference"  className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                            >Urology</Link>
                            <Link to="/Conference"  className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                            >Wound Care</Link>
                            <Link to="/Conference" className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                             >ICD-10 Training</Link>
                             <Link to="/Conference" className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                             >Dental Practice</Link>
                             <Link to="/Conference" className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                             >All Certification Courses</Link>
                              <Link to="/Conference" className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                              >Modifiers</Link>
                               <Link to="/Conference" className="block px-4 py-2 mt-2 text-sm  hover:text-theme md:mt-0"
                             >2015 Coding Updates</Link>
                          </div>
                        </div>
                      </div>
                     </li>
                   </ul>
                    )}
                    <Link to="/Conference" className="text-footsky hover:text-theme  focus:outline-none px-4 py-2 text-left"
                    >Home Health</Link>
                    <Link to="/Conference" className="text-footsky hover:text-theme  focus:outline-none px-4 py-2 text-left"
                    >Hospice</Link>
                      <Link to="/Conference" className="text-footsky hover:text-theme  focus:outline-none px-4 py-2 text-left"
                    >Long Term Care</Link>
                      <Link to="/Conference" className="text-footsky hover:text-theme  focus:outline-none px-4 py-2 text-left"
                    >Hospitals</Link>
                      <Link to="/Conference" className="text-footsky hover:text-theme  focus:outline-none px-4 py-2 text-left"
                    >Compliance/HIPAA</Link>
                    <Link to="/Conference" className="text-footsky hover:text-theme  focus:outline-none px-4 py-2 text-left"
                    >ASCs</Link>
                      <Link to="/Conference" className="text-footsky hover:text-theme  focus:outline-none px-4 py-2 text-left"
                    >Pharma & Biotech</Link>
                      <Link to="/Conference" className="text-footsky hover:text-theme  focus:outline-none px-4 py-2 text-left"
                    >Food Safety</Link>
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
};

export default Navbar;
