import React, { Component, PreventDefault, useState } from 'react';
import { Grid, TextField, Button, List, ListItem, Toolbar, AppBar, LinkButton } from '@material-ui/core'
import Authentication from './Authentication';
import '../App.css'
import axios from 'axios'
import templogo from '../templogo.png';

/* create user page */
function Create() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [email, setEmail] = useState('')

  /*When comfirm is clicked, this set the user values, and posts to back end*/
  const handleSubmit = () => {
    console.log(username)
    console.log(email)
    console.log(password)
    console.log(confirm)
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

  const handleNameChange = (event) => {
     setUsername(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleConfirmChange = (event) => {
    setConfirm(event.target.value)
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }
  //render create user page
  return (
    <div className={'centered'}>
      <AppBar position='fixed' className={'toolbar'}>
        <Toolbar position='fixed' className={'toolbar'}>
          <h1><img src={templogo} alt="Logo" height='100' /></h1>
        </Toolbar>
      </AppBar>
      <List>
        <ListItem><TextField onChange={handleNameChange} inputProps={{ style: { textAlign: 'center' } }} className={'textfield'} name='username' placeholder='Username ' type='text' variant='standard'/></ListItem>
        <ListItem><TextField onChange={handleEmailChange} inputProps={{ style: { textAlign: 'center' } }} className={'textfield'} name='email' placeholder='Email' type='text' variant='standard' /></ListItem>
        <ListItem><TextField onChange={handlePasswordChange} inputProps={{ style: { textAlign: 'center' } }} className={'textfield'} name='password' placeholder='Password' type='text' variant='standard'/></ListItem>
        <ListItem><TextField onChange={handleConfirmChange} inputProps={{ style: { textAlign: 'center' } }} className={'textfield'} name='confirm' placeholder='Confirm Password' type='text' variant='standard'/></ListItem>
        <ListItem>&nbsp;</ListItem>
        <ListItem style={{ justifyContent: 'center' }}><Button LinkButton={true} href='/Verification' onClick={handleSubmit} variant='outlined'>Confirm</Button>
          &nbsp;&nbsp;<Button LinkButton={true} href='/' variant='outlined'>Cancel</Button></ListItem>
      </List>
    </div>
  )
}

export default Create 