import React from 'react'
import { Grid, Paper, List, ListItem, ListItemText, IconButton, ListSubheader, Typography, Divider, TextField, Button } from '@material-ui/core'
import { TrendingUp, TrendingDown, ArrowUpward } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    game: {
        backgroundColor: '#0A0708',
        color: '#43AA1F',
    },
    row: {
        backgroundColor: '#0A0708',
        color: '#43AA1F',
        "&:hover": {
            backgroundColor: '#272727',
            color: '#43AA1F',
        }
    },
    arrow: {
        "&:hover": {
            backgroundColor: '#F20000',
        }
    },
    text: {
        outline: {
            borderWidth: '2px',

        },
        '&:before': {
            borderWidth: '2px',
            borderColor: 'black',
        },
        '&:after': {
            borderWidth: '2px',
            borderColor: '#53E121',
        }
    },
    button: {
        background: '#53E121',
        "&:hover": {
          background: '#43AA1F'
        },
        color: 'black',
        padding: '0 30px',
        fontSize: 17,
        borderRadius: 25,
        height: 50,
        width: 150
      },
})

const stocks = ['goop', 'goog', 'rwar']

export default function Sell() {
    const classes = useStyles()

    return (
        <div style={{ width: '100%' }}>
            <Grid container
                style={{marginTop: '30px'}}
                direction='row'
                justify='center'
                alignItems='center'
                spacing={2}>
                <Grid item >
                    <TextField
                        InputProps={{ classes: { underline: classes.text } }}
                        name='stock'
                        label='Symbol'
                        type='text'
                        autoComplete='off' 
                        />
                </Grid>
                <Grid item>
                    <TextField
                        style={{width: '100px'}}
                        InputProps={{ classes: { underline: classes.text } }}
                        name='amount'
                        label='Amount'
                        type='number'
                        autoComplete='off' />
                </Grid>
                <Grid item>
                    <Button className={classes.button}
                        variant='text'>Sell</Button>
                </Grid>
                <Paper style={{ width: '100%', marginTop: '30px' }}>
                    <List className={classes.game}>
                      
                        {stocks.map((stock, id) => (
                            <React.Fragment key={id}>
                                <Divider />
                                <ListItem className={classes.row} style={{ width: '100%' }} >
                                    <ListItemText style={{width: '25%'}}>Symbol: {stock}</ListItemText>
                                    <ListItemText style={{width: '25%'}}>Count: {stock}</ListItemText>
                                    <ListItemText style={{width: '25%'}}>Current: $10.01</ListItemText>
                                    <ListItemText style={{width: '25%'}}>Purchase: $9.45</ListItemText>
                                    <IconButton className={classes.arrow} style={{ padding: 0, color: '#43AA1F' }}>
                                        <ArrowUpward />
                                    </IconButton>
                                </ListItem>
                            </React.Fragment>))
                        }
                    </List>
                </Paper>
            </Grid>
        </div>
    )
}
