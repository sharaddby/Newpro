import React from 'react';
import Tab from './Tab';
const tabs = [
    {
        label: 'Resources',
        content: <div>Content </div>
    },
    {
        label: 'Overview',
        content: <div>Content for Tab</div>
    },
    {
        label: 'Overview',
        content: <div>Content for Tab 4</div>,
    },
    {
        label: 'On Demand Events',
        content: <div>Content for Tab 5</div>,
    },
    {
        label: 'Local Chapter Events',
        content: <div>Content for Tab 6</div>,
    },
    {
        label: 'Low Cost CEUs',
        content: <div>Content for Tab 6</div>,
    },
    {
        label: 'Approved CEU Vendors',
        content: <div>Content for Tab 6</div>,
    },
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

function Even() {
    return (
        <div className="App">
            <Tab tabs={tabs} />
        </div>
    );
}


export default Even;