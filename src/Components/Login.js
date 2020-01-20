/* Home page, it is the login page */
import React, { Component, PreventDefault, useState } from 'react';
import { TextField, Button, List, ListItem, Toolbar, AppBar, Link, LinkButton } from '@material-ui/core'
import '../App.css'
import templogo from '../templogo.png';

function Home() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = () => {
    console.log(username)
    console.log(password)
  }

  /* sets user values */
  const handleNameChange = (event) => {
    setUsername(event.target.value)
  }

  /* sets password values */
  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  //render login page
  return (
    <div className={'centered'}>
      <AppBar position='fixed' >
        <Toolbar position=' fixed' className={'toolbar'}>
          <h1><img src={templogo} alt="Logo" height='100' /></h1>
        </Toolbar>
      </AppBar>
      <List>
        <ListItem><TextField onChange={handleNameChange} inputProps={{ style: { textAlign: 'center', margin: 'normal' } }} className={'textfield'} name='username' placeholder='Username ' type='text' variant='standard' /></ListItem>
        <ListItem><TextField onChange={handlePasswordChange} inputProps={{ style: { textAlign: 'center' } }} className={'textfield'} name='password' placeholder='Password' type='text' variant='standard' /></ListItem>
        <ListItem>&nbsp;</ListItem>
        <ListItem style={{ justifyContent: 'center' }} display='flex' display='flex'><Button LinkButton={true} onClick={handleSubmit} href='/userhome' variant='outlined' >Confirm</Button></ListItem>
        <ListItem style={{ justifyContent: 'center' }}><Link underline='none' href='#'>Forget Password?</Link></ListItem>
        <ListItem style={{ justifyContent: 'center' }}><Link underline='none' href='/create' onClick={PreventDefault}>Create New Account</Link></ListItem>
      </List >
    </div>
  )
}
export default Home
