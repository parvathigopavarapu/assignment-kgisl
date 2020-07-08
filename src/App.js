import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/NavBar';
import Settings from './components/Settings';
import NoMatch from './components/NoMatch';
import About from './components/About';
import Body from './components/Body';
import {Provider} from 'react-redux';
import store from './redux/store';


function App() {
  return (
    <Provider store={store}>
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
    </Provider>
    
  );
}

export default App;
