import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';

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

  /*const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true); */

  const showAccordion = () => {
    if (window.location.pathname === '/') {
      return <Accordion items={items} />;
    }
  };

  const showList = () => {
    if (window.location.pathname === '/list') {
      return <Search />;
    }
  };

  const showDropdown = () => {
    if (window.location.pathname === '/dropdown') {
      return <Dropdown />;
    }
  };

  const showTranslate = () => {
    if (window.location.pathname === '/translate') {
      return <Translate />;
    }
  };

  return (
    <div>
      {showAccordion()}
      {showList()}
      {showDropdown()}
      {showTranslate()}
      {/* <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          label='Select a color'
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : null} */}
      <Translate />
    </div>
  );
}

export default App;
