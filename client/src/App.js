import React from "react";
import {Switch, Route} from 'react-router-dom';

import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";
import Faq from "./pages/Faq";
import Together from "./pages/Together";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";


function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/register">
        <Register />
      </Route>      
      <Route path="/faq">
        <Faq />
      </Route>      
      <Route path="/together">
        <Together />
      </Route>      
      <Route path="/privacy">
        <Privacy />
      </Route>      
      <Route path="/terms">
        <Terms />
      </Route>      
    </Switch>
  );
}

export default App;
