// src/App.js
import React from 'react';
import ParentTabs from './ParentTabs';
import ChildTabs from './ChildTabs'; 

function App() {
  const childTabs = [
    {
      label: 'Child Tab 1',
      content: <p>Child Tab 1 Content</p>,
    },
    {
      label: 'Child Tab 2',
      content: <p>Child Tab 2 Content</p>,
    },
  ];
  const childTabs1 = [
    {
      label: 'Child Tab 1',
      content: <p>Child Tab 1 Content1</p>,
    },
    {
      label: 'Child Tab 2',
      content: <p>Child Tab 2 Content1</p>,
    },
  ];

  const parentTabs = [
    {
      label: 'Tab 1',
      content: (
        <div>
          <h2>Parent Tab 1</h2>
          <ChildTabs tabs={childTabs} />
        </div>
      ),
    },
    {
      label: 'Tab 2',
      content: (
        <div>
          <h2>Parent Tab 2</h2>
          <ChildTabs tabs={childTabs1} />
        </div>
      ),
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center">Nested Tabs Example</h1>
      <ParentTabs tabs={parentTabs} />
    </div>
  );
}

export default App;
