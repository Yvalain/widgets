import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

function App() {
  const items = [
    {
      title: 'What is Reat?',
      content: 'React is a front end javascript framework',
    },
    {
      title: 'Why use React?',
      content: 'React is a favorite JS library among engineers',
    },
    {
      title: 'How do you use Reatc?',
      content: 'You use React by creating components',
    },
  ];

  const options = [
    {
      label: 'The Color red',
      value: 'red',
    },
    {
      label: 'The Color green',
      value: 'green',
    },
    {
      label: 'Shades of blue',
      value: 'blue',
    },
  ];

  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : null}
    </div>
  );
}

export default App;
