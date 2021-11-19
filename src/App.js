import React, { useState } from 'react';
import { Route, Switch, Redirect } from "react-router-dom"
import { ThemeProvider } from "@mui/material/styles"
import theme_custom from './Theme';

import SpellBook from './components/Spellbook';
import Home from './components/Home';
import NavBar from './components/NavBar';
import SpellResults from './components/SpellResults';

// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [displayResult, setDisplayResult] = useState("")

  return (
    <ThemeProvider theme={theme_custom}>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <Home setDisplayResult={setDisplayResult} />

        </Route>

        <Route path='/SpellResults' >
          <SpellResults showSpells={displayResult} />
        </Route>

        <Route path='/SpellBook'>
          <SpellBook />
        </Route>

        <Redirect to='/' />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
