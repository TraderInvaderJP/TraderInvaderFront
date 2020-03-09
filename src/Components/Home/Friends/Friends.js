import React, { useState } from 'react'
import {Paper, List, ListSubheader, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

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
    
    return (
        <div>
            <Paper className={classes.paper} style={{ margin: '10px 0 0 0', padding: '10px 0' }}>
                <List className={classes.game}>
                    <ListSubheader color='primary' align='center'>
                        <Typography variant='h5' style={{ color: 'black', padding: '0 0 10px 0' }}>
                            Friends List
                        </Typography>
                    </ListSubheader>
                    {/* {props.games.map((game, id) => (
                        <React.Fragment key={id}>
                            <Divider />
                            <ListItem className={classes.row}>
                                <ListItemText>{game}</ListItemText>
                                {<Link to='/app/game>}
                                    <IconButton className={classes.arrow} style={{ padding: 0, color: '#43AA1F' }} onClick={() => props.getGame(id)}>
                                        <ArrowForward />
                                    </IconButton>
                                {</Link>}
                            </ListItem>
                        </React.Fragment>))
                    } */}
                </List>
            </Paper>
        </div>
    )
}
