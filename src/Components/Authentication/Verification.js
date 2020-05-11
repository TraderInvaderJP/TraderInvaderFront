import React, { } from 'react';
import { List, ListItem, Toolbar, AppBar, TextField, Button, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom';
import axios from 'axios'
import templogo from '../../templogo.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DAF96',
    height: '100vh'
  },
  button: {
    background: '#53E121',
    "&:hover": {
      background: '#43AA1F'
    },
    color: 'black',
    padding: '0 30px',
    fontSize: 17,
    borderRadius: 25,
    height: 50,
    width: 150
  },
  text: {
    underline: {
      borderWidth: '3px',
    },
    '&:before': {
      borderWidth: '3px',
      borderColor: 'black',
    },
    '&:after': {
      borderWidth: '3px',
      borderColor: '#53E121',
    }
  },
  toolbar: {
    background: '#0A0708',
    flexFlow: 1,
    height: '150px',
  },
  logo: {
    margin: 'auto',
    textAlign: 'center',
    width: '100px',
    height: '120px',
  },
  logoHorizontallyCenter: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  },
});

function Verification(props) {
  const classes = useStyles()

  const handleVerificationChange = event => { props.setVerification(event.target.value) }

  const handleSubmit = () => {

    let url = `/users/${props.username}/verification`
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
    <div className={classes.root}>
      <AppBar position='fixed' >
        <Toolbar position='fixed' className={classes.toolbar}>
          <Link to='/'>
            <div className={classes.logoHorizontallyCenter}>
              <img src={templogo} className={classes.logo} alt="Logo" />
            </div>
          </Link>
        </Toolbar>
      </AppBar>
      <Grid container style={{ justifyContent: 'center', marginTop: '25px' }} 
        direction= 'column'
        justify= 'center'
        alignItems= 'center'
        spacing={0}>>
        <Grid item style={{ marginTop: '10px' }}>
          <TextField
            onChange={handleVerificationChange}
            InputProps={{ classes: { underline: classes.text } }}
            className={classes.text}
            name='verification'
            placeholder='Verification Code'
            type='text' />
        </Grid>
        <Grid item>
          <Grid item style={{ justifyContent: 'center', marginTop: '25px' }}>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <Button className={classes.button}
                onClick={handleSubmit}
                variant='text'>Submit</Button>
            </Link>
          </Grid>
          <Grid item style={{ justifyContent: 'center', marginTop: '15px' }}>
            <Link to='#'>
              Didn't Receive Code?</Link>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Verification 
