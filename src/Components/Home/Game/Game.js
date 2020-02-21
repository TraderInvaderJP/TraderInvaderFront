import React, { useState } from 'react'
import { AppBar, Tabs, Tab, Container } from '@material-ui/core'

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
                    <h1>Item One</h1>
                }         
                {value === 1 &&
                    <h1>Item Two</h1>
                }
                {value === 2 &&
                    <h1>Item Three</h1>
                }
            </Container>
        </div>
    )
}
