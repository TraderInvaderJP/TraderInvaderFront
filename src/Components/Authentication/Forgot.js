import React, { PreventDefault } from 'react';
import { List, ListItem, Toolbar, AppBar, IconButton, InputAdornment, Typography, Button, TextField } from '@material-ui/core'
import { VisibilityOff, Visibility } from '@material-ui/icons'
import { Link } from 'react-router-dom';
import templogo from '../../templogo.png';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'

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

function Forgot(props) {
  const classes = useStyles();

  const handleSubmit = () => {
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
      <List>
        <ListItem style={{ marginTop: '50px' }}>
            <TextField
              onChange={e => props.setUsername(e.target.value)}
              InputProps={{ classes: { underline: classes.text } }}
              error={
                (props.create && props.username === '')}
              name='username'
              placeholder='Username '
              type='text'
              autoComplete='off' />
          </ListItem>
        {props.create && (
          <ListItem>
            <Typography
              style={{ fontSize: 12, color: 'red' }} >
              information entered is incomplete
                        </Typography>
          </ListItem>)}
        <ListItem
          style={{ justifyContent: 'center', marginTop: '30px' }}>
          <Link to='/newpassverification' style={{ textDecoration: 'none' }}>
            <Button className={classes.button}
              onClick={handleSubmit}
              variant='text'>Submit</Button>
          </Link>
        </ListItem>
      </List>
    </div>
  )
}
export default Forgot