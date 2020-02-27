import React, { useState } from 'react'
import { AppBar, Tabs, Tab, Container } from '@material-ui/core'
import Buy from './Buy'
import Sell from './Sell'
import Info from './Info'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
    },
    container: {
            width: '100%',
            marginTop: '130px',
            marginBotton: '10px',
    }
})

export default function Game(props) {
    const classes = useStyles()
    const [value, SetValue] = useState(0)

    return (
        <div style={{width: '100%'}}>
            <AppBar position='static' style={{marginTop: '120px', width: '100%', color: 'white'}}>
                <Tabs onChange={(e, newValue) => SetValue(newValue)} style={{display: 'flex', width: '100%'}} centered value={value}>
                    <Tab label='Buy' style={{flex: 1}}/>
                    <Tab label='Sell' style={{flex: 1}}/>
                    <Tab label='Info' style={{flex: 1}}/>
                </Tabs>
            </AppBar>
            <Container className={classes.root} style={{width: '100%', marginTop: '20px', marginBottom: '10px'}}>
                {value === 0 &&
                    <Buy portfolio={props.portfolio}/>
                }         
                {value === 1 &&
                    <Sell portfolio={props.portfolio} />
                }
                {value === 2 &&
                    <Info portfolio={props.portfolio} />
                }
            </Container>
        </div>
    )
}
