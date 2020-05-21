import React, { useState, useEffect } from 'react'
import { List, ListItem, Paper, 
    IconButton, ListItemText, makeStyles, 
    Divider, Typography, Container, Table,
    TableHead, TableBody, TableRow, TableCell,
    Dialog, DialogTitle, DialogContent, DialogActions,
    Button, TextField } from '@material-ui/core'
import { Remove } from '@material-ui/icons'
import Wallet from './Wallet'
import axios from 'axios'

const useStyles = makeStyles({
    dropdown: {
        '&:hover': {
            backgroundColor: '#eeeeee'
        },
        display: 'flex',
        padding: '10px'
    },
    arrow: {
        "&:hover": {
            color: '#53E121',
        }
    },
    cell: {
        "&:hover": {
            backgroundColor: '#DEDEDE',
        }
    }
})
export default function Sell(props) {
    const classes = useStyles()
    const [symbols, setSymbols] = useState([])
    const [editing, setEditing] = useState(false)
    const [company, setCompany] = useState(null)
    const [portfolio, setPortfolio] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [symbol, setSymbol] = useState({})
    const [count, setCount] = useState(0)

    useEffect(() => {
        const makePortfolio = async() => {
            if(props.portfolio.stocks) {
                let temp = Object.entries(props.portfolio.stocks)
                let symbols = Object.keys(props.portfolio.stocks).join(',')

                temp.sort((left, right) => (left[0] < right[0] ? -1 : 1))
                if(symbols !== "") {
                    const { data } = await axios.get(`https://financialmodelingprep.com/api/v3/stock/real-time-price/${symbols}?apikey=${process.env.REACT_APP_API_KEY}`)
                    
                    if (data.companiesPriceList !== undefined) {
                        
                        let values = data.companiesPriceList.map(item => item.price)
                        temp = temp.map((item, index) => {
                            return {
                                symbol: item[0],
                                count: item[1].count,
                                value: values[index]
                            }
                        })
                    }
                    else {
                        temp = [{
                            symbol: temp[0][0],
                            count: temp[0][1].count,
                            value: data.price
                        }]
                    }
                    
                    temp = temp.filter(item => item.count !== 0)
                    setPortfolio(temp)
                    console.log(portfolio)
                    console.log(temp)
                }
            }
        }
        makePortfolio()
    }, [props.portfolio, setPortfolio])

    const onSelectStock = async (symbol) => {
        setEditing(false)

        let { data } = await axios.get(`https://financialmodelingprep.com/api/v3/company/profile/${symbol}?apikey=${process.env.REACT_APP_API_KEY}`)

        setCompany(data)
    }

    const getStock = (index) => {
        setSymbol(portfolio[index])
        setIsOpen(true)
        setCount(0)
    }

    const sellStock = async () => {
        if(calcBalance(parseFloat(count), symbol.value)) {
            await axios.put(`/games/${props.name}/portfolios/${props.username}/sell`, {
                symbol: symbol.symbol,
                count: parseFloat(count),
                value: symbol.value
            })
        }

        setIsOpen(false)
    }

    const handleClose = (open) => setIsOpen(open)
    const editCount = (e) => setCount(e.target.value)
    const calcBalance = (count, value) => {
        console.log({
            portfolio: props.portfolio,
            count,
            value
        })
        let temp = props.portfolio.wallet + (parseFloat(count) * value)
        console.log(temp)
        return temp
    }

    return (
        <div style={{width: '100%'}}>
            <Wallet wallet={props.portfolio.wallet} />           
            { editing && <List style={{padding: 0, backgroundColor: 'white', width: '100%'}}>
                {symbols.map((symbol, index) => (
                    <React.Fragment key={index}>
                        <Divider />
                        <ListItem key={symbol.symbol} value={symbol.symbol} className={classes.dropdown} onClick={() => onSelectStock(symbol.symbol)}>
                            <ListItemText style={{flex: 1}}>{symbol.symbol}</ListItemText>
                            <ListItemText style={{flex: 3, overflow: 'hidden'}}>{symbol.name}</ListItemText>
                        </ListItem>
                    </React.Fragment>
                ))}
            </List>}
            { company && (
                <Paper style={{margin: '10px 0 0 0', padding: '10px 0'}}>
                    <Container>
                        <Typography variant='h4'>
                            {company.profile && company.profile.companyName}
                        </Typography>
                        <Typography variant='subtitle1'>
                            {company.symbol}
                        </Typography>
                        <Typography variant='subtitle2'>
                            Price: ${company.profile && company.profile.price} {company.profile && company.profile.changesPercentage}
                        </Typography>
                        <Typography variant='subtitle2'>
                            Market Cap: ${company.profile && parseFloat(company.profile.mktCap).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 
                        </Typography>
                        <Typography variant='body1'>
                            {company.profile && company.profile.description}
                        </Typography>
                    </Container>
                </Paper>
            )}
            <Paper style={{backgroundColor: 'white', margin: '10px 0 0 0'}}>
                 <Table>
                     <TableHead>
                         <TableRow>
                            <TableCell>Symbol</TableCell>
                            <TableCell>Current # of Shares</TableCell>
                            <TableCell>Current Price</TableCell>
                            <TableCell><React.Fragment /></TableCell>
                         </TableRow>
                     </TableHead>
                     <TableBody>
                         {portfolio.map((stock, id) => {
                             return (
                                <TableRow key={id} className={classes.cell}>
                                    <TableCell>{stock.symbol}</TableCell>
                                    <TableCell>{stock.count}</TableCell>
                                    <TableCell>${stock.value}</TableCell>
                                    <TableCell><IconButton style={{padding: 0}} onClick={() => getStock(id)}><Remove style={{color: 'red'}} /></IconButton></TableCell>
                                </TableRow>)
                         })}
                     </TableBody>
                 </Table>
            </Paper>
            <Dialog open={isOpen} onClose={() => handleClose(false)}>
                <DialogTitle>Sell Stocks</DialogTitle>
                <DialogContent>
                    <Typography variant='h4'>{symbol.symbol}</Typography>
                    <TextField type='number' label='# of Shares' onChange={editCount} />
                    <Typography color='primary' style={{textAlign: 'right', margin: '10px 0'}}>Balance: ${props.portfolio.wallet && (props.portfolio.wallet).toFixed(2)}</Typography>
                    <div style={{display: 'flex'}}>
                        <Typography style={{flex: 1, textAlign: 'left', margin: '10px 0'}}>+</Typography>
                        <Typography color='primary' style={{flex: 3, textAlign: 'right', margin: '10px 0'}}>Profit: ${(count * symbol.value).toFixed(2)}</Typography>
                    </div>
                    <Divider />
                    {calcBalance(count, symbol.value) < 0 && 
                        <Typography color='error' style={{textAlign: 'right', margin: '10px 0'}}>Total: (${Math.abs(calcBalance(count, symbol.value)).toFixed(2)})</Typography>}
                    {calcBalance(count, symbol.value) >= 0 && 
                        <Typography color='primary' style={{textAlign: 'right', margin: '10px 0'}}>Total: ${calcBalance(count, symbol.value).toFixed(2)}</Typography>}
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => handleClose(false)}>Cancel</Button>
                    <Button color="primary" onClick={sellStock}>Sell</Button> 
                </DialogActions>
            </Dialog>
        </div>
    )
}
