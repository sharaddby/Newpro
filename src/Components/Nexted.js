import React, { useState } from 'react';

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
                <div className="flex flex-col space-x-2 2xl:w-1/4 xl:w-1/4 lg:1/3 md:w-1/3 sm:w-full w-full bg-gray-200 p-4">
                    <div className="space-y-1">
                        <button
                            className={`w-full p-2 ${activeMainTab === 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                            onClick={() => handleMainTabClick(1)}
                        >
                            Main Tab 1
                        </button>
                        {activeMainTab === 1 && (
                            <div className="flex flex-col mt-2">
                                <button
                                    className={`p-2 ${activeSubTab === 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                    onClick={() => handleSubTabClick(1)}
                                >
                                    Subtab 1.1
                                </button>
                                <button
                                    className={`p-2 ${activeSubTab === 2 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                    onClick={() => handleSubTabClick(2)}
                                >
                                    Subtab 1.2
                                </button>
                            </div>
                        )}
                        <button
                            className={`w-full p-2 ${activeMainTab === 2 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                            onClick={() => handleMainTabClick(2)}
                        >
                            Main Tab 2
                        </button>
                        {activeMainTab === 2 && (
                            <div className="flex flex-col mt-2">
                                <button
                                    className={`p-2 ${activeSubTab === 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                    onClick={() => handleSubTabClick(1)}
                                >
                                    Subtab 2.1
                                </button>
                                <button
                                    className={`p-2 ${activeSubTab === 2 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                    onClick={() => handleSubTabClick(2)}
                                >
                                    Subtab 2.2
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex flex-col space-x-2 md:w-3/4 sm:w-full w-full p-4">
                    {activeMainTab === 1 && (
                        <div>
                            {activeSubTab === 1 && <div>Content for Subtab 1.1 Content for Subtab 1.1 Content for Subtab 1.1 Content for Subtab 1.1 Content for Subtab 1.1</div>}
                            {activeSubTab === 2 && <div>Content for Subtab 1.2</div>}
                        </div>
                    )}

                    {activeMainTab === 2 && (
                        <div>
                            {activeSubTab === 1 && <div>Content for Subtab 2.1</div>}
                            {activeSubTab === 2 && <div>Content for Subtab 2.2</div>}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default About;
