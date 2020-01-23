import React, {} from 'react';
import { Button, List, ListItem, Toolbar, AppBar, Input, InputAdornment, IconButton } from '@material-ui/core'
import { VisibilityOff, Visibility } from '@material-ui/icons'
import '../App.css'
import axios from 'axios'
import templogo from '../templogo.png';
import { Link } from 'react-router-dom';

/* create user page */
function Create(props) {
  const [values, setValues] = React.useState({
    showPassword: false,
    showConfirmPassword: false,
  })

  const handleClickShowPassword = () => { setValues({ ...values, showPassword: !values.showPassword }) }

  const handleClickShowConfirmPassword = () => { setValues({ ...values, showConfirmPassword: !values.showConfirmPassword }) }

  const handleMouseDownPassword = event => { event.preventDefault() }

  const handleSubmit = () => {
    // axios.post('https://o5gn70te7h.execute-api.us-west-2.amazonaws.com/latest/users/', {
    //   password: props.password,
    //   username: props.username,
    //   email: props.email,
    // })
    //   .then(function (response) {
    //     console.log(response)
    //   }).catch(function (error) {
    //     console.log(error);
    //   })
  }

  return (
    <div className={'centered'}>
      <AppBar position='fixed' className={'toolbar'}>
        <Toolbar position='fixed' className={'toolbar'}>
      <Link to='/'>
          <h1><img src={templogo} alt="Logo" height='120' width='100'/></h1>
          </Link>
        </Toolbar>
      </AppBar>
      <List>
        <ListItem>
          <Input
            onChange={e => props.setUsername(e.target.value)}
            inputProps={{ style: { textAlign: 'left' } }}
            className={'textfield'}
            name='username'
            placeholder='Username '
            type='text'
            variant='standard'
            />
        </ListItem>
        <ListItem>
          <Input
            onChange={e => props.setEmail(e.target.value)}
            inputProps={{ style: { textAlign: 'left' } }}
            className={'textfield'}
            name='email'
            placeholder='Email'
            type='text'
            variant='standard' />
        </ListItem>
        <ListItem>
          <Input
            onChange={e => props.setPassword(e.target.value)}
            inputProps={{ style: { textAlign: 'left' } }}
            className={'textfield'}
            name='password'
            placeholder='Password'
            type={values.showPassword ? 'text' : 'password'}
            variant='standard'
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge='end'
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </ListItem>
        <ListItem>
          <Input
            onChange={e => props.setConfirm(e.target.value)}
            inputProps={{ style: { textAlign: 'left' } }}
            className={'textfield'}
            name='confirm'
            placeholder='Confirm Password'
            type={values.showConfirmPassword ? 'text' : 'password'}
            variant='standard'
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowConfirmPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge='end'>
                  {values.showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>} />
        </ListItem>
        <ListItem>&nbsp;</ListItem>
        <ListItem
          style={{ justifyContent: 'center' }}>
          <Link to='/Verification' style={{textDecoration:'none'}}>
          <Button
            onClick={handleSubmit}
            variant='outlined'>Confirm</Button>
            </Link>
          &nbsp;&nbsp;
          <Link to='/' style={{textDecoration:'none'}}>
          <Button
            onClick={handleSubmit}
            variant='outlined'>Cancel</Button>
            </Link>
        </ListItem>
      </List>
    </div>
  )
}

export default Create 