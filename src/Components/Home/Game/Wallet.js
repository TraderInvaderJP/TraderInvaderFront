import React from 'react'
import { AppBar, Paper } from '@material-ui/core'
import { AttachMoney } from '@material-ui/icons'

export default function Wallet(props) {
    return (
        <div >
            <Paper style={{display: 'flex', backgroundColor: '#0A0708', color: '#43AA1F'}}>
            <p style={{marginLeft: '10px', flex: 10}}><b>BALANCE: </b></p>
            <AttachMoney style={{margin: '16px 0'}}/>
            <p style={{margin: '16px 10px', flex: 1}}>{Number(props.wallet).toFixed(2)}</p>
            </Paper>
        </div>
    )
}
