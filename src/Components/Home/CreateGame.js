import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, InputLabel, FormControl, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'

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
})

export default function CreateGame(props) {
    const classes = useStyles()
    const [gameid, SetGameID] = useState('')
    const [startDate, SetStartDate] = useState('')
    const [endDate, SetEndDate] = useState('')
    const [winCondition, SetWinCondition] = useState('')
    const [wallet, SetWallet] = useState('')

    const handleSubmit = () => {
        const gameJSON = [
            "startTime:", startDate,
            "endTime:", endDate,
            "winCondition:", winCondition,
            "wallet:", wallet,
            "username:", props.username]

        console.log(JSON.stringify(gameJSON))

        axios.post(`/games/${gameid}`, {
            GameID: gameid,
            game_data: gameJSON,
        })
            .then(function (response) {
                console.log(response)
            }).catch(function (error) {
                console.log(error)

            })
    }

    return (
        <div>
            <Grid container style={{ justifyContent: 'center', marginTop: '25px' }} direction='column' justify='center' alignItems='center' spacing={2}>
                <Grid item style={{ marginTop: '50px' }}>
                    <TextField
                        InputProps={{ classes: { underline: classes.text } }}
                        onChange={e => SetGameID(e.target.value)}
                        name='gamename'
                        placeholder='Game Name '
                        type='text'
                        autoComplete='off' />
                </Grid>
                <Grid item style={{ justifyContent: 'center', marginTop: '10px' }}>
                    <TextField
                        InputProps={{ classes: { underline: classes.text } }}
                        onChange={e => SetStartDate(e.target.value)}
                        name='startdate'
                        placeholder='Start Date '
                        type='text'
                        autoComplete='off' />
                </Grid>
                <Grid item style={{ justifyContent: 'center', marginTop: '10px' }}>
                    <TextField
                        InputProps={{ classes: { underline: classes.text } }}
                        onChange={e => SetEndDate(e.target.value)}
                        name='enddate'
                        placeholder='End Date '
                        type='text'
                        autoComplete='off' />
                </Grid>
                <Grid item style={{ justifyContent: 'center' }}>
                    <FormControl style={{ background: '#9DAF96' }}>
                        <InputLabel id="win condition" style={{ color: 'black', opacity: '40%' }} >Win Condition</InputLabel>
                        <Select style={{ width: '195px' }}
                            onChange={e => SetWinCondition(e.target.value)}
                            className={classes.dropmenu}
                            name='wincondition'
                            value={winCondition}
                            type='text'
                            autoComplete='off' >
                            <MenuItem value={'Profit Ratio'}>Profit Ratio</MenuItem>
                            <MenuItem value={'Total Profit'}>Total Profit</MenuItem>
                            <MenuItem value={'Biggest Looser'}>Biggest Looser</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item style={{ justifyContent: 'center' }}>
                    <FormControl style={{ background: '#9DAF96' }}>
                        <InputLabel id="win condition" style={{ color: 'black', opacity: '40%' }} >Starting Wallet</InputLabel>
                        <Select style={{ width: '195px' }}
                            onChange={e => SetWallet(e.target.value)}
                            className={classes.dropmenu}
                            name='wallet'
                            controlled='true'
                            value={wallet} 
                            type='text'
                            autoComplete='off' >
                            <MenuItem value={'1000'}>$1000</MenuItem>
                            <MenuItem value={'10000'}>$10000</MenuItem>
                            <MenuItem value={'50000'}>$50000</MenuItem>
                            <MenuItem value={'100000'}>$100000</MenuItem>
                            <MenuItem value={'500000'}>$500000</MenuItem>
                            <MenuItem value={'1000000'}>$1000000</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item style={{ marginTop: '25px', justifyContent: 'center' }}>

                    <Button className={classes.button}
                        onClick={handleSubmit}
                        variant='text'>Submit</Button>
                </Grid>

            </Grid>
        </div>
    )
}

//removed link from button temporarly
