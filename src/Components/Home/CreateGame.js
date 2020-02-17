import React, { } from 'react';
import { TextField, Button, Select, MenuItem, InputLabel, FormControl, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DAF96',
        height: '100vh',
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
    dropmenu: {
        underline: {
            borderWidth: '3px',
        },
        '&:before': {
            borderWidth: '3px',
            borderColor: 'black',
        },
        '&:after': {
            borderWidth: '3px',
            borderColor: '#53E121',
            background: 'transparent'

        }
    },
    text: {
        underline: {
            borderWidth: '3px',
            background: '#9DAF96'
        },
        '&:before': {
            borderWidth: '3px',
            borderColor: 'black',
        },
        '&:after': {
            borderWidth: '3px',
            borderColor: '#53E121',
        }
    },
    toolbar: {
        background: '#0A0708',
        flexFlow: 1,
        height: '150px',
    },
    logo: {
        margin: 'auto',
        textAlign: 'center',
        width: '100px',
        height: '120px',
    },
    logoHorizontallyCenter: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
    },
})

export default function CreateGame() {
    const classes = useStyles();

    return (
        <div>
            <Grid container style={{ justifyContent: 'center', marginTop: '25px' }} direction='column' justify='center' alignItems='center' spacing={2}>
                <Grid item style={{ marginTop: '50px' }}>
                    <TextField 
                        InputProps={{ classes: { underline: classes.text } }}
                        name='username'
                        placeholder='Game Name '
                        type='text'
                        autoComplete='off' />
                </Grid>
                <Grid item style={{justifyContent: 'center', marginTop: '10px' }}>
                    <TextField 
                        InputProps={{ classes: { underline: classes.text } }}
                        name='username'
                        placeholder='Start Date '
                        type='text'
                        autoComplete='off' />
                </Grid>
                <Grid item style={{ justifyContent: 'center', marginTop: '10px' }}>
                    <TextField
                        InputProps={{ classes: { underline: classes.text } }}
                        name='username'
                        placeholder='End Date '
                        type='text'
                        autoComplete='off' />
                </Grid>
                <Grid item style={{ justifyContent: 'center' }}>
                    <FormControl style={{ background: '#9DAF96' }}>
                        <InputLabel id="win condition" style={{ color: 'black', opacity: '40%' }} >Win Condition</InputLabel>
                        <Select style={{ width: '195px' }}
                            className={classes.dropmenu}
                            name='wincondition'
                            type='text'
                            autoComplete='off' >
                            <MenuItem value={10} >Profit Ratio</MenuItem>
                            <MenuItem value={20} >Total Profit</MenuItem>
                            <MenuItem value={30} >Biggest Looser</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item style={{ justifyContent: 'center' }}>
                    <FormControl style={{ background: '#9DAF96'}}>
                        <InputLabel id="win condition" style={{ color: 'black', opacity: '40%' }} >Starting Wallet</InputLabel>
                        <Select style={{ width: '195px' }}
                            className={classes.dropmenu}
                            name='wallet'
                            type='text'
                            autoComplete='off' >
                            <MenuItem value={1000} >$1000</MenuItem>
                            <MenuItem value={10000} >$10000</MenuItem>
                            <MenuItem value={50000} >$50000</MenuItem>
                            <MenuItem value={100000} >$100000</MenuItem>
                            <MenuItem value={500000} >$500000</MenuItem>
                            <MenuItem value={1000000} >$1000000</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item style={{  marginTop: '25px', justifyContent: 'center' }}>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <Button className={classes.button}
                            variant='text'>Submit</Button>
                    </Link>
                </Grid>

            </Grid>
        </div>
    )
}
