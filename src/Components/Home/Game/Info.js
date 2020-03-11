import React, { useState, useEffect } from 'react'
import { Paper, Typography, Table, TableHead,
    TableRow, TableBody, TableCell, Container } from '@material-ui/core'
import axios from 'axios'

export default function Info(props) {
    const [portfolioValues, setPortfolioValues] = useState([])

    useEffect(() => {
        let userValues = []

        props.gameInfo.portfolios.forEach(async portfolio => {
            const { wallet, stocks, username } = portfolio
            let value = 0

            const stockKeys = Object.keys(stocks)
            const stockNames = stockKeys.join(',')

            if(stockKeys.length > 1) {
                const { data } = await axios.get(`https://financialmodelingprep.com/api/v3/stock/real-time-price/${stockNames}`)

                let list = {}
                data.companiesPriceList.forEach(item => list[item.symbol] = item)

                stockKeys.forEach(key => value += stocks[key] * list[key].price)

                userValues.push({
                    username: username.split('#')[1],
                    value: value + wallet
                })
            }
        })

        userValues = userValues.sort((left, right) => left.value > right.value ? -1 : 1)
        setPortfolioValues(userValues)
    }, [setPortfolioValues, props.gameInfo.portfolios])

    return (
        <div>
            <Paper style={{width: '100%'}}>
                <Container>
                    <Typography variant='h4'>
                        {props.gameInfo.game.identifier}
                    </Typography>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell><React.Fragment /></TableCell>
                                <TableCell>Username</TableCell>
                                <TableCell>Value</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {portfolioValues.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>{item.username}</TableCell>
                                    <TableCell>${item.value}</TableCell>
                                </TableRow>
                                )
                            )}
                        </TableBody>
                    </Table>
                </Container>
            </Paper>
        </div>
    )
}
