import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import './App.scss';

import Navigation from './components/navigation/navigation.component';
import About from './pages/about/about.component';
import Education from './pages/education/education.component';
import Experience from './pages/experience/experience.component';
import Skills from './pages/skills/skills.component';

function App(props) {
  return (
    <div className="App">
      <Navigation/>
      <Redirect
            from="/"
            to="/acerca-de" />
      <div class="">
      <Switch>
          <Route path='/habilidades' component={Skills}/>
          <Route path='/skills' component={Skills}/>

          <Route path='/formacion' component={Education}/>
          <Route path='/education' component={Education}/>

          <Route path='/experience' component={Experience}/>
          <Route path='/experiencia-laboral' component={Experience}/>
          
          <Route path='/acerca-de' component={About}/>
          <Route path='/about' component={About}/>   

   
      </Switch>
      </div>
    </div>
  );
}

export default App;
