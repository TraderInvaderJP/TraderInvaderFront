import React, { useState, Component } from 'react';
import './App.css';
import {
  Paper, Grid, TextField, List,
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
              <Grid item padding='25px'><Button onClick={this.handleSubmit} variant='contained'>Confirm</Button></Grid>
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
      firstname: '',
      lastname: ''
    }
  }

  /*need to send data to backend to be able to add user info to database, not just console.log*/
  handleSubmit = (event) => {
    const { username, password, email, firstname, lastname } = this.state;
    const user = {
      username,
      password,
      email,
      firstname,
      lastname
    }

    function makePost(user) {
      //cant figure out what url to use or how this works
      axios.post('http://localhost:8080/createuser', { user }, {

      })
        .then(res => {
          console.log(res.data)
        }, (error) => {
          console.log(error)
        })
    }
    makePost(user)
  }
  /* console log input and sets user values */
  handleInputChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

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
              <Grid item><TextField name='firstname' placeholder='First Name' variant='outlined' onChange={e => this.handleInputChange(e)} fullWidth /></Grid>
              <Grid item><TextField name='lastname' placeholder='Last Name' variant='outlined' onChange={e => this.handleInputChange(e)} fullWidth /></Grid>
            </Grid>
            <Grid container row justify='center' alignItems='center' spacing={6}>
              <Grid item padding='25px'><Button onClick={this.handleSubmit} variant='contained'>Confirm</Button></Grid>
              <Grid item padding='25px'><Button onClick={this.cleanInput} variant='contained'>Cancel</Button></Grid>
            </Grid>
          </Container>
        </div>
      </form>

    )
  }
}

export default App;
