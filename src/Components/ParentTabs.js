import React, { useState } from 'react';

const ParentTabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="grid place-items-start mt-5">
        <div className="flex lg:flex-col md:flex-col sm:flex-col flex-col space-x-4">
          <div className="md:w-1/4 w-full">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 ${activeTab === index ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="md:w-3/4 w-full"></div>
          <div className="mt-4">{tabs[activeTab].content}</div>
        </div>
      </div>
    </div>
  );
};

export default ParentTabs;


