import React, { useState, useEffect } from 'react'
import { List, ListItem, InputBase, Paper, 
    IconButton, ListItemText, makeStyles, 
    Divider, Typography, Container, Table,
    TableHead, TableBody, TableRow, TableCell } from '@material-ui/core'
import { Search, AddCircle } from '@material-ui/icons'
import Wallet from './Wallet'
import axios from 'axios'

const useStyles = makeStyles({
    dropdown: {
        '&:hover': {
            backgroundColor: '#eeeeee'
        },
        display: 'flex',
        padding: '10px'
    }
})
export default function Buy(props) {
    const classes = useStyles()
    const [symbols, setSymbols] = useState([])
    const [editing, setEditing] = useState(false)
    const [search, setSearch] = useState('')
    const [company, setCompany] = useState(null)
    const [portfolio, setPortfolio] = useState([])

    useEffect(() => {
        const makePortfolio = async() => {
            if(props.portfolio.stocks) {
                let temp = Object.entries(props.portfolio.stocks)
                let symbols = Object.keys(props.portfolio.stocks).join(',')

                temp.sort((left, right) => (left[0] < right[0] ? -1 : 1))
                if(symbols !== "") {
                    const { data } = await axios.get(`https://financialmodelingprep.com/api/v3/stock/real-time-price/${symbols}`)
                    
                    if (data.companiesPriceList != undefined) {
                        
                        let values = data.companiesPriceList.map(item => item.price)
                        temp = temp.map((item, index) => {
                            return {
                                symbol: item[0],
                                count: item[1],
                                value: values[index]
                            }
                        })
                    }
                    else {
                        temp = [{
                            symbol: temp[0][0],
                            count: temp[0][1],
                            value: data.price
                        }]
                    }
                    
                    temp = temp.filter(item => item.count != 0)
                    setPortfolio(temp)
                }
            }
        }
        makePortfolio()
    }, [props.portfolio, setPortfolio])

    const onEditSearch = async (e) => {
        await setSearch(e.target.value)

        const { data } = await axios.get(`https://financialmodelingprep.com/api/v3/search?query=${search}&limit=5`)

        setSymbols(data.map(item => { return { symbol: item.symbol, name: item.name }}))
    }

    const onSelectStock = async (symbol) => {
        setEditing(false)

        let { data } = await axios.get(`https://financialmodelingprep.com/api/v3/company/profile/${symbol}`)

        setCompany(data)
    }

    return (
        <div style={{width: '100%'}}>
            <Wallet wallet={props.portfolio.wallet} />
            <Paper style={{display: 'flex', margin: '10px 0 0 0'}}>
                <InputBase style={{margin: '10px', flex: 10}} placeholder='Stock Symbol' onClick={() => setEditing(true)} onChange={onEditSearch}/>
                <IconButton style={{ padding: 0, color: '#43AA1F', flex: 1, margin: '10px'}}>
                    <Search />
                </IconButton>
            </Paper>
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
                         <TableCell>Symbol</TableCell>
                         <TableCell>Current # of Shares</TableCell>
                         <TableCell>Current Price</TableCell>
                         <TableCell><React.Fragment /></TableCell>
                     </TableHead>
                     <TableBody>
                         {portfolio.map((stock, id) => {
                             return (
                                <TableRow key={id}>
                                    <TableCell>{stock.symbol}</TableCell>
                                    <TableCell>{stock.count}</TableCell>
                                    <TableCell>${stock.value}</TableCell>
                                    <TableCell><IconButton><AddCircle /></IconButton></TableCell>
                                </TableRow>)
                         })}
                     </TableBody>
                 </Table>
            </Paper>
        </div>
    )
}
