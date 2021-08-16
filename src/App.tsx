import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Redirect from './components/Redirect';
import Nav from './components/Nav';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/:id' component={Redirect} />
      </Switch>
    </Router>
  );
};

export default App;
