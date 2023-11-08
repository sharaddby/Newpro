import React, { useState } from 'react';
const Tab = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    return (
        <div className="grid place-items-center mt-5">
            <div className="flex flex-col md:flex-row 2xl:w-8/12 xl:w-8/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 justify-center gap-8">
                <div className="flex flex-col space-x-2  2xl:w-1/4 xl:w-1/4 lg:1/3 md:w-1/3 sm:w-full w-full">
                    {/* <div className='ml-2'>
                        <h1 className='text-center bg-blue-500 h-12 text-white pt-3 mb-1 w-76'>Continuing Education</h1>
                    </div> */}
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            className={`${index === activeTab
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-200 text-gray-700'
                                } px-4 py-2 rounded-md mb-1`}
                            onClick={() => handleTabClick(index)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
                <div className="mt-4 md:w-3/4 sm:w-full w-full">{tabs[activeTab].content}</div>
            </div>
        </div>
    );
};

export default Tab;
