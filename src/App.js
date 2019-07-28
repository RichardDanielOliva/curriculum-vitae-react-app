import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import Navigation from './components/navigation/navigation.component';
import About from './pages/about/about.component';

function App(props) {
  return (
    <div className="App">
      <Navigation/>
      <Switch>
        <div class="container-fluid p-0">
          <Route path='/' component={About}/>
        </div>
      </Switch>
    </div>
  );
}

export default App;
