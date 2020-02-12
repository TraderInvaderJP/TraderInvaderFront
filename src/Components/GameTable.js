import React, { useEffect } from 'react'
import {
    List, Paper, Table, TableBody, TableCell, TableContainer, TablePagination, TableRow, TableHead
} from '@material-ui/core'
import '../App.css'
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
        height: '200',
        background: '#43AA1F',
        color: '#0A0708',

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
    const [page, setPage] = React.useState(0)



    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }
    useEffect(() => {
        axios.get(`/games/${props.username}`, {
        })
            .then(res => {
                console.log(res)


            })
            .catch(err => console.log(err))
    }
    )

    function createData(name) {

        return { name };
    }

    const columns = [
        { id: 'name', label: 'Current Games', minWidth: 780 },
    ]

    const rows = [

    ]

    return (
            <Paper className={classes.table} style={{ marginTop: '50px' }}>
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
                        <TableBody>
                            {rows.slice(page * 5, page * 5 + 5).map(row => {
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
                <TablePagination
                    rowsPerPageOptions={[5]} //lol
                    component="div"
                    count={rows.length}
                    rowsPerPage={5}
                    page={page}
                    onChangePage={handleChangePage} />
            </Paper>
    )
}
export default GameTable





