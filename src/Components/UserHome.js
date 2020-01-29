/* Home page, it is the login page */
import React, { PreventDefault } from 'react';
import { Fab, List, ListItem, Toolbar, AppBar, IconButton, InputAdornment, Input } from '@material-ui/core'
import { VisibilityOff, Visibility } from '@material-ui/icons'
import '../App.css'
import { Link } from 'react-router-dom';
import templogo from '../templogo.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
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
        standard: {
            borderWidth: '2px',
            width: '40vh',
        },
        '&:before': {
            borderWidth: '2px',
            width: '35vh',
            borderColor: 'black',
        },
        '&:after': {
            borderWidth: '2px',
            width: '35vh',
            borderColor: '#53E121',
        }
    }
});


function Home(props) {
    const [values, setValues] = React.useState({
        showPassword: false,
    })
    const classes = useStyles()
    const handleSubmit = () => {

    }
    const handleClickShowPassword = () => { setValues({ ...values, showPassword: !values.showPassword }) }

    const handleMouseDownPressed = event => { event.preventDefault() }

    const Logout = () => {
        localStorage.removeItem('token')
        props.setAuthorized(false)
        
    }

    return (
        <div className={'centered'}>
            <AppBar position='fixed' >
                <Toolbar position=' fixed' className={'toolbar'}>
                    <Link to='/'>
                        <h1><img src={templogo} alt="Logo" height='120' width='100' /></h1>
                    </Link>
                </Toolbar>
            </AppBar>
            <List>
                <ListItem>User Home Page Coming Soon</ListItem>
                <ListItem>username: {props.username}</ListItem>
                <ListItem
                    style={{ justifyContent: 'center', marginTop: '30px' }}
                    display='flex'>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <Fab className={classes.button}
                            onClick={Logout}
                            variant='extended'>Log Out</Fab>
                    </Link>
                </ListItem>
            </List>

        </div>
    )
}
export default Home
