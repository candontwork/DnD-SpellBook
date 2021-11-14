import React from 'react';


import SpellSearch from './components/SpellResults';
import DiceData from './components/DiceData';
import SpellBook from './components/SpellBook';

function App() {
  return (
    <>
      <h1>SpellBook</h1>
      <h3>Your one stop source for spells</h3>
      <SpellSearch />

      <section className='right-column'>
        <div>
          <SpellBook />
        </div>
      </section>

      <section className='bottom-row'>
        <div>
          <DiceData />
        </div>
      </section>
    </>
  );
}

export default App;
