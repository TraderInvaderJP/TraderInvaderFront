import React, { Component, PreventDefault, useState } from 'react';
import { Grid, TextField, Button, List, ListItem, Toolbar, AppBar, LinkButton } from '@material-ui/core'
import Authentication from './Authentication';
import '../App.css'
import axios from 'axios'
import templogo from '../templogo.png';

/* create user page */
class Create extends Component {
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
    // axios.post('https://o5gn70te7h.execute-api.us-west-2.amazonaws.com/latest/users/', {
    //   password: password,
    //   username: username,
    //   email: email,
    // })
    //   .then(function (response) {
    //     console.log(response)
    //   }).catch(function (error) {
    //     console.log(error);
    //   })
  }
  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  //render create user page
  render() {
    return (
      <div className={'centered'}>
        <AppBar position='fixed' className={'toolbar'}>
          <Toolbar position='fixed' className={'toolbar'}>
            <h1><img src={templogo} alt="Logo" height='100' /></h1>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem><TextField inputProps={{ style: { textAlign: 'center' } }} className={'textfield'} name='username' placeholder='Username ' type='text' variant='standard' onChange={e => this.handleInputChange(e)} /></ListItem>
          <ListItem><TextField inputProps={{ style: { textAlign: 'center' } }} className={'textfield'} name='email' placeholder='Email' type='text' variant='standard' onChange={e => this.handleInputChange(e)} /></ListItem>
          <ListItem><TextField inputProps={{ style: { textAlign: 'center' } }} className={'textfield'} name='password' placeholder='Password' type='text' variant='standard' onChange={e => this.handleInputChange(e)} /></ListItem>
          <ListItem><TextField inputProps={{ style: { textAlign: 'center' } }} className={'textfield'} name='confirm' placeholder='Confirm Password' type='text' variant='standard' onChange={e => this.handleInputChange(e)} /></ListItem>
          <ListItem>&nbsp;</ListItem>
          <ListItem style={{ justifyContent: 'center' }}><Button LinkButton={true} href='/Verification' onClick={this.handleSubmit} variant='outlined'>Confirm</Button>
            &nbsp;&nbsp;<Button LinkButton={true} href='/' onClick={this.cleanInput} variant='outlined'>Cancel</Button></ListItem>
        </List>
      </div>
    )
  }
}

export default Create 