import React, { useState } from 'react';
const Blogdtl = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('View More');

    const options = ['View More', 'AAPC In The News ', ' AAPC News', 'Audit', ' Billing', 'career growth',
        'CMS', 'Compliance', 'Coding ', 'COVID-19 ', 'Evaluation Management ', 'health information management',
        'Health Law', 'Healthcare Business Monthly', ' Healthcare Careers ', ' Home Health ', 'ICD-10 ',
        'Industry News', 'Infographics', 'MACRA', 'Medical Coding Salary Surveys ', ' Newsletter ', 'Practice management',
        ' Risk Adjustment ', 'Uncategorized', 'Value Based Programs'];

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    }
    return (
        <div>
            <div className="2xl:w-8/12 xl:w-9/12 lg:w-10/12 md:w-10/12 sm:w-10/12 w-10/12 justify-center mx-auto">
                <div className="grid lg:grid-cols-4 grid-cols-1 gap-4 justify-center mx-auto">
                    <div className="col-span-3">
                        <div className="grid">
                            <div className="grid">
                                <h4 className="text-2xl font-semibold py-5 text-lightblue hover:text-orange-500">Coding Supplies,
                                    Implants, and Devices</h4>
                                <img src="../ban2.webp" alt="hey" />
                            </div>
                            <p className="text-justify">
                                The world of technology is ever-evolving, with innovations shaping the way we live, work, and connect. 
                                From the early days of computers that filled entire rooms to the sleek and powerful devices we carry in our
                                 pockets today, the journey of technology has been nothing short of remarkable.<br/>
                                In the realm of communication, the advent of the internet has been a game-changer. It has transformed the 
                                way we share information, breaking down geographical barriers and connecting people across the globe. Social
                                 media platforms have become virtual town squares, where ideas, opinions, and experiences are exchanged at 
                                 an unprecedented pace.<br/>
                                As we navigate this digital landscape, concerns about privacy and cybersecurity have come to the forefront. 
                                The digital footprints we leave behind raise questions about the balance between convenience and the protection
                                 of personal data. Cyber threats, ranging from phishing attacks to ransomware, underscore the need for robust 
                                 security measures in our interconnected world.<br/>
                                Artificial intelligence (AI) has emerged as a powerful force, revolutionizing industries and augmenting 
                                human capabilities. Machine learning algorithms power recommendation systems, personalized content, and 
                                autonomous vehicles. However, ethical considerations surrounding AI, such as bias in algorithms and job displacement,
                                 demand careful reflection and responsible development.<br/>
                                In the healthcare sector, technological advancements have led to breakthroughs in diagnosis, treatment, 
                                and patient care. Telemedicine has become a lifeline, providing remote access to medical services and expertise.
                                 Wearable devices monitor health metrics, empowering individuals to take a proactive approach to their well-being.<br/>
                                Education has also witnessed a digital transformation, with online learning platforms offering accessible and
                                 flexible education options. The democratization of knowledge has never been more evident, as learners of all 
                                 ages and backgrounds engage in virtual classrooms, webinars, and interactive courses.<br/>
                                The rise of e-commerce has reshaped the retail landscape, with consumers enjoying the convenience of shopping
                                 from the comfort of their homes. Smart technologies, such as voice-activated assistants and augmented reality,
                                  enhance the online shopping experience, blurring the lines between the physical and digital realms.<br/>
                                Renewable energy technologies play a crucial role in addressing environmental challenges. Solar panels, wind 
                                turbines, and energy storage solutions contribute to the shift towards sustainable practices. The urgency of 
                                addressing climate change has prompted a global focus on innovative solutions and green technologies.<br/>
                                The intersection of technology and creativity has given rise to new forms of expression. Digital art, virtual 
                                reality experiences, and interactive installations push the boundaries of imagination. The fusion of technology 
                                and the arts opens up possibilities for immersive storytelling and unique cultural experiences.<br/>
                                In conclusion, the tapestry of technology weaves a complex yet fascinating narrative of progress and change. 
                                As we embrace the possibilities that innovation offers, it is essential to navigate the ethical, social, and 
                                environmental implications. The future promises continued advancements, and our collective responsibility is to 
                                shape a technological landscape that fosters inclusivity, sustainability, and positive impact on the world.
                            </p>
                        </div>
                    </div>
                    <div className="grid justify-center mx-auto lg:grid-cols-1 sm:w-full">
                        <div className="flex flex-col w-100">
                            <form className="flex items-center pb-5">
                                <label for="voice-search" className="sr-only">Search</label>
                                <div className="relative w-full">
                                    <input type="text" className="border-1 text-gray-900 text-sm block w-full px-20 py-2"
                                        placeholder="Search Keyword ..." required />
                                    <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3">
                                        <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                            fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                            <div className="border border-indigo-600 p-5">
                                <p className='py-2'>What's your favorite type of medical coding article?</p>
                                <div className="py-1">
                                    <input id="default-radio-1" type="radio" value="" name="default-radio"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="default-radio-1"
                                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Case study for your
                                        specialty</label>
                                </div>
                                <div className="py-1">
                                    <input id="default-radio-2" type="radio" value="" name="default-radio"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="default-radio-2"
                                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">In-depth look at a
                                        code or modifier</label>
                                </div>
                                <div className="py-1">
                                    <input id="default-radio-3" type="radio" value="" name="default-radio"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="default-radio-3"
                                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Table or tool</label>
                                </div>
                                <div className="py-1">
                                    <input id="default-radio-4" type="radio" value="" name="default-radio"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="default-radio-4"
                                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Reader
                                        question</label>
                                </div>
                                <div className="py-1">
                                    <input id="default-radio-5" type="radio" value="" name="default-radio"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="default-radio-5"
                                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">News</label>
                                </div>
                                <div className="py-1">
                                    <button type="button"
                                        className="text-white bg-orange-400 hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium text-sm px-5 py-2 text-center mr-2 mb-2 dark:focus:ring-orange-900">Vote</button>
                                </div>
                            </div>
                        </div>
                        <div className="grid">
                            <div className="mt-10">
                                <img src="../blog8.jpg" alt="hey" />
                                <p className="border-x border-b border-gray-200 px-2 py-2">Knowledge Center Topic I Am AAPC: Cindy Garner, CPC,
                                    CPB, CPC-I, CMA-AAMA, HITCM-PP</p>
                                <h4 className="text-2xl font-semibold pt-5 text-gray-500">Hot Topics</h4>
                                <ul className="pt-5">
                                    <li className="py-1"> Quality Payment Program <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-gray-400" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                        <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></li>
                                    <li className="py-1">Telehealth <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-gray-400" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                        <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></li>
                                    <li className="py-1">Facility <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-gray-400" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                        <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></li>
                                    <li className="py-1">Health Information Management <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-gray-400" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                        <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></li>
                                    <li className="py-1">Career Growth <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-gray-400" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                        <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></li>
                                </ul>
                                <div className="relative inline-block text-left">
                                    <div>
                                        <li
                                            className="inline-flex justify-center w-full  border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700"
                                            id="options-menu"
                                            onClick={() => setIsOpen(!isOpen)}
                                        >
                                            {selectedOption}
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-gray-400" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                                <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path>
                                            </svg>
                                        </li>
                                    </div>

                                    {isOpen && (
                                        <div className="mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                            <div
                                                className="py-1"
                                                role="menu"
                                                aria-orientation="vertical"
                                                aria-labelledby="options-menu"
                                            >
                                                {options.map((option) => (
                                                    <button
                                                        key={option}
                                                        onClick={() => handleOptionClick(option)}
                                                        className="block px-4 text-sm text-blue-500 hover:text-orange-700"
                                                        role="menuitem"
                                                    >
                                                        {option}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="flex basis-1/4">
                            <div clss="grid">
                                <img src="../newsletter.png" alt="hello" className='py-5' />
                                <img src="../blg.jpg" alt="hello" className='my-5' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogdtl