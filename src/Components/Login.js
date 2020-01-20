/* Home page, it is the login page */
import React, { Component, PreventDefault, useState } from 'react';
import { TextField, Button, List, ListItem, Toolbar, AppBar, Link, LinkButton, IconButton, InputAdornment, Input } from '@material-ui/core'
import { VisibilityOff, Visibility } from '@material-ui/icons'
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
  const handleNameChange = prop => event => {
    setUsername(event.target.value)
  }

  /* sets password values */
  const handlePasswordChange = prop => event => {
    setPassword(event.target.value)
  }

  const handleClickShowPassword = () => {
    setPassword({ password, showPassword: !password.showPassword })
  }

  const handleMouseDownPressed = event => {
    event.preventDefault()
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
        <ListItem>
          <Input
            onChange={handleNameChange}
            inputProps={{ style: { textAlign: 'left', margin: 'normal' } }}
            className={'textfield'}
            name='username'
            placeholder='Username '
            type='text'
            variant='standard' />
        </ListItem>
        <ListItem>
          <Input
            htmlFor='outlined-adornment-password'
            id='standard-adorment-password'
            onChange={handlePasswordChange}
            inputProps={{ style: { textAlign: 'left' } }}
            className={'textfield'}
            name='password'
            placeholder='Password'
            type={password.showPassword ? 'text' : 'password'}
            variant='standard'
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPressed}
                  edge='end'
                >
                  {password.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </ListItem>
        <ListItem>&nbsp;</ListItem>
        <ListItem style={{ justifyContent: 'center' }} display='flex' display='flex'>
          <Button LinkButton={true} onClick={handleSubmit} href='/userhome' variant='outlined' >Confirm</Button>
        </ListItem>
        <ListItem style={{ justifyContent: 'center' }}>
          <Link underline='none' href='#'>Forget Password?</Link>
        </ListItem>
        <ListItem style={{ justifyContent: 'center' }}>
          <Link underline='none' href='/create' onClick={PreventDefault}>Create New Account</Link>
        </ListItem>
      </List >
    </div>
  )
}
export default Home
