import React from 'react'
import { } from '@material-ui/core'
import GameTable from './GameTable'

export default function Games(props) {

    return (
        <div>
            <GameTable username={props.username} />
        </div>
    )
}
