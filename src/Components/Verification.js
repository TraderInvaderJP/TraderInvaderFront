import React, { } from 'react';
import { Button, List, ListItem, Toolbar, AppBar, Input, Fab } from '@material-ui/core'
import { Link } from 'react-router-dom';
import '../App.css'
import axios from 'axios'
import templogo from '../templogo.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  button: {
    background: '#53E121',
    "&:hover": {
      background: '#43AA1F'
    },
    color: 'black',
    padding: '0 30px',
    fontSize: 17,
  },
  text: {
    standard: {
      borderWidth: '2px',
      width: '40vh',
    },
    '&:before': {
      borderWidth: '2px',
      width: '35vh',
      borderColor: 'black',
    },
    '&:after': {
      borderWidth: '2px',
      width: '35vh',
      borderColor: '#53E121',
    }
  }
});

function Verification(props) {
  const classes = useStyles()
  
  const handleVerificationChange = event => { props.setVerification(event.target.value) }

  const handleSubmit = () => {

    let url = `https://o5gn70te7h.execute-api.us-west-2.amazonaws.com/latest/users/${props.username}/verification`
    axios.put(url, {
      confirmation_code: props.verification
    })
      .then(function (response) {
        console.log(response)
      }).catch(function (error) {
        console.log(error);
      })
  }

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
        <ListItem style={{ justifyContent: 'center', marginTop: '10px', marginLeft: '-20px' }}>
          <Input
            onChange={handleVerificationChange}
            inputProps={{ style: { textAlign: 'left' } }}
            className={classes.text}
            name='verification'
            placeholder='Verification Code'
            type='text'
            variant='standard'
          />
        </ListItem>
        <ListItem
          style={{ justifyContent: 'center', marginTop: '30px' }}>
          <Link to='/Login' style={{ textDecoration: 'none' }}>
            <Fab className={classes.button}
              onClick={handleSubmit}
              variant='extended'>Confirm</Fab>
          </Link>
        </ListItem>
        <ListItem
          style={{ justifyContent: 'center', marginTop: '10px' }}>
          <Link to='#'>
            Didn't Receive Code?</Link>
        </ListItem>
      </List>
    </div>
  )
}

export default Verification 
