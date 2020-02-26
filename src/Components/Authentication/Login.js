import React, { PreventDefault } from 'react';
import { List, ListItem, Toolbar, AppBar, IconButton, InputAdornment, Typography, Button, TextField } from '@material-ui/core'
import { VisibilityOff, Visibility } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import templogo from '../../templogo.png'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DAF96',
    height: '100vh',
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
})

function Home(props) {
  const [values, setValues] = React.useState({
    showPassword: false,
  })
  const classes = useStyles();

  const LoginAttempt = () => {
    axios.post('/users/token', {
      password: props.password,
      username: props.username,
    })
      .then(function (response) {
        console.log(response.data)
        const { data } = response.data

        localStorage.setItem('token', data.access_token)
        localStorage.setItem('refresh', data.refresh_token)

        if (response.data.success === true)
          props.setAuth(true)
        else
          props.setLogin(true)

      }).catch(function (error) {
        console.log(error)
      })
  }

  const handleSubmit = () => {
    if (props.username && props.password !== '') {
      let accept = LoginAttempt(props.username, props.password) 
      return accept
    } else {
      return false
    }
  }

  const handleClickShowPassword = () => { setValues({ ...values, showPassword: !values.showPassword }) }

  const handleMouseDownPressed = event => { event.preventDefault() }

  return (
    <div className={classes.root}>
      <AppBar position='fixed' >
        <Toolbar position=' fixed' className={classes.toolbar} >
          <div className={classes.logoHorizontallyCenter}>
            <img src={templogo} className={classes.logo} alt="Logo" />
          </div>
        </Toolbar>
      </AppBar>
      <List>
        <List style={{ marginTop: '30px', marginRight: '-40px' }}>
          <ListItem>
            <TextField
              onChange={e => props.setUsername(e.target.value)}
              InputProps={{ classes: { underline: classes.text } }}
              error={
                (props.login && props.username === '') ||
                (props.login && !props.auth)
              }
              name='username'
              placeholder='Username '
              type='text'
              autoComplete='off' />
          </ListItem >
          <ListItem >
            <TextField
              onChange={e => props.setPassword(e.target.value)}
              InputProps={{ classes: { underline: classes.text } }}
              error={
                (props.login && props.password === '') ||
                (props.login && !props.auth)
              }
              name='password'
              placeholder='Password'
              position='fixed'
              autoComplete='off'
              type={values.showPassword ? 'text' : 'password'} />
            <InputAdornment>
              <IconButton
                aria-label='toggle password visibility'
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPressed}>
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          </ListItem>
          {props.login && (
            <ListItem>
              <Typography
                style={{ fontSize: 12, color: 'red' }} >
                incorrect username or password
              </Typography>
            </ListItem>
          )}
        </List>
        <ListItem style={{ justifyContent: 'center', marginTop: '10px' }}>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <Button className={classes.button}
              onClick={handleSubmit}
              variant='text'>Login</Button>
          </Link>
        </ListItem>
        <ListItem style={{ justifyContent: 'center', marginTop: '30px' }}>
          <Link
            to='/Forgot'>Forgot Password?</Link>
        </ListItem>
        <ListItem style={{ justifyContent: 'center', marginTop: '5px' }}>
          <Link
            to='/create'
            onClick={PreventDefault}>Create New Account</Link>
        </ListItem>
      </List >
    </div>
  )
}
export default Home