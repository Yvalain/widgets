import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

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

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
}

export default App;
