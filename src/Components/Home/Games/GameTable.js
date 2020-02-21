import React, { useEffect, useState } from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableRow, TableHead, IconButton} from '@material-ui/core'
import { ArrowForward } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
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
    tablerow: {
        height: '55px', 
        border: '0 0 1px 0 solid white', 
        display: 'flex'
    }
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
    }, [props.username, SetGames])

    const columns = [
        { id: 'name', label: 'Current Games', minWidth: 780 },
    ]

    return (
        <Paper elevation={3}>
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
                                <TableRow className={classes.tablerow}
                                    hover role="checkbox"
                                    tabIndex={-1}
                                    key={id}>
                                        <TableCell style={{flex: 5}}>{game}</TableCell>
                                        <TableCell style={{flex: 1}}>
                                            <Link to='app/game'>
                                                <IconButton style={{padding: 0}}><ArrowForward /></IconButton>
                                            </Link>
                                        </TableCell>
                                </TableRow>)
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    )
}
export default GameTable





