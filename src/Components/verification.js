import React, { Component } from 'react';
import { Grid, TextField, Container, Button} from '@material-ui/core'
import { NavLink, } from 'react-router-dom';
import axios from 'axios';

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

    axios.put('https://o5gn70te7h.execute-api.us-west-2.amazonaws.com/latest/users/:username/verification', {
      confirmation_code: verification_code,
      username: username,
    })
      .then(function (response) {
        console.log(response)
      }).catch(function (error) {
        console.log(error);
      })
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
      <form>
        <div className="verification" style={{ backgroundColor: '#87ACA3', height: '50vh' }} >
          <Container style={{ padding: '15vh' }}>
            <Grid container row justify='center' alignItems='center' spacing={6}>
              <Grid item><TextField name='username' placeholder='Username' type='text' variant='outlined' onChange={e => this.handleInputChange(e)} fullWidth /></Grid>
              <Grid item><TextField name='verification_code' placeholder='Verification Code ' type='text' variant='outlined' onChange={e => this.handleInputChange(e)} fullWidth /></Grid>
            </Grid>
            <Grid container row justify='center' alignItems='center' spacing={6}>
              <Grid item padding='25px'> <NavLink to="/"> <Button onClick={this.handleSubmit} variant='contained'>Confirm</Button> </NavLink> </Grid>
            </Grid>
          </Container>
        </div>
      </form>
    )
  }
}

export { Verification }