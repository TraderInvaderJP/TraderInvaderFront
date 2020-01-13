import React, { } from 'react';
import './App.css';
import  {Home} from './Components/home.js'
import {CreateAccount} from './Components/createaccount.js'
import {Verification} from './Components/verification.js'
import {UserHome} from './Components/userhome.js'
import {} from '@material-ui/core'
import { NavLink, Switch, Route } from 'react-router-dom';

/* App, Nav and Main are used to set/navigate different pages throughout site */
const App = () => (
  <div className='app'>
    <h1>TraderInvader</h1>
    <Navigation />
    <Main />
  </div>
);

const Navigation = () => (
  <nav>
    <ul>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/createaccount'>Create Account</NavLink></li>
    </ul>
  </nav>
);

const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/createaccount' component={CreateAccount}></Route>
    <Route exact path='/verification' component={Verification}></Route>
    <Route exact path='/userhome' component={UserHome}></Route>
  </Switch>
);

export default App;