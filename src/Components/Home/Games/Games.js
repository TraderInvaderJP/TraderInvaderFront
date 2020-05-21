import React from 'react'
import { Paper, List, ListItem, ListItemText,
    IconButton, ListSubheader, Typography, Divider, 
    ListItemSecondaryAction, Button } from '@material-ui/core'
import { ArrowForward } from '@material-ui/icons'
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

export default function Games(props) {
    const classes = useStyles()

    return (
        <div>
            <Paper className={classes.paper} style={{ margin: '10px 0 0 0', padding: '10px 0' }}>
                <List className={classes.game}>
                    <ListSubheader color='primary' align='center'>
                        <Typography variant='h5' style={{ color: 'black', padding: '0 0 10px 0' }}>
                            Current Games
                        </Typography>
                    </ListSubheader>
                    {props.games.map((game, id) => (
                        <React.Fragment key={id}>
                            <Divider />
                            <ListItem className={classes.row}>
                                <ListItemText>{game}</ListItemText>
                                    <IconButton className={classes.arrow} style={{ padding: 0, color: '#43AA1F' }} onClick={() => props.getGame(game)}>
                                        <ArrowForward />
                                    </IconButton>
                            </ListItem>
                        </React.Fragment>))
                    }
                </List>
            </Paper>
            <Paper
                className={classes.paper}
                style={{ margin: '10px 0 0 0', padding: '10px 0' }}
            >
                <List className={classes.game}>
                    <ListSubheader color="primary" align='center'>
                        <Typography
                        variant="h5"
                        style={{ color: 'black', padding: '0 0 10px 0' }}
                        >
                        Game Invites
                        </Typography>
                    </ListSubheader>
                    {
                        (props.invites.length > 0 ? 
                        props.invites.map((invite, index) => (
                            <ListItem key={index}>
                                <ListItemText>{invite}</ListItemText>
                                <ListItemSecondaryAction>
                                    <Button color='primary' onClick={() => props.joinGame(invite)}>Join</Button>
                                </ListItemSecondaryAction>
                            </ListItem>
                        )) : 
                        <ListItem style={{textAlign:'center'}}>
                            <ListItemText>No Invites</ListItemText>
                        </ListItem>)
                    }
                </List>
            </Paper>
        </div>
    )
}
