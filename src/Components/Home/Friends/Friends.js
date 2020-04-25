import React, { useState, useEffect } from 'react'
import {Paper, List, ListSubheader, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Confirmed from './Confirmed'
import Requests from './Requests'
import axios from 'axios'

const useStyles = makeStyles({
    paper: {
        backgroundColor: 'white'
    },
    game: {
        color: 'black',
    },
    row: {
        backgroundColor: 'white',
        color: 'black',
        "&:hover": {
            backgroundColor: '#DEDEDE',
        }
    },
    arrow: {
        "&:hover": {
            backgroundColor: '#53E121',
        }
    }
})

export default function Friends(props) {
    const classes = useStyles()    
    const [friends, setFriends] = useState([])
    const [requests, setRequests] = useState([])

    useEffect(() => {
        (async () => {
            let confirmedData = await axios.get(`/users/${props.username}/confirmed`)

            setFriends(confirmedData.data.data)

            let requestData = await axios.get(`/users/${props.username}/requests`)

            setRequests(requestData.data.data)
        })()
    }, [props.username, setFriends, setRequests])
    
    return (
        <div>
            <Paper className={classes.paper} style={{ margin: '10px 0 0 0', padding: '10px 0' }}>
                <List className={classes.game}>
                    <ListSubheader color='primary'>
                        <Typography variant='h5' style={{ color: 'black', padding: '0 0 10px 0' }}>
                            Friends
                        </Typography>
                    </ListSubheader>
                    <Confirmed friends={friends}/>
                </List>
            </Paper>
            <Paper className={classes.paper} style={{ margin: '10px 0 0 0', padding: '10px 0' }}>
                <List className={classes.game}>
                    <ListSubheader color='primary'>
                        <Typography variant='h5' style={{ color: 'black', padding: '0 0 10px 0' }}>
                            Friend Requests
                        </Typography>
                    </ListSubheader>
                    <Requests requests={requests}/>
                </List>
            </Paper>
        </div>
    )
}
