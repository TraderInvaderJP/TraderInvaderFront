/* Home page, it is the login page */
import React, { Component, PreventDefault } from 'react';
import { TextField, Button, List, ListItem, Toolbar, AppBar, Link } from '@material-ui/core'
import '../App.css'
import templogo from '../templogo.png';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  handleSubmit = (event) => {
    const data = this.state
    console.log(data)
  }

  /* console log input and sets user values */
  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  //render login page
  render() {
    return (
      <div className={'centered'}>
        <AppBar position='fixed' >
          <Toolbar position=' fixed' className={'toolbar'}>
            <h1><img src={templogo} alt="Logo" height='100' /></h1>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem><TextField inputProps={{ style: { textAlign: 'center', margin: 'normal' } }} className={'textfield'} name='username' placeholder='UserName ' type='text' variant='standard' /></ListItem>
          <ListItem><TextField inputProps={{ style: { textAlign: 'center' } }} className={'textfield'} name='password' placeholder='Password' type='text' variant='standard' /></ListItem>
          <ListItem>&nbsp;</ListItem>
          <ListItem style={{ justifyContent: 'center' }} display='flex' display='flex'><Button linkButton={true} href='/userhome' variant='outlined'>Confirm</Button></ListItem>
          <ListItem style={{ justifyContent: 'center' }}><Link underline='none' href='#'>Forget Password?</Link></ListItem>
          <ListItem style={{ justifyContent: 'center' }}><Link underline='none' href='/create' onClick={PreventDefault}>Create New Account</Link></ListItem>
        </List >
      </div>
    )
  }
}

export default Home
