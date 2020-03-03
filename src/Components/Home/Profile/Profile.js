import React, { useState } from 'react'
import { List, ListItem, Link, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Content from '../Content'
import UserDrawer from '../UserDrawer'
import ToolBar from '../ToolBar'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DAF96',
        width: '100%'
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
})

function Profile(props) {
    const classes = useStyles()
    const [isOpen, setIsOpen] = useState(false)

    const Logout = () => {
        localStorage.removeItem('token')
        props.setAuth(false)
        props.setUsername('')
        props.setPassword('')
        props.setLogin(false)
    }

    const toggleDrawer = () => {
        setIsOpen(!isOpen)
    }

    const handleSubmit = () => {
    }

    return (
        <div className={classes.root} style={{width: '100%', height: '100%'}}>
            <List>
                <List style={{ marginTop: '30px'}}>
                    <ListItem style={{justifyContent: 'center'}}><h1>Profile</h1></ListItem>
                    <ListItem style={{marginTop: '-45px'}}><h2>Profile Name:</h2></ListItem> 
                    <ListItem style={{color: 'white', marginTop: '-45px'}}><h3>{props.username}</h3></ListItem>
                    <ListItem style={{marginTop: '-45px'}}><h2>Profile Password:</h2></ListItem> 
                    <ListItem style={{color: 'white', marginTop: '-45px'}}><h3>{props.password}</h3></ListItem>
                    <ListItem style={{ justifyContent: 'center', marginTop: '10px' }}>
                        <Link to='/' style={{ textDecoration: 'none' }}>
                            <Button className={classes.button}
                            onClick={handleSubmit}
                            variant='text'>Change Password</Button>
                        </Link>
                    </ListItem>
                    <ListItem style={{marginTop: '-25px'}}><h2>Profile E-mail Address:</h2></ListItem> 
                    <ListItem style={{color: 'white', marginTop: '-45px'}}><h3>{props.email}</h3></ListItem>

                    <ListItem style={{justifyContent: 'center'}}><h1>Achievements</h1></ListItem>
                </List>
            </List>
        </div>
    )
}

export default Profile