import React, { useState } from 'react';
import { Fab, Toolbar, AppBar, IconButton
} from '@material-ui/core'
import { Menu, Tv } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import templogo from '../../templogo.png';
import { makeStyles } from '@material-ui/core/styles';

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
})

function ToolBar(props) {
    const classes = useStyles()

    return (
        <AppBar position='fixed' >
            <Toolbar
                position=' fixed'
                className={classes.toolbar}>
                <IconButton onClick={props.toggleDrawer}>
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
                            onClick={props.Logout}
                            variant='extended'>Log Out</Fab>
                    </Link>
                </div>
            </Toolbar>
        </AppBar>
    )
}
export default ToolBar
