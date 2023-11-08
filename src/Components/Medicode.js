import { React, useState } from 'react';
import Tab from './Tab';
import { Link } from 'react-router-dom';
function Medicode() {
    const [isOpen1, setisOpen1] = useState(false);
    const [isOpen2, setisOpen2] = useState(false);
    const toggleServices1 = () => {
        setisOpen1(!isOpen1);
        setisOpen2(false);
    };
    const toggleServices2 = () => {
        setisOpen2(!isOpen2);
        setisOpen1(false);

    };

    const tabs = [
        {
            label: 'Search for CEUs',
            content: <div>
                <div class="sm:w-11/12 w-100 justify-center mx-auto">
                    <img src="../2023_july_2024_promos_dl-930x150-px.webp" alt="hrof" />
                    <h4 class="text-2xl text-green-900 font-bold">Continuing Education Units (CEUs)</h4>
                    <p>Health care professionals are obligated to stay current in their profession. This includes
                        continuing education in their respective discipline as well as keeping up with the latest
                        medical coding updates, compliance rules, and government regulations. AAPC supports its
                        members to maintain a distinctive edge in their health care career by providing a wide
                        variety of topics and subject matter delivered live or on demand, in classrooms or over the
                        web.</p>
                    <p>For questions about approved content, CEU requirements and how and when to submit CEUs, see
                        our CEU <span class="text-green-900">Information page.</span></p>
                    <div className='bg-gray-300'>
                        <div className="sm:w-full w-full justify-center mx-auto mt-16 mb-16">
                            <div className="grid xxl:grid-cols-5 xl:grid-cols-5 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 w-100">     
                                <div className='my-2 '>
                                    <input
                                        type="text"
                                        className="w-full p-2 rounded border"
                                        placeholder="Text Input"
                                    />
                                </div>
                                <div className='my-2 '>
                                    <button onClick={toggleServices1} className="text-gray-700 hover:text-gray-900 border border-gray-500 bg-white mt-1 mx-2 px-12 h-10">
                                        Specialty
                                    </button>
                                    {isOpen1 && (
                                        <div className="origin-top-right absolute mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                                            {/* Dropdown content goes here */}
                                            <div className="2xl:w-72 xl:w-72 lg:w-96 md:w-60 sm:w-[35rem] w-[28rem] mx-auto">
                                                <Link
                                                    to="./Prerequisites"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                                                >  Prerequisites
                                                </Link>
                                                <Link
                                                    to="IdentifyAreas"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                                                >
                                                    Areas of weakness
                                                </Link>
                                                <Link
                                                    to="ss"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                                                >
                                                    Practice Exams
                                                </Link>
                                                <Link
                                                    to="ss"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                                                >
                                                    Identify Areas of Weakness
                                                </Link>
                                                <Link
                                                    to="ss"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                                                >
                                                    Study Guide
                                                </Link>
                                                <Link
                                                    to="ss"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                                                >
                                                    Exam Review
                                                </Link>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className='my-2 '>
                                    <input
                                        type="text"
                                        className="w-full p-2 rounded border"
                                        placeholder="Text Input"
                                    />
                                </div>
                                <div className='my-2 '>
                                    <button onClick={toggleServices2} className="text-gray-700 hover:text-gray-900 border border-gray-500 bg-white mt-1 mx-2 px-8 h-10">
                                        Miles From
                                    </button>
                                    {isOpen2 && (
                                        <div className="origin-top-right absolute mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                                            {/* Dropdown content goes here */}
                                            <div className="2xl:w-72 xl:w-72 lg:w-96 md:w-60 sm:w-[35rem] w-[28rem] mx-auto">
                                                <Link
                                                    to="./Prerequisites"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                                                >  Prerequisites
                                                </Link>
                                                <Link
                                                    to="IdentifyAreas"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                                                >
                                                    Areas of weakness
                                                </Link>
                                                <Link
                                                    to="ss"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                                                >
                                                    Practice Exams
                                                </Link>
                                                <Link
                                                    to="ss"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                                                >
                                                    Identify Areas of Weakness
                                                </Link>
                                                <Link
                                                    to="ss"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                                                >
                                                    Study Guide
                                                </Link>
                                                <Link
                                                    to="ss"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                                                >
                                                    Exam Review
                                                </Link>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className='my-2 '>
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        },
        {
            label: 'Events',
            content: <div>
                <div class="flex flex-col md:flex-row gap-4 mx-auto">
                    <div class="sm:basis-full basis-full">
                        <div class="grid place-item-center">
                            <div class="w-full mx-auto">
                                <div id="default-carousel" class="relative w-full bg-gray-300" data-carousel="slide">
                                    <h4 class="text-2xl text-gray-500 pl-10 pt-5">Popular Events</h4>
                                    <div class="relative h-96 overflow-hidden rounded-lg">
                                        <div class="hidden duration-700 ease-in-out mt-6" data-carousel-item>
                                            <div class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 w-100 gap-2 px-16">
                                                <div class="bg-white h-80 mt-2">
                                                    <img src="../pro1.jpg" alt="gh" class="w-full" />
                                                    <h6 class="text-lg text-blue-500 pl-5 mt-3">Coding exam preparation</h6>
                                                    <h5 class="mt-5 pl-5">October 7, 2023 Virtual</h5>
                                                </div>
                                                <div class="bg-white h-80 mt-2">
                                                    <img src="../pro1.jpg" alt="gh" class="w-full" />
                                                    <h6 class="text-lg text-blue-500 pl-5 mt-3">Coding exam preparation</h6>
                                                    <h5 class="mt-5 pl-5">October 7, 2023 Virtual</h5>
                                                </div>
                                                <div class="bg-white h-80 mt-2">
                                                    <img src="../pro1.jpg" alt="gh" class="w-full" />
                                                    <h6 class="text-lg text-blue-500 pl-5 mt-3">Coding exam preparation</h6>
                                                    <h5 class="mt-5 pl-5">October 7, 2023 Virtual</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="hidden duration-700 ease-in-out mt-6" data-carousel-item>
                                            <div class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 w-100 gap-2 px-16">
                                                <div class="bg-white h-80 mt-2">
                                                    <img src="../pro1.jpg" alt="gh" class="w-full" />
                                                    <h6 class="text-lg text-blue-500 pl-5 mt-3">Coding exam preparation</h6>
                                                    <h5 class="mt-5 pl-5">October 7, 2023 Virtual</h5>
                                                </div>
                                                <div class="bg-white h-80 mt-2">
                                                    <img src="../pro1.jpg" alt="gh" class="w-full" />
                                                    <h6 class="text-lg text-blue-500 pl-5 mt-3">Coding exam preparation</h6>
                                                    <h5 class="mt-5 pl-5">October 7, 2023 Virtual</h5>
                                                </div>
                                                <div class="bg-white h-80 mt-2">
                                                    <img src="../pro1.jpg" alt="gh" class="w-full" />
                                                    <h6 class="text-lg text-blue-500 pl-5 mt-3">Coding exam preparation</h6>
                                                    <h5 class="mt-5 pl-5">October 7, 2023 Virtual</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="hidden duration-700 ease-in-out mt-6" data-carousel-item>
                                            <div class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 w-100 gap-2 px-16">
                                                <div class="bg-white h-80 mt-2">
                                                    <img src="../pro1.jpg" alt="gh" class="w-full" />
                                                    <h6 class="text-lg text-blue-500 pl-5 mt-3">Coding exam preparation</h6>
                                                    <h5 class="mt-5 pl-5">October 7, 2023 Virtual</h5>
                                                </div>
                                                <div class="bg-white h-80 mt-2">
                                                    <img src="../pro1.jpg" alt="gh" class="w-full" />
                                                    <h6 class="text-lg text-blue-500 pl-5 mt-3">Coding exam preparation</h6>
                                                    <h5 class="mt-5 pl-5">October 7, 2023 Virtual</h5>
                                                </div>
                                                <div class="bg-white h-80 mt-2">
                                                    <img src="../pro1.jpg" alt="gh" class="w-full" />
                                                    <h6 class="text-lg text-blue-500 pl-5 mt-3">Coding exam preparation</h6>
                                                    <h5 class="mt-5 pl-5">October 7, 2023 Virtual</h5>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="hidden duration-700 ease-in-out mt-6" data-carousel-item>
                                            <div class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 w-100 gap-2 px-16">
                                                <div class="bg-white h-80 mt-2">
                                                    <img src="../pro1.jpg" alt="gh" class="w-full" />
                                                    <h6 class="text-lg text-blue-500 pl-5 mt-3">Coding exam preparation</h6>
                                                    <h5 class="mt-5 pl-5">October 7, 2023 Virtual</h5>
                                                </div>
                                                <div class="bg-white h-80 mt-2">
                                                    <img src="../pro1.jpg" alt="gh" class="w-full" />
                                                    <h6 class="text-lg text-blue-500 pl-5 mt-3">Coding exam preparation</h6>
                                                    <h5 class="mt-5 pl-5">October 7, 2023 Virtual</h5>
                                                </div>
                                                <div class="bg-white h-80 mt-2">
                                                    <img src="../pro1.jpg" alt="gh" class="w-full" />
                                                    <h6 class="text-lg text-blue-500 pl-5 mt-3">Coding exam preparation</h6>
                                                    <h5 class="mt-5 pl-5">October 7, 2023 Virtual</h5>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="hidden duration-700 ease-in-out mt-6" data-carousel-item>
                                            <div class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 w-100 gap-2 px-16">
                                                <div class="bg-white h-80 mt-2">
                                                    <img src="../pro1.jpg" alt="gh" class="w-full" />
                                                    <h6 class="text-lg text-blue-500 pl-5 mt-3">Coding exam preparation</h6>
                                                    <h5 class="mt-5 pl-5">October 7, 2023 Virtual</h5>
                                                </div>
                                                <div class="bg-white h-80 mt-2">
                                                    <img src="../pro1.jpg" alt="gh" class="w-full" />
                                                    <h6 class="text-lg text-blue-500 pl-5 mt-3">Coding exam preparation</h6>
                                                    <h5 class="mt-5 pl-5">October 7, 2023 Virtual</h5>
                                                </div>
                                                <div class="bg-white h-80 mt-2">
                                                    <img src="../pro1.jpg" alt="gh" class="w-full" />
                                                    <h6 class="text-lg text-blue-500 pl-5 mt-3">Coding exam preparation</h6>
                                                    <h5 class="mt-5 pl-5">October 7, 2023 Virtual</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button"
                                        class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                                        data-carousel-prev>
                                        <span
                                            class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                            <svg class="w-4 h-4 text-black dark:text-gray-800" aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                    stroke-width="2" d="M5 1 1 5l4 4" />
                                            </svg>
                                            <span class="sr-only">Previous</span>
                                        </span>
                                    </button>
                                    <button type="button"
                                        class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                                        data-carousel-next>
                                        <span
                                            class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                            <svg class="w-4 h-4 text-black dark:text-gray-800" aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                    stroke-width="2" d="m1 9 4-4-4-4" />
                                            </svg>
                                            <span class="sr-only">Next</span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="grid">
                            <h4 class="text-2xl mt-5 mb-5">Earn. Learn. Engage.</h4>
                        </div>
                        <div class="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-2">
                            <div>
                                <img src="../hcon.png" alt="gh" />
                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-24">
                                    UPCOMING WEBINAR
                                </button>
                            </div>
                            <div class="place-content-around">
                                <img src="../hcon1.png" alt="gh" />
                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2  ml-24">
                                    UPCOMING WEBINAR
                                </button>
                            </div>
                        </div>
                        <div class="grid">
                            <h4 class="text-2xl">AAPC is pleased to announce a stellar 2023 conference lineup.</h4>
                            <p class="mt-5"><span class="text-lg font-semibold text-gray-500">Hybrid Event</span> - Our hybrid event
                                offers an enormous number of session topics covering a wide
                                range of specialties, along with flexibility to choose between being onsite or virtual.</p>
                            <p class="mt-3">HEALTHCON 2024 in Las Vegas, NV | April 14-17, 2024 | 18 CEUs | 80+ Sessions | 65+
                                Speakers
                                <br /><span class="text-darksky text-lg font-semibold">Register Now!</span>
                            </p>
                            <p class="mt-3"><span class="text-lg font-semibold text-gray-500">Virtual Events</span> - Our virtual
                                events offer you a convenient way to stay current on
                                specialty-specific topics.</p>
                            <p class="mt-3"><span class="text-lg font-semibold text-gray-500">DOCUCON</span> - A Clinical
                                Documentation Improvement Conference | September 19-20, 2023 | 12 CEUs | 2
                                Tracks | 16 Sessions Total <br /><span class="text-darksky text-lg font-semibold">Register Now!</span>
                            </p>
                            <p class="mt-3"><span class="text-lg font-semibold text-gray-500">AUDITCON </span>- Two Days. All About
                                Auditing. | November 8-9, 2023 | 12 CEUs | 3 Tracks | 23 Sessions
                                Total
                                <br /><span class="text-darksky text-lg font-semibold">Register Now!</span>
                            </p>
                            <p class="mt-3"><span class="text-lg font-semibold text-gray-500">Onsite Event </span>- While smaller
                                than our HEALTHCON event, this in-person only event offers a wide
                                variety of sessions covering a range of specialties along with the opportunity for attendees to
                                meet other healthcare professionals in their region.</p>
                            <p class="mt-3"> HEALTHCON Regional 2024 in Philadelphia, PA | August 26-28 | 15 CEUs | 40+ Sessions |
                                30+
                                Speakers
                                Coming Soon!</p>
                        </div>
                        <div class="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 bg-gray-200 p-7 mt-5">
                            <div>
                                <p>Learn more about your local AAPC chapter</p>
                            </div>
                            <div>
                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
                                    LOCAL CHAPTERS</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        },
        {
            label: 'Workshops',
            content: <div>
                <div class="w-full justify-center mx-auto">
                    <div class="flex flex-col md:flex-row gap-4 mx-auto">
                        <div class="sm:basis-full basis-full">
                            <h4 class="text-2xl text-darksky">Virtual Workshops: Classroom Learning Without the Classroom
                            </h4>
                            <p class="bg-gray-100 p-10 mt-5 font-semibold text-justify">AAPC Workshops provide in-depth
                                information on critical business of healthcare topics. Get
                                hands-on experience through interactive exercises and online discussions led by industry
                                experts. These events allow attendees to interact with presenters to discuss the unique
                                challenges they face, all from the convenience of home or office. Workshop recordings are
                                available on-demand shortly after live presentations are completed.</p>

                            <div class="mt-5">
                                <h4 class="text-2xl font-semibold">Upcoming Workshops</h4>
                            </div>
                            <div class="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 mt-5">
                                <div class="">
                                    <img src="../from.webp" alt="hell" />
                                </div>
                                <div class="col-span-3">
                                    <h5 class="text-xl text-lightsky font-bold">From Confusion to Clarity: Mastering E/M
                                        Documentation Challenges</h5>
                                    <p class="font-semibold text-xl mt-2">SEPTEMBER 26, 2023 | CEUs: 6.0 |</p>
                                    <p class="font-semibold mt-2"><del>$189.95</del> <span class="text-red-600">$149.95</span></p>
                                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                            <hr class="mt-2" />
                            <div class="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 mt-5">
                                <div class="">
                                    <img src="../from.webp" alt="hell" />
                                </div>
                                <div class="col-span-3">
                                    <h5 class="text-xl text-lightsky font-bold">From Confusion to Clarity: Mastering E/M
                                        Documentation Challenges</h5>
                                    <p class="font-semibold text-xl mt-2">SEPTEMBER 26, 2023 | CEUs: 6.0 |</p>
                                    <p class="font-semibold mt-2"><del>$189.95</del> <span class="text-red-600">$149.95</span></p>
                                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                            <hr class="mt-2" />
                            <div class="grid md:grid-cols-4 border border-y-1 border-x-0 border-gray-200 p-5">
                                <div class="text-left font-bold text-blue-600">Sort By Date</div>
                                <div class="text-left col-span-3 font-bold">Sort By Topics</div>
                            </div>

                            <div class="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 mt-5">
                                <div class="">
                                    <img src="../from.webp" alt="hell" />
                                </div>
                                <div class="col-span-3">
                                    <h5 class="text-xl text-lightsky font-bold">From Confusion to Clarity: Mastering E/M
                                        Documentation Challenges</h5>
                                    <p class="font-semibold text-xl mt-2">SEPTEMBER 26, 2023 | CEUs: 6.0 |</p>
                                    <p class="font-semibold mt-2"><del>$189.95</del> <span class="text-red-600">$149.95</span></p>
                                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                            <hr class="mt-2" />
                            <div class="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 mt-5">
                                <div class="">
                                    <img src="../from.webp" alt="hell" />
                                </div>
                                <div class="col-span-3">
                                    <h5 class="text-xl text-lightsky font-bold">From Confusion to Clarity: Mastering E/M
                                        Documentation Challenges</h5>
                                    <p class="font-semibold text-xl mt-2">SEPTEMBER 26, 2023 | CEUs: 6.0 |</p>
                                    <p class="font-semibold mt-2"><del>$189.95</del> <span class="text-red-600">$149.95</span></p>
                                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                            <hr class="mt-2" />
                            <div class="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 mt-5">
                                <div class="">
                                    <img src="../from.webp" alt="hell" />
                                </div>
                                <div class="col-span-3">
                                    <h5 class="text-xl text-lightsky font-bold">From Confusion to Clarity: Mastering E/M
                                        Documentation Challenges</h5>
                                    <p class="font-semibold text-xl mt-2">SEPTEMBER 26, 2023 | CEUs: 6.0 |</p>
                                    <p class="font-semibold mt-2"><del>$189.95</del> <span class="text-red-600">$149.95</span></p>
                                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                            <hr class="mt-2" />
                            <div class="grid border border-y-1 border-x-0 border-gray-200 p-3 mt-5">
                                <div class="text-center font-bold text-blue-600"> [Show more] </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        },
        {
            label: 'Webinars',
            content: <div>
                <div class="flex flex-col md:flex-row gap-4 mx-auto">
                    <div class="md:basis-full sm:basis-full basis-full justify-center mx-auto">
                        <h4 class="text-2xl text-titski font-bold">Webinars: Stay Up to Date and Earn CEUs!</h4>
                        <p>Health care professionals are obligated to stay current in their profession. This includes
                            continuing education in their respective discipline as well as keeping up with the latest
                            medical coding updates, compliance rules, and government regulations. AAPC supports its
                            members to maintain a distinctive edge in their health care career by providing a wide
                            variety of topics and subject matter delivered live or on demand, in classrooms or over the
                            web.</p>
                        <p>For questions about approved content, CEU requirements and how and when to submit CEUs, see
                            our CEU <span class="text-green-900">Information page.</span></p>
                        <div class="align-center">
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 text-center mb-10">
                                View webinar Library
                            </button>
                        </div>
                        <div class="grid 2xl:grid-cols-3 xl:grid-cols-3 lg-grid-cols-3 gap-4">
                            <div class="bg-lightblu pb-5">
                                <h4 class="text-2xl text-white text-center py-10 font-semibold">Single Webinar</h4>
                                <hr class="mx-7" />
                                <p class="text-5xl text-white text-center pt-16 font-semibold ">$65</p>
                                <p class="text-white text-lg text-center pb-16">for Members</p>
                                <p class="text-lightblue text-lg text-center bg-white px-3 py-3 w-9/12 mx-auto font-semibold">
                                    VIEW WEBINARS</p>
                            </div>
                            <div class="bg-lightblu pb-5">
                                <h4 class="text-2xl text-white text-center py-10 font-semibold">Webinar 6-Pack</h4>
                                <hr class="mx-7" />
                                <p class="text-5xl text-white text-center pt-16 font-semibold ">$165</p>
                                <p class="text-white text-lg text-center pb-16">for Members</p>
                                <p class="text-lightblue text-lg text-center bg-white px-3 py-3 w-9/12 mx-auto font-semibold">
                                    Add To Cart</p>
                            </div>
                            <div class="bg-darkblu pb-5">
                                <h4 class="text-2xl text-white text-center py-10 font-semibold">Subscription</h4>
                                <hr class="mx-7" />
                                <button id="dropdownDelayButton" data-dropdown-toggle="dropdownDelay" data-dropdown-delay="500"
                                    data-dropdown-trigger="hover"
                                    class="text-black bg-white  font-medium rounded-lg text-sm px-5 py-2.5 ml-10 mt-5 text-center inline-flex items-center"
                                    type="button">$419* | 1-year subscription<svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="m1 1 4 4 4-4" />
                                    </svg></button>
                                <div id="dropdownDelay"
                                    class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButton">
                                        <li>
                                            <a href="jj"
                                                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">$419*
                                                | 1-year subscription</a>
                                        </li>
                                    </ul>
                                </div>
                                <p class="text-lg text-white text-center pb-3">*for Members</p>
                                <p class="text-white pb-20"><input id="comments" class="mx-5"
                                    aria-describedby="comments-description" name="comments" type="checkbox" />Auto-Renew
                                    my subscription</p>
                                <p class="text-lightblue text-lg text-center bg-white px-3 py-3 w-9/12 mx-auto font-semibold">
                                    Add To Cart</p>
                            </div>
                        </div>
                        <div class="grid 2xl:grid-cols-3 xl:grid-cols-3 lg-grid-cols-3 gap-4 border mt-20 border-indigo-600">
                            <div class="px-5 py-5">
                                <ul>
                                    <li>Group Webinar Subscriptions</li>
                                    <li>Easy and efficient way to earn CEUS</li>
                                    <li>Discounted pricing for multiple users</li>
                                    <li>Administrator managed account</li>
                                </ul>
                            </div>
                            <div class="px-5 py-5">
                                <p class="text-gray-600">For more information</p>
                                <b className='text-2xl'>Call 877-524-5027 or</b>
                            </div>
                            <div class="px-3 py-5">
                                <p class="text-white text-lg text-center bg-blue-700 px-8 py-3 w-9/12 mx-auto font-semibold">
                                    REQUEST QUOTE</p>
                            </div>
                        </div>
                        <div class="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 gap-16 mt-20">
                            <div class="px-5 py-5 border border-gray-300">
                                <p>Looking for something more interactive & hands-on? Check out <span class="text-darksky">AAPC
                                    Workshops</span></p>
                            </div>
                            <div class="px-5 py-5 border border-gray-300">
                                <p>Want to Be a Webinar Presenter? <span class="text-darksky">Learn More</span></p>
                            </div>
                        </div>
                        <div id="default-carousel" class="relative w-full mt-20 border border-orange-600" data-carousel="slide">
                            <div class="relative h-80 overflow-hidden rounded-lg md:h-80">
                                <div class="hidden duration-700 ease-in-out mt-20" data-carousel-item>
                                    <div class="px-5 py-5 h-80">
                                        <p class="text-center px-40 pt-10">The webinars are great! There are a vide variety
                                            of topics, they are easy to access
                                            and I cannot think of a way to improve them, at this time.</p>
                                        <h4 class="text-2xl text-center">Coding exam </h4>
                                    </div>
                                </div>
                                <div class="hidden duration-700 ease-in-out mt-20" data-carousel-item>
                                    <div class="px-5 py-5 h-80">
                                        <p class="text-center px-40 pt-10">The webinars are great! There are a vide variety
                                            of topics, they are easy to access
                                            and I cannot think of a way to improve them, at this time.</p>
                                        <h4 class="text-2xl text-center">Coding exam </h4>
                                    </div>
                                </div>
                                <div class="hidden duration-700 ease-in-out mt-20" data-carousel-item>
                                    <div class="px-5 py-5 h-80">
                                        <p class="text-center px-40 pt-10">The webinars are great! There are a vide variety
                                            of topics, they are easy to access
                                            and I cannot think of a way to improve them, at this time.</p>
                                        <h4 class="text-2xl text-center">Coding exam </h4>
                                    </div>
                                </div>
                                <div class="hidden duration-700 ease-in-out mt-20" data-carousel-item>
                                    <div class="px-5 py-5 h-80">
                                        <p class="text-center px-40 pt-10">The webinars are great! There are a vide variety
                                            of topics, they are easy to access
                                            and I cannot think of a way to improve them, at this time.</p>
                                        <h4 class="text-2xl text-center">Coding exam </h4>
                                    </div>
                                </div>
                                <div class="hidden duration-700 ease-in-out mt-20" data-carousel-item>
                                    <div class="px-5 py-5 h-80">
                                        <p class="text-center px-40 pt-10">The webinars are great! There are a vide variety
                                            of topics, they are easy to access
                                            and I cannot think of a way to improve them, at this time.</p>
                                        <h4 class="text-2xl text-center">Coding exam </h4>
                                    </div>
                                </div>
                            </div>
                            <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                                <button type="button"
                                    class="w-3 h-3 rounded-full bg-orange-600 dark:bg-orange-600 hover:bg-orange-600 dark:hover:bg-orange-600"
                                    aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                                <button type="button"
                                    class="w-3 h-3 rounded-full bg-orange-600 dark:bg-orange-600 hover:bg-orange-600 dark:hover:bg-orange-600"
                                    aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                                <button type="button"
                                    class="w-3 h-3 rounded-full bg-orange-600 dark:bg-orange-600 hover:bg-orange-600 dark:hover:bg-orange-600"
                                    aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                                <button type="button"
                                    class="w-3 h-3 rounded-full bg-orange-600 dark:bg-orange-600 hover:bg-orange-600 dark:hover:bg-orange-600"
                                    aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                                <button type="button"
                                    class="w-3 h-3 rounded-full bg-orange-600 dark:bg-orange-600 hover:bg-orange-600 dark:hover:bg-orange-600"
                                    aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                            </div>
                            <button type="button"
                                class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                                data-carousel-prev>
                                <span
                                    class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                    <svg class="w-4 h-4 text-black dark:text-gray-800" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M5 1 1 5l4 4" />
                                    </svg>
                                    <span class="sr-only">Previous</span>
                                </span>
                            </button>
                            <button type="button"
                                class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                                data-carousel-next>
                                <span
                                    class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                    <svg class="w-4 h-4 text-black dark:text-gray-800" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="m1 9 4-4-4-4" />
                                    </svg>
                                    <span class="sr-only">Next</span>
                                </span>
                            </button>
                        </div>
                        <div class="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 gap-16 mt-20">
                            <div class="px-5 py-5">
                                <h4 class="text-2xl">Upcoming Webinars</h4>
                            </div>
                            <div class="px-5 py-5">
                                <form class="flex items-center">
                                    <div class="relative w-full">
                                        <input type="text" id="voice-search"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            required />
                                    </div>
                                    <button type="submit"
                                        class="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Search
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div class="overflow-auto h-96 w-11/12 mx-auto">
                            <table class="table-auto">
                                <thead>
                                    <tr className='bg-gray-500 text-white'>
                                        <th class="w-1/5 py-3 text-left">Date</th>
                                        <th class="w-2/5">Topic</th>
                                        <th class="w-1/5">CEUs</th>
                                        <th class="w-1/5">Take Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-slate-300">
                                        <td class="w-1/5 py-3">12/9/2023</td>
                                        <td class="w-2/5">Malcolm Lockyer Malcolm LockyerMalcolm Lock</td>
                                        <td class="w-1/5 text-center">1.0</td>
                                        <td class="w-1/5 text-center">Registor Now</td>
                                    </tr>
                                    <tr class="bg-slate-200">
                                        <td class="w-1/5 py-3">12/9/2023</td>
                                        <td class="w-2/5">Malcolm Lockyer Malcolm LockyerMalcolm Lock</td>
                                        <td class="w-1/5 text-center">1.0</td>
                                        <td class="w-1/5 text-center">Registor Now</td>
                                    </tr>
                                    <tr class="bg-slate-300">
                                        <td class="w-1/5 py-3">12/9/2023</td>
                                        <td class="w-2/5">Malcolm Lockyer Malcolm LockyerMalcolm Lock</td>
                                        <td class="w-1/5 text-center">1.0</td>
                                        <td class="w-1/5 text-center">Registor Now</td>
                                    </tr>
                                    <tr class="bg-slate-200">
                                        <td class="w-1/5 py-3">12/9/2023</td>
                                        <td class="w-2/5">Malcolm Lockyer Malcolm LockyerMalcolm Lock</td>
                                        <td class="w-1/5 text-center">1.0</td>
                                        <td class="w-1/5 text-center">Registor Now</td>
                                    </tr>
                                    <tr class="bg-slate-300">
                                        <td class="w-1/5 py-3">12/9/2023</td>
                                        <td class="w-2/5">Malcolm Lockyer Malcolm LockyerMalcolm Lock</td>
                                        <td class="w-1/5 text-center">1.0</td>
                                        <td class="w-1/5 text-center">Registor Now</td>
                                    </tr>
                                    <tr class="bg-slate-200">
                                        <td class="w-1/5 py-3">12/9/2023</td>
                                        <td class="w-2/5">Malcolm Lockyer Malcolm LockyerMalcolm Lock</td>
                                        <td class="w-1/5 text-center">1.0</td>
                                        <td class="w-1/5 text-center">Registor Now</td>
                                    </tr>
                                    <tr class="bg-slate-300">
                                        <td class="w-1/5 py-3">12/9/2023</td>
                                        <td class="w-2/5">Malcolm Lockyer Malcolm LockyerMalcolm Lock</td>
                                        <td class="w-1/5 text-center">1.0</td>
                                        <td class="w-1/5 text-center">Registor Now</td>
                                    </tr>
                                    <tr class="bg-slate-200">
                                        <td class="w-1/5 py-3">12/9/2023</td>
                                        <td class="w-2/5">Malcolm Lockyer Malcolm LockyerMalcolm Lock</td>
                                        <td class="w-1/5 text-center">1.0</td>
                                        <td class="w-1/5 text-center">Registor Now</td>
                                    </tr>
                                    <tr class="bg-slate-300">
                                        <td class="w-1/5 py-3">12/9/2023</td>
                                        <td class="w-2/5">Malcolm Lockyer Malcolm LockyerMalcolm Lock</td>
                                        <td class="w-1/5 text-center">1.0</td>
                                        <td class="w-1/5 text-center">Registor Now</td>
                                    </tr>
                                    <tr class="bg-slate-200">
                                        <td class="w-1/5 py-3">12/9/2023</td>
                                        <td class="w-2/5">Malcolm Lockyer Malcolm LockyerMalcolm Lock</td>
                                        <td class="w-1/5 text-center">1.0</td>
                                        <td class="w-1/5 text-center">Registor Now</td>
                                    </tr>
                                    <tr class="bg-slate-300">
                                        <td class="w-1/5 py-3">12/9/2023</td>
                                        <td class="w-2/5">Malcolm Lockyer Malcolm LockyerMalcolm Lock</td>
                                        <td class="w-1/5 text-center">1.0</td>
                                        <td class="w-1/5 text-center">Registor Now</td>
                                    </tr>
                                    <tr class="bg-slate-200">
                                        <td class="w-1/5 py-3">12/9/2023</td>
                                        <td class="w-2/5">Malcolm Lockyer Malcolm LockyerMalcolm Lock</td>
                                        <td class="w-1/5 text-center">1.0</td>
                                        <td class="w-1/5 text-center">Registor Now</td>
                                    </tr>
                                    <tr class="bg-slate-300">
                                        <td class="w-1/5 py-3">12/9/2023</td>
                                        <td class="w-2/5">Malcolm Lockyer Malcolm LockyerMalcolm Lock</td>
                                        <td class="w-1/5 text-center">1.0</td>
                                        <td class="w-1/5 text-center">Registor Now</td>
                                    </tr>
                                    <tr class="bg-slate-200">
                                        <td class="w-1/5 py-3">12/9/2023</td>
                                        <td class="w-2/5">Malcolm Lockyer Malcolm LockyerMalcolm Lock</td>
                                        <td class="w-1/5 text-center">1.0</td>
                                        <td class="w-1/5 text-center">Registor Now</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 gap-16 mt-20">
                            <div class="px-5 py-5">
                                <h4 class="text-2xl">Upcoming Webinars</h4>
                            </div>
                            <div class="px-5 py-5">
                                <form class="flex items-center">
                                    <div class="relative w-full">
                                        <input type="text" id="voice-search"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            required />
                                    </div>
                                    <button type="submit"
                                        class="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Search
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div class="overflow-auto h-96 w-11/12 mx-auto">
                            <table class="table-auto">
                                <thead>
                                    <tr>
                                        <th class="w-1/5 py-3 text-left">Date</th>
                                        <th class="w-2/5">Topic</th>
                                        <th class="w-1/5">CEUs</th>
                                        <th class="w-1/5">Take Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-slate-300">
                                        <td class="w-1/5 py-3">12/9/2023</td>
                                        <td class="w-2/5">Malcolm Lockyer Malcolm LockyerMalcolm Lock</td>
                                        <td class="w-1/5 text-center">1.0</td>
                                        <td class="w-1/5 text-center">Registor Now</td>
                                    </tr>
                                    <tr class="bg-slate-200">
                                        <td class="w-1/5 py-3">12/9/2023</td>
                                        <td class="w-2/5">Malcolm Lockyer Malcolm LockyerMalcolm Lock</td>
                                        <td class="w-1/5 text-center">1.0</td>
                                        <td class="w-1/5 text-center">Registor Now</td>
                                    </tr>
                                    <tr class="bg-slate-300">
                                        <td class="w-1/5 py-3">12/9/2023</td>
                                        <td class="w-2/5">Malcolm Lockyer Malcolm LockyerMalcolm Lock</td>
                                        <td class="w-1/5 text-center">1.0</td>
                                        <td class="w-1/5 text-center">Registor Now</td>
                                    </tr>
                                    <tr class="bg-slate-200">
                                        <td class="w-1/5 py-3">12/9/2023</td>
                                        <td class="w-2/5">Malcolm Lockyer Malcolm LockyerMalcolm Lock</td>
                                        <td class="w-1/5 text-center">1.0</td>
                                        <td class="w-1/5 text-center">Registor Now</td>
                                    </tr>
                                    <tr class="bg-slate-300">
                                        <td class="w-1/5 py-3">12/9/2023</td>
                                        <td class="w-2/5">Malcolm Lockyer Malcolm LockyerMalcolm Lock</td>
                                        <td class="w-1/5 text-center">1.0</td>
                                        <td class="w-1/5 text-center">Registor Now</td>
                                    </tr>
                                    <tr class="bg-slate-200">
                                        <td class="w-1/5 py-3">12/9/2023</td>
                                        <td class="w-2/5">Malcolm Lockyer Malcolm LockyerMalcolm Lock</td>
                                        <td class="w-1/5 text-center">1.0</td>
                                        <td class="w-1/5 text-center">Registor Now</td>
                                    </tr>
                                    <tr class="bg-slate-300">
                                        <td class="w-1/5 py-3">12/9/2023</td>
                                        <td class="w-2/5">Malcolm Lockyer Malcolm LockyerMalcolm Lock</td>
                                        <td class="w-1/5 text-center">1.0</td>
                                        <td class="w-1/5 text-center">Registor Now</td>
                                    </tr>
                                    <tr class="bg-slate-200">
                                        <td class="w-1/5 py-3">12/9/2023</td>
                                        <td class="w-2/5">Malcolm Lockyer Malcolm LockyerMalcolm Lock</td>
                                        <td class="w-1/5 text-center">1.0</td>
                                        <td class="w-1/5 text-center">Registor Now</td>
                                    </tr>
                                    <tr class="bg-slate-300">
                                        <td class="w-1/5 py-3">12/9/2023</td>
                                        <td class="w-2/5">Malcolm Lockyer Malcolm LockyerMalcolm Lock</td>
                                        <td class="w-1/5 text-center">1.0</td>
                                        <td class="w-1/5 text-center">Registor Now</td>
                                    </tr>
                                    <tr class="bg-slate-200">
                                        <td class="w-1/5 py-3">12/9/2023</td>
                                        <td class="w-2/5">Malcolm Lockyer Malcolm LockyerMalcolm Lock</td>
                                        <td class="w-1/5 text-center">1.0</td>
                                        <td class="w-1/5 text-center">Registor Now</td>
                                    </tr>
                                    <tr class="bg-slate-300">
                                        <td class="w-1/5 py-3">12/9/2023</td>
                                        <td class="w-2/5">Malcolm Lockyer Malcolm LockyerMalcolm Lock</td>
                                        <td class="w-1/5 text-center">1.0</td>
                                        <td class="w-1/5 text-center">Registor Now</td>
                                    </tr>
                                    <tr class="bg-slate-200">
                                        <td class="w-1/5 py-3">12/9/2023</td>
                                        <td class="w-2/5">Malcolm Lockyer Malcolm LockyerMalcolm Lock</td>
                                        <td class="w-1/5 text-center">1.0</td>
                                        <td class="w-1/5 text-center">Registor Now</td>
                                    </tr>
                                    <tr class="bg-slate-300">
                                        <td class="w-1/5 py-3">12/9/2023</td>
                                        <td class="w-2/5">Malcolm Lockyer Malcolm LockyerMalcolm Lock</td>
                                        <td class="w-1/5 text-center">1.0</td>
                                        <td class="w-1/5 text-center">Registor Now</td>
                                    </tr>
                                    <tr class="bg-slate-200">
                                        <td class="w-1/5 py-3">12/9/2023</td>
                                        <td class="w-2/5">Malcolm Lockyer Malcolm LockyerMalcolm Lock</td>
                                        <td class="w-1/5 text-center">1.0</td>
                                        <td class="w-1/5 text-center">Registor Now</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="grid 2xl:grid-cols-2 xl:grid-cols-2 lg-grid-cols-2 gap-4 mt-20">
                            <div class="border border-gray-300">
                                <h6 class="text-lg text-center text-lightsky py-4">System Requirements</h6>
                            </div>
                            <div class="border border-gray-300">
                                <h6 class="text-lg text-center py-4 text-lightsky">System Requirements</h6>
                            </div>
                        </div>
                        <div class="grid">
                            <div class="bg-blue-300 p-10 border border-gray-300 mt-10">
                                <h6 class="text-lg">Webinars are for individual use only and may not be rebroadcast, shared, or
                                    disseminated.
                                    Each webinar subscription or purchase entitles the user to one online connection or one
                                    back-up phone line. The use of more than one phone line and phone conferencing is
                                    prohibited. Only individuals owning a webinar purchase, whether subscription or single
                                    webinar purchase will be given CEUs for the broadcast and the quiz. Unauthorized persons
                                    will not be given access. CEUs are one-time use only. Group webinar subscription spaces are
                                    intended for a single user per space for the subscription term. A subscription space is not
                                    meant to be shared with multiple users. The webinar administrator can remove a user’s
                                    access, should a user leave employment, so another user can utilize the space for the
                                    duration of the subscription term.</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        },


        {
            label: 'Local Chapter Events',
            content: <div>
                <div class="flex flex-col md:flex-row gap-4 mx-auto">
                    <div class="md:basis-full sm:basis-full basis-full justify-center mx-auto mb-5">
                        <h6 class="text-lg text-titski font-bold">Webinars: Stay Up to Date and Earn CEUs!</h6>
                        <p className='text-justify'>Health care professionals are obligated to stay current in their profession. This includes
                            continuing education in their respective discipline as well as keeping up with the latest</p>
                        <ul className='list-disc pl-10'>
                            <li>Support the national membership by providing educational and networking opportunities on a local level (provide CEUs)..</li>
                            <li>AAPC supports its health care members to maintain a distinctive edge in their</li>
                            <li>of topics and subject matter delivered live classrooms career by providing a wide</li>
                            <li>variety or on demand, in  or over the web.Health care professionals are obligated to stay</li>
                            <li>current in their profession. This includes continuing education in their respective discipline </li>
                            <li>as well as keeping up with the latest medical coding updates compliance rules, and gover,</li>
                        </ul>
                        <p className='text-justify'>Health care professionals are obligated to stay current in their profession. This includes
                            continuing education in their respective discipline as well as keeping up with the latest</p>
                        <ul className='list-disc pl-10'>
                            <li>Support the national membership by providing educational and networking opportunities on a local level (provide CEUs)..</li>
                            <li>AAPC supports its health care members to maintain a distinctive edge in their</li>
                            <li>of topics and subject matter delivered live classrooms career by providing a wide</li>
                            <li>variety or on demand, in  or over the web.Health care professionals are obligated to stay</li>
                            <li>current in their profession. This includes continuing education in their respective discipline </li>
                            <li>as well as keeping up with the latest medical coding updates compliance rules, and gover,</li>
                        </ul>

                        <p> nment regulations. AAPC supports its
                            members to maintain a distinctive edge in their health care career by providing a wide
                            variety of topics and subject matter delivered live or on demand, in classrooms or over the
                            web.Health care professionals are obligated to stay current in their profession. This includes
                            continuing education in their respective discipline as well as keeping up with the latest
                            medical coding updates, compliance rules, and government regulations. AAPC supports its
                            members to maintain a distinctive edge in their health care career by providing a wide
                            variety of topics and subject matter delivered live or on demand, in classrooms or over the
                            web.Health care professionals are obligated</p>
                    </div>
                </div>
            </div>,
        },
        {
            label: 'Approved CEU Vendors',
            content: <div>
                <div class="flex flex-col md:flex-row gap-4 mx-auto">
                    <div class="sm:basis-full basis-full mb-5">
                        <div class="grid">
                            <img src="../banner.jpg" w-100 alt="gh" />
                            <h4 class="text-2xl">AAPC is pleased to announce a stellar 2023 conference lineup.</h4>
                            <p class="mt-5"><span class="text-lg font-semibold text-gray-500">Hybrid Event</span> - Our hybrid event
                                offers an enormous number of session topics covering a wide
                                range of specialties, along with flexibility to choose between being onsite or virtual.</p>
                            <p class="mt-3">HEALTHCON 2024 in Las Vegas, NV | April 14-17, 2024 | 18 CEUs | 80+ Sessions | 65+
                                Speakers
                                <br /><span class="text-darksky text-lg font-semibold">Register Now!</span>
                            </p>
                            <p class="mt-3"><span class="text-lg font-semibold text-gray-500">Virtual Events</span> - Our virtual
                                events offer you a convenient way to stay current on
                                specialty-specific topics.</p>
                            <p class="mt-3"><span class="text-lg font-semibold text-gray-500">DOCUCON</span> - A Clinical
                                Documentation Improvement Conference | September 19-20, 2023 | 12 CEUs | 2
                                Tracks | 16 Sessions Total <br /><span class="text-darksky text-lg font-semibold">Register Now!</span>
                            </p>
                            <p class="mt-3"><span class="text-lg font-semibold text-gray-500">AUDITCON </span>- Two Days. All About
                                Auditing. | November 8-9, 2023 | 12 CEUs | 3 Tracks | 23 Sessions
                                Total
                                <br /><span class="text-darksky text-lg font-semibold">Register Now!</span>
                            </p>
                            <p class="mt-3"><span class="text-lg font-semibold text-gray-500">Onsite Event </span>- While smaller
                                than our HEALTHCON event, this in-person only event offers a wide
                                variety of sessions covering a range of specialties along with the opportunity for attendees to
                                meet other healthcare professionals in their region.</p>
                            <p class="mt-3"> HEALTHCON Regional 2024 in Philadelphia, PA | August 26-28 | 15 CEUs | 40+ Sessions |
                                30+
                                Speakers
                                Coming Soon!</p>
                        </div>
                        <div class="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 bg-gray-200 p-7 mt-5">
                            <div>
                                <p>Learn more about your local AAPC chapter</p>
                            </div>
                            <div>
                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
                                    LOCAL CHAPTERS</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>,
        },
        {
            label: 'FAQs',
            content: <div>FAQs</div>,
        },
        {
            label: 'CEU Information - Members',
            content: <div>CEU Information - Members</div>,
        },
        {
            label: 'CEU Information - Vendors',
            content: <div>CEU Information - Vendors</div>,
        },
    ];
    return (
        <div className="App">
            <Tab tabs={tabs} />
        </div>
    );
}


export default Medicode;