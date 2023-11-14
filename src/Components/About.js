import React, { useState } from 'react';
const Tab = ({ label, children }) => {
    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 w-100">
            <div className='flex flex-col sm:flex-row space-x-4'>
                {React.Children.map(children, (child, index) => (
                    <button
                        className={`px-4 py-2 ${activeTab === index
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-200 text-gray-700'
                            } rounded focus:outline-none focus:ring focus:border-blue-300`}
                        onClick={() => handleTabClick(index)}
                    >
                        {child.props.label}
                    </button>
                ))}
            </div>
            <div className="mt-4">
                {React.Children.toArray(children)[activeTab]}
            </div>
        </div>
    );
};

const NestedTabsExample = () => {
    return (
        <div className="flex 2xl:flex-col xl:flex-col lg:flex-col md:flex-col sm:flex-col">
            <Tab>
                <div label="Tab 1">
                    <p>Content of Tab 1</p>
                </div>
                <div label="Tab 2" className="flex 2xl:flex-col xl:flex-col lg:flex-col md:flex-col sm:flex-col">
                    <Tab>
                        <div label="Nested Tab 1">
                            <p>Content of Nested Tab 1</p>
                        </div>
                        <div label="Nested Tab 2">
                            <p>Content of Nested Tab 2</p>
                        </div>
                        <div label="Nested Tab 3">
                            <p>Content of Nested Tab 3</p>
                        </div>
                        <div label="Nested Tab 1">
                            <p>Content of Nested Tab 1</p>
                        </div>
                        <div label="Nested Tab 2">
                            <p>Content of Nested Tab 2</p>
                        </div>
                        <div label="Nested Tab 3">
                            <p>Content of Nested Tab 3</p>
                        </div>
                    </Tab>
                </div>
            </Tab>
        </div>
    );
};

export default NestedTabsExample;

// import React from 'react'

// const About = () => {
//   return (
//             <div class="grid w-full bg-green-800 bg-cover bg-center h-96" style={{ backgroundImage: 'url("../hbg.webp")' }}>
//                 <div class="2xl:w-8/12 xl:w-8/12 lg:w-full md:w-full sm:w-full w-full justify-center mx-auto">
//                     <p class="text-white pt-24">ABOUT US</p>
//                     <p class="text-white text-5xl">AAPC is the world's largest <br/> training and credentialing <br/>organization for the business of<br/> healthcare.</p>
//                 </div>
//             </div>
//   )
// }

// export default About