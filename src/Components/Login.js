/* Home page, it is the login page */
import React, { PreventDefault } from 'react';
import { List, ListItem, Toolbar, AppBar, IconButton, InputAdornment, Input, Fab } from '@material-ui/core'
import { VisibilityOff, Visibility } from '@material-ui/icons'
import '../App.css'
import { Link } from 'react-router-dom';
import templogo from '../templogo.png';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'

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
})

function Home(props) {
  const [values, setValues] = React.useState({
    showPassword: false,
  })
  const classes = useStyles();

  const handleSubmit = () => {
    try {
      const { data } = axios.post('https://o5gn70te7h.execute-api.us-west-2.amazonaws.com/latest/users/token/', {
        password: props.password,
        username: props.username,
      })
      localStorage.setItem('token', data)
      props.setAuthorized(true)
      return true
    } catch (err) {
      return false
    }
  }

  const handleClickShowPassword = () => { setValues({ ...values, showPassword: !values.showPassword }) }

  const handleMouseDownPressed = event => { event.preventDefault() }

  return (
    <div className={'centered'}>
      <AppBar position='fixed' >
        <Toolbar position=' fixed' className={'toolbar'}>
          <h1><img src={templogo} alt="Logo" height='120' width='100' /></h1>
        </Toolbar>
      </AppBar>
      <List>
        <ListItem style={{ marginTop: '50px' }}>
          <Input
            onChange={e => props.setUsername(e.target.value)}
            inputProps={{ style: { textAlign: 'left', borderBottomColor: '#ced4da' } }}
            className={classes.text}
            name='username'
            placeholder='Username '
            type='text'
            autoComplete='off' />
        </ListItem >
        <ListItem style={{ marginTop: '10px' }}>
          <Input
            htmlFor='outlined-adornment-password'
            onChange={e => props.setPassword(e.target.value)}
            inputProps={{ style: { textAlign: 'left' } }}
            className={classes.text}
            name='password'
            placeholder='Password'
            autoComplete='off'
            type={values.showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPressed}
                  edge='end'>
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>} />
        </ListItem>
        <ListItem
          style={{ justifyContent: 'center', marginTop: '30px' }}
          display='flex'>
          <Link to='/userhome' style={{ textDecoration: 'none' }}>
            <Fab className={classes.button}
              onClick={handleSubmit}
              variant='extended'>Login</Fab>
          </Link>
        </ListItem>
        <ListItem
          style={{ justifyContent: 'center', marginTop: '10px' }}>
          <Link
            to='/Forget'>Forget Password?</Link>
        </ListItem>
        <ListItem
          style={{ justifyContent: 'center', marginTop: '0px' }}>
          <Link
            to='/create'
            onClick={PreventDefault}>Create New Account</Link>
        </ListItem>
      </List >
    </div>
  )
}
export default Home
