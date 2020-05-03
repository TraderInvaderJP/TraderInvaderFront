import React, { useState, useEffect } from 'react'
import { Paper, Typography, Table, TableHead,
    TableRow, TableBody, TableCell, Container } from '@material-ui/core'
import axios from 'axios'

export default function Info(props) {
    const [portfolioValues, setPortfolioValues] = useState([])

    useEffect(() => {
        if(props.gameInfo.game.winCondition)
            setPortfolioValues(props.gameInfo.scoreboard.sort((left, right) => 
                (left.total > right.total)? -1 : (left.portfolio > right.portfolio)? -1 : 1))
        else
            setPortfolioValues(props.gameInfo.scoreboard.sort((left, right) => 
                (left.total < right.total)? -1 : 1))
    }, [setPortfolioValues, props.gameInfo.scoreboard])

    return (
        <div>
            <Paper style={{width: '100%'}}>
                <Container style={{paddingTop: '10px', paddingBottom: '10px'}}>
                    <Typography variant='h4'>
                        Name: {props.gameInfo.game.identifier}
                    </Typography>
                    <Typography variant='h6'>
                        Starting Value: ${props.gameInfo.game.wallet}
                    </Typography>
                    <Typography variant='h6'>
                        Game Mode: {props.gameInfo.game.winCondition ? 'Most Gained' : 'Most Lost'}
                    </Typography>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell><React.Fragment /></TableCell>
                                <TableCell>Username</TableCell>
                                <TableCell>Total</TableCell>
                                <TableCell>Wallet</TableCell>
                                <TableCell>Portfolio</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {portfolioValues.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>{item.username}</TableCell>
                                    <TableCell>${(item.total).toFixed(2)}</TableCell>
                                    <TableCell>${(item.wallet).toFixed(2)}</TableCell>
                                    <TableCell>${(item.portfolio).toFixed(2)}</TableCell>
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
