import React, { useState } from 'react'
import { } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Content from './Content'
import UserDrawer from './UserDrawer'
import ToolBar from './ToolBar'

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

function UserHome(props) {
    const classes = useStyles()
    const [isOpen, setIsOpen] = useState(false)
        
    

    const handleSubmit = () => {
        //yes, stuff will go here
    }

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

    return (
        <div className={classes.root} style={{width: '100%', height: '100%'}}> 
            <ToolBar Logout={Logout} toggleDrawer={toggleDrawer}/>  
            <UserDrawer toggleDrawer={toggleDrawer} isOpen={isOpen}/>
            <Content username={props.username} />
        </div>
    )
}
export default UserHome
