import React, { useState } from 'react';
import Packagetab from './Packagetab';
function Package() {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <div class="grid place-items-center">
        <div class="2xl:w-8/12 xl:8/12 lg:8/12 w-full justify-center mx-auto">
          <div class="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 w-100">
            <h3 className='text-3xl text-green-800 mb-5'>Certified Professional Coder (CPC®) and Biller (CPB™) Training</h3>
            <h4 className='text-2xl'> Step 1: Choose Your Package</h4>
          </div>
        </div>
        <div className="flex flex-col md:flex-row 2xl:w-8/12 xl:w-8/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 justify-center gap-8">
          <div className="2xl:basis-2/5 xl:basis-2/5 lg:basis-2/5 md:w-1/3 sm:w-1/3 w-full">
          </div>
          <div className="2xl:basis-1/5 xl:basis-1/5 lg:basis-1/5 md:w-1/3 sm:w-1/3 w-full">
            <p className='text-center'>SELF-PACED</p>
            <del>Non Members: $10,170.53</del>
            <p>Members: $3,475.00</p>

          </div>
          <div className="2xl:basis-1/5 xl:basis-1/5 lg:basis-1/5 md:w-1/3 sm:w-1/3 w-full">
            <p className='text-center'>SELF-PACEDS-ON EXPERIENCE</p>
            <del>Non Members: $10,170.53</del>
            <p>Members: $3,475.00</p>
          </div>
          <div className="2xl:basis-1/5 xl:basis-1/5 lg:basis-1/5 md:w-1/3 sm:w-1/3 w-full">
            <p className='text-center'>LIVE ONLINE</p>
            <p>+ HANDS-ON EXPERIENCE</p>
            <del>Non Members: $10,170.53</del>
            <p>Members: $3,475.00</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row 2xl:w-8/12 xl:w-8/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 justify-center gap-8 mb-5">
          <div className="2xl:basis-2/5 xl:basis-2/5 lg:basis-2/5 md:w-1/3 sm:w-1/3 w-full">
            <p>CPC & CPB Preparation Courses +FREE Career Development Modules</p>
          </div>
          <div className="2xl:basis-1/5 xl:basis-1/5 lg:basis-1/5 md:w-1/3 sm:w-1/3 w-full">
            <svg class="w-6 h-6 text-green-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z" />
            </svg>
          </div>
          <div className="2xl:basis-1/5 xl:basis-1/5 lg:basis-1/5 md:w-1/3 sm:w-1/3 w-full">
            <svg class="w-6 h-6 text-green-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z" />
            </svg>
          </div>
          <div className="2xl:basis-1/5 xl:basis-1/5 lg:basis-1/5 md:w-1/3 sm:w-1/3 w-full">
            <svg class="w-6 h-6 text-green-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col md:flex-row 2xl:w-8/12 xl:w-8/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 justify-center gap-8 mb-5">
          <div className="2xl:basis-2/5 xl:basis-2/5 lg:basis-2/5 md:w-1/3 sm:w-1/3 w-full">
            <p>Student Codify</p>
          </div>
          <div className="2xl:basis-1/5 xl:basis-1/5 lg:basis-1/5 md:w-1/3 sm:w-1/3 w-full">
            <svg class="w-6 h-6 text-green-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z" />
            </svg>
          </div>
          <div className="2xl:basis-1/5 xl:basis-1/5 lg:basis-1/5 md:w-1/3 sm:w-1/3 w-full">
            <svg class="w-6 h-6 text-green-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z" />
            </svg>
          </div>
          <div className="2xl:basis-1/5 xl:basis-1/5 lg:basis-1/5 md:w-1/3 sm:w-1/3 w-full">
            <svg class="w-6 h-6 text-green-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col md:flex-row 2xl:w-8/12 xl:w-8/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 justify-center gap-8 mb-5">
          <div className="2xl:basis-2/5 xl:basis-2/5 lg:basis-2/5 md:w-1/3 sm:w-1/3 w-full">
            <p>CPC & CPB Online Practice Exams</p>
          </div>
          <div className="2xl:basis-1/5 xl:basis-1/5 lg:basis-1/5 md:w-1/3 sm:w-1/3 w-full">
            <svg class="w-6 h-6 text-green-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z" />
            </svg>
          </div>
          <div className="2xl:basis-1/5 xl:basis-1/5 lg:basis-1/5 md:w-1/3 sm:w-1/3 w-full">
            <svg class="w-6 h-6 text-green-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z" />
            </svg>
          </div>
          <div className="2xl:basis-1/5 xl:basis-1/5 lg:basis-1/5 md:w-1/3 sm:w-1/3 w-full">
            <svg class="w-6 h-6 text-green-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col md:flex-row 2xl:w-8/12 xl:w-8/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 justify-center gap-8 mb-5">
          <div className="2xl:basis-2/5 xl:basis-2/5 lg:basis-2/5 md:w-1/3 sm:w-1/3 w-full">
            <p>CPC & CPB Exam</p>
          </div>
          <div className="2xl:basis-1/5 xl:basis-1/5 lg:basis-1/5 md:w-1/3 sm:w-1/3 w-full">
            <svg class="w-6 h-6 text-green-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z" />
            </svg>
          </div>
          <div className="2xl:basis-1/5 xl:basis-1/5 lg:basis-1/5 md:w-1/3 sm:w-1/3 w-full">
            <svg class="w-6 h-6 text-green-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z" />
            </svg>
          </div>
          <div className="2xl:basis-1/5 xl:basis-1/5 lg:basis-1/5 md:w-1/3 sm:w-1/3 w-full">
            <svg class="w-6 h-6 text-green-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col md:flex-row 2xl:w-8/12 xl:w-8/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 justify-center gap-8 mb-5">
          <div className="2xl:basis-2/5 xl:basis-2/5 lg:basis-2/5 md:w-1/3 sm:w-1/3 w-full">
            <p>FREE Code Books</p>
          </div>
          <div className="2xl:basis-1/5 xl:basis-1/5 lg:basis-1/5 md:w-1/3 sm:w-1/3 w-full">
            <svg class="w-6 h-6 text-green-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z" />
            </svg>
          </div>
          <div className="2xl:basis-1/5 xl:basis-1/5 lg:basis-1/5 md:w-1/3 sm:w-1/3 w-full">
            <svg class="w-6 h-6 text-green-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z" />
            </svg>
          </div>
          <div className="2xl:basis-1/5 xl:basis-1/5 lg:basis-1/5 md:w-1/3 sm:w-1/3 w-full">
            <svg class="w-6 h-6 text-green-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col md:flex-row 2xl:w-8/12 xl:w-8/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 justify-center gap-8 mb-5">
          <div className="2xl:basis-2/5 xl:basis-2/5 lg:basis-2/5 md:w-1/3 sm:w-1/3 w-full">
            <p>CPC Exam Review</p>
          </div>
          <div className="2xl:basis-1/5 xl:basis-1/5 lg:basis-1/5 md:w-1/3 sm:w-1/3 w-full">
            <svg class="w-6 h-6 text-green-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z" />
            </svg>
          </div>
          <div className="2xl:basis-1/5 xl:basis-1/5 lg:basis-1/5 md:w-1/3 sm:w-1/3 w-full">
            <svg class="w-6 h-6 text-green-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z" />
            </svg>
          </div>
          <div className="2xl:basis-1/5 xl:basis-1/5 lg:basis-1/5 md:w-1/3 sm:w-1/3 w-full">
            <svg class="w-6 h-6 text-green-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col md:flex-row 2xl:w-8/12 xl:w-8/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 justify-center gap-8 mb-5">
          <div className="2xl:basis-2/5 xl:basis-2/5 lg:basis-2/5 md:w-1/3 sm:w-1/3 w-full">
            <p>Practicode CPC-A Practicum</p>
          </div>
          <div className="2xl:basis-1/5 xl:basis-1/5 lg:basis-1/5 md:w-1/3 sm:w-1/3 w-full">
            <svg class="w-6 h-6 text-green-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z" />
            </svg>
          </div>
          <div className="2xl:basis-1/5 xl:basis-1/5 lg:basis-1/5 md:w-1/3 sm:w-1/3 w-full">
            <svg class="w-6 h-6 text-green-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z" />
            </svg>
          </div>
          <div className="2xl:basis-1/5 xl:basis-1/5 lg:basis-1/5 md:w-1/3 sm:w-1/3 w-full">
            <svg class="w-6 h-6 text-green-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col md:flex-row 2xl:w-8/12 xl:w-8/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 justify-center gap-8">
          <div className="2xl:basis-2/5 xl:basis-2/5 lg:basis-2/5 md:w-1/3 sm:w-1/3 w-full">
          </div>
          <div className="2xl:basis-1/5 xl:basis-1/5 lg:basis-1/5 md:w-1/3 sm:w-1/3 w-full mb-5">
            <del>$10,170.53</del>
            <p>$3,475.00</p>
            <p>Through Nov 30th</p>
            <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-16 rounded"
            >Select</button>
          </div>
          <div className="2xl:basis-1/5 xl:basis-1/5 lg:basis-1/5 md:w-1/3 sm:w-1/3 w-full mb-5">
            <del>$10,170.53</del>
            <p>$3,475.00</p>
            <p>Through Nov 30th</p>
            <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-16 rounded"
            >Select</button>
          </div>
          <div className="2xl:basis-1/5 xl:basis-1/5 lg:basis-1/5 md:w-1/3 sm:w-1/3 w-full mb-5">
            <del>$10,170.53</del>
            <p>$3,475.00</p>
            <p>Through Nov 30th</p>
            <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-16 rounded"
            >Select</button>
          </div>
        </div>
      </div>
      <div class="grid place-items-center">
        <div class="2xl:w-8/12 xl:8/12 lg:8/12 w-full justify-center mx-auto">
          <div class="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 w-100">
            <h4 className='text-2xl'>Step 2: Select Your Start Date</h4>
          </div>
        </div>
      </div>
      <div class="flex items-center">
        <div className="flex flex-col md:flex-row 2xl:w-8/12 xl:w-8/12 lg:w-8/12 md:w-11/12 sm:w-11/12 w-11/12 justify-center mb-5">
          <div className="2xl:basis-2/5 xl:basis-2/5 lg:basis-2/5 md:w-1/3 sm:w-1/3 w-full">
            <input
              type="checkbox"
              className="h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
              checked={isChecked}
              onChange={toggleCheckbox}
            />
            <label className="ml-2 text-gray-700">2024</label>
          </div>
        </div>
      </div>
      <div class="grid place-items-center">
        <div class="2xl:w-8/12 xl:8/12 lg:8/12 w-full justify-center mx-auto">
          <div class="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 w-100">
            <h4 className='text-2xl'>Step 3: Popular Add-Ons to Consider</h4>
          </div>
        </div>
      </div>
      <div class="flex items-center">
        <div className="flex flex-col md:flex-row 2xl:w-8/12 xl:w-8/12 lg:w-8/12 md:w-11/12 sm:w-11/12 w-11/12 justify-center mb-5">
          <div className="2xl:basis-2/5 xl:basis-2/5 lg:basis-2/5 md:w-1/3 sm:w-1/3 w-full">
            <input
              type="checkbox"
              className="h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
              checked={isChecked}
              onChange={toggleCheckbox}
            />
            <label className="ml-2 text-gray-700">AAPC Student Membership (Join and get exclusive member pricing)
              <del>$205.00 $140.00</del></label>
          </div>
        </div>
      </div>
      <div class="flex items-center">
        <div className="flex flex-col md:flex-row 2xl:w-8/12 xl:w-8/12 lg:w-8/12 md:w-11/12 sm:w-11/12 w-11/12 justify-center mb-5">
          <div className="2xl:basis-2/5 xl:basis-2/5 lg:basis-2/5 md:w-1/3 sm:w-1/3 w-full">
            <input
              type="checkbox"
              className="h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
              checked={isChecked}
              onChange={toggleCheckbox}
            />
             <p>Required Code Books</p>
             <p>Exam Book Bundle (CPT® + HCPCS + ICD-10-CM)</p>
             <p>$259.99 (Members: $229.99 )</p>
             <p>FREE with training package</p> 
          </div>
        </div>
      </div>
      <div class="flex items-center">
        <div className="flex flex-col md:flex-row 2xl:w-8/12 xl:w-8/12 lg:w-8/12 md:w-11/12 sm:w-11/12 w-11/12 justify-center mb-5">
          <div className="2xl:basis-2/5 xl:basis-2/5 lg:basis-2/5 md:w-1/3 sm:w-1/3 w-full">
            <input
              type="checkbox"
              className="h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
              checked={isChecked}
              onChange={toggleCheckbox}
            />
             <p>Recommended Prerequisites Online Medical Terminology + Anatomy Bundle + Pathophysiology Bundle
            </p>
             <p>$1,842.90 (Members: $995.00)</p>
            </div>
        </div>
      </div>
      <div class="grid place-items-center">
        <div class="2xl:w-8/12 xl:8/12 lg:8/12 w-full justify-center mx-auto">
          <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 w-100 bg-gray-100">
            <p className='text-md pl-10'>Enroll now, pay over time. We offer a variety of options to finance your 
            education with modest down payments and easy monthly installments. Review your options at checkout.</p>
          </div>
        </div>
      </div>
      <div class="grid place-items-center">
        <div class="2xl:w-8/12 xl:8/12 lg:8/12 w-full justify-center mx-auto">
          <div class="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 w-100">
            <h4 className='text-2xl'>Step 4: Add to Cart</h4>
          </div>
        </div>
      </div>
      <div class="grid place-items-center">
        <div class="2xl:w-8/12 xl:8/12 lg:8/12 w-full justify-center mx-auto">
          <div class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 w-100">
            <div className='bg-gray-100'>
              <p>Package Price:</p>
              <p>Add-ons:</p>
              <p>Member Discount:</p>
              <p className='text-red-400'>Total Member Price through Nov 30th :</p>
              <button className="bg-blue-500 hover:bg-blue-500 text-white font-bold py-2 px-8 rounded my-5"
              >ENROLL NOW</button>
            </div>
            <div className='bg-gray-100'>
              <p>$10,469.53</p>
              <p>$0.00</p>
              <p>-$6,794.53</p>
              <p>$3,675.00</p>
            </div>
         </div>
        </div>
      </div>
      <div class="grid place-items-center">
        <div class="2xl:w-8/12 xl:8/12 lg:8/12 w-full justify-center mx-auto">
          <div class="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 w-100 my-5">
            <p>Have a Question? Call 877-290-0440 or have a career counselor call you.</p>
          </div>
        </div>
      </div>
      <div class="grid place-items-center">
        <div class="2xl:w-8/12 xl:8/12 lg:8/12 w-full justify-center mx-auto">
          <div class="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 w-100">
            <Packagetab/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Package;
