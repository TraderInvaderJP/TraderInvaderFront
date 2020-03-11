import React, { useState, useEffect } from 'react'
import { Toolbar, AppBar, IconButton, Tooltip, MenuList, MenuItem, Paper, Button, Avatar, Popper, Grow, Divider } from '@material-ui/core'
import { Menu, EmojiObjects } from '@material-ui/icons'
import { Link, useHistory } from 'react-router-dom'
import templogo from '../../templogo.png'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'

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
        left: '95%',
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
        width: '55px',
        height: '70px',
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
        height: '120px'
    },
    avatar: {
        color: 'black',
        background: '#53E121',
        "&:hover": {
            background: '#43AA1F',
            color: 'black',
        }
    }
})

function ToolBar(props) {
    const classes = useStyles()
    const history = useHistory()
    const [market, SetMarket] = useState(false)
    const [open, setOpen] = React.useState(false)
    const anchorRef = React.useRef(null)

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('/stocks/market/isopen')
                SetMarket(data.is_open)
            }
            catch (err) {
                console.log(err)
            }
        })()
    }, [SetMarket])

    const handleToggle = () => {
        setOpen(prevOpen => !prevOpen)
    }

    const handleClose = event => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return
        }
        setOpen(false)
    }

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault()
            setOpen(false)
        }
    }

    const prevOpen = React.useRef(open)
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus()
        }

        prevOpen.current = open
    }, [open])

    const handleChangePassword = () => {
        history.push('/app/changepassverification')
    }

    return (
        <AppBar position='fixed' >
            <Toolbar
                position='fixed'
                className={classes.toolbar}>
                <IconButton onClick={props.toggleDrawer}>
                    <Menu className={classes.menuIcon} />
                </IconButton>
                <IconButton>
                    {!market ? <Tooltip title="Market is closed"><EmojiObjects style={{ color: 'grey' }} /></Tooltip>
                        : <Tooltip title="Market is open"><EmojiObjects style={{ color: '#ECFF00' }} /></Tooltip>}
                </IconButton>
                <div className={classes.logoHorizontallyCenter}>
                    <Link to='/app'>
                        <h1>
                            <img
                                src={templogo}
                                alt="Logo"
                                className={classes.logo} />
                        </h1>
                    </Link>
                </div>
                <div className={classes.logoutHorizontallyCenter}>
                    <Button
                        ref={anchorRef}
                        aria-controls={open ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}>
                        <Avatar className={classes.avatar}>{props.username.charAt(0)}</Avatar>
                    </Button>
                    <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }} >
                                <Paper>
                                    <ClickAwayListener onClickAway={handleClose}>
                                        <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                            <MenuItem onClick={handleClose} style={{ color: 'black' }}>Username: {props.username}</MenuItem>
                                            <Divider style={{ color: 'black' }}/>
                                            <MenuItem onClick={handleChangePassword} style={{ color: 'black' }}>Change Password</MenuItem>
                                            <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
                                            <MenuItem onClick={props.Logout}>Logout</MenuItem></Link>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>)}
                    </Popper>
                </div>
            </Toolbar>
        </AppBar>
    )
}
export default ToolBar
