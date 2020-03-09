import React from 'react'
import { Paper, Typography, Table, TableHead,
    TableRow, TableBody, TableCell, Container } from '@material-ui/core'

export default function Info(props) {
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
                            {props.gameInfo.portfolios.sort((left, right) => left.wallet > right.wallet ? -1 : 1).map((item, index) => (
                                <TableRow>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>{item.username.split('#')[1]}</TableCell>
                                    <TableCell>${(item.wallet).toFixed(2)}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Container>
            </Paper>
        </div>
    )
}
