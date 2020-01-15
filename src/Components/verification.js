import React, { Component, PreventDefault } from 'react';
import { Grid, TextField, Container, Button, CssBaseline, Typography, List, ListItem, Toolbar, AppBar, Link } from '@material-ui/core'
import { NavLink, } from 'react-router-dom';
import Authentication from './Authentication';
import '../App.css'
import axios from 'axios'
import templogo from '../templogo.png';

/* Comfirmation page*/
class Verification extends Component {
  constructor(props) {
    super(props)
    this.state = {
      verification_code: '',
      username: ''
    }
  }
  //not working yet, says invalid code for some reason
  handleSubmit = (event) => {
    const { verification_code, username } = this.state
    //let url = `https://o5gn70te7h.execute-api.us-west-2.amazonaws.com/latest/users/${username}/verification`
    //console.log(url)
    console.log(this.state.username)
    // axios.put(`https://o5gn70te7h.execute-api.us-west-2.amazonaws.com/latest/users/${username}/verification`, {
    //   confirmation_code: verification_code
    // })
    //   .then(function (response) {
    //     console.log(response)
    //   }).catch(function (error) {
    //     console.log(error);
    //   })
  }

  /* console log input and sets verification value */
  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  //render Verification page
  render() {
    return (
      <div className={'centered'}>
        <AppBar position='fixed' className={'toolbar'}>
          <Toolbar position='fixed' className={'toolbar'}>
          <h1><img src={templogo} alt="Logo" height='100'/></h1>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem><TextField inputProps={{ style: {textAlign: 'center'} }} className={'textfield'} name='verification' placeholder='Verification Code' type='text' variant='standard' onChange={e => this.handleInputChange(e)} /></ListItem>
          <ListItem style={{justifyContent: 'center'}}><Button variant='outlined' onClick={this.handleSubmit}>Confirm</Button>&nbsp;&nbsp;
          <NavLink to='/'><Button variant='outlined'>Cancel</Button></NavLink></ListItem>
          <List>
            <ListItem style={{justifyContent: 'center'}}><Link href='#'>Resend Code</Link></ListItem>
          </List>
        </List>
      </div>
    )
  }
}

export default Verification 