import React, { Component, PreventDefault, useImperativeHandle, useState } from 'react';
import { TextField, Container, Button, List, ListItem, Toolbar, AppBar, Link, LinkButton, Input } from '@material-ui/core'
import Authentication from './Authentication';
import '../App.css'
import axios from 'axios'
import templogo from '../templogo.png';

/* Comfirmation page*/
function Verification() {
  const [verification, setVerification] = useState('')

  const handleSubmit = () => {
    console.log(verification)
    //let url = `https://o5gn70te7h.execute-api.us-west-2.amazonaws.com/latest/users/${username}/verification`
    //console.log(url)
    // axios.put(`https://o5gn70te7h.execute-api.us-west-2.amazonaws.com/latest/users/${username}/verification`, {
    //   confirmation_code: verification_code
    // })
    //   .then(function (response) {
    //     console.log(response)
    //   }).catch(function (error) {
    //     console.log(error);
    //   })
  }

  /* console log input and sets verification value */
  const handleVerificationChange = (event) => {
    setVerification(event.target.value)
  }
  //render Verification page
  return (
    <div className={'centered'}>
      <AppBar position='fixed' className={'toolbar'}>
        <Toolbar position='fixed' className={'toolbar'}>
          <h1><img src={templogo} alt="Logo" height='100' /></h1>
        </Toolbar>
      </AppBar>
      <List>
        <ListItem>
          <Input
            onChange={handleVerificationChange}
            inputProps={{ style: { textAlign: 'left' } }}
            className={'textfield'}
            name='verification'
            placeholder='Verification Code'
            type='text'
            variant='standard' />
        </ListItem>
        <ListItem>&nbsp;</ListItem>
        <ListItem
          style={{ justifyContent: 'center' }}>
          <Button variant='outlined'
            onClick={handleSubmit}>Confirm</Button>
          &nbsp;&nbsp;
          <Button
            LinkButton={true}
            href='/'
            variant='outlined'>Cancel</Button>
        </ListItem>
        <ListItem
          style={{ justifyContent: 'center' }}>
          <Link href='#'>Resend Code</Link>
        </ListItem>
      </List>
    </div>
  )
}

export default Verification 