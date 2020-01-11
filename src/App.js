import React, { useState, Component } from 'react';
import './App.css';
import {
  Paper, Grid, TextField, List, Stepper, Step, StepLabel, makeStyles,
  ListItem, ListItemText, Container, IconButton, CardHeader, Toolbar, Typography, Button
} from '@material-ui/core'
import { NavLink, Switch, Route } from 'react-router-dom';

const axios = require('axios')
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
/* Home page, it is the login page */
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  handleSubmit = (event) => {
    const data = this.state
    console.log(data)
  }

  /* console log input and sets user values */
  handleInputChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  //render login page
  render() {
    return (
      <form>
        <div className="login" style={{ backgroundColor: '#87ACA3', height: '50vh' }} >
          <Container style={{ padding: '15vh' }}>
            <Grid container row justify='center' alignItems='center' spacing={6}>
              <Grid item><TextField name='username' placeholder='UserName ' type='text' variant='outlined' onChange={e => this.handleInputChange(e)} fullWidth /></Grid>
              <Grid item><TextField name='password' placeholder='Password' type='text' variant='outlined' onChange={e => this.handleInputChange(e)} fullWidth /></Grid>
            </Grid>
            <Grid container row justify='center' alignItems='center' spacing={6}>
              <Grid item padding='25px'> <NavLink to="/userhome"> <Button onClick={this.handleSubmit} variant='contained'>Confirm</Button> </NavLink> </Grid>
            </Grid>
          </Container>
        </div>
      </form>
    )
  }
}

/* create user page */
export class CreateAccount extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      confirmpassword: '',
      email: '',
    }
  }

  /*need to send data to backend to be able to add user info to database, not just console.log*/
  handleSubmit = (event) => {
    const { username, password, email, firstname, lastname } = this.state;
    const user = {
      username,
      password,
      email
    }
  }
  /* console log input and sets user values */
  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
//render create user page
  render() {
    return (
      <form>
        <div className="createaccount" style={{ backgroundColor: '#87ACA3', height: '50vh' }} >
          <Container style={{ padding: '5vh' }}>
            <Grid container row justify='center' alignItems='center' spacing={6}>
              <Grid item><TextField name='username' placeholder='Username' variant='outlined' onChange={e => this.handleInputChange(e)} fullWidth /></Grid>
              <Grid item><TextField name='email' placeholder='Email' variant='outlined' onChange={e => this.handleInputChange(e)} fullWidth /></Grid>
            </Grid>
            <Grid container row justify='center' alignItems='center' spacing={6}>
              <Grid item><TextField name='password' placeholder='Password' variant='outlined' onChange={e => this.handleInputChange(e)} fullWidth /></Grid>
              <Grid item><TextField name='confirmpassword' placeholder='Confirm Password' variant='outlined' onChange={e => this.handleInputChange(e)} fullWidth /></Grid>
            </Grid>
            <Grid container row justify='center' alignItems='center' spacing={6}>
              <Grid item padding='25px'><NavLink to='/verification'><Button onClick={this.handleSubmit} variant='contained'>Confirm</Button></NavLink></Grid>
              <Grid item padding='25px'><Button onClick={this.cleanInput} variant='contained'>Cancel</Button></Grid>
            </Grid>
          </Container>
        </div>
      </form>

    )
  }
}

/* Verification page*/
class Verification extends Component {
  constructor(props) {
    super(props)
    this.state = {
      verificationCode: ''
    }
  }

  handleSubmit = (event) => {
    const data = this.state
    console.log(data)
  }

  /* console log input and sets user values */
  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  //render Verification page
  render() {
    return (
      <form>
        <div className="verification" style={{ backgroundColor: '#87ACA3', height: '50vh' }} >
          <Container style={{ padding: '15vh' }}>
            <Grid container row justify='center' alignItems='center' spacing={6}>
              <Grid item><TextField name='verificationCode' placeholder='Verification Code ' type='text' variant='outlined' onChange={e => this.handleInputChange(e)} fullWidth /></Grid>
            </Grid>
            <Grid container row justify='center' alignItems='center' spacing={6}>
              <Grid item padding='25px'> <NavLink to="/"> <Button onClick={this.handleSubmit} variant='contained'>Confirm</Button> </NavLink> </Grid>
            </Grid>
          </Container>
        </div>
      </form>
    )
  }
}

/* User landing page, the first page that appears once the user has logged in successfully */
class UserHome extends Component {

  render() {
    return (
      <h1>This page is a working progress</h1>
    )
  }
}

export default App;