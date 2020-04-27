import React from 'react'
import {
    Paper, makeStyles, Table, ListSubheader, Typography,
    TableHead, TableBody, TableRow, TableCell, Divider,
    List, ListItem, ListItemText
} from '@material-ui/core'

const useStyles = makeStyles({
    cell: {
        "&:hover": {
            backgroundColor: '#DEDEDE',
        }
    }
})

export default function Statistics(props) {
    const classes = useStyles()

    console.log(props.achievements)

    return (
        <div>
            <Paper style={{ backgroundColor: 'white', width: '100%', marginTop: '10px'}}>
                <Table >
                    <TableHead >
                        <TableRow className={classes.cell} >
                            <TableCell style={{textAlign: 'center', width: '100%', marginLeft: '45px'}} >
                                <Typography variant='h5' style={{ color: 'black', marginLeft: '45px'}}>Statistics</Typography>
                            </TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow className={classes.cell}>
                            <TableCell>Games Won </TableCell>
                            <TableCell style={{ textAlign: 'right'}}>{props.stats.numberOfWins}</TableCell>
                        </TableRow>
                        <TableRow className={classes.cell}>
                            <TableCell>Games Lost</TableCell>
                            <TableCell style={{ textAlign: 'right'}}>{props.stats.numberOfLosses}</TableCell>
                        </TableRow>
                        <TableRow className={classes.cell}>
                            <TableCell>Win Streak </TableCell>
                            <TableCell style={{ textAlign: 'right'}}>{props.stats.currentWinStreak}</TableCell>
                        </TableRow>
                        <TableRow className={classes.cell}>
                            <TableCell>Loss Streak</TableCell>
                            <TableCell style={{ textAlign: 'right'}}>{props.stats.currentLossStreak}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>

            <Paper style={{ margin: '10px 0 0 0', padding: '10px 0' }}>
                <List>
                    <ListSubheader color='primary' align='center'>
                        <Typography variant='h5' style={{ color: 'black', padding: '0 0 10px 0' }}>
                            Achievements
                        </Typography>
                    </ListSubheader>
                    {props.achievements.map((achievement, id) => (
                        <React.Fragment key={id}>
                            <Divider />
                            <ListItem className={classes.row}>
                                <ListItemText>{achievement}</ListItemText>
                            </ListItem>
                        </React.Fragment>))
                    }
                </List>
            </Paper>
        </div>
    )
}
