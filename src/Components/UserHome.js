/* Home page, it is the login page */
import React, { PreventDefault, GridItem } from 'react';
import { Fab, List, ListItem, Toolbar, AppBar, IconButton, Divider, ListItemIcon, ListItemText, Drawer, Grid } from '@material-ui/core'
import { VisibilityOff, Visibility } from '@material-ui/icons'
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail'
import MenuIcon from '@material-ui/icons/Menu'
import TvIcon from '@material-ui/icons/Tv';
import SettingsIcon from '@material-ui/icons/Settings';
import PersonIcon from '@material-ui/icons/Person';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import '../App.css'
import { Link } from 'react-router-dom';
import templogo from '../templogo.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    table: {
        width: '55vh',
        height: '70vh',
        background: '#43AA1F',
        color: '#0A0708'
    },
    logoutHorizontallyCenter: {
        position: 'absolute',
        left: '93%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
    },
    logout: {
        margin: 'auto',
        color: '#53E121',
        background: '#0A0708',
        textAlign: 'center',
        "&:hover": {
            background: '#0A0708',
            color: '#43AA1F',
        }
    },
    list: {
        background: '#9DAF96',
        height: '100vh',
        width: '25vh'

    },
    logo: {
        margin: 'auto',
        textAlign: 'center',
        width: '50px',
        height: '60px',
    },
    logoHorizontallyCenter: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
    },
    menuIcon: {
        color: '#53E121',
        "&:hover": {
            background: '#0A0708',
            color: '#43AA1F',
        }
    },
    toolbar: {
        background: '#0A0708',
        flexFlow: 1,
        height: '100px'
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


function UserHome(props) {
    const [values, setValues] = React.useState({
        showPassword: false,
    })
    const [state, setState] = React.useState({
        left: false,
    });

    const classes = useStyles()
    const handleSubmit = () => {

    }
    const handleClickShowPassword = () => { setValues({ ...values, showPassword: !values.showPassword }) }

    const handleMouseDownPressed = event => { event.preventDefault() }

    const Logout = () => {
        localStorage.removeItem('token')
        props.setAuthorized(false)
        props.setUsername('')
        props.setPassword('')
    }

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                {['Profile', 'Inbox', 'Friends', 'placeholder'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <PersonIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['placeholder', 'Settings'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <SettingsIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div className={'centered'}>
            <AppBar position='fixed' >
                <Toolbar
                    position=' fixed'
                    className={classes.toolbar}>
                    <IconButton>
                        <MenuIcon
                            className={classes.menuIcon}
                            onClick={toggleDrawer('left', true)}>
                            >
                    </MenuIcon>
                    </IconButton>
                    <IconButton>
                        <TvIcon
                            className={classes.menuIcon}>
                        </TvIcon>
                    </IconButton>
                    <div className={classes.logoHorizontallyCenter}>
                        <Link to='/'>
                            <h1>
                                <img
                                    src={templogo}
                                    alt="Logo"
                                    className={classes.logo} />
                            </h1>
                        </Link>
                    </div>
                    <div className={classes.logoutHorizontallyCenter}>
                        <Link to='/' style={{ textDecoration: 'none' }}>
                            <Fab className={classes.logout}
                                onClick={Logout}
                                variant='extended'>Log Out</Fab>
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                open={state.left}
                onClose={toggleDrawer('left', false)}>
                {sideList('left')}
            </Drawer>
            <div>
                
            </div>


        </div>
    )
}
export default UserHome
