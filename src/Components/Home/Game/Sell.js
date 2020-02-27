import React, { useState, useEffect } from 'react'
import { Grid, Paper, List, ListItem, ListItemText, Divider, TextField, Button } from '@material-ui/core'
import { TrendingUp, TrendingDown } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    paper: {
        backgroundColor: '#0A0708'
    },
    game: {
        color: '#43AA1F',
    },
    row: {
        backgroundColor: '#0A0708',
        color: '#43AA1F',
        "&:hover": {
            backgroundColor: '#272727',
            color: '#43AA1F',
        }
    },
    arrow: {
        "&:hover": {
            backgroundColor: '#F20000',
        }
    },
    text: {
        outline: {
            borderWidth: '2px',

        },
        '&:before': {
            borderWidth: '2px',
            borderColor: 'black',
        },
        '&:after': {
            borderWidth: '2px',
            borderColor: '#53E121',
        }
    },
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
      },
})

export default function Sell(props) {
    const classes = useStyles()
    const [trending, SetTrending] = useState(false)
    const [symbol, SetSymbol] = useState('')
    const [stocks, SetStocks] = useState([])

    useEffect(() => {
        let keys = Object.keys(props.portfolio.stocks)
        let values = Object.values(props.portfolio.stocks)

        SetStocks(keys.map((item, index) => {return { symbol: item, count: values[index]}}))

    }, [props.portfolio, SetStocks])
    
    const handleSubmit = () => {
        console.log(props.portfolio.stocks)
      }

    return (
        <div style={{ width: '100%' }}>
            <Grid container
                style={{marginTop: '30px'}}
                direction='row'
                justify='center'
                alignItems='center'
                spacing={2}>
                <Grid item >
                    <TextField
                        InputProps={{ classes: { underline: classes.text } }}
                        name='stock'
                        label='Symbol'
                        type='text'
                        onChange={SetSymbol}
                        autoComplete='off' 
                        />
                </Grid>
                <Grid item>
                    <TextField
                        style={{width: '100px'}}
                        InputProps={{ classes: { underline: classes.text } }}
                        name='amount'
                        label='Amount'
                        type='number'
                        autoComplete='off' />
                </Grid>
                <Grid item>
                    <Button className={classes.button}
                    onClick={handleSubmit}
                        variant='text'>Sell</Button>
                </Grid>
                <Paper className={classes.paper} style={{ width: '100%', marginTop: '30px' }}>
                    <List className={classes.game}>
                        {stocks.map((stock, id) => (
                            <React.Fragment key={id}>
                                <Divider />
                                <ListItem className={classes.row} style={{ width: '100%' }} >
                                    <ListItemText style={{width: '45%'}}>{stock.symbol}</ListItemText>
                                    <ListItemText style={{width: '40%'}} >{stock.count}</ListItemText>
                                    <ListItemText >
                                        {!trending ? <TrendingDown style={{marginRight: '10px', color: 'red'}}/>
                                        : <TrendingUp style={{marginRight: '10px', color: '#00FF25'}}/>}
                                        $10.01</ListItemText>
                                </ListItem>
                            </React.Fragment>))
                        }
                    </List>
                </Paper>
            </Grid>
        </div>
    )
}
