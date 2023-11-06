import React from 'react';
import Tab from './Tab';
const tabs = [
    {
        label: 'FAQs',
        content: <div>Content for Tab 6</div>,
    },
    {
        label: 'CEU Information - Members',
        content: <div>Content for Tab 6</div>,
    },
    {
        label: 'CEU Information - Vendors',
        content: <div>Content for Tab 6</div>,
    },
];

function Publications() {
    return (
        <div className="App">
            <Tab tabs={tabs} />
        </div>
    );
}


export default Publications;