import React, { } from 'react';
import { List, ListItem, Toolbar, AppBar, TextField, InputAdornment, IconButton, Button, Typography } from '@material-ui/core'
import { VisibilityOff, Visibility } from '@material-ui/icons'
import axios from 'axios'
import templogo from '../../templogo.png';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

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
    }
  });
  
  function Change(props) {

  }