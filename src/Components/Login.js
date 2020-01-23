/* Home page, it is the login page */
import React, { PreventDefault} from 'react';
import { Button, List, ListItem, Toolbar, AppBar, IconButton, InputAdornment, Input } from '@material-ui/core'
import { VisibilityOff, Visibility } from '@material-ui/icons'
import '../App.css'
import { Link } from 'react-router-dom';
import templogo from '../templogo.png';

function Home(props) {
  const [values, setValues] = React.useState({
    showPassword: false,    
  })

  const handleSubmit = () => {

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
        <ListItem>
          <Input
            onChange={e => props.setUsername(e.target.value)}
            inputProps={{ style: { textAlign: 'left' , borderBottomColor: '#ced4da' } }}
            className={'textfield'}
            name='username'
            placeholder='Username '
            type='text'
            variant='standard' />
        </ListItem>
        <ListItem>
          <Input
            htmlFor='outlined-adornment-password'
            onChange={e => props.setPassword(e.target.value)}
            inputProps={{ style: { textAlign: 'left' } }}
            className={'textfield'}
            name='password'
            placeholder='Password'
            type={values.showConfirmPassword ? 'text' : 'password'}
            variant='standard'
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPressed}
                  edge='end'>
                  {values.showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>} />
        </ListItem>
        <ListItem>&nbsp;</ListItem>
        <ListItem
          style={{ justifyContent: 'center' }}
          display='flex'>
          <Link to='/userhome' style={{textDecoration:'none'}}>
          <Button
            onClick={handleSubmit}
            variant='outlined'>Log In</Button>
            </Link>
        </ListItem>
        <ListItem
          style={{ justifyContent: 'center' }}>
          <Link            
            to='/Forget'>Forget Password?</Link>
        </ListItem>
        <ListItem
          style={{ justifyContent: 'center' }}>
          <Link         
            to='/create'
            onClick={PreventDefault}>Create New Account</Link>
        </ListItem>
      </List >
    </div>
  )
}
export default Home
