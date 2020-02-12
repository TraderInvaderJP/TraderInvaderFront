import React, { } from 'react';
import { List, ListItem, Toolbar, AppBar, TextField, Fab, Typography } from '@material-ui/core'
import '../App.css'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import templogo from '../templogo.png';

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
    }
  });

function Forget(props) {
    const classes = useStyles();

    const handleSubmit = () => { }

    return (
        <div className={classes.root}>
            <AppBar position='fixed' className={'toolbar'}>
                <Toolbar position='fixed' className={'toolbar'}>
                    <Link to='/'>
                        <h1><img src={templogo} alt="Logo" height='120' width='100' /></h1>
                    </Link>
                </Toolbar>
            </AppBar>
            <List>
                <ListItem style={{ marginTop: '10px' }}>
                    <TextField 
                    onChange={e => props.setEmail(e.target.value)}
                    InputProps={{ classes: { underline: classes.text } }}
                    error={
                    (props.create && props.email === '')}
                    name='email'
                    placeholder='Email'
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
                    <Link to='/verification' style={{ textDecoration: 'none' }}>
                        <Fab className={classes.button}
                        onClick={handleSubmit}
                        variant='extended'>Check For Email</Fab>
                    </Link>
                </ListItem>
            </List>
    </div>
    )
}
export default Forget