import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Components/Login.js'
import Create from './Components/Create.js'
import Verification from './Components/Verification.js'

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Login}></Route>
      <Route path='/create' component={Create} ></Route>
      <Route path='/verification' component={Verification}></Route>
    </Switch>
  </Router>
)
export default App