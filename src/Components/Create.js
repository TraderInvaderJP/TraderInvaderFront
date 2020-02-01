import React, { } from 'react';
import { List, ListItem, Toolbar, AppBar, Input, InputAdornment, IconButton, Fab } from '@material-ui/core'
import { VisibilityOff, Visibility } from '@material-ui/icons'
import '../App.css'
import axios from 'axios'
import templogo from '../templogo.png';
import { Link } from 'react-router-dom';
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
  },
  text: {
    standard: {
      borderWidth: '2px',

    },
    '&:before': {
      borderWidth: '2px',
      borderColor: 'black',
    },
    '&:after': {
      borderWidth: '2px',
      borderColor: '#53E121',
    }
  }
});

function Create(props) {
  const [values, setValues] = React.useState({
    showPassword: false,
  })
  const classes = useStyles();
  const handleClickShowPassword = () => { setValues({ ...values, showPassword: !values.showPassword }) }

  const handleMouseDownPassword = event => { event.preventDefault() }

  const handleSubmit = () => {
    axios.post('https://o5gn70te7h.execute-api.us-west-2.amazonaws.com/latest/users/', {
      password: props.password,
      username: props.username,
      email: props.email,
    })
      .then(function (response) {
        console.log(response)
      }).catch(function (error) {
        console.log(error);
      })
  }

  return (
    <div className={classes.root}>
      <AppBar position='fixed' className={'toolbar'}>
        <Toolbar position='fixed' className={'toolbar'}>
          <Link to='/'>
            <h1><img src={templogo} alt="Logo" height='120' width='100' /></h1>
          </Link>
        </Toolbar>
      </AppBar>
      <List>
        <List style={{ marginRight: '-40px' }} >
          <ListItem style={{ marginTop: '50px' }}>
            <Input
              onChange={e => props.setUsername(e.target.value)}
              className={classes.text}
              name='username'
              placeholder='Username '
              type='text'
              autoComplete='off' />
          </ListItem>
          <ListItem style={{ marginTop: '10px' }}>
            <Input
              onChange={e => props.setEmail(e.target.value)}
              className={classes.text}
              name='email'
              placeholder='Email'
              type='text'
              autoComplete='off' />
          </ListItem>
          <ListItem style={{ marginTop: '10px' }}>
            <Input
              onChange={e => props.setPassword(e.target.value)}
              className={classes.text}
              name='password'
              placeholder='Password'
              type={values.showPassword ? 'text' : 'password'} />
            <InputAdornment position='end'>
              <IconButton
                aria-label='toggle password visibility'
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge='end'>
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          </ListItem>
          <ListItem style={{ marginTop: '10px' }}>
            <Input
              onChange={e => props.setConfirm(e.target.value)}
              className={classes.text}
              name='confirm'
              placeholder='Confirm Password'
              type={values.showPassword ? 'text' : 'password'} />
            <InputAdornment position='end'>
              <IconButton
                aria-label='toggle password visibility'
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge='end'>
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          </ListItem>
        </List>
        <ListItem
          style={{ justifyContent: 'center', marginTop: '30px' }}>
          <Link to='/Verification' style={{ textDecoration: 'none' }}>
            <Fab className={classes.button}
              onClick={handleSubmit}
              variant='extended'>Confirm</Fab>
          </Link>
        </ListItem>
      </List>
    </div>
  )
}

export default Create 