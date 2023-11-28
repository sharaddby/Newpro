import React from 'react';
import Bluefooter from './Bluefooter';
const group_webinars = () => {
    return (
        <div>
            <div class="grid w-full">
                <img src="../banner.jpg" alt="..." class="w-full" />
            </div>
            <div class="grid place-items-center mt-10">
                <div class="2xl:w-8/12 xl:w-8/12 lg:w-full md:w-full sm:w-full w-full justify-center mx-auto p-5">
                    <p class="text-lg">Exploring a career in medical coding and billing raises questions, one being
                        which certification should I choose? Fortunately, identifying the certification that’s right
                        for you is easy once you see how they differ.
                    </p>
                    <p class="text-lg">Exploring a career in medical coding and billing raises questions, one being
                        which certification should I choose? Fortunately, identifying the certification that’s right
                        for you is easy once you see how they differ.Exploring a career in medical coding and billing
                        raises questions, one being which certification should I choose? Fortunately, identifying the
                        certification that’s right for you is easy once you see how they differ.
                    </p>
                </div>
            </div>
            <div class="grid place-items-center mt-10">
                <div class="2xl:w-8/12 xl:w-8/12 lg:w-full md:w-full sm:w-full w-full justify-center mx-auto ">
                    <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 w-100">
                        <div className='my-5'>
                            <img src="./ewr.webp" alt="fd"/>
                        </div>
                        <div class="p-5">
                            <h1 class="text-3xl mb-5">Webinars</h1>
                            <p class="text-md">Hosted by qualified healthcare professionals, our webinars dive deep into a variety of hot topics such as emerging technologies, 
                            E/M Guideline Changes, Telehealth and more. Keep your staff up to date on the latest CPT®, ICD-10, HCPCS, and Physician Final Rule updates. Plus, your 
                            team can enjoy unlimited access to our library of nearly 300 on-demand webinars as well as the opportunity to participate in quarterly "Ask & Learn" panel discussions.</p>
                            <button class="px-12 py-3 rounded-full">
                                <a href="https://tailwindui.com/documentation"
                                    class="rounded-full text-xl text-teal-900">Get Started </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid place-items-center mt-10">
                <div class="2xl:w-8/12 xl:w-8/12 lg:w-full md:w-full sm:w-full w-full justify-center mx-auto ">
                    <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 w-100">
                         <div class="p-5">
                            <h1 class="text-3xl mb-5">Webinars</h1>
                            <p class="text-md">Hosted by qualified healthcare professionals, our webinars dive deep into a variety of hot topics such as emerging technologies, 
                            E/M Guideline Changes, Telehealth and more. Keep your staff up to date on the latest CPT®, ICD-10, HCPCS, and Physician Final Rule updates. Plus, your 
                            team can enjoy unlimited access to our library of nearly 300 on-demand webinars as well as the opportunity to participate in quarterly "Ask & Learn" panel discussions.</p>
                            <button class="px-12 py-3 rounded-full">
                                <a href="https://tailwindui.com/documentation"
                                    class="rounded-full text-xl text-teal-900">Get Started </a>
                            </button>
                        </div>
                        <div className='my-5'>
                            <img src="./ewr.webp" alt="fd"/>
                        </div>
                    </div>
                </div>
            </div>
            <Bluefooter />
        </div>
    )
}

export default group_webinars