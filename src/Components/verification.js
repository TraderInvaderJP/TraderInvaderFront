import React, { Component } from 'react';
import {
  Paper, Grid, TextField, Container, Button
} from '@material-ui/core'
import { NavLink, Switch, Route } from 'react-router-dom';

/* Verification page*/
class Verification extends Component {
    constructor(props) {
      super(props)
      this.state = {
        verificationCode: ''
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
    //render Verification page
    render() {
      return (
        <form>
          <div className="verification" style={{ backgroundColor: '#87ACA3', height: '50vh' }} >
            <Container style={{ padding: '15vh' }}>
              <Grid container row justify='center' alignItems='center' spacing={6}>
                <Grid item><TextField name='verificationCode' placeholder='Verification Code ' type='text' variant='outlined' onChange={e => this.handleInputChange(e)} fullWidth /></Grid>
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
  
  export {Verification}