import React, { useState } from 'react';
import Slider1 from '../Components/Slider1';
const About = () => {
    const [activeMainTab, setActiveMainTab] = useState(1);
    const [activeSubTab, setActiveSubTab] = useState(1);

    const handleMainTabClick = (tabNumber) => {
        setActiveMainTab(tabNumber);
        setActiveSubTab(1);
    };

    const handleSubTabClick = (subTabNumber) => {
        setActiveSubTab(subTabNumber);
    };
    return (
        <div className='grid place-items-center mt-5'>
            <div className='flex flex-col md:flex-row 2xl:w-8/12 xl:w-8/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 justify-center gap-8'>
                <div className="flex flex-col space-x-2 2xl:w-1/4 xl:w-1/4 lg:1/3 md:w-1/3 sm:w-full w-full p-4">
                    <div className="space-y-1 bg-gray-200">
                        <button className='w-full p-2 bg-blue-500 text-white'>About Us</button>
                        <button
                            className={`w-full p-2 ${activeMainTab === 3 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                            onClick={() => handleMainTabClick(3)}
                        >
                            Our Story
                        </button>
                        <button
                            className={`w-full p-2 ${activeMainTab === 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                            onClick={() => handleMainTabClick(1)}
                        ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-left fa-fw text-sm absolute h-7 w-3 inline-block ml-44" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>
                            Boards and committees
                        </button>
                        {activeMainTab === 1 && (
                            <div className="flex flex-col mt-2">
                                <button
                                    className={`p-2 ${activeSubTab === 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                    onClick={() => handleSubTabClick(1)}
                                >
                                    National Advisory Board
                                </button>
                                <button
                                    className={`p-2 ${activeSubTab === 2 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                    onClick={() => handleSubTabClick(2)}
                                >
                                    Chapter Association Board
                                </button>
                                <button
                                    className={`p-2 ${activeSubTab === 3 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                    onClick={() => handleSubTabClick(3)}
                                >
                                    Legal Advisory Committee
                                </button>
                                <button
                                    className={`p-2 ${activeSubTab === 4 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                    onClick={() => handleSubTabClick(4)}
                                >
                                    AAPC Board of Directors
                                </button>
                            </div>
                        )}
                        <button
                            className={`w-full p-2 ${activeMainTab === 4 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                            onClick={() => handleMainTabClick(4)}
                        >
                            Thought leadership
                        </button>
                        <button
                            className={`w-full p-2 ${activeMainTab === 2 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                            onClick={() => handleMainTabClick(2)}
                        ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-left fa-fw text-sm absolute h-7 w-3 inline-block ml-36" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>
                            Terms and policies
                        </button>
                        {activeMainTab === 2 && (
                            <div className="flex flex-col mt-2">
                                <button
                                    className={`p-2 ${activeSubTab === 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                    onClick={() => handleSubTabClick(1)}
                                >
                                    Course Terms of Use
                                </button>
                                <button
                                    className={`p-2 ${activeSubTab === 2 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                    onClick={() => handleSubTabClick(2)}
                                >
                                    Forum Terms of Use
                                </button>
                                <button
                                    className={`p-2 ${activeSubTab === 3 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                    onClick={() => handleSubTabClick(3)}
                                >
                                    Privacy Policy
                                </button>
                                <button
                                    className={`p-2 ${activeSubTab === 4 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                    onClick={() => handleSubTabClick(4)}
                                >
                                    Shipping and Return Policies
                                </button>
                                <button
                                    className={`p-2 ${activeSubTab === 5 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                    onClick={() => handleSubTabClick(5)}
                                >
                                    Member Hardship Policy
                                </button>
                                <button
                                    className={`p-2 ${activeSubTab === 6 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                    onClick={() => handleSubTabClick(6)}
                                >
                                    Brand Policy
                                </button>
                                <button
                                    className={`p-2 ${activeSubTab === 7 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                    onClick={() => handleSubTabClick(7)}
                                >
                                    CEU Policies
                                </button>
                                <button
                                    className={`p-2 ${activeSubTab === 8 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                    onClick={() => handleSubTabClick(8)}
                                >
                                    Exam Agreement
                                </button>
                                <button
                                    className={`p-2 ${activeSubTab === 9 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                    onClick={() => handleSubTabClick(9)}
                                >
                                    Certification Cancellation
                                </button>
                            </div>
                        )}
                        <button
                            className={`w-full p-2 ${activeMainTab === 5 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                            onClick={() => handleMainTabClick(5)}
                        >
                            Code of ethics
                        </button>
                        <button
                            className={`w-full p-2 ${activeMainTab === 6 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                            onClick={() => handleMainTabClick(6)}
                        >
                            Member Bill of Rights
                        </button>
                        <button
                            className={`w-full p-2 ${activeMainTab === 7 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                            onClick={() => handleMainTabClick(7)}
                        ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-left fa-fw text-sm absolute h-7 w-3 inline-block ml-32" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>
                            Careers at AAPC
                        </button>
                        {activeMainTab === 7 && (
                            <div className="flex flex-col mt-2">
                                <button
                                    className={`p-2 ${activeSubTab === 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                    onClick={() => handleSubTabClick(1)}
                                >
                                    Open Positions
                                </button>
                                <button
                                    className={`p-2 ${activeSubTab === 2 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                    onClick={() => handleSubTabClick(2)}
                                >
                                    Culture
                                </button>
                                <button
                                    className={`p-2 ${activeSubTab === 3 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                    onClick={() => handleSubTabClick(3)}
                                >
                                    Benefits
                                </button>
                            </div>
                        )}
                        <button
                            className={`w-full p-2 ${activeMainTab === 8 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                            onClick={() => handleMainTabClick(8)}
                        ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-left fa-fw text-sm absolute h-7 w-3 inline-block ml-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>
                            Advertise
                        </button>
                        {activeMainTab === 8 && (
                            <div className="flex flex-col mt-2">
                                <button
                                    className={`p-2 ${activeSubTab === 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                    onClick={() => handleSubTabClick(1)}
                                >
                                    Exhibiting Opportunities
                                </button>
                            </div>
                        )}
                        <button
                            className={`w-full p-2 ${activeMainTab === 9 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                            onClick={() => handleMainTabClick(9)}
                        >
                            What's new?
                        </button>
                        <button
                            className={`w-full p-2 ${activeMainTab === 10 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                            onClick={() => handleMainTabClick(10)}
                        >
                            Brand and media kit
                        </button>
                        <button
                            className={`w-full p-2 ${activeMainTab === 11 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                            onClick={() => handleMainTabClick(11)}
                        >
                            Contact us
                        </button>

                    </div>
                </div>
                <div className="flex flex-col space-x-2 md:w-3/4 sm:w-full w-full p-4">
                    {activeMainTab === 3 && (
                        <div>
                            {activeSubTab === 1 && <div>
                                <div className="grid place-items-center mt-5">
                                    <div className="sm:w-full w-full justify-center mx-auto">
                                        <div className="p-5">
                                            <h3 className="text-3xl font-semibold mb-5">
                                                About AAPC
                                            </h3>
                                            <p className="text-lg text-why">
                                                AAPC is the nation’s largest education and credentialing organization for medical coders, billers, auditors, practice managers, documentation specialists, compliance officers, and revenue cycle managers. All members of AAPC agree to abide by the AAPC Code of Ethics, which ensures high levels of professionalism, integrity, and ethical behavior.
                                            </p>
                                            <h3 className="text-3xl font-semibold mb-5">
                                                Purpose
                                            </h3>
                                            <p className="text-lg text-why">
                                                AAPC discovers, develops, and provides innovative products, services, and solutions to help the global healthcare industry recognize the full potential of their revenue cycle.
                                            </p>
                                            <h3 className="text-3xl font-semibold mb-5">
                                                For Businesses
                                            </h3>
                                            <p className="text-lg text-why">
                                                We help healthcare organizations ensure documentation accuracy, boost employee efficiency, and optimize their revenue cycle. Our elite team of subject matter experts create and manage customized solutions that are tailored to our clients’ unique pain points and goals. Whether it’s coding or audit services, ongoing education, or access to the industry’s most powerful tools and resources, AAPC is the trusted source for driving accuracy, profitability, and peace of mind.
                                            </p>
                                            <h3 className="text-3xl font-semibold mb-5">
                                                For Individuals
                                            </h3>
                                            <p className="text-lg text-why">
                                                We help people find, begin, and maintain new careers. We also help them determine the right career path, provide resources and support throughout their studies, help them land their first job and give them the means to advance their careers. From the tools and resources we offer to a network of over 220,000 coders, billers, auditors and AAPC employees to help them along the way, one thing is certain: AAPC members are never alone.
                                            </p>
                                            <h3 className="text-3xl font-semibold mb-5">
                                                Industry Growth
                                            </h3>
                                            <p className="text-lg text-why">
                                                Job growth for medical records and health information technicians is projected to grow 13% by 2026, according to the U.S. Bureau of Labor Statistics. This rate of growth exceeds the average of all occupations. As demand for healthcare services increases, more trained coders will be needed to manage the increased claims for reimbursement from insurance companies.

                                                All USA physicians and hospitals are required by federal law to use standardized sets of medical codes to report supplies, diagnoses, procedures, and other services associated with patient care. All payments for medical services in the USA are linked to these codes. Medical codes are accurately assigned by coders, determine payment charged by billers, and are monitored and verified by auditors and compliance officers. Practice managers ensure these positions function well together to support the revenue cycle.

                                                Standardized medical codes expedite information gathering, billing, and data collection. This system allows payers to better compare charges for services and set payment rates that fairly reward providers for their work while reducing insurers’ risks. The data can be collected and analyzed for trends, such as which treatment methods work best over time for certain conditions, or what is the frequency of certain diseases or treatments in specific localities? All of this contributes to an overall reduction in the cost of healthcare delivery and better patient care.
                                            </p>
                                            <h3 className="text-3xl font-semibold mb-5">
                                                History
                                            </h3>
                                            <p className="text-lg text-why">
                                                AAPC was founded in 1988 as the American Academy of Professional Coders, with the aim of providing education and certification to coders working in physician-based settings. These settings include group practices and specialty centers (i.e. non-hospital settings). As their services expanded beyond medical and outpatient coding, the full name was dropped in favor of the AAPC initialism.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>}
                        </div>
                    )}
                    {activeMainTab === 1 && (
                        <div>
                            {activeSubTab === 1 && <div>
                                <h1 className='text-5xl font-semibold'>National Advisory Board</h1>
                                <div className="grid place-items-center mt-5">
                                    <div className="sm:w-full w-full justify-center mx-auto">
                                        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 w-100">
                                            <div className="#">
                                                <img src="./spkr.webp" alt="spkr" className='w-{35rem}' />
                                            </div>
                                            <div className="#">
                                                <h3 className="text-3xl mb-5">Prepare for a certification exam.</h3>
                                                <p className="text-lg">
                                                    <button className="rounded-full">
                                                        <a href="https://tailwindui.com/documentation"
                                                            className="rounded-full text-xl text-teal-900"
                                                        > Colleen Gianatasio{" "}
                                                        </a>
                                                    </button>
                                                    MHS, CPC, CPCO, CPC-P, CPMA, CRC, CPC-I, CCS, CCDS-O
                                                    Director of Outpatient Clinical Documentation Improvement, Devoted Health
                                                    Colleen Gianatasio has over 20 years of experience in the health insurance field, including customer service, claims, quality, and coding. In her current role, Gianatasio’s primary responsibilities are provider engagement and clinical documentation improvement for accurate coding and reimbursement. Gianatasio specializes in developing innovative coding curriculum and instruction to support compliance with federal guidelines and appropriate reimbursement processes. A certified AAPC instructor, she enjoys teaching a variety of coding, documentation, and auditing classes.
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid place-items-center mt-5">
                                    <div className="sm:w-full w-full justify-center mx-auto">
                                        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 w-100">
                                            <div className="#">
                                                <img src="./spkr.webp" alt="spkr" className='w-{35rem}' />
                                            </div>
                                            <div className="#">
                                                <h3 className="text-3xl mb-5">Prepare for a certification exam.</h3>
                                                <p className="text-lg">
                                                    <button className="rounded-full">
                                                        <a href="https://tailwindui.com/documentation"
                                                            className="rounded-full text-xl text-teal-900"
                                                        > Colleen Gianatasio{" "}
                                                        </a>
                                                    </button>
                                                    MHS, CPC, CPCO, CPC-P, CPMA, CRC, CPC-I, CCS, CCDS-O
                                                    Director of Outpatient Clinical Documentation Improvement, Devoted Health
                                                    Colleen Gianatasio has over 20 years of experience in the health insurance field, including customer service, claims, quality, and coding. In her current role, Gianatasio’s primary responsibilities are provider engagement and clinical documentation improvement for accurate coding and reimbursement. Gianatasio specializes in developing innovative coding curriculum and instruction to support compliance with federal guidelines and appropriate reimbursement processes. A certified AAPC instructor, she enjoys teaching a variety of coding, documentation, and auditing classes.
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>}
                            {activeSubTab === 2 && <div>
                                <h2 className='text-4xl font-semibold'>Chapter Association Board</h2>
                                <div className="grid place-items-center mt-5">
                                    <div className="sm:w-full w-full justify-center mx-auto">
                                        <p>The AAPC Chapter Association (AAPCCA), the Governing Board for AAPC Local Chapters, was established to create, maintain, and sustain the infrastructure, through approachable and accountable representation, necessary to empower local chapters to function in support of the AAPC "Upholding a Higher Standard". The Board provides policy, rules, regulations, direction, and advice to the AAPC local chapters and is also charged with ensuring that the local chapters function in accordance with the mission of the AAPC.</p>
                                        <p>The AAPCCA Board of Directors is comprised of 16 certified AAPC members who work collaboratively with AAPC staff and current local chapter officers. Two board members represent each region of the country. New board members are selected on an annual basis. AAPC members who have previously served as chapter officers are invited to apply to serve on the Chapter Association Board of Directors. </p>
                                    </div>
                                    <div className="sm:w-full w-full justify-center mx-auto">
                                        <h3 className='text-3xl font-semibold my-5'>AAPCCA Hardship/Disaster Assistance Funds</h3>
                                        <p>The AAPC Chapter Association (AAPCCA), the Governing Board for AAPC Local Chapters, was established to create, maintain, and sustain the infrastructure, through approachable and accountable representation, necessary to empower local chapters to function in support of the AAPC "Upholding a Higher Standard". The Board provides policy, rules, regulations, direction, and advice to the AAPC local chapters and is also charged with ensuring that the local chapters function in accordance with the mission of the AAPC.</p>
                                        <p>The AAPCCA Board of Directors is comprised of 16 certified AAPC members who work collaboratively with AAPC staff and current local chapter officers. Two board members represent each region of the country. New board members are selected on an annual basis. AAPC members who have previously served as chapter officers are invited to apply to serve on the Chapter Association Board of Directors. </p>
                                    </div>
                                </div>
                                <div className="grid place-items-center mt-5">
                                    <div className="sm:w-full w-full justify-center mx-auto">
                                        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 w-100">
                                            <div className="#">
                                                <img src="./spkr.webp" alt="spkr" className='w-{35rem}' />
                                            </div>
                                            <div className="#">
                                                <h3 className="text-3xl mb-5">Prepare for a certification exam.</h3>
                                                <p className="text-lg">
                                                    <button className="rounded-full">
                                                        <a href="https://tailwindui.com/documentation"
                                                            className="rounded-full text-xl text-teal-900"
                                                        > Colleen Gianatasio{" "}
                                                        </a>
                                                    </button>
                                                    MHS, CPC, CPCO, CPC-P, CPMA, CRC, CPC-I, CCS, CCDS-O
                                                    Director of Outpatient Clinical Documentation Improvement, Devoted Health
                                                    Colleen Gianatasio has over 20 years of experience in the health insurance field, including customer service, claims, quality, and coding. In her current role, Gianatasio’s primary responsibilities are provider engagement and clinical documentation improvement for accurate coding and reimbursement. Gianatasio specializes in developing innovative coding curriculum and instruction to support compliance with federal guidelines and appropriate reimbursement processes. A certified AAPC instructor, she enjoys teaching a variety of coding, documentation, and auditing classes.
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid place-items-center mt-5">
                                    <div className="sm:w-full w-full justify-center mx-auto">
                                        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 w-100">
                                            <div className="#">
                                                <img src="./spkr.webp" alt="spkr" className='w-{35rem}' />
                                            </div>
                                            <div className="#">
                                                <h3 className="text-3xl mb-5">Prepare for a certification exam.</h3>
                                                <p className="text-lg">
                                                    <button className="rounded-full">
                                                        <a href="https://tailwindui.com/documentation"
                                                            className="rounded-full text-xl text-teal-900"
                                                        > Colleen Gianatasio{" "}
                                                        </a>
                                                    </button>
                                                    MHS, CPC, CPCO, CPC-P, CPMA, CRC, CPC-I, CCS, CCDS-O
                                                    Director of Outpatient Clinical Documentation Improvement, Devoted Health
                                                    Colleen Gianatasio has over 20 years of experience in the health insurance field, including customer service, claims, quality, and coding. In her current role, Gianatasio’s primary responsibilities are provider engagement and clinical documentation improvement for accurate coding and reimbursement. Gianatasio specializes in developing innovative coding curriculum and instruction to support compliance with federal guidelines and appropriate reimbursement processes. A certified AAPC instructor, she enjoys teaching a variety of coding, documentation, and auditing classes.
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>}
                            {activeSubTab === 3 && <div>
                                <div className="grid place-items-center mt-5">
                                    <div className="sm:w-full w-full justify-center mx-auto">
                                        <div className="grid sm:grid-cols-1 w-100">
                                            <h2 className='text-4xl mb-5'>Legal Advisory Committee</h2>
                                            <p>The Legal Advisory Board serves in an advisory capacity to the national office of AAPC, the AAPC National Advisory Board, and the AAPC Chapter Association. Members occasionally author articles on compliance and legal issues associated with medical coding for Healthcare Business Monthly, and speak on legal issues at AAPC events.</p>
                                            <h5 className='text-xl mt-2 font-semibold'>Timothy P. Blanchard</h5>
                                            <p><b>Timothy P. Blanchard</b>Prior to forming his own practice, Blanchard Manning LLP, in 2009, Mr. Blanchard practiced for 20 years with a leading international law firm. He handles health care regulatory and compliance issues, including coverage, billing, reimbursement, overpayment issues, fraud and abuse, and HIPAA privacy. He is a Fellow of the American Health Lawyers Association and a past chair of its Institute on Medicare and Medicaid Payment Issues. He has served on the AAPC's Legal Advisory Committee since its inception.</p>
                                            <h5 className='text-xl mt-2 font-semibold'>Timothy P. Blanchard</h5>
                                            <p><b>Timothy P. Blanchard</b>Prior to forming his own practice, Blanchard Manning LLP, in 2009, Mr. Blanchard practiced for 20 years with a leading international law firm. He handles health care regulatory and compliance issues, including coverage, billing, reimbursement, overpayment issues, fraud and abuse, and HIPAA privacy. He is a Fellow of the American Health Lawyers Association and a past chair of its Institute on Medicare and Medicaid Payment Issues. He has served on the AAPC's Legal Advisory Committee since its inception.</p>
                                            <h5 className='text-xl mt-2 font-semibold'>Timothy P. Blanchard</h5>
                                            <p><b>Timothy P. Blanchard</b>Prior to forming his own practice, Blanchard Manning LLP, in 2009, Mr. Blanchard practiced for 20 years with a leading international law firm. He handles health care regulatory and compliance issues, including coverage, billing, reimbursement, overpayment issues, fraud and abuse, and HIPAA privacy. He is a Fellow of the American Health Lawyers Association and a past chair of its Institute on Medicare and Medicaid Payment Issues. He has served on the AAPC's Legal Advisory Committee since its inception.</p>

                                        </div>
                                    </div>
                                </div>
                            </div>}
                            {activeSubTab === 4 && <div>
                                <div className="grid place-items-center mt-5">
                                    <div className="sm:w-full w-full justify-center mx-auto">
                                        <div className="grid sm:grid-cols-1 w-100">
                                            <h2 className='text-4xl mb-5'>AAPC Board: Independent Directors</h2>
                                            <p>The Legal Advisory Board serves in an advisory capacity to the national office of AAPC, the AAPC National Advisory Board, and the AAPC Chapter Association. Members occasionally author articles on compliance and legal issues associated with medical coding for Healthcare Business Monthly, and speak on legal issues at AAPC events.</p>
                                            <h5 className='text-xl mt-2 font-semibold'>Timothy P. Blanchard</h5>
                                            <p><b>Timothy P. Blanchard</b>Prior to forming his own practice, Blanchard Manning LLP, in 2009, Mr. Blanchard practiced for 20 years with a leading international law firm. He handles health care regulatory and compliance issues, including coverage, billing, reimbursement, overpayment issues, fraud and abuse, and HIPAA privacy. He is a Fellow of the American Health Lawyers Association and a past chair of its Institute on Medicare and Medicaid Payment Issues. He has served on the AAPC's Legal Advisory Committee since its inception.</p>
                                            <h5 className='text-xl mt-2 font-semibold'>Timothy P. Blanchard</h5>
                                            <p><b>Timothy P. Blanchard</b>Prior to forming his own practice, Blanchard Manning LLP, in 2009, Mr. Blanchard practiced for 20 years with a leading international law firm. He handles health care regulatory and compliance issues, including coverage, billing, reimbursement, overpayment issues, fraud and abuse, and HIPAA privacy. He is a Fellow of the American Health Lawyers Association and a past chair of its Institute on Medicare and Medicaid Payment Issues. He has served on the AAPC's Legal Advisory Committee since its inception.</p>
                                            <h5 className='text-xl mt-2 font-semibold'>Timothy P. Blanchard</h5>
                                            <p><b>Timothy P. Blanchard</b>Prior to forming his own practice, Blanchard Manning LLP, in 2009, Mr. Blanchard practiced for 20 years with a leading international law firm. He handles health care regulatory and compliance issues, including coverage, billing, reimbursement, overpayment issues, fraud and abuse, and HIPAA privacy. He is a Fellow of the American Health Lawyers Association and a past chair of its Institute on Medicare and Medicaid Payment Issues. He has served on the AAPC's Legal Advisory Committee since its inception.</p>

                                        </div>
                                    </div>
                                </div>
                            </div>}
                        </div>
                    )}

                    {activeMainTab === 2 && (
                        <div>
                            {activeSubTab === 1 && <div>
                                <div className="grid place-items-center mt-5">
                                    <div className="sm:w-full w-full justify-center mx-auto">
                                        <div className="grid sm:grid-cols-1 w-100">
                                            <h2 className='text-4xl mb-5'>Course Terms and Conditions</h2>
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
                            {activeSubTab === 2 && <div>
                                <div className="grid place-items-center mt-5">
                                    <div className="sm:w-full w-full justify-center mx-auto">
                                        <div className="grid sm:grid-cols-1 w-100">
                                            <h2 className='text-4xl mb-5'>Forum Terms of Use</h2>
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
                            {activeSubTab === 3 && <div>
                                <div className="grid place-items-center mt-5">
                                    <div className="sm:w-full w-full justify-center mx-auto">
                                        <div className="grid sm:grid-cols-1 w-100">
                                            <h2 className='text-4xl mb-5'>Privacy Policy</h2>
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
                            {activeSubTab === 4 && <div>
                                <div className="grid place-items-center mt-5">
                                    <div className="sm:w-full w-full justify-center mx-auto">
                                        <div className="grid sm:grid-cols-1 w-100">
                                            <h2 className='text-4xl mb-5'>Shipping and Return Policies</h2>
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
                            {activeSubTab === 5 && <div>
                                <div className="grid place-items-center mt-5">
                                    <div className="sm:w-full w-full justify-center mx-auto">
                                        <div className="grid sm:grid-cols-1 w-100">
                                            <h2 className='text-4xl mb-5'>Member Hardship Policy</h2>
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
                            {activeSubTab === 6 && <div>
                                <div className="grid place-items-center mt-5">
                                    <div className="sm:w-full w-full justify-center mx-auto">
                                        <div className="grid sm:grid-cols-1 w-100">
                                            <h2 className='text-4xl mb-5'>Brand Policy</h2>
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
                            {activeSubTab === 7 && <div>
                                <div className="grid place-items-center mt-5">
                                    <div className="sm:w-full w-full justify-center mx-auto">
                                        <div className="grid sm:grid-cols-1 w-100">
                                            <h2 className='text-4xl mb-5'>CEU Policies</h2>
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
                            {activeSubTab === 8 && <div>
                                <div className="grid place-items-center mt-5">
                                    <div className="sm:w-full w-full justify-center mx-auto">
                                        <div className="grid sm:grid-cols-1 w-100">
                                            <h2 className='text-4xl mb-5'>Exam Agreement</h2>
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
                            {activeSubTab === 9 && <div>
                                <div className="grid place-items-center mt-5">
                                    <div className="sm:w-full w-full justify-center mx-auto">
                                        <div className="grid sm:grid-cols-1 w-100">
                                            <h2 className='text-4xl mb-5'>Certification Cancellation</h2>
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

                    {activeMainTab === 4 && (
                        <div>
                            {activeSubTab === 1 && <div>
                                <div className="grid place-items-center mt-5">
                                    <div className="sm:w-full w-full justify-center mx-auto">
                                        <div className="grid sm:grid-cols-1 w-100">
                                            <h2 className='text-4xl mb-5'>Thought leadership</h2>
                                            <p>The AAPC Thought Leadership Team is a distinguished consortium of experts, visionaries, and thought leaders committed to shaping the landscape in the industry. With a deep understanding of the profound impact our industry has on society, this council serves as a guiding force, driving the development and implementation of ethical standards in coding practices.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid place-items-center mt-5">
                                    <div className="sm:w-full w-full justify-center mx-auto">
                                        <div className="grid sm:grid-cols-1 w-100 my-5">
                                            <div className="bg-slate-200 p-5 hover:shadow-md">
                                                <div class="flex flex-row">
                                                    <div class="basis-1/5">
                                                        <img src="./spkr.webp" alt="spkr" className='rounded-full h-36 w-36' />
                                                    </div>
                                                    <div class="basis-4/5">
                                                        <p className="text-lg text-why">
                                                            Exploring a career in medical coding and billing raises
                                                            questions, one being which certification should I choose?
                                                            Fortunately, identifying the certification that’s right for you
                                                            is easy once you see how they differ.
                                                        </p>
                                                        <button className="py-3 rounded-full">
                                                            <a
                                                                href="https://tailwindui.com/documentation"
                                                                className="rounded-full text-xl text-teal-900"
                                                            >
                                                                READ MORE{" "}
                                                            </a>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid sm:grid-cols-1 w-100 my-5">
                                            <div className="bg-slate-200 p-5 hover:shadow-md">
                                                <div class="flex flex-row">
                                                    <div class="basis-1/5">
                                                        <img src="./spkr.webp" alt="spkr" className='rounded-full h-36 w-36' />
                                                    </div>
                                                    <div class="basis-4/5">
                                                        <p className="text-lg text-why">
                                                            Exploring a career in medical coding and billing raises
                                                            questions, one being which certification should I choose?
                                                            Fortunately, identifying the certification that’s right for you
                                                            is easy once you see how they differ.
                                                        </p>
                                                        <button className="py-3 rounded-full">
                                                            <a
                                                                href="https://tailwindui.com/documentation"
                                                                className="rounded-full text-xl text-teal-900"
                                                            >
                                                                READ MORE{" "}
                                                            </a>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid sm:grid-cols-1 w-100 my-5">
                                            <div className="bg-slate-200 p-5 hover:shadow-md">
                                                <div class="flex flex-row">
                                                    <div class="basis-1/5">
                                                        <img src="./spkr.webp" alt="spkr" className='rounded-full h-36 w-36' />
                                                    </div>
                                                    <div class="basis-4/5">
                                                        <p className="text-lg text-why">
                                                            Exploring a career in medical coding and billing raises
                                                            questions, one being which certification should I choose?
                                                            Fortunately, identifying the certification that’s right for you
                                                            is easy once you see how they differ.
                                                        </p>
                                                        <button className="py-3 rounded-full">
                                                            <a
                                                                href="https://tailwindui.com/documentation"
                                                                className="rounded-full text-xl text-teal-900"
                                                            >
                                                                READ MORE{" "}
                                                            </a>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid sm:grid-cols-1 w-100 my-5">
                                            <div className="bg-slate-200 p-5 hover:shadow-md">
                                                <div class="flex flex-row">
                                                    <div class="basis-1/5">
                                                        <img src="./spkr.webp" alt="spkr" className='rounded-full h-36 w-36' />
                                                    </div>
                                                    <div class="basis-4/5">
                                                        <p className="text-lg text-why">
                                                            Exploring a career in medical coding and billing raises
                                                            questions, one being which certification should I choose?
                                                            Fortunately, identifying the certification that’s right for you
                                                            is easy once you see how they differ.
                                                        </p>
                                                        <button className="py-3 rounded-full">
                                                            <a
                                                                href="https://tailwindui.com/documentation"
                                                                className="rounded-full text-xl text-teal-900"
                                                            >
                                                                READ MORE{" "}
                                                            </a>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid sm:grid-cols-1 w-100 my-5">
                                            <div className="bg-slate-200 p-5 hover:shadow-md">
                                                <div class="flex flex-row">
                                                    <div class="basis-1/5">
                                                        <img src="./spkr.webp" alt="spkr" className='rounded-full h-36 w-36' />
                                                    </div>
                                                    <div class="basis-4/5">
                                                        <p className="text-lg text-why">
                                                            Exploring a career in medical coding and billing raises
                                                            questions, one being which certification should I choose?
                                                            Fortunately, identifying the certification that’s right for you
                                                            is easy once you see how they differ.
                                                        </p>
                                                        <button className="py-3 rounded-full">
                                                            <a
                                                                href="https://tailwindui.com/documentation"
                                                                className="rounded-full text-xl text-teal-900"
                                                            >
                                                                READ MORE{" "}
                                                            </a>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid sm:grid-cols-1 w-100 my-5">
                                            <div className="bg-slate-200 p-5 hover:shadow-md">
                                                <div class="flex flex-row">
                                                    <div class="basis-1/5">
                                                        <img src="./spkr.webp" alt="spkr" className='rounded-full h-36 w-36' />
                                                    </div>
                                                    <div class="basis-4/5">
                                                        <p className="text-lg text-why">
                                                            Exploring a career in medical coding and billing raises
                                                            questions, one being which certification should I choose?
                                                            Fortunately, identifying the certification that’s right for you
                                                            is easy once you see how they differ.
                                                        </p>
                                                        <button className="py-3 rounded-full">
                                                            <a
                                                                href="https://tailwindui.com/documentation"
                                                                className="rounded-full text-xl text-teal-900"
                                                            >
                                                                READ MORE{" "}
                                                            </a>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>}
                        </div>
                    )}
                    {activeMainTab === 5 && (
                        <div>
                            {activeSubTab === 1 && <div>
                                <div className="grid place-items-center mt-5">
                                    <div className="sm:w-full w-full justify-center mx-auto">
                                        <div className="grid sm:grid-cols-1 w-100">
                                            <h2 className='text-4xl mb-5'>Code of ethics</h2>
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
                    {activeMainTab === 6 && (
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
                    {activeMainTab === 7 && (
                        <div>
                            {activeSubTab === 1 && <div>
                                <div className="grid place-items-center mt-5">
                                    <div className="sm:w-full w-full justify-center mx-auto">
                                        <div className="grid sm:grid-cols-1 w-100">
                                            <h2 className='text-4xl mb-5'>About AAPC</h2>
                                            <p className='mb-5 text-lg'>AAPC is the world's largest training and credentialing organization for the business of healthcare, with 225,000 members working across more than 50 countries. We’ve become the industry standard for individuals advancing their careers and healthcare organizations navigating the complexities of revenue cycle management. From clinical documentation to medical coding and billing, and from practice management to compliance, our solutions elevate the quality and efficiency and healthcare.</p>
                                            <h3 className='text-3xl'>What Makes us AAPC?</h3>
                                            <p className='mb-5'><b>Our Purpose:</b> To help individuals and organizations navigate and succeed in the business of healthcare.</p>
                                            <p className='mb-5'><b>Our Vision: </b> To elevate the quality and efficiency of healthcare.</p>
                                            <p className='mb-5'><b>Our Mission: </b>To elevate the business of healthcare through professional training, industry-standard certifications, and comprehensive solutions for individuals and organizations.</p>
                                        </div>
                                    </div>
                                    <div className="sm:w-full w-11/12 justify-center mx-auto">
                                        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 w-100 gap-8">
                                            <div className="bg-slate-200 p-5 hover:shadow-2xl">
                                                <h3 className="text-3xl mb-5">
                                                    Culture
                                                </h3>
                                                <p className="text-lg text-why">
                                                    AAPC is a people-centric organization, prioritizing a healthy, positive environment
                                                    where people can grow and thrive in their careers.
                                                </p>
                                                <button className="px-12 py-3 rounded-full">
                                                    <a
                                                        href="https://tailwindui.com/documentation"
                                                        className="rounded-full text-xl text-teal-900"
                                                    >
                                                        LEARN MORE ABOUT CULTURE{" "}
                                                    </a>
                                                </button>
                                            </div>
                                            <div className="bg-slate-200 p-5 hover:shadow-2xl">
                                                <h3 className="text-3xl mb-5">Benefits</h3>
                                                <p className="text-lg">
                                                    Working at AAPC comes with a wealth of benefits, from health and dental insurance to 401k
                                                    matching and much more g at AAPC comes wit.
                                                </p>
                                                <button className="px-12 py-3 rounded-full">
                                                    <a href="aa" className="rounded-full text-xl text-teal-900">
                                                        LEARN MORE ABOUT BENEFITS{" "}
                                                    </a>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid place-items-center mt-5">
                                        <div className="flex flex-col  md:flex-row  w-full justify-center gap-8">
                                            <div className="md:w-2/5 w-full">
                                                <div className="p-1">
                                                    <img src="./work.webp" alt="hi" />
                                                </div>
                                            </div>
                                            <div className="md:w-3/5 w-full">
                                                <div className="bg-slate-200 p-5 hover:shadow-2xl">
                                                    <h4 className="text-2xl mb-5">
                                                        Find the right certification in medical
                                                    </h4>
                                                    <p className="text-lg text-why">
                                                        Exploring a career in medical coding and billing raises
                                                        questions, one being which certification should I choose?
                                                        Fortunately, identifying the certification that’s right for you
                                                        is easy once you see how they differ.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid place-items-left mt-5">
                                    <div className="flex flex-col md:flex-row sm:w-full w-full border-b border-gray-400 mb-5 pb-5">
                                        <div className="md:w-2/3 w-full">
                                            <p>DISTANCE LEARNING/</p>
                                            <h4 className='text-2xl text-green-800'>Online Teaching Assistant CIC</h4>
                                        </div>
                                        <div className="md:w-1/3 w-full">
                                            <button className="px-12 py-3 rounded-full">
                                                <a
                                                    href="https://tailwindui.com/documentation"
                                                    className="rounded-full text-xl text-teal-900"
                                                >
                                                    Remote, UT{" "}
                                                </a>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row sm:w-full w-full border-b border-gray-400 pb-5">
                                        <div className="md:w-2/3 w-full">
                                            <p>DISTANCE LEARNING/</p>
                                            <h4 className='text-2xl text-green-800'>Online Teaching Assistant CIC</h4>
                                        </div>
                                        <div className="md:w-1/3 w-full">
                                            <button className="px-12 py-3 rounded-full">
                                                <a
                                                    href="https://tailwindui.com/documentation"
                                                    className="rounded-full text-xl text-teal-900"
                                                >
                                                    Remote, UT{" "}
                                                </a>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row sm:w-full w-full border-b border-gray-400 pb-5">
                                        <div className="md:w-2/3 w-full">
                                            <p>DISTANCE LEARNING/</p>
                                            <h4 className='text-2xl text-green-800'>Online Teaching Assistant CIC</h4>
                                        </div>
                                        <div className="md:w-1/3 w-full">
                                            <button className="px-12 py-3 rounded-full">
                                                <a
                                                    href="https://tailwindui.com/documentation"
                                                    className="rounded-full text-xl text-teal-900"
                                                >
                                                    Remote, UT{" "}
                                                </a>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row sm:w-full w-full border-b border-gray-400 pb-5">
                                        <div className="md:w-2/3 w-full">
                                            <p>DISTANCE LEARNING/</p>
                                            <h4 className='text-2xl text-green-800'>Online Teaching Assistant CIC</h4>
                                        </div>
                                        <div className="md:w-1/3 w-full">
                                            <button className="px-12 py-3 rounded-full">
                                                <a
                                                    href="https://tailwindui.com/documentation"
                                                    className="rounded-full text-xl text-teal-900"
                                                >
                                                    Remote, UT{" "}
                                                </a>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row sm:w-full w-full border-b border-gray-400 pb-5">
                                        <div className="md:w-2/3 w-full">
                                            <p>DISTANCE LEARNING/</p>
                                            <h4 className='text-2xl text-green-800'>Online Teaching Assistant CIC</h4>
                                        </div>
                                        <div className="md:w-1/3 w-full">
                                            <button className="px-12 py-3 rounded-full">
                                                <a
                                                    href="https://tailwindui.com/documentation"
                                                    className="rounded-full text-xl text-teal-900"
                                                >
                                                    Remote, UT{" "}
                                                </a>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="grid place-items-left mt-5">
                                        <div className="flex flex-col md:flex-row sm:w-full w-full mb-5">
                                            <div className="sm:w-full w-full">
                                                <p className='text-lg'>AAPC is an Equal Opportunity Employer. This company does not and will not discriminate in employment
                                                    and personnel practices on the basis of race, sex, age, handicap, religion, ancestry, national origin,
                                                    or any other basis prohibited by applicable law. Hiring, transferring and promotion practices are
                                                    performed without regard to the above-listed items.
                                                </p>
                                                <p className='text-lg'>AAPC is an Equal Opportunity Employer. This company does not and will not discriminate in employment
                                                    and personnel practices on the basis of race, sex, age, handicap, religion, ancestry, national origin,
                                                    or any other basis prohibited by applicable law. Hiring, transferring and promotion practices are
                                                    performed without regard to the above-listed items.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>}
                            {activeSubTab === 2 && <div>
                                <div className="grid place-items-left mt-5">
                                    <div className="flex flex-col md:flex-row sm:w-full w-full mb-5">
                                        <div className="sm:1/2 w-full">
                                            <h3 className='text-3xl mb-5'>AAPC Culture</h3>
                                            <p className='text-lg'>If you ask anyone who works here, they’ll tell you, “life at AAPC is good.”
                                                We love what we do and love working with intelligent, friendly, reasonable, respectful people who
                                                are also motivated to make AAPC fertile grounds to grow professionally and thrive in our careers.
                                                We drive each other to succeed as a team. We endeavor to make our jobs fun. Whether working from
                                                home or working from our offices across the globe, we collaborate effectively, keeping the drama
                                                low and the positive energy high.
                                            </p>
                                        </div>
                                        <div className="sm:1/2 w-full">
                                            <video
                                                className="w-full rounded-lg shadow-lg"
                                                controls
                                                src="https://youtu.be/19tU6TRDQKc"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="grid place-items-left mt-5">
                                    <div className="flex flex-col md:flex-row sm:w-full w-full mb-5">
                                        <div className="sm:w-full w-full">
                                            <h3 className='text-3xl mb-5'>These are the qualities that define us collectively:</h3>
                                            <h5 className='text-2xl mb-2'>Passion</h5>
                                            <p className='text-lg'>If you ask anyone who works here, they’ll tell you, “life at AAPC is good.”
                                                We love what we do and love working with intelligent, friendly, reasonable, respectful people who
                                                are also motivated to make AAPC fertile grounds to grow professionally and thrive in our careers.
                                                We drive each other to succeed as a team. We endeavor to make our jobs fun. Whether working from
                                                home or working from our offices across the globe, we collaborate effectively, keeping the drama
                                                low and the positive energy high.
                                            </p>
                                            <h5 className='text-2xl mb-2'>Humility</h5>
                                            <p className='text-lg'>If you ask anyone who works here, they’ll tell you, “life at AAPC is good.”
                                                We love what we do and love working with intelligent, friendly, reasonable, respectful people who
                                                are also motivated to make AAPC fertile grounds to grow professionally and thrive in our careers.
                                                We drive each other to succeed as a team. We endeavor to make our jobs fun. Whether working from
                                                home or working from our offices across the globe, we collaborate effectively, keeping the drama
                                                low and the positive energy high.
                                            </p>
                                            <h5 className='text-2xl mb-2'>Trustworthiness</h5>
                                            <p className='text-lg'>If you ask anyone who works here, they’ll tell you, “life at AAPC is good.”
                                                We love what we do and love working with intelligent, friendly, reasonable, respectful people who
                                                are also motivated to make AAPC fertile grounds to grow professionally and thrive in our careers.
                                                We drive each other to succeed as a team. We endeavor to make our jobs fun. Whether working from
                                                home or working from our offices across the globe, we collaborate effectively, keeping the drama
                                                low and the positive energy high.
                                            </p>
                                            <h5 className='text-2xl mb-2'>Respect</h5>
                                            <p className='text-lg'>If you ask anyone who works here, they’ll tell you, “life at AAPC is good.”
                                                We love what we do and love working with intelligent, friendly, reasonable, respectful people who
                                                are also motivated to make AAPC fertile grounds to grow professionally and thrive in our careers.
                                                We drive each other to succeed as a team. We endeavor to make our jobs fun. Whether working from
                                                home or working from our offices across the globe, we collaborate effectively, keeping the drama
                                                low and the positive energy high.
                                            </p>
                                            <h5 className='text-2xl mb-2'>Scrappiness</h5>
                                            <p className='text-lg'>If you ask anyone who works here, they’ll tell you, “life at AAPC is good.”
                                                We love what we do and love working with intelligent, friendly, reasonable, respectful people who
                                                are also motivated to make AAPC fertile grounds to grow professionally and thrive in our careers.
                                                We drive each other to succeed as a team. We endeavor to make our jobs fun. Whether working from
                                                home or working from our offices across the globe, we collaborate effectively, keeping the drama
                                                low and the positive energy high.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid place-items-center mt-5">
                                    <div className="flex flex-col  md:flex-row  w-full justify-center gap-8">
                                        <div className="md:w-2/5 w-full">
                                            <div className="p-1">
                                                <img src="./work.webp" alt="hi" />
                                            </div>
                                        </div>
                                        <div className="md:w-3/5 w-full">
                                            <div className="bg-slate-200 p-5 hover:shadow-2xl">
                                                <h4 className="text-2xl mb-5">
                                                    Find the right certification in medical
                                                </h4>
                                                <p className="text-lg text-why">
                                                    Exploring a career in medical coding and billing raises
                                                    questions, one being which certification should I choose?
                                                    Fortunately, identifying the certification that’s right for you
                                                    is easy once you see how they differ.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid place-items-center mt-5">
                                    <div className="sm:w-full w-full justify-center mx-auto">
                                        <div className="bg-darkble p-5 hover:shadow-2xl ">
                                            <h3 className="text-3xl mb-5 flex justify-center text-white">
                                                Want in? Check our open positions.
                                            </h3>
                                            <div className="flex justify-center">
                                                <button className="px-12 py-3 rounded-full bg-blue-700">
                                                    <a
                                                        href="https://tailwindui.com/documentation"
                                                        className="rounded-full text-xl text-white"
                                                    >
                                                        SEE ALL JOBS{" "}
                                                    </a>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>}
                            {activeSubTab === 3 && <div>
                                <div class="grid place-items-center">
                                    <div class="sm:w-full w-full justify-center mx-auto">
                                        <div class="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 w-100 justify-center mx-auto">
                                            <Slider1 />
                                        </div>
                                    </div>
                                </div>
                                <div class="grid place-items-center">
                                    <div class="sm:w-full w-full justify-center mx-auto mt-5">
                                        <div class="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 w-100 justify-center mx-auto">
                                            <h4 className='text-2xl mb-3 font-semibold'>In addition to a great career, AAPC offers:</h4>
                                            <h6 className='text-xl font-semibold'>Health benefits</h6>
                                            <p className='text-lg mt-3'>As a company that serves the healthcare sector, we place a premium on the health of our own employees.
                                                We offer two medical plans, including some with tax-advantaged health savings accounts that AAPC’s
                                                contributes to. We also provide dental, vision, disability, and life insurance coverage at competitive rates.</p>
                                            <h6 className='text-xl font-semibold my-3'>Wellness programs</h6>
                                            <p className='text-lg'>As a company that serves the healthcare sector, we place a premium on the health of our own employees.
                                                We offer two medical plans, including some with tax-advantaged health savings accounts that AAPC’s
                                                contributes to. We also provide dental, vision, disability, and life insurance coverage at competitive rates.</p>
                                            <h6 className='text-xl font-semibold my-3'>401(k) savings plans</h6>
                                            <p className='text-lg'>As a company that serves the healthcare sector, we place a premium on the health of our own employees.
                                                We offer two medical plans, including some with tax-advantaged health savings accounts that AAPC’s
                                                contributes to. We also provide dental, vision, disability, and life insurance coverage at competitive rates.</p>
                                            <h6 className='text-xl font-semibold my-3'>Remote work expenses</h6>
                                            <p className='text-lg'>As a company that serves the healthcare sector, we place a premium on the health of our own employees.
                                                We offer two medical plans, including some with tax-advantaged health savings accounts that AAPC’s
                                                contributes to. We also provide dental, vision, disability, and life insurance coverage at competitive rates.</p>
                                            <h6 className='text-xl font-semibold my-3'>Paid time off</h6>
                                            <p className='text-lg'>As a company that serves the healthcare sector, we place a premium on the health of our own employees.
                                                We offer two medical plans, including some with tax-advantaged health savings accounts that AAPC’s
                                                contributes to. We also provide dental, vision, disability, and life insurance coverage at competitive rates.</p>
                                            <h6 className='text-xl font-semibold my-3'>Employee referral awards</h6>
                                            <p className='text-lg'>As a company that serves the healthcare sector, we place a premium on the health of our own employees.
                                                We offer two medical plans, including some with tax-advantaged health savings accounts that AAPC’s
                                                contributes to. We also provide dental, vision, disability, and life insurance coverage at competitive rates.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid place-items-center mt-5">
                                    <div className="sm:w-full w-full justify-center mx-auto">
                                        <div className="bg-darkble p-5 hover:shadow-2xl ">
                                            <h3 className="text-3xl mb-5 flex justify-center text-white">
                                                Want in? Check our open positions.
                                            </h3>
                                            <div className="flex justify-center">
                                                <button className="px-12 py-3 rounded-full bg-blue-700">
                                                    <a
                                                        href="https://tailwindui.com/documentation"
                                                        className="rounded-full text-xl text-white"
                                                    >
                                                        SEE ALL JOBS{" "}
                                                    </a>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>}
                        </div>
                    )}
                    {activeMainTab === 8 && (
                        <div>
                            {activeSubTab === 1 && <div>
                                <div class="grid place-items-center">
                                    <div class="sm:w-full w-full justify-center mx-auto mt-5">
                                        <div class="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 w-100 justify-center mx-auto">
                                            <h2 className='text-4xl mb-3 font-semibold'>Exhibiting Opportunities</h2>
                                            <p className='text-lg mt-3'>As a company that serves the healthcare sector, we place a premium on the health of our own employees.
                                                We offer two medical plans, including some with tax-advantaged health savings accounts that AAPC’s
                                                contributes to. We also provide dental, vision, disability, and life insurance coverage at competitive rates.
                                                As a company that serves the healthcare sector, we place a premium on the health of our own employees.
                                                We offer two medical plans, including some with tax-advantaged health savings accounts that AAPC’s
                                                contributes to. We also provide dental, vision, disability, and life insurance coverage at competitive rates.</p>
                                            <h3 className='text-3xl font-semibold my-5'>Exhibiting Opportunities</h3>
                                            <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 w-100 justify-center mx-auto">

                                                <div>
                                                    <img src="./House.webp" alt="spkr" />
                                                </div>
                                                <div className='bg-gray-200'>
                                                    <p className='text-lg mt-3'>As a company that serves the healthcare sector, we place a premium on the health of our own employees.
                                                        We offer two medical plans, including some with tax-advantaged health savings accounts that AAPC’s
                                                        contributes to. We also provide dental, vision, disability, and life insurance coverage at competitive rates.
                                                        As a company that serves the healthcare sector, we place a premium on the health of our own employees.
                                                        and life insurance coverage at competitive rates.</p>
                                                </div>
                                            </div>
                                            <h2 className='text-4xl mb-3 font-semibold'>Exhibiting Opportunities</h2>
                                            <p className='text-lg mt-3'>As a company that serves the healthcare sector, we place a premium on the health of our own employees.
                                                We offer two medical plans, including some with tax-advantaged health savings accounts that AAPC’s
                                                contributes to. We also provide dental, vision, disability, and life insurance coverage at competitive rates.
                                                As a company that serves the healthcare sector, we place a premium on the health of our own employees.
                                                We offer two medical plans, including some with tax-advantaged health savings accounts that AAPC’s
                                                contributes to. We also provide dental, vision, disability, and life insurance coverage at competitive rates.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid place-items-center mt-5">
                                    <div className="sm:w-full w-full justify-center mx-auto">
                                        <div className="bg-darkble p-5 hover:shadow-2xl ">
                                            <h3 className="text-3xl mb-5 flex justify-center text-white">
                                                Want in? Check our open positions.
                                            </h3>
                                            <div className="flex justify-center">
                                                <button className="px-12 py-3 rounded-full bg-blue-700">
                                                    <a
                                                        href="https://tailwindui.com/documentation"
                                                        className="rounded-full text-xl text-white"
                                                    >
                                                        SEE ALL JOBS{" "}
                                                    </a>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>}
                        </div>
                    )}
                    {activeMainTab === 9 && (
                        <div>
                            {activeSubTab === 1 && <div>
                                <div className="grid place-items-center mt-5">
                                    <div className="sm:w-full w-full justify-center mx-auto">
                                        <div className="p-5">
                                            <h3 className="text-3xl font-semibold mb-5">
                                                Whats New ?
                                            </h3>
                                            <p className="text-lg text-why">
                                                AAPC is the nation’s largest education and credentialing organization for medical coders, billers, auditors, practice managers, documentation specialists, compliance officers, and revenue cycle managers. All members of AAPC agree to abide by the AAPC Code of Ethics, which ensures high levels of professionalism, integrity, and ethical behavior.
                                            </p>
                                            <h3 className="text-3xl font-semibold mb-5">
                                                Purpose
                                            </h3>
                                            <p className="text-lg text-why">
                                                AAPC discovers, develops, and provides innovative products, services, and solutions to help the global healthcare industry recognize the full potential of their revenue cycle.
                                            </p>
                                            <h3 className="text-3xl font-semibold mb-5">
                                                For Businesses
                                            </h3>
                                            <p className="text-lg text-why">
                                                We help healthcare organizations ensure documentation accuracy, boost employee efficiency, and optimize their revenue cycle. Our elite team of subject matter experts create and manage customized solutions that are tailored to our clients’ unique pain points and goals. Whether it’s coding or audit services, ongoing education, or access to the industry’s most powerful tools and resources, AAPC is the trusted source for driving accuracy, profitability, and peace of mind.
                                            </p>
                                            <h3 className="text-3xl font-semibold mb-5">
                                                For Individuals
                                            </h3>
                                            <p className="text-lg text-why">
                                                We help people find, begin, and maintain new careers. We also help them determine the right career path, provide resources and support throughout their studies, help them land their first job and give them the means to advance their careers. From the tools and resources we offer to a network of over 220,000 coders, billers, auditors and AAPC employees to help them along the way, one thing is certain: AAPC members are never alone.
                                            </p>
                                            <h3 className="text-3xl font-semibold mb-5">
                                                Industry Growth
                                            </h3>
                                            <p className="text-lg text-why">
                                                Job growth for medical records and health information technicians is projected to grow 13% by 2026, according to the U.S. Bureau of Labor Statistics. This rate of growth exceeds the average of all occupations. As demand for healthcare services increases, more trained coders will be needed to manage the increased claims for reimbursement from insurance companies.

                                                All USA physicians and hospitals are required by federal law to use standardized sets of medical codes to report supplies, diagnoses, procedures, and other services associated with patient care. All payments for medical services in the USA are linked to these codes. Medical codes are accurately assigned by coders, determine payment charged by billers, and are monitored and verified by auditors and compliance officers. Practice managers ensure these positions function well together to support the revenue cycle.

                                                Standardized medical codes expedite information gathering, billing, and data collection. This system allows payers to better compare charges for services and set payment rates that fairly reward providers for their work while reducing insurers’ risks. The data can be collected and analyzed for trends, such as which treatment methods work best over time for certain conditions, or what is the frequency of certain diseases or treatments in specific localities? All of this contributes to an overall reduction in the cost of healthcare delivery and better patient care.
                                            </p>
                                            <h3 className="text-3xl font-semibold mb-5">
                                                History
                                            </h3>
                                            <p className="text-lg text-why">
                                                AAPC was founded in 1988 as the American Academy of Professional Coders, with the aim of providing education and certification to coders working in physician-based settings. These settings include group practices and specialty centers (i.e. non-hospital settings). As their services expanded beyond medical and outpatient coding, the full name was dropped in favor of the AAPC initialism.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>}
                        </div>
                    )}
                    {activeMainTab === 10 && (
                        <div>
                            {activeSubTab === 1 && <div>
                                <div className="grid place-items-center mt-5">
                                    <div className="sm:w-full w-full justify-center mx-auto">
                                        <div className="p-5">
                                            <h3 className="text-3xl font-semibold mb-5">
                                                Brand and media kit
                                            </h3>
                                            <p className="text-lg text-why">
                                                AAPC is the nation’s largest education and credentialing organization for medical coders, billers, auditors, practice managers, documentation specialists, compliance officers, and revenue cycle managers. All members of AAPC agree to abide by the AAPC Code of Ethics, which ensures high levels of professionalism, integrity, and ethical behavior.
                                                AAPC is the nation’s largest education and credentialing organization for medical coders, billers, auditors, practice managers, documentation specialists, compliance officers, and revenue cycle managers. All members of AAPC agree to abide by the AAPC Code of Ethics, which ensures high levels of professionalism, integrity, and ethical behavior.
                                                AAPC is the nation’s largest education and credentialing organization for medical coders, billers, auditors, practice managers, documentation specialists, compliance officers, and revenue cycle managers. All members of AAPC agree to abide by the AAPC Code of Ethics, which ensures high levels of professionalism, integrity, and ethical behavior.
                                            </p>
                                            <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 w-100 justify-center mx-auto my-5 gap-4">
                                                <div>
                                                    <img src="./log.webp" alt="spkr" />
                                                </div>
                                                <div>
                                                    <h3 className='text-3xl font-semibold mb-3'>Logos</h3>
                                                    <p className='text-lg'>As a company that serves the healthcare sector, we place a premium on the health of our own employees.
                                                        We offer two medical plans, including some with tax-advantaged</p>
                                                    <button className="py-3 rounded-full">
                                                        <a href="https://tailwindui.com/documentation"
                                                            className="rounded-full text-xl text-teal-900"
                                                        > DOWNLOAD LOGOS{" "}</a>
                                                    </button>
                                                </div>

                                            </div>
                                            <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 w-100 justify-center mx-auto my-5 gap-4">
                                                <div>
                                                    <img src="./vdo.webp" alt="spkr" />
                                                </div>
                                                <div>
                                                    <h3 className='text-3xl font-semibold mb-3'>Logos</h3>
                                                    <p className='text-lg'>As a company that serves the healthcare sector, we place a premium on the health of our own employees.
                                                        We offer two medical plans, including some with</p>
                                                    <button className="py-3 rounded-full">
                                                        <a href="https://tailwindui.com/documentation"
                                                            className="rounded-full text-xl text-teal-900"
                                                        > DOWNLOAD LOGOS{" "}</a>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>}
                        </div>
                    )}
                    {activeMainTab === 11 && (
                        <div>
                            {activeSubTab === 1 && <div>
                                <div className="grid place-items-center mt-5">
                                    <div className="sm:w-full w-full justify-center mx-auto">
                                        <div className="grid sm:grid-cols-1 w-100">
                                            <h3 className="text-3xl mb-5">
                                                Need help? We’ve got options.
                                            </h3>
                                            <p className="text-xl">
                                                Whatever you need, we can help. Below are the various way we can connect with you at your convenience.
                                            </p>
                                        </div>
                                        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 w-100 gap-8 my-5">
                                            <div className="bg-slate-200 p-5 hover:shadow-2xl">
                                                <h3 className="text-3xl mb-5">
                                                    Self-Help
                                                </h3>
                                                <p className="text-lg text-why mb-5">
                                                    Find everything you need to know about membership, CEUs, training courses and more.
                                                </p>
                                                <button className="py-3">
                                                    <a
                                                        href="https://tailwindui.com/documentation"
                                                        className="text-xl text-teal-900"
                                                    >
                                                        SEARCH THE KNOWLEDGE BASE{" "}
                                                    </a>
                                                </button>
                                            </div>
                                            <div className="bg-slate-200 p-5 hover:shadow-2xl">
                                                <h3 className="text-3xl mb-5">
                                                    Chat with Us
                                                </h3>
                                                <p className="text-lg text-why mb-5">
                                                    Need your issue resolved in real time? Start a chat with our customer support team here.
                                                </p>
                                                <button className="py-3">
                                                    <a href="https://tailwindui.com/documentation"
                                                        className="text-xl text-teal-900"
                                                    > CHAT WITH US{" "}
                                                    </a>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 w-100 gap-8 my-5">
                                            <div className="bg-slate-200 p-5 hover:shadow-2xl">
                                                <h3 className="text-3xl mb-5">
                                                    Phone
                                                </h3>
                                                <p className="text-lg text-why">
                                                    Monday - Thursday | 7 AM - 5 PM (MST)
                                                </p>
                                                <p className="text-lg text-why mb-2">
                                                    Friday | 7 AM - 4 PM (MST)
                                                </p>
                                                <p className="text-lg text-why">
                                                    Customer service
                                                </p>
                                                <p className="text-lg text-why mb-2">
                                                    1-800-626-2633
                                                </p>
                                                <p className="text-lg text-why">
                                                    Career counseling
                                                </p>
                                                <p className="text-lg text-why mb-2">
                                                    1-877-290-0440
                                                </p>
                                                <p className="text-lg text-why">
                                                    Businesses
                                                </p>
                                                <p className="text-lg text-why">
                                                    1-844-825-1679
                                                </p>
                                                <button className="py-3">
                                                    <a
                                                        href="https://tailwindui.com/documentation"
                                                        className="text-xl text-teal-900"
                                                    >
                                                        SEARCH THE KNOWLEDGE BASE{" "}
                                                    </a>
                                                </button>
                                            </div>
                                            <div className="bg-slate-200 p-5 hover:shadow-2xl">
                                                <h3 className="text-3xl mb-5">
                                                    Email
                                                </h3>
                                                <p className="text-lg text-why mb-5">
                                                    Send us an email for a more in-depth, but timely, response.
                                                </p>
                                                <button className="py-3">
                                                    <a href="https://tailwindui.com/documentation"
                                                        className="text-xl text-teal-900"
                                                    > SEND US AN EMAIL                                                    {" "}
                                                    </a>
                                                </button>
                                            </div>
                                        </div>
                                        <h3 className='text-3xl'>Payment Mailing Addresses</h3>
                                        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 w-100 gap-2 my-5">
                                            <div>
                                                <img src="./3.webp" alt="gg" />
                                            </div>
                                            <div className="p-5">
                                                <h4 className='text-2xl'>Regular Post</h4>
                                                <p>American Academy Holdings LLC,</p>
                                                <p>PO Box 124048, Dallas, TX 75312-4048</p>
                                            </div>
                                        </div>
                                        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 w-100 gap-2 my-5">
                                            <div>
                                                <img src="./3.webp" alt="gg" />
                                            </div>
                                            <div className="p-5">
                                                <h4 className='text-2xl'> FedEx / UPS</h4>
                                                <p>American Academy Holdings LLC,</p>
                                                <p>Dallas Regional Lockbox,</p>
                                                <p>Lockbox # 894048,</p>
                                                <p>1501 North Plano Road Suite 100 , Richardson, TX 75081</p>
                                            </div>
                                        </div>
                                        <h3 className='text-3xl'>Office Locations</h3>
                                        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 w-100 gap-2 my-5">
                                            <div>
                                                <img src="./3.webp" alt="gg" />
                                            </div>
                                            <div className="p-5">
                                                <h4 className='text-2xl'> FedEx / UPS</h4>
                                                <p>American Academy Holdings LLC,</p>
                                                <p>Dallas Regional Lockbox,</p>
                                                <p>Lockbox # 894048,</p>
                                                <p>1501 North Plano Road Suite 100 , Richardson, TX 75081</p>
                                            </div>
                                        </div>
                                        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 w-100 gap-2 my-5">
                                            <div>
                                                <img src="./4.webp" alt="gg" />
                                            </div>
                                            <div className="p-5">
                                                <h4 className='text-2xl'>United States / Headquarters</h4>
                                                <p>American Academy Holdings LLC,</p>
                                                <p>PO Box 124048, Dallas, TX 75312-4048</p>
                                            </div>
                                        </div>
                                        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 w-100 gap-2 my-5">
                                            <div>
                                                <img src="./5.webp" alt="gg" />
                                            </div>
                                            <div className="p-5">
                                                <h4 className='text-2xl'>Chennai, India</h4>
                                                <p>American Academy Holdings LLC,</p>
                                                <p>PO Box 124048, Dallas, TX 75312-4048</p>
                                            </div>
                                        </div>
                                        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 w-100 gap-2 my-5">
                                            <div>
                                                <img src="./6.webp" alt="gg" />
                                            </div>
                                            <div className="p-5">
                                                <h4 className='text-2xl'>Noida, India</h4>
                                                <p>American Academy Holdings LLC,</p>
                                                <p>PO Box 124048, Dallas, TX 75312-4048</p>
                                            </div>
                                        </div>
                                        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 w-100 gap-2 my-5">
                                            <div>
                                                <img src="./6.webp" alt="gg" />
                                            </div>
                                            <div className="p-5">
                                                <h4 className='text-2xl'>Middle East</h4>
                                                <p>American Academy Holdings LLC,</p>
                                                <p>PO Box 124048, Dallas, TX 75312-4048</p>
                                            </div>
                                        </div>
                                        <h5 className='text-2xl my-2'>Return Addresses</h5>
                                               <p className='text-lg my-2'>Please see our return policies for more information.</p>
                                              
                                        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 w-100 gap-2 my-5">
                                            <div>
                                                <h3 className='text-3xl my-2'>Books Returns:</h3>
                                                <p className='my-2'>PBD – AAPC Returns</p>
                                                <p className='my-2'>3280 Summit Ridge Pkwy</p>
                                                <p className='my-2'>Duluth, GA 30096</p>
                                            </div>
                                            <div className="p-5">
                                                <h3 className='text-3xl'>All other returns:</h3>
                                                <p className='my-2'>AAPC</p>
                                                <p className='my-2'>2233 S. President's Drive</p>
                                                <p className='my-2'>Suite F</p>
                                                <p className='my-2'>Salt Lake City, UT 84120</p>
                                           </div>
                                        </div>
                                    </div>
                                </div>
                            </div>}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default About;
