import React, { useState, Component } from 'react';
import {
  Paper, Grid, TextField, List, Stepper, Step, StepLabel, makeStyles,
  ListItem, ListItemText, Container, IconButton, CardHeader, Toolbar, Typography, Button
} from '@material-ui/core'
import { NavLink, Switch, Route } from 'react-router-dom';

/* create user page */
class CreateAccount extends Component {
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
                <Grid item padding='25px'><NavLink to='/'><Button onClick={this.cleanInput} variant='contained'>Cancel</Button></NavLink></Grid>
              </Grid>
            </Container>
          </div>
        </form>
      )
    }
  }
  
  export {CreateAccount}