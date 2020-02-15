import React, { useEffect, useState } from 'react'
import {
    Paper, Table, TableBody, TableCell, TableContainer, TableRow, TableHead
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DAF96',
        height: '100vh',
        width: '100%'
    },
    table: {
        height: 330,
        background: '#43AA1F',
        color: '#0A0708',
        overflow: 'auto'


    },
    tableheader: {
        alignItems: 'center',
        background: 'black',
        color: '#53E121',
        fontSize: '16pt',
    },
    list: {
        background: '#9DAF96',
        height: '100vh',
        width: '25vh'
    },
})


function GameTable(props) {
    const classes = useStyles()
    
    useEffect(() => {
        axios.get(`/games/${props.username}`, {
        })
            .then(res => {
                console.log(res)
                const {data} = res.data
                rows.slice().map = data.slice().map
                console.log(rows)

            })
            .catch(err => console.log(err))
            
            
    }
    )

    function createGameRow(name) {

        return { name };
    }

    const columns = [
        { id: 'name', label: 'Current Games', minWidth: 780 },
    ]

    const rows = [
        
    ]

    return (
        <Paper style={{ marginTop: '100px' }}>
            <TableContainer >
                <Table>
                    <TableHead>
                        <TableRow >
                            {columns.map(column => (
                                <TableCell
                                    className={classes.tableheader}
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth, textAlign: 'center' }}>
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>
            <TableContainer className={classes.table}>
                <Table>
                    <TableBody>
                        {rows.slice().map(row => {
                            return (
                                <TableRow style={{ height: '55px' }}
                                    hover role="checkbox"
                                    tabIndex={-1}
                                    key={row.code}>
                                    {columns.map(column => {
                                        const value = row[column.id]
                                        return (
                                            <TableCell key={column.id} align={column.align} >
                                                {column.format && typeof value === 'number' ? column.format(value) : value}
                                            </TableCell>
                                        )
                                    })} </TableRow>)
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
        
    )
}
export default GameTable





