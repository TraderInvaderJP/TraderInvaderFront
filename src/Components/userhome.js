import React, { useState, Component } from 'react';
import {
  Paper, Grid, TextField, List, Stepper, Step, StepLabel, makeStyles,
  ListItem, ListItemText, Container, IconButton, CardHeader, Toolbar, Typography, Button
} from '@material-ui/core'
import { NavLink, Switch, Route } from 'react-router-dom';

/* User landing page, the first page that appears once the user has logged in successfully */
class UserHome extends Component {

    render() {
      return (
        <h1>This page is a working progress</h1>
      )
    }
  }
  
  export {UserHome}