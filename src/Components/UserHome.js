import React, { } from 'react';
import {
    Fab, List, ListItem, Toolbar, AppBar, IconButton, Divider, ListItemIcon, ListItemText, Drawer} from '@material-ui/core'
import { People, Equalizer, Menu, Tv, Settings, Person, Help } from '@material-ui/icons';
import '../App.css'
import { Link } from 'react-router-dom';
import templogo from '../templogo.png';
import { makeStyles } from '@material-ui/core/styles';
import GameTable from './GameTable'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DAF96',
        height: '100vh',
        width: '100%'
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
    const classes = useStyles()
    const [state, setState] = React.useState({
        left: false,
    })

    const handleSubmit = () => {
        //yes, stuff will go here
    }

    const Logout = () => {
        localStorage.removeItem('token')
        props.setAuthorized(false)
        props.setUsername('')
        props.setPassword('')
        props.setLogin(false)
    }

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        } setState({ ...state, [side]: open });
    };

    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}>
            <List>
                <ListItem button>
                    <ListItemIcon>
                        <Person />
                    </ListItemIcon>
                    <ListItemText primary={'Profile'} />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <People />
                    </ListItemIcon>
                    <ListItemText primary={'Friends'} />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <Equalizer />
                    </ListItemIcon>
                    <ListItemText primary={'Statistics'} />
                </ListItem>
            </List>
            <Divider />
            <List>
                {['Settings', 'Help'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <Settings /> : <Help />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div className={classes.root}>
            <List>
                <AppBar position='fixed' >
                    <Toolbar
                        position=' fixed'
                        className={classes.toolbar}>
                        <IconButton onClick={toggleDrawer('left', true)}>
                            <Menu className={classes.menuIcon} />
                        </IconButton>
                        <IconButton>
                            <Tv className={classes.menuIcon} />
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
                <GameTable username={props.username}/> 
                <ListItem style={{ justifyContent: 'center', marginTop: '15px' }}>
                    <Fab className={classes.button}
                        onClick={handleSubmit}
                        variant='extended'>Create Game</Fab>
                </ListItem>
            </List>
        </div>
    )
}
export default UserHome
