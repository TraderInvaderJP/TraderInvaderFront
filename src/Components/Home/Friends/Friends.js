import React, { useState, useEffect } from 'react'
import {Paper, List, ListSubheader, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Confirmed from './Confirmed'
import Requests from './Requests'

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

export default function Friends() {
    const classes = useStyles()    
    const friends = useState([])
    const requests = useState([])

    useEffect(() => {

    })
    
    return (
        <div>
            <Paper className={classes.paper} style={{ margin: '10px 0 0 0', padding: '10px 0' }}>
                <List className={classes.game}>
                    <ListSubheader color='primary' align='center'>
                        <Typography variant='h5' style={{ color: 'black', padding: '0 0 10px 0' }}>
                            Friends
                        </Typography>
                    </ListSubheader>
                    <Confirmed />
                </List>
                <List className={classes.game}>
                    <ListSubheader color='primary' align='center'>
                        <Typography variant='h5' style={{ color: 'black', padding: '0 0 10px 0' }}>
                            Friend Requests
                        </Typography>
                    </ListSubheader>
                    <Requests />
                </List>
            </Paper>
        </div>
    )
}
