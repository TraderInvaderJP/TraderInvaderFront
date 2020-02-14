import React from 'react'
import { ListItem, Button, makeStyles } from '@material-ui/core'
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
        borderRadius: 25,
        height: 50,
        width: 150
    }
})

export default function Games(props) {
    const classes = useStyles()

    return (
        <div>
            <GameTable username={props.username} />
                <ListItem style={{ justifyContent: 'center', marginTop: '15px' }}>
                    
                </ListItem>
        </div>
    )
}
