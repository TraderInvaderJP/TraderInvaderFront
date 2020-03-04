import React from 'react'
import { Paper } from '@material-ui/core'
import { AttachMoney } from '@material-ui/icons'

export default function Wallet(props) {
    return (
        <Paper style={{display: 'flex', backgroundColor: 'white'}} elevation={2}>
            <p style={{marginLeft: '10px', flex: 10}}><b>BALANCE: </b></p>
            <AttachMoney style={{margin: '16px 0'}}/>
            <p style={{margin: '16px 10px', flex: 1, color: 'black'}}>{Number(props.wallet).toFixed(2)}</p>
        </Paper>
    )
}
