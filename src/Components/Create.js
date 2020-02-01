import React, { } from 'react';
import { List, ListItem, Toolbar, AppBar, TextField, InputAdornment, IconButton, Fab, Typography } from '@material-ui/core'
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
    outline: {
      borderWidth: '2px', //change this, add error stuff into each textfield, change input to textfield, check is comfirm === password and character requirements

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

  const TryCreate = () => {
    axios.post('https://o5gn70te7h.execute-api.us-west-2.amazonaws.com/latest/users/', {
      password: props.password,
      username: props.username,
      email: props.email,
    })
      .then(function (response) {
        if (response.data.success === true) //some of this is dumb but works
          props.setDidCreate(true)
        console.log(response)
      }).catch(function (error) {
        console.log(error);
      })
  }

  const handleSubmit = () => {
    props.setCreate(true)
    TryCreate(props.username, props.password, props.email)
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
            <TextField
              onChange={e => props.setUsername(e.target.value)}
              InputProps={{ classes: { underline: classes.text } }}
              error={
                (props.create && props.username === '')
              }
              name='username'
              placeholder='Username '
              type='text'
              autoComplete='off' />
          </ListItem>
          <ListItem style={{ marginTop: '10px' }}>
            <TextField
              onChange={e => props.setEmail(e.target.value)}
              InputProps={{ classes: { underline: classes.text } }}
              error={
                (props.create && props.email === '')
              }
              name='email'
              placeholder='Email'
              type='text'
              autoComplete='off' />
          </ListItem>
          <ListItem style={{ marginTop: '10px' }}>
            <TextField
              onChange={e => props.setPassword(e.target.value)}
              InputProps={{ classes: { underline: classes.text } }}
              error={
                (props.create && props.password === '') ||
                (props.create && props.password !== props.confirm)
              }
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
            <TextField
              onChange={e => props.setConfirm(e.target.value)}
              InputProps={{ classes: { underline: classes.text } }}
              error={
                (props.create && props.confirm === '') ||
                (props.create && props.password !== props.confirm)
              }
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
          {props.create && (
            <ListItem>
              <Typography
                style={{ fontSize: 12, color: 'red' }} >
                information entered is incomplete
              </Typography>
            </ListItem>
          )}
        </List>
        <ListItem
          style={{ justifyContent: 'center', marginTop: '30px' }}>
          <Link to='/create' style={{ textDecoration: 'none' }}>
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