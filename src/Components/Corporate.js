import React from 'react';
import Bluefooter from './Bluefooter';
import Bluebanner from './Bluebanner';
const Corporate = () => {
  return (
    <div>
         <div className="grid w-full bg-cover bg-center" style={{ backgroundImage: 'url("../ris.webp")' }}>
                <div className="2xl:w-8/12 xl:w-8/12 lg:w-8/12 md:w-8/12 sm:w-8/12 w-8/12 justify-center mx-auto py-20">
                    <p className="text-white">Corporate</p>
                    <h3 className="text-white text-3xl">AAPC empowers you to achieve your dreams<br /> with certifications for every <br />stage of your career.</h3>
                </div>
            </div>
            <div className="w-full justify-center mx-auto bg-gray-200">
                <div className="flex flex-col 2xl:w-8/12 xl:w-full lg:w-full md:w-full sm:w-full w-full justify-center mx-auto">
                    <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 w-100 bg-gray-200 mt-0">
                        <div className="py-5 col-span-2">
                            <p className="text-gray-700 text-lg text-center">
                                Take 50% off everything you need to get certified. Pay over time starting at 0% financing.</p>
                        </div>
                        <div className="sm:pt-4">
                            <button className="text-green-700 hover:text-green-800 font-bold py-2 px-4 rounded text-lg">
                                Save Now<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        <div className="grid place-item-center">
            <div className="2xl:w-8/12 xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 mx-auto mt-36">
                <h1 className="2xl:text-3xl font-semibold">
                    Invest in Your Team's Future: Equip Your Employees for Success
                </h1>
                <p className="2xl:text-xl">Empower your employees with the tools and knowledge to succeed in their roles as
                    healthcare business professionals with AAPC Corporate Team Training. Our experts will evaluate your
                    specific needs and provide training solutions that will equip your team with the skills to succeed in
                    today's complex healthcare environment.</p>
            </div>
        </div>
        <div className="grid place-item-center">
            <div className="2xl:w-8/12 xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 mx-auto mt-20">
                <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
                    <div>
                        <p className="2xl:text-xl font-semibold">Our trainings are customized to your practice. </p>
                        <p>And while the options are nearly limitless, here are our most popular training topics: </p>
                        <ul className="list-disc pl-10">
                            <li>Denial Management & Resolution  </li>
                            <li>Revenue Cycle Management </li>
                            <li>Post-Audit Education​ </li>
                            <li>Chronic Care Management​ </li>
                            <li>Code Set & Regulatory Changes​  </li>
                            <li>Provider Onboarding</li>
                            <li>Targeted Areas for Opportunity​</li>
                            <li>Group Certification ​</li>
                            <li>Telehealth ​</li>
                            <li>Billing & Coding </li>
                        </ul>
                    </div>
                    <div><iframe className="w-full aspect-video hover:aspect-square" title="hey"
                            src="https://www.youtube.com/watch?v=DJixBGV2zEc"></iframe>
                    </div>
                </div>
            </div>
        </div>

        <div className="font-serif">
            <div className="grid place-items-center mt-16">
                <div className="2xl:w-8/12 xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 justify-center mx-auto">
                    <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 w-100 gap-8">
                        <div className="bg-slate-200 p-5">
                            <h1 className="text-3xl mb-5">Career Advancement.</h1>
                            <p className="text-lg text-why">Exploring a career in medical coding and billing raises questions,
                                one being
                                which certification should I choose? Fortunately, identifying the certification that’s right
                                for
                                you is easy once you see how they differ.</p>
                            <button className="px-12 py-3 rounded-full">
                                <a href="https://tailwindui.com/documentation"
                                    className="rounded-full text-xl text-teal-900">Get Started </a>
                            </button>
                        </div>
                        <div className="bg-slate-200 p-5">
                            <h1 className="text-3xl mb-5">Student Success</h1>
                            <p className="text-lg">Exploring a career in medical coding and billing raises questions, one being
                                which certification should I choose? Fortunately, identifying the certification that’s right
                                for
                                you is easy once you see how they differ.</p>
                            <button className="px-12 py-3 rounded-full">
                                <a href="https://tailwindui.com/documentation"
                                    className="rounded-full text-xl text-teal-900">Get Started </a>
                            </button>
                        </div>
                        <div className="bg-slate-200 p-5">
                            <h1 className="text-3xl mb-5">Collaboration Opportunities</h1>
                            <p className="text-lg">Exploring a career in medical coding and billing raises questions, one being
                                which certification should I choose? Fortunately, identifying the certification that’s right
                                for
                                you is easy once you see how they differ.</p>
                            <button className="px-12 py-3 rounded-full">
                                <a href="https://tailwindui.com/documentation"
                                    className="rounded-full text-xl text-teal-900">Get Started </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid place-items-center mt-10">
                <div className="2xl:w-8/12 xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 justify-center mx-auto ">
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 w-100 gap-8">
                        <div className="bg-slate-200 p-5">
                            <h1 className="text-3xl mb-5">Teaching Resources</h1>
                            <p className="text-lg">Exploring a career in medical coding and billing raises questions, one being
                                which certification should I choose? Fortunately, identifying the certification that’s right
                                for
                                you is easy once you see how they differ.</p>
                            <button className="px-12 py-3 rounded-full">
                                <a href="https://tailwindui.com/documentation"
                                    className="rounded-full text-xl text-teal-900">Get Started </a>
                            </button>
                        </div>
                        <div className="bg-slate-200 p-5">
                            <h1 className="text-3xl mb-5">Networking and Support</h1>
                            <p className="text-lg">Exploring a career in medical coding and billing raises questions, one being
                                which certification should I choose? Fortunately, identifying the certification that’s right
                                for
                                you is easy once you see how they differ.</p>
                            <button className="px-12 py-3 rounded-full">
                                <a href="https://tailwindui.com/documentation"
                                    className="rounded-full text-xl text-teal-900">Get Started </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid place-items-center mt-10">
                <div className="2xl:w-8/12 xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 justify-center mx-auto mt-20 mb-20">
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 w-100 gap-8">
                        <div>
                            <h1 className="pb-10 text-3xl">Here’s how it works:</h1>
                            <ul>
                                <li> 1. <span className="font-bold">We build</span> a team of certified subject matter experts
                                    who have experience with your specialty and facility type.
                                </li>
                                <li>2. <span className="font-bold"> We identify</span> any performance gaps, inaccuracies, or
                                    inefficiencies by performing a thorough review of your documentation, operations, denial
                                    reports, frequency reports, and EHR processes.
                                </li>
                                <li>3. <span className="font-bold"> We create a plan</span> that’s customized to your
                                    organization’s unique challenges and goals. And it’s always tailored to your staff,
                                    software, and workflows. 
                                </li>4. <span className="font-bold">We train your team</span>, equipping them with the knowledge
                                and expertise to resolve issues, increase productivity, and improve the overall performance
                                of your organization.  
                                <li>The result? A more efficient revenue cycle that ensures optimal, accurate
                                    reimbursement.  
                                </li>
                            </ul>
                            <button className="rounded-none bg-lightsky py-3 px-10 text-white mt-5">Lets talk</button>
                        </div>
                        <div>
                            <img src="../im.webp" alt="hello"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid place-items-center mt-10">
                <div className="2xl:w-8/12 xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 justify-center mx-auto mt-10 mb-10">
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 w-100 gap-8">
                        <div>
                            <img src="../im.webp" alt="hello"/>
                        </div>
                        <div>
                            <h1 className="pb-10 text-3xl">Our Trainers</h1>
                            <p>With more than 240,000 members in 39 countries, AAPC has access to industry experts all
                                around the world. Our trainers are subject matter experts who have been vetted, certified,
                                and meet all of these requirements:    </p>
                            <ul className="list-disc pl-10">
                                <li>Minimum of 5 years' experience </li>
                                <li> Current, relevant certifications </li>
                                <li>Proven track record in training  </li>
                                <li>Demonstrate expertise in national and regional payment and coding regulations  </li>
                            </ul>
                            <p> These strict requirements and expectations of our trainers ensure that they have the
                                knowledge, experience, and resources to help you with your organization's pain points.  </p>
                        </div>

                    </div>
                </div>
            </div>
            <Bluebanner/>
            <div className="grid place-items-center mt-10">
                <div className="2xl:w-8/12 xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 justify-center mx-auto mt-10 mb-10">
                    <h1 className="text-3xl">You might also like</h1>
                    <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 w-100 gap-4">
                        <div className="pt-6 max-h-full">
                            <img src="../corp.webp" className="h-72 w-full" alt="hello"/>
                            <div className="bg-slate-200 hover:bg-slate-300 py-10 p-10">
                                <p className="text-darksky">E-BRIEF</p>
                                <p className="text-2xl">Meet The Team: Get the Revenue Cycle Expertise Your Business Needs, Now</p>
                                <p>From large-scale outsourcing to a professional opinion of your revenue process, our nationwide network of certified</p>
                                <p className="text-darksky font-bold mt-3 mb-5">LEARN MORE</p>
                            </div>
                        </div>
                        <div className="pt-6 max-h-full">
                            <img src="../corp.webp" className="h-72 w-full" alt="hello"/>
                            <div className="bg-slate-200 hover:bg-slate-300 py-10 p-10">
                                <p className="text-darksky">E-BRIEF</p>
                                <p className="text-2xl">Meet The Team: Get the Revenue Cycle Expertise Your Business Needs, Now</p>
                                <p>From large-scale outsourcing to a professional opinion of your revenue process, our nationwide network of certified</p>
                                <p className="text-darksky font-bold mt-3 mb-5">LEARN MORE</p>
                            </div>
                        </div>
                        <div className="pt-6 max-h-full">
                            <img src="../corp.webp" className="h-72 w-full" alt="hello"/>
                            <div className="bg-slate-200 hover:bg-slate-300 py-10 p-10">
                                <p className="text-darksky">E-BRIEF</p>
                                <p className="text-2xl">Meet The Team: Get the Revenue Cycle Expertise Your Business Needs, Now</p>
                                <p>From large-scale outsourcing to a professional opinion of your revenue process, our nationwide network of certified</p>
                                <p className="text-darksky font-bold mt-3 mb-5">LEARN MORE</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Bluefooter/>
        </div>
    </div>
  )
}

export default Corporate