/* Home page, it is the login page */
import React, { useState, Component } from 'react';
import {
  Paper, Grid, TextField, List, Stepper, Step, StepLabel, makeStyles,
  ListItem, ListItemText, Container, IconButton, CardHeader, Toolbar, Typography, Button
} from '@material-ui/core'
import { NavLink, Switch, Route } from 'react-router-dom';

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

  export {Home}
  