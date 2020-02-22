import React, { useState, useEffect } from 'react'
import { Paper, List, ListItem, ListItemText, IconButton, ListSubheader, Typography, Divider } from '@material-ui/core'
import { ArrowForward } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import axios from 'axios'

const useStyles = makeStyles({
    game: {
        backgroundColor: '#0A0708',
        color: '#43AA1F',
    },
    row: {
        backgroundColor: '#0A0708',
        color: '#43AA1F',
        "&:hover": {
            backgroundColor: '#272727',
            color: '#43AA1F',
        }
    },
    arrow: {
        "&:hover": {
            backgroundColor: '#F20000',
        }
    }
})

export default function Games(props) {
    const classes = useStyles()
    const [games, SetGames] = useState([])

    useEffect(() => {
        axios.get(`/games/${props.username}`, {
        })
            .then(res => {
                const { data } = res.data
                SetGames(data)
            })
            .catch(err => console.log(err))
    }, [props.username, SetGames])

    return (
        <div>
            <Paper>
                <List className={classes.game}>
                    <ListSubheader color='primary' align='center'>
                        <Typography variant='h5'>
                            Current Games
                        </Typography>
                    </ListSubheader>
                    {games.map((game, id) => (
                        <React.Fragment key={id}>
                            <Divider />
                            <ListItem className={classes.row}> 
                                <ListItemText>{game}</ListItemText>
                                <Link to='/app/game'>
                                    <IconButton className={classes.arrow} style={{ padding: 0, color: '#43AA1F' }}>
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
