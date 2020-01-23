import React, { } from 'react';
import { Button, List, ListItem, Toolbar, AppBar, Input } from '@material-ui/core'
import { Link } from 'react-router-dom';
import '../App.css'
import axios from 'axios'
import templogo from '../templogo.png';

function Verification(props) {

  const handleSubmit = () => {

    let url = `https://o5gn70te7h.execute-api.us-west-2.amazonaws.com/latest/users/${props.username}/verification`
    // axios.put(url, {
    //   confirmation_code: props.verification
    // })
    //   .then(function (response) {
    //     console.log(response)
    //   }).catch(function (error) {
    //     console.log(error);
    //   })
  }

  const handleVerificationChange = event => { props.setVerification(event.target.value) }
  return (
    <div className={'centered'}>
      <AppBar position='fixed' className={'toolbar'}>
        <Toolbar position='fixed' className={'toolbar'}>
          <Link to='/'>
            <h1><img src={templogo} alt="Logo" height='120' width='100' /></h1>
          </Link>
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
            variant='standard'
          />
        </ListItem>
        <ListItem>&nbsp;</ListItem>
        <ListItem
          style={{ justifyContent: 'center' }}>
          <Link to='/Create' style={{ textDecoration: 'none' }}>
            <Button
              onClick={handleSubmit}
              variant='outlined'>Confirm</Button>
          </Link>
          &nbsp;&nbsp;
          <Button
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
