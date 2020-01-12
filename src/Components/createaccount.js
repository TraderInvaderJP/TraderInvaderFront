import React, { useState, Component } from 'react';
import {
  Grid, TextField, Container, Button
} from '@material-ui/core'
import { NavLink } from 'react-router-dom';
import axios from 'axios';

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
    const { Username, Password, Email } = this.state;
    const user = {
      Password,
      Username,
      Email
    }
    //this isn't working
   // axios.post('https://o5gn70te7h.execute-api.us-west-2.amazonaws.com/latest/users', { user })
   axios({
    method: 'post',
    url: 'https://o5gn70te7h.execute-api.us-west-2.amazonaws.com/latest/users/',
    headers: {}, 
    data: {
      Password: this.Password,
      Username: this.Username,
      Email: this.Email
    }
  })
      .then(res => {
        console.log(res)
        console.log(user)
      }).catch(function (error) {
        console.log(error);
      })
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
              <Grid item><TextField name='Username' placeholder='Username' variant='outlined' onChange={e => this.handleInputChange(e)} fullWidth /></Grid>
              <Grid item><TextField name='Email' placeholder='Email' variant='outlined' onChange={e => this.handleInputChange(e)} fullWidth /></Grid>
            </Grid>
            <Grid container row justify='center' alignItems='center' spacing={6}>
              <Grid item><TextField name='Password' placeholder='Password' variant='outlined' onChange={e => this.handleInputChange(e)} fullWidth /></Grid>
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

export { CreateAccount }