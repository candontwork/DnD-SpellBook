import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom"

import SpellSearch from './components/SpellSearch';
import DiceData from './components/DiceData';
import SpellBook from './components/SpellBook';
import Home from './components/Home';
import SpellResults from './components/SpellResults'

function App() {
  return (
    <>
    <Home />
    <Route>
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
      </Route>
    </>
  );
}

export default App;
