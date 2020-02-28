import React, { useState, useEffect } from 'react'
import { Grid, Paper, List, ListItem, ListItemText, Divider, TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Wallet from './Wallet'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { AttachMoney } from '@material-ui/icons'

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
    const [symbol, SetSymbol] = useState('')
    const [count, SetCount] = useState('')
    const [stocks, SetStocks] = useState([])
    const [prices, SetPrices] = useState([])
    const [sell, SetSell] = useState('')

    useEffect(() => {
        let keys = Object.keys(props.portfolio.stocks)
        let values = Object.values(props.portfolio.stocks)

        keys.forEach(keys => {
            let result = axios.get(`https://financialmodelingprep.com/api/v3/stock/real-time-price/${keys}`)
                .then(function (response) {
                    SetPrices(prices.push(response.data.price))
                }).catch(function (error) {
                    console.log(error)
                })
        })

        SetStocks(keys.map((item, index) => { return { symbol: item, count: values[index], price: prices } }))
    }, [props.portfolio, SetStocks, SetPrices])

    const handleSubmit = () => {
        axios.get(`https://financialmodelingprep.com/api/v3/stock/real-time-price/${symbol}`)
            .then(function (response) {
                SetSell(response.data.price)
            }).catch(function (error) {
                console.log(error)
            })

        axios.put(`/games/${encodeURI('Cheese Steak Sandwich')}/portfolios/${props.username}/sell`, {
            symbol: symbol,
            value: sell,
            count: count
        })
            .then(function (response) {
                console.log(response)
            }).catch(function (error) {
                console.log(error)
            })

        props.refreshPortfolio((-count), symbol, (sell * count))
    }

    return (
        <div style={{ width: '100%' }}>
            <Wallet wallet={props.portfolio.wallet} />
            <Grid container
                style={{ marginTop: '30px' }}
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
                        value={symbol.toUpperCase()}
                        onChange={e => SetSymbol(e.target.value.toUpperCase())}
                        autoComplete='off'
                    />
                </Grid>
                <Grid item>
                    <TextField
                        style={{ width: '100px' }}
                        InputProps={{ classes: { underline: classes.text } }}
                        name='amount'
                        label='Amount'
                        value={count}
                        onChange={e => SetCount(e.target.value)}
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
                                    <ListItemText style={{ width: '45%' }}>{stock.symbol}</ListItemText>
                                    <ListItemText style={{ width: '40%' }} >{stock.count}</ListItemText>
                                    <ListItemText ><AttachMoney style={{ margin: '-6px 6px' }} />{stock.price[id]}</ListItemText>
                                </ListItem>
                            </React.Fragment>))
                        }
                    </List>
                </Paper>
            </Grid>
        </div>
    )
}
