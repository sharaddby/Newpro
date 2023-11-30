import React from 'react';
import Certificattab from './Certificattab';
import Bluefooter from './Bluefooter';
const Certifications = () => {
  return (
    <div>
          <div className="grid w-full bg-green-800 bg-cover bg-center" style={{ backgroundImage: 'url("../ris.webp")' }}>
                <div className="2xl:w-8/12 xl:w-8/12 lg:w-8/12 md:w-8/12 sm:w-8/12 w-8/12 justify-center mx-auto py-28">
                    <p className="text-white">Exam Prepration</p>
                    <h3 className="text-white text-3xl">people learn best in different ways.<br /> We let you choose yours.</h3>
                </div>
            </div>
        <div className="grid place-items-center mt-10">
            <div className="2xl:w-8/12 xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 justify-center mx-auto ">
                <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 w-100 gap-8">
                    <div className="bg-slate-200 p-5">
                        <h1 className="text-3xl mb-5">Virtual instructor-led (Popular)</h1>
                        <ul className="text-lg list-disc pl-10">
                            <li>Exploring a career in medical coding and billing raises questions</li>
                            <li>one being which certification should I choose? Fortunately, identifying the </li>
                            <li>certification that’s right for you is easy once you see how they differ.</li>
                        </ul>
                    </div>
                    <div className="bg-slate-200 p-5">
                        <h1 className="text-3xl mb-5">Self-paced instruction</h1>
                        <ul className="text-lg list-disc pl-10">
                            <li>Exploring a career in medical coding and billing raises questions</li>
                            <li>one being which certification should I choose? Fortunately, identifying the </li>
                            <li>certification that’s right for you is easy once you see how they differ.</li>
                        </ul>
                     </div>
                </div>
            </div>
        </div>
        <div className="grid place-items-center mt-5">
        <div className="flex flex-col  md:flex-row 2xl:w-8/12 xl:w-8/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 gap-8">
          <div className="md:w-4/12 w-full">
            <img src={"../im.webp"} alt="logo" />
          </div>
          <div className="md:w-8/12 w-full">
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
                  Get Started{" "}
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
         <Certificattab/>
        <Bluefooter />
    </div>
  );
};

export default Certifications;
