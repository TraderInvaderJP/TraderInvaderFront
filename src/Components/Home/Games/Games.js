import React, { useState, useEffect } from 'react'
import { Paper, List, ListItem, ListItemText, IconButton, ListSubheader, Typography, Divider } from '@material-ui/core'
import { ArrowForward } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import GameTable from './GameTable'
import axios from 'axios'

export default function Games(props) {
    const [games, SetGames] = useState([])
    
    useEffect(() => {
        axios.get(`/games/${props.username}`, {
        })
            .then(res => {
                const {data} = res.data
                SetGames(data)
            })
            .catch(err => console.log(err))       
    }, [props.username, SetGames])

    return (
        <div>
            <Paper>
                <List >
                    <ListSubheader color='primary'>
                        <Typography variant='h5'>
                            Current Games
                        </Typography>
                    </ListSubheader>
                    { games.map(game => (
                        <React.Fragment>
                            <Divider />
                            <ListItem>
                                <ListItemText>{game}</ListItemText>
                                <Link to='/app/game'>
                                    <IconButton style={{padding: 0}}>
                                        <ArrowForward />
                                    </IconButton>
                                </Link>
                            </ListItem>
                        </React.Fragment>)) 
                    }
                </List>
            </Paper>
        </div>
    )
}
