import React, { useState } from 'react';
const Riskcon = () => {
    const [activeMainTab, setActiveMainTab] = useState(1);
    const [activeSubTab, setActiveSubTab] = useState(1);
    const handleMainTabClick = (tabNumber) => {
        setActiveMainTab(tabNumber);
        setActiveSubTab(1);
    };
    return (
        <div>
            <div class="grid w-full bg-green-800 bg-cover bg-center" style={{ backgroundImage: 'url("../ris.webp")' }}>
                <div class="2xl:w-8/12 xl:w-8/12 lg:w-full md:w-full sm:w-full w-full justify-center mx-auto py-48">
                    <p class="text-white pt-24">TRAINING</p>
                    <p class="text-white text-5xl">people learn best in different ways.<br /> We let you choose yours.</p>
                </div>
            </div>
            <div className='grid place-items-center mt-5'>
                <div className='flex flex-col md:flex-row 2xl:w-8/12 xl:w-8/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 justify-center'>
                    <div className="flex flex-col space-x-2 2xl:w-1/4 xl:w-1/4 lg:1/3 md:w-1/3 sm:w-full w-full p-4">
                        <div className="space-y-1 bg-gray-200">
                            <button className='w-full p-2 bg-blue-500 text-white'>RISKCON 2023</button>
                            <button
                                className={`w-full p-2 ${activeMainTab === 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                onClick={() => handleMainTabClick(1)}
                            >
                                Overview
                            </button>
                            <button
                                className={`w-full p-2 ${activeMainTab === 2 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                onClick={() => handleMainTabClick(2)}
                            >
                                Attendees
                            </button>
                            <button
                                className={`w-full p-2 ${activeMainTab === 3 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                onClick={() => handleMainTabClick(3)}
                            >
                                Agenda
                            </button>
                            <button
                                className={`w-full p-2 ${activeMainTab === 4 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                onClick={() => handleMainTabClick(4)}
                            >
                                Speakers
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col md:w-3/4 sm:w-full w-full p-4">
                        {activeMainTab === 1 && (
                            <div>
                                {activeSubTab === 1 && <div>
                                    <div className="sm:w-100 w-100 justify-center mx-auto">
                                        <h4 className="text-2xl font-bold">Assessing Risk in Your Favor</h4>
                                        <p className='text-lg'>Health care professionals are obligated to stay current in their profession. This includes
                                            continuing education in their respective discipline as well as keeping up with the latest
                                            medical coding updates, compliance rules, and government regulations. AAPC supports its
                                            members to maintain a distinctive edge in their health care career by providing a wide
                                            variety of topics and subject matter delivered live or on demand, in classNamerooms or over the
                                            web.</p>
                                        <p>For questions about approved content, CEU requirements and how and when to submit CEUs, see
                                            our CEU <span className="text-green-900">Information page.</span></p>
                                        <div class="grid sm:w-full w-full justify-center mx-auto">
                                            <div className='flex'>
                                                <div class="grid md:grid-cols-2 sm:grid-cols-1">
                                                    <div class="bg-slate-100 pl-2">
                                                        <img src="../400.webp" alt="..." />
                                                    </div>
                                                    <div class="bg-slate-100 p-5">
                                                        <p class="text-md text-lightsky">RISKCON 2023’s </p>
                                                        <p class="text-md">interactive networking lunch allows you to get to know your community</p>
                                                        <p class="text-md text-lightsky mt-2">Alhabibi </p>
                                                    </div>
                                                </div>
                                                <div class="grid md:grid-cols-2 sm:grid-cols-1">
                                                    <div class="bg-slate-100 pl-2">
                                                        <img src="../400.webp" alt="..." />
                                                    </div>
                                                    <div class="bg-slate-100 p-5">
                                                        <p class="text-md text-lightsky">RISKCON 2023’s </p>
                                                        <p class="text-md">interactive networking lunch allows you to get to know your community.</p>
                                                        <p class="text-md text-lightsky mt-2">Alhabibi </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="grid sm:w-full w-full justify-center mx-auto my-10">
                                            <div class="grid md:grid-cols-2 sm:grid-cols-1">
                                                <div class="pl-2">
                                                    <img src="../bhrt.webp" alt="..." />
                                                </div>
                                                <div class="px-5">
                                                    <p class="text-md text-lightsky">BRING YOUR TEAM TO RISKCON 2024</p>
                                                    <h3 className="text-3xl">RISKCON packages for teams</h3>
                                                    <p class="text-lg">Our virtual events offer your team a convenient way to stay current on specialty-specific topics. 
                                                            Join our waitlist to be notified once 2024 registration opens, so you can take advantage of our lowest prices of the season.  </p>
                                                    <p class="text-md text-lightsky mt-2">Alhabibi </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>}
                            </div>
                        )}
                        {activeMainTab === 2 && (
                            <div>
                                {activeSubTab === 1 && <div>
                                    <div className="sm:w-100 w-100 justify-center mx-auto">
                                        <h4 className="text-2xl font-bold">Assessing Risk in Your Favor</h4>
                                        <p className='text-lg'>Health care professionals are obligated to stay current in their profession. This includes
                                            continuing education in their respective discipline as well as keeping up with the latest
                                            medical coding updates, compliance rules, and government regulations. AAPC supports its
                                            members to maintain a distinctive edge in their health care career by providing a wide
                                            variety of topics and subject matter delivered live or on demand, in classNamerooms or over the
                                            web.</p>
                                        <p>For questions about approved content, CEU requirements and how and when to submit CEUs, see
                                            our CEU <span className="text-green-900">Information page.</span></p>
                                        <div class="grid sm:w-full w-full justify-center mx-auto">
                                            <div className='flex'>
                                                <div class="grid md:grid-cols-2 sm:grid-cols-1">
                                                    <div class="bg-slate-100 pl-2">
                                                        <img src="../400.webp" alt="..." />
                                                    </div>
                                                    <div class="bg-slate-100 p-5">
                                                        <p class="text-md text-lightsky">RISKCON 2023’s </p>
                                                        <p class="text-md">interactive networking lunch allows you to get to know your community</p>
                                                        <p class="text-md text-lightsky mt-2">Alhabibi </p>
                                                    </div>
                                                </div>
                                                <div class="grid md:grid-cols-2 sm:grid-cols-1">
                                                    <div class="bg-slate-100 pl-2">
                                                        <img src="../400.webp" alt="..." />
                                                    </div>
                                                    <div class="bg-slate-100 p-5">
                                                        <p class="text-md text-lightsky">RISKCON 2023’s </p>
                                                        <p class="text-md">interactive networking lunch allows you to get to know your community.</p>
                                                        <p class="text-md text-lightsky mt-2">Alhabibi </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="grid sm:w-full w-full justify-center mx-auto my-10">
                                            <div class="grid md:grid-cols-2 sm:grid-cols-1">
                                                <div class="pl-2">
                                                    <img src="../bhrt.webp" alt="..." />
                                                </div>
                                                <div class="px-5">
                                                    <p class="text-md text-lightsky">BRING YOUR TEAM TO RISKCON 2024</p>
                                                    <h3 className="text-3xl">RISKCON packages for teams</h3>
                                                    <p class="text-lg">Our virtual events offer your team a convenient way to stay current on specialty-specific topics. 
                                                            Join our waitlist to be notified once 2024 registration opens, so you can take advantage of our lowest prices of the season.  </p>
                                                    <p class="text-md text-lightsky mt-2">Alhabibi </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>}
                            </div>
                        )}

                        {activeMainTab === 3 && (
                            <div>
                                {activeSubTab === 1 && <div>
                                    <div className="flex flex-col md:flex-row gap-4 mx-auto">
                                        <div className="sm:basis-full basis-full mb-5">
                                            <div className="grid">
                                                <img src="../banner.jpg" w-100 alt="gh" />
                                                <h4 className="text-2xl">AAPC is pleased to announce a stellar 2023 conference lineup.</h4>
                                                <p className="mt-5"><span className="text-lg font-semibold text-gray-500">Hybrid Event</span> - Our hybrid event
                                                    offers an enormous number of session topics covering a wide
                                                    range of specialties, along with flexibility to choose between being onsite or virtual.</p>
                                                <p className="mt-3">HEALTHCON 2024 in Las Vegas, NV | April 14-17, 2024 | 18 CEUs | 80+ Sessions | 65+
                                                    Speakers
                                                    <br /><span className="text-darksky text-lg font-semibold">Register Now!</span>
                                                </p>
                                                <p className="mt-3"><span className="text-lg font-semibold text-gray-500">Virtual Events</span> - Our virtual
                                                    events offer you a convenient way to stay current on
                                                    specialty-specific topics.</p>
                                                <p className="mt-3"><span className="text-lg font-semibold text-gray-500">DOCUCON</span> - A Clinical
                                                    Documentation Improvement Conference | September 19-20, 2023 | 12 CEUs | 2
                                                    Tracks | 16 Sessions Total <br /><span className="text-darksky text-lg font-semibold">Register Now!</span>
                                                </p>
                                                <p className="mt-3"><span className="text-lg font-semibold text-gray-500">AUDITCON </span>- Two Days. All About
                                                    Auditing. | November 8-9, 2023 | 12 CEUs | 3 Tracks | 23 Sessions
                                                    Total
                                                    <br /><span className="text-darksky text-lg font-semibold">Register Now!</span>
                                                </p>
                                                <p className="mt-3"><span className="text-lg font-semibold text-gray-500">Onsite Event </span>- While smaller
                                                    than our HEALTHCON event, this in-person only event offers a wide
                                                    variety of sessions covering a range of specialties along with the opportunity for attendees to
                                                    meet other healthcare professionals in their region.</p>
                                                <p className="mt-3"> HEALTHCON Regional 2024 in Philadelphia, PA | August 26-28 | 15 CEUs | 40+ Sessions |
                                                    30+
                                                    Speakers
                                                    Coming Soon!</p>
                                            </div>
                                            <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 bg-gray-200 p-7 mt-5">
                                                <div>
                                                    <p>Learn more about your local AAPC chapter</p>
                                                </div>
                                                <div>
                                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
                                                        LOCAL CHAPTERS</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>}
                            </div>
                        )}
                        {activeMainTab === 4 && (
                            <div>
                                {activeSubTab === 1 && <div>
                                    <div className="grid place-items-center mt-5">
                                        <div className="sm:w-full w-full justify-center mx-auto">
                                            <div className="grid sm:grid-cols-1 w-100">
                                                <h2 className='text-4xl mb-5'>Member Bill of Rights</h2>
                                                <p>The Legal Advisory Board serves in an advisory capacity to the national office of AAPC, the AAPC National Advisory Board, and the AAPC Chapter Association. Members occasionally author articles on compliance and legal issues associated with medical coding for Healthcare Business Monthly, and speak on legal issues at AAPC events.</p>
                                                <p>Prior to forming his own practice, Blanchard Manning LLP, in 2009, Mr. Blanchard practiced for 20 years with a leading international law firm. He handles health care regulatory and compliance issues, including coverage, billing, reimbursement, overpayment issues, fraud and abuse, and HIPAA privacy. He is a Fellow of the American Health Lawyers Association and a past chair of its Institute on Medicare and Medicaid Payment Issues. He has served on the AAPC's Legal Advisory Committee since its inception.</p>
                                                <p>Prior to forming his own practice, Blanchard Manning LLP, in 2009, Mr. Blanchard practiced for 20 years with a leading international law firm. He handles health care regulatory and compliance issues, including coverage, billing, reimbursement, overpayment issues, fraud and abuse, and HIPAA privacy. He is a Fellow of the American Health Lawyers Association and a past chair of its Institute on Medicare and Medicaid Payment Issues. He has served on the AAPC's Legal Advisory Committee since its inception.</p>
                                                <p>Prior to forming his own practice, Blanchard Manning LLP, in 2009, Mr. Blanchard practiced for 20 years with a leading international law firm. He handles health care regulatory and compliance issues, including coverage, billing, reimbursement, overpayment issues, fraud and abuse, and HIPAA privacy. He is a Fellow of the American Health Lawyers Association and a past chair of its Institute on Medicare and Medicaid Payment Issues. He has served on the AAPC's Legal Advisory Committee since its inception.</p>
                                                <p>The Legal Advisory Board serves in an advisory capacity to the national office of AAPC, the AAPC National Advisory Board, and the AAPC Chapter Association. Members occasionally author articles on compliance and legal issues associated with medical coding for Healthcare Business Monthly, and speak on legal issues at AAPC events.</p>
                                                <p>Prior to forming his own practice, Blanchard Manning LLP, in 2009, Mr. Blanchard practiced for 20 years with a leading international law firm. He handles health care regulatory and compliance issues, including coverage, billing, reimbursement, overpayment issues, fraud and abuse, and HIPAA privacy. He is a Fellow of the American Health Lawyers Association and a past chair of its Institute on Medicare and Medicaid Payment Issues. He has served on the AAPC's Legal Advisory Committee since its inception.</p>
                                                <p>Prior to forming his own practice, Blanchard Manning LLP, in 2009, Mr. Blanchard practiced for 20 years with a leading international law firm. He handles health care regulatory and compliance issues, including coverage, billing, reimbursement, overpayment issues, fraud and abuse, and HIPAA privacy. He is a Fellow of the American Health Lawyers Association and a past chair of its Institute on Medicare and Medicaid Payment Issues. He has served on the AAPC's Legal Advisory Committee since its inception.</p>
                                                <p>Prior to forming his own practice, Blanchard Manning LLP, in 2009, Mr. Blanchard practiced for 20 years with a leading international law firm. He handles health care regulatory and compliance issues, including coverage, billing, reimbursement, overpayment issues, fraud and abuse, and HIPAA privacy. He is a Fellow of the American Health Lawyers Association and a past chair of its Institute on Medicare and Medicaid Payment Issues. He has served on the AAPC's Legal Advisory Committee since its inception.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>}
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Riskcon;
