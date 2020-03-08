import React, { useState, useEffect } from 'react'
import { List, ListItem, ListItemText, Link, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

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
    const history = useHistory()
    
    useEffect(() => {
        const tok = localStorage.getItem('token')

        axios.get(`/users?access_token=${tok}`)
            .then(function (response) {
                console.log(response.data)
                const { data } = response.data

                window.username = data.Username
                console.log(window.username)
                window.email = data.UserAttributes[2].Value
                console.log(window.email)

            }).catch(function (error) {
                console.log(error)
            })
    })

    const handleSubmit = () => {
        history.push('/app/changepassverification')
    }

    return (
        <div className={classes.root} style={{width: '100%', height: '100%'}}>
            <List>
                <List style={{ marginTop: '30px'}}>
                <ListItem style={{justifyContent: 'center'}}><h1>Profile</h1></ListItem>
                <ListItem style={{marginTop: '-45px'}}><h2>Profile Name:</h2></ListItem> 
                <ListItemText style={{color: 'white', marginTop: "-25px", marginLeft: "20px"}} primary={window.username}></ListItemText>
                <ListItem style={{marginTop: '-35px'}}><h2>Profile Password:</h2></ListItem> 
                <ListItem style={{ justifyContent: 'center', marginTop: '-25px' }}>
                    <Button className={classes.button}
                        onClick={handleSubmit}
                        variant='text'>Change Password</Button>
                </ListItem>
                <ListItem style={{marginTop: '-25px'}}><h2>Profile E-mail Address:</h2></ListItem> 
                <ListItemText style={{color: 'white', marginTop: "-25px", marginLeft: "20px"}} primary={window.email}></ListItemText>
                </List>
            </List>
        </div>
    )
}

export default Profile