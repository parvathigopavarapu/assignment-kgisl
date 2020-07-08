import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/NavBar';
import Settings from './components/Settings';
import NoMatch from './components/NoMatch';
import About from './components/About';
import Body from './components/Body'


function App() {
  return (
    <Router>
      <Header />
      <Navigation />
      <Switch>
        <Route exact path='/' component={Body}/>
        <Route  path='/about' component={About}/>
        <Route  path='/settings' component={Settings} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
    
  );
}

export default App;
