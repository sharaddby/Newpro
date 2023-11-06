import React, { useState } from 'react';

const Packagetab = () => {
    const [activeTab, setActiveTab] = useState(1);

    const changeTab = (tab) => {
        setActiveTab(tab);
    };



    return (
        <div>
            <div className="flex space-x-4">
                <button
                    className={`px-4 py-2 border ${activeTab === 1 ? 'bg-blue-500' : 'bg-gray-300'
                        }`}
                    onClick={() => changeTab(1)}
                >
                    Course Requirements
                </button>
                <button
                    className={`px-4 py-2 border ${activeTab === 2 ? 'bg-blue-500' : 'bg-gray-300'
                        }`}
                    onClick={() => changeTab(2)}
                >
                    Course Policy
                </button>
                <button
                    className={`px-4 py-2 border ${activeTab === 3 ? 'bg-blue-500' : 'bg-gray-300'
                        }`}
                    onClick={() => changeTab(3)}
                >
                    Apprentice Status
                </button>
            </div>

            <div className="mt-4">
                {activeTab === 1 &&
                    <div>
                        <div class="grid place-items-center">
                            <div class="2xl:w-12/12 xl:12/12 lg:12/12 w-full justify-center mx-auto">
                                <div class="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 w-100">
                                    <h6 className='text-xl'>Highly Recommended</h6>
                                    <ul>
                                        <li>Anatomy online course and Medical Terminology online course or prior knowledge in both of
                                            these areas strongly recommended. Medical dictionary (recommended).</li>
                                    </ul>
                                    <h6 className='text-xl'> Required Code Books</h6>
                                    <ul>
                                        <li>AMA's CPT® Professional, course year</li>
                                        <li>ICD-10-CM, course year</li>
                                        <li>HCPCS Level II, course year</li>
                                    </ul>
                                    <div className='bg-gray-200'>
                                        Students enrolling in AAPC exam preparation courses CPC, COC, CPB, and CPMA are required to purchase the CPT®,
                                        ICD-10-CM,and HCPCS Level II code books, CRC exam preparation students are required to purchase a ICD-10-CM
                                        code book, and CIC exam preparation students are required to purchase the ICD-10-CM and ICD-10-PCS code books.
                                        The course and exam are updated each calendar year. Students may use current calendar year and/or the previous
                                        year's code books when taking any AAPC examination. However, it is strongly suggested that only current manuals
                                        be used for both the course and the certification exam. Students may need to consider purchasing code books
                                        fortwo different calendar years, if their exam is taken in a different calendar year than their course. AAPC
                                        certification examinations will contain questions regarding ICD-10 codes.
                                    </div>
                                    <h6 className='text-xl'>Computer With:</h6>
                                    <ul>
                                        <li>High-speed Internet access with supported computer operating systems and Internet/Web browsers</li>
                                        <li>Adobe Acrobat Reader (free download available)</li>
                                        <li>For best experience, use of a mobile device is not recommended</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {activeTab === 2 && <div>Content for Tab 2</div>}
                {activeTab === 3 && <div>Content for Tab 3</div>}
            </div>
        </div>
    );
};

export default Packagetab;
