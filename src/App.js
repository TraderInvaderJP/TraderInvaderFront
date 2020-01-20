import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Components/Login.js'
import Create from './Components/Create.js'
import Verification from './Components/Verification.js'
import userhome from './Components/userhome.js'
import UserHome from './Components/userhome.js';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login}></Route>
        <Route path='/create' component={Create} ></Route>
        <Route path='/verification' component={Verification}></Route>
        <Route path='/userhome' component={UserHome}></Route>
      </Switch>
    </Router>
  )
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [email, setEmail] = useState('')
  const [verification, setVerification] = useState('')

  console.log(username)
  console.log(password)
  console.log(email)

  return (
    <div>
      <Login setUsername={setUsername} setPassword={setPassword} />
      <Create setUsername={setUsername} setPassword={setPassword} setConfirm={setConfirm} setEmail={setEmail} />
      <Verification username={username} setVerification={setVerification} />


    </div>
  )

}
export default App