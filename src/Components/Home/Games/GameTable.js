import React, { useEffect, useState } from 'react'
import {
    Paper, Table, TableBody, TableCell, TableContainer, TableRow, TableHead, IconButton, Container
} from '@material-ui/core'
import { ArrowForward } from '@material-ui/icons'
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
        background: '#43AA1F',
        color: '#0A0708'
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
    const [games, SetGames] = useState([])
    
    useEffect(() => {
        axios.get(`/games/${props.username}`, {
        })
            .then(res => {
                const {data} = res.data
                SetGames(data)
            })
            .catch(err => console.log(err))       
    })

    function createGameRow(name) {

        return { name };
    }

    const columns = [
        { id: 'name', label: 'Current Games', minWidth: 780 },
    ]

    return (
        <Paper style={{ marginTop: '100px' }}>
            <TableContainer >
                <Table style={{width: '100%'}}>
                    <TableHead>
                        <TableRow >
                            {columns.map(column => (
                                <TableCell
                                    className={classes.tableheader}
                                    key={column.id}
                                    align={column.align}
                                    style={{textAlign: 'center' }}>
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
                        {games.map((game, id) => {
                            return (
                                <TableRow style={{ height: '55px', border: '0 0 1px 0 solid white' }}
                                    hover role="checkbox"
                                    tabIndex={-1}
                                    key={id}>
                                        <TableCell>{game}</TableCell>
                                        <IconButton><ArrowForward /></IconButton>
                                </TableRow>)
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    )
}
export default GameTable





