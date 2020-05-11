import React, { } from 'react';
import { List, ListItem, Toolbar, AppBar, TextField, InputAdornment, IconButton, Button, Typography, Grid } from '@material-ui/core'
import { VisibilityOff, Visibility } from '@material-ui/icons'
import axios from 'axios'
import templogo from '../../templogo.png'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

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
    outline: {
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

function Create(props) {
  const [values, setValues] = React.useState({
    showPassword: false,
  })
  const classes = useStyles();
  const handleClickShowPassword = () => { setValues({ ...values, showPassword: !values.showPassword }) }

  const handleMouseDownPassword = event => { event.preventDefault() }

  const TryCreate = () => {
    axios.post('/users', {
      password: props.password,
      username: props.username,
      email: props.email,
    })
      .then(function (response) {
        if (response.data.success === true) 
          props.setDidCreate(true)
        console.log(response)
      }).catch(function (error) {
        console.log(error)
        
      })
  }

  const handleSubmit = () => {
    props.setDidCreate(true)
    TryCreate(props.username, props.password, props.email)
  }

  return (
    <div className={classes.root}>
      <AppBar position='fixed'>
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
        spacing={0}>
        <Grid item style={{ marginRight: '-40px' }} >
          <Grid item style={{ /*marginTop: '50px'*/ }}>
            <TextField
              onChange={e => props.setUsername(e.target.value)}
              InputProps={{ classes: { underline: classes.text } }}
              error={
                (props.create && props.username === '')}
              name='username'
              placeholder='Username '
              type='text'
              autoComplete='off' />
          </Grid>
          <Grid item style={{ marginTop: '20px' }}>
            <TextField
              onChange={e => props.setEmail(e.target.value)}
              InputProps={{ classes: { underline: classes.text } }}
              error={
                (props.create && props.email === '')}
              name='email'
              placeholder='Email'
              type='text'
              autoComplete='off' />
          </Grid>
          <Grid item style={{ marginTop: '20px' }}>
            <TextField
              onChange={e => props.setPassword(e.target.value)}
              InputProps={{ classes: { underline: classes.text } }}
              error={
                (props.create && props.password === '') ||
                (props.create && props.password !== props.confirm)}
              name='password'
              placeholder='Password'
              type={values.showPassword ? 'text' : 'password'} />
              <IconButton
                aria-label='toggle password visibility'
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}>
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
          </Grid>
          <Grid item style={{ marginTop: '10px' }}>
            <TextField
              onChange={e => props.setConfirm(e.target.value)}
              InputProps={{ classes: { underline: classes.text } }}
              error={
                (props.create && props.confirm === '') ||
                (props.create && props.password !== props.confirm)}
              name='confirm'
              placeholder='Confirm Password'
              type={values.showPassword ? 'text' : 'password'} />
              <IconButton
                aria-label='toggle password visibility'
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}>
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
          </Grid>
          {props.create && (
            <Grid item>
              <Typography
                style={{ fontSize: 12, color: 'red' }} >
                information entered is incomplete
              </Typography>
            </Grid>)}
        </Grid>
        <Grid item
          style={{ justifyContent: 'center', marginTop: '30px' }}>
          <Link to='/verification' style={{ textDecoration: 'none' }}>
            <Button className={classes.button}
              onClick={handleSubmit}
              variant='text'>Confirm</Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  )
}

export default Create 