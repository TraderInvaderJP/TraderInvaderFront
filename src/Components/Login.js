import React, { PreventDefault } from 'react';
import { List, ListItem, Toolbar, AppBar, IconButton, InputAdornment, Input, Fab } from '@material-ui/core'
import { VisibilityOff, Visibility } from '@material-ui/icons'
import '../App.css'
import { Link } from 'react-router-dom';
import templogo from '../templogo.png';
import { makeStyles } from '@material-ui/core/styles';
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
})

function Home(props) {
  const [values, setValues] = React.useState({
    showPassword: false,
  })
  const classes = useStyles();

  const LoginAttempt = () => {
    try {
      axios.post('/users/token', {
        password: props.password,
        username: props.username,
      })
        .then(function (response) {
          console.log(response)
          localStorage.setItem('token', response.data)
          if (response.data.success === true)
            props.setAuthorized(true)
        }).catch(function (error) {
          console.log(error);
        })
      return true
    } catch (err) {
      return false
    }
  }

  const handleSubmit = () => {
    if (props.username && props.password !== '') {
      let accept = LoginAttempt(props.username, props.password)
      if (!accept) props.setLogin(true)
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
        <Toolbar position=' fixed' className={'toolbar'} >
          <h1><img src={templogo} alt="Logo" height='120' width='100' /></h1>
        </Toolbar>
      </AppBar>
      <List>
        <List style={{ marginTop: '30px', marginRight: '-40px' }}>
          <ListItem>
            <Input
              onChange={e => props.setUsername(e.target.value)}
              className={classes.text}
              name='username'
              placeholder='Username '
              type='text'
              autoComplete='off' />
          </ListItem >
          <ListItem >
            <Input
              onChange={e => props.setPassword(e.target.value)}
              className={classes.text}
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
        </List>
        <ListItem style={{ justifyContent: 'center', marginTop: '10px' }}>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <Fab className={classes.button}
              onClick={handleSubmit}
              variant='extended'>Login</Fab>
          </Link>
        </ListItem>
        <ListItem style={{ justifyContent: 'center', marginTop: '30px' }}>
          <Link
            to='/Forget'>Forget Password?</Link>
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
