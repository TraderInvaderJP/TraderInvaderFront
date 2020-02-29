import React, { useState, useEffect } from 'react'
import { List, ListItem, InputBase, Paper, 
    IconButton, ListItemText, makeStyles, 
    Divider, Typography, Container } from '@material-ui/core'
import { ArrowForward, Search } from '@material-ui/icons'
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
                {symbols.map(symbol => (
                    <React.Fragment>
                        <Divider />
                        <ListItem key={symbol.symbol} value={symbol.symbol} className={classes.dropdown} onClick={() => onSelectStock(symbol.symbol)}>
                            <ListItemText style={{flex: 1}}>{symbol.symbol}</ListItemText>
                            <ListItemText style={{flex: 3, overflow: 'hidden'}}>{symbol.name}</ListItemText>
                        </ListItem>
                    </React.Fragment>
                ))}
            </List>}
            { company && (
                <Paper style={{margin: '10px 0', padding: '10px 0'}}>
                    <Container>
                        <Typography variant='h4'>
                            {company.profile.companyName}
                        </Typography>
                        <Typography variant='subtitle1'>
                            {company.symbol}
                        </Typography>
                        <Typography variant='body1'>
                            {company.profile.description}
                        </Typography>
                    </Container>
                </Paper>
            )}
        </div>
    )
}
