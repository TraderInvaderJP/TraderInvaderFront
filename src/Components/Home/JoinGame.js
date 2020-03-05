import React, { useState } from 'react'
import { TextField, Button, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
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
    }
})

export default function JoinGame(props) {
    const classes = useStyles()
    const [gamename, SetGameName] = useState('')


    const handleSubmit = async () => {
        try {
            const { data } = await axios.get(`/games/${gamename}/info`)

            console.log(data.data.game.wallet)
            let response = await axios.put(encodeURI(`/games/${gamename}/users/${props.username}`), {
                initial_amount: parseFloat(data.data.game.wallet),
            })

            props.addGame(gamename)    

        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <Grid container style={{ justifyContent: 'center', marginTop: '25px' }}
                direction='column'
                justify='center'
                alignItems='center'
                spacing={2}>
                <Grid item style={{ marginTop: '150px' }}>
                    <TextField
                        InputProps={{ classes: { underline: classes.text } }}
                        onChange={e => SetGameName(e.target.value)}
                        name='gamename'
                        placeholder='Game Name '
                        type='text'
                        autoComplete='off' />
                </Grid>
                <Grid item style={{ marginTop: '25px', justifyContent: 'center' }}>
                <Link to='/app' style={{ textDecoration: 'none' }}>
                        <Button className={classes.button}
                            onClick={handleSubmit}
                            variant='text'>Join</Button>
                    </Link>
                </Grid>

            </Grid>
        </div>
    )
}
