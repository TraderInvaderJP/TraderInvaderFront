import React from 'react'
import Wallet from './Wallet'

export default function Buy(props) {
    return (
        <div style={{width: '100%'}}>
            <Wallet wallet={props.portfolio.wallet} />
            <h1>Buy component</h1> 
        </div>
    )
}
