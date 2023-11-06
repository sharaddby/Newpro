import React from 'react';
import Quick from './Quick';
const Locate_examination = () => {
  return (
    <div>
         <div class="grid place-items-center mt-16">
            <div class="2xl:w-8/12 xl:w-8/12 lg:w-full md:w-full sm:w-full w-full justify-center mx-auto">
            <h2 className='text-4xl my-3 font-semibold text-footsky'>Schedule Your Certification Exam</h2>
                
              <div class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 w-100 gap-8">
                <div class="bg-slate-200 p-5">
                  <h3 class="text-3xl mb-5">Purchase Exam Vouchers</h3>
                  <p class="text-lg text-why">
                    Exploring a career in medical coding and billing raises
                    questions, one being which certification should I choose?
                    Fortunately, identifying the certification that’s right for
                    you is easy once you see how they differ.
                  </p>
                  <button class="px-12 py-3 rounded-full">
                    <a
                      href="https://tailwindui.com/documentation"
                      class="rounded-full text-xl text-teal-900"
                    >
                      PURCHASE EXAM VOUCHERS{" "}
                    </a>
                  </button>
                </div>
                <div class="bg-slate-200 p-5">
                  <h3 class="text-3xl mb-5">
                    Prepare for a certification exam.
                  </h3>
                  <p class="text-lg">
                    Exploring a career in medical coding and billing raises
                    questions, one being which certification should I choose?
                    Fortunately, identifying the certification that’s right for
                    you is easy once you see how they differ.
                  </p>
                  <button class="px-12 py-3 rounded-full">
                    <a
                      href="https://tailwindui.com/documentation"
                      class="rounded-full text-xl text-teal-900"
                    >
                      Get Started{" "}
                    </a>
                  </button>
                </div>
                <div class="bg-slate-200 p-5">
                  <h3 class="text-3xl mb-5">
                    Schedule your certification exam.
                  </h3>
                  <p class="text-lg">
                    Exploring a career in medical coding and billing raises
                    questions, one being which certification should I choose?
                    Fortunately, identifying the certification that’s right for
                    you is easy once you see how they differ.
                  </p>
                  <button class="px-12 py-3 rounded-full">
                    <a
                      href="https://tailwindui.com/documentation"
                      class="rounded-full text-xl text-teal-900"
                    >
                      Get Started{" "}
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