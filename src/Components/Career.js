import React from 'react'
import Slider1 from '../Components/Slider1';
import Bluefooter from './Bluefooter';
const Career = () => {
  return (
    <div>
        <div class="grid w-full bg-green-800 bg-cover bg-center h-96" style={{ backgroundImage: 'url("../hbg.webp")' }}>
            <div class="2xl:w-8/12 xl:w-8/12 lg:w-full md:w-full sm:w-full w-full justify-center mx-auto">
                <p class="text-white pt-24">EXAM pREpARATION</p>
                <p class="text-white text-5xl">people learn best in different ways.<br/> We let you choose yours.</p>
            </div>
        </div>
    <div class="grid place-items-center">
        <div class="w-full justify-center mx-auto">
            <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 w-100 bg-gray-400 lg:mt-0 md:mt-72 sm:mt-72">
                <div class="pb-5 pt-5 2xl:pl-72 xl:pl-72 xl:mt-0 lg:mt-0">
                    <p class="text-white text-lg text-center">
                        Did you know AApC provides customized training for medical providers, coders, billers,
                        auditors, compliance professionals and practice managers.</p>
                </div>
                <div class="pb-5 pt-5">
                    <p class="text-white text-lg text-center">
                        Ready to become an AApC-Approved Instructor?</p>
                </div>
            </div>
        </div>
    </div>
    <div class="grid place-items-center mt-10px-10 py-10">
        <div class="2xl:w-9/12 xl:w-9/12 lg:w-full md:w-full sm:w-full w-full justify-center mx-auto">
            <div class="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 w-100 justify-center mx-auto">
                <Slider1 />
            </div>
        </div>
    </div>
    <div className="grid place-items-center mt-5">
        <div className="2xl:w-8/12 xl:w-8/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 justify-center mx-auto">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 w-100 gap-8">
            <div className="bg-slate-200 p-5 hover:shadow-2xl">
              <h3 className="text-3xl mb-5">
                Find the right certification in medical coding.
              </h3>
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
              <h3 className="text-3xl mb-5">Prepare for a certification exam.</h3>
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
      <div className="grid place-items-center mt-5">
        <div className="2xl:w-8/12 xl:w-8/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 justify-center mx-auto">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 w-100 gap-8">
            <div className="bg-slate-200 p-5 hover:shadow-2xl">
              <h3 className="text-3xl mb-5">
                Find the right certification in medical coding.
              </h3>
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
              <h3 className="text-3xl mb-5">Prepare for a certification exam.</h3>
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

export default Career