import React, { useState } from 'react';
import { Route, Switch, Redirect } from "react-router-dom"

import SpellSearch from './components/SpellSearch';
import DiceData from './components/DiceData';
import SpellBook from './components/SpellBook';
import Home from './components/Home';
import Navbar from './components/NavBar';
import SpellResults from './components/SpellResults';

function App() {

  const [spellDisplay, setSpellDisplay] = useState('')
  
  const data = (returnedSearch) => {
    setSpellDisplay(returnedSearch)
  }

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
          <SpellSearch/>
        </Route>

        <Route path='/SpellResults'>
          <SpellResults />
        </Route>

        <Route path='/SpellBook'>
          <SpellBook />
        </Route>

        <Route path='/DiceData'>
          <DiceData />
        </Route>
        <Redirect to='/' />
      </Switch>
    </>
  );
}

export default App;
