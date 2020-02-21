import React, { useState } from 'react'
import { AppBar, Tabs, Tab, Container } from '@material-ui/core'
import Buy from './Buy'
import Sell from './Sell'
import Info from './Info'

export default function Game() {
    const [value, SetValue] = useState(0)

    return (
        <div style={{width: '100%'}}>
            <AppBar position='static' style={{marginTop: '120px', width: '100%', color: 'white'}}>
                <Tabs onChange={(e, newValue) => SetValue(newValue)} style={{display: 'flex', width: '100%'}} value={value}>
                    <Tab label='Buy' style={{flex: 1}}/>
                    <Tab label='Sell' style={{flex: 1}}/>
                    <Tab label='Info' style={{flex: 1}}/>
                </Tabs>
            </AppBar>
            <Container>
                {value === 0 &&
                    <Buy />
                }         
                {value === 1 &&
                    <Sell />
                }
                {value === 2 &&
                    <Info />
                }
            </Container>
        </div>
    )
}
