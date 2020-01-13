import React, { Component } from 'react';
import { Grid, TextField, Container, Button } from '@material-ui/core'
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

  /*When comfirm is clicked, this set the user values, and posts to back end*/
  handleSubmit = (event) => {
    const { username, password, email } = this.state

    //post new user info to back end, which sends verification email to new user's email address
    axios.post('https://o5gn70te7h.execute-api.us-west-2.amazonaws.com/latest/users/', {
      password: password,
      username: username,
      email: email,
    })
      .then(function (response) {
        console.log(response)
      }).catch(function (error) {
        console.log(error);
      })
  }
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
          <Container style={{ padding: '10vh' }}>
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

export { CreateAccount }