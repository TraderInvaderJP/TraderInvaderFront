import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Components/Login.js'
import Create from './Components/Create.js'
import Verification from './Components/Verification.js'
import userhome from './Components/userhome.js'
import UserHome from './Components/userhome.js';

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Login}></Route>
      <Route path='/create' component={Create} ></Route>
      <Route path='/verification' component={Verification}></Route>
      <Route path='/userhome' component={UserHome}></Route>
    </Switch>
  </Router>
)
export default App