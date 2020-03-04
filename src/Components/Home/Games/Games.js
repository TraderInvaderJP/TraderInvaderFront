import React, { useState, useEffect } from 'react'
import { Paper, List, ListItem, ListItemText, IconButton, ListSubheader, Typography, Divider } from '@material-ui/core'
import { ArrowForward } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    paper: {
        backgroundColor: '#0A0708'
    },
    game: {
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

    return (
        <div>
            <Paper className={classes.paper}>
                <List className={classes.game}>
                    <ListSubheader color='primary' align='center'>
                        <Typography variant='h5'>
                            Current Games
                        </Typography>
                    </ListSubheader>
                    {props.games.map((game, id) => (
                        <React.Fragment key={id}>
                            <Divider />
                            <ListItem className={classes.row}> 
                                <ListItemText>{game}</ListItemText>
                                {/*<Link to='/app/game>*/}
                                    <IconButton className={classes.arrow} style={{ padding: 0, color: '#43AA1F' }} onClick={() => props.getGame(id)}>
                                        <ArrowForward />
                                    </IconButton>
                                {/*</Link>*/}
                            </ListItem>
                        </React.Fragment>))
                    }
                </List>
            </Paper>
        </div>
    )
}
