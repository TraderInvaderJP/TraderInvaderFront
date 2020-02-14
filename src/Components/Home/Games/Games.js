import React from 'react'
import { ListItem, Fab, makeStyles } from '@material-ui/core'
import GameTable from './GameTable'

const useStyles = makeStyles({
        button: {
        background: '#53E121',
        "&:hover": {
            background: '#43AA1F'
        },
        color: 'black',
        padding: '0 30px',
        fontSize: 17,
    }
})

export default function Games(props) {
    const classes = useStyles()

    return (
        <div>
            <GameTable username={props.username} />
                <ListItem style={{ justifyContent: 'center', marginTop: '15px' }}>
                    <Fab className={classes.button}
                        variant='extended'>Create Game</Fab>
                </ListItem>
        </div>
    )
}
