import React from 'react';
import Quick from './Quick';
const Locate_examination = () => {
  return (
    <div>
         <div className="grid place-items-center mt-16">
            <div className="2xl:w-8/12 xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 justify-center mx-auto">
            <h2 className='text-4xl my-3 font-semibold text-footsky'>Schedule Your Certification Exam</h2>
              <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 w-100 gap-8">
                <div className="bg-slate-200 p-5">
                  <h3 className="text-3xl mb-5 font-semibold">Purchase Exam Vouchers</h3>
                  <p className="text-lg text-why">
                    Exploring a career in medical coding and billing raises
                    questions, one being which certification should I choose?
                    Fortunately, identifying the certification that’s right for
                    you is easy once you see how they differ.
                  </p>
                  <div className="mt-5">
                    <button className="py-3 mb-0 rounded-full">
                      <a
                        href="https://tailwindui.com/documentation"
                        className="rounded-full text-teal-900"
                      >PURCHASE EXAM VOUCHERS{" "}<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>
                      </a>
                    </button>
                  </div>
                  
                </div>
                <div className="bg-slate-200 p-5">
                  <h3 className="text-3xl mb-5 font-semibold">
                    Prepare for a certification exam.
                  </h3>
                  <p className="text-lg">
                    Exploring a career in medical coding and billing raises
                    questions, one being which certification should I choose?
                    Fortunately, identifying the certification that’s right for
                    you is easy once you see how they differ.
                  </p>
                  <button className="py-3 rounded-full">
                    <a
                      href="https://tailwindui.com/documentation"
                      className="rounded-full text-teal-900"
                    >
                      REDEEM EXAM VOUCHERS{" "}<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>
                    </a>
                  </button>
                </div>
                <div className="bg-slate-200 p-5">
                  <h3 className="text-3xl mb-5 font-semibold">
                    Schedule your certification exam.
                  </h3>
                  <p className="text-lg">
                    Exploring a career in medical coding and billing raises
                    questions, one being which certification should I choose?
                    Fortunately, identifying the certification that’s right for
                    you is easy once you see how they differ.
                  </p>
                  <button className="py-3 rounded-full">
                    <a
                      href="https://tailwindui.com/documentation"
                      className="rounded-full text-teal-900"
                    >
                      LEARN MORE ABOUT CANCELING EXAMS{" "}<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>
                    </a>
                  </button>
                </div>
              </div>
            </div>
           
          </div>
          <Quick/>
        </div>
     
  )
}

export default Locate_examination