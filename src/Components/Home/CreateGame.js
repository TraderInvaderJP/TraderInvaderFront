import React, { } from 'react';
import { List, ListItem, TextField, Button } from '@material-ui/core'
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
    text: {
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

const winConditions = [

]

const wallets = [

    
]

export default function CreateGame() {
    const classes = useStyles();

    return (
        <div>
            <List >
                <ListItem style={{ justifyContent: 'center', marginTop: '50px' }}>
                    <TextField style={{ marginRight: '15px' }}
                        InputProps={{ classes: { underline: classes.text } }}
                        name='username'
                        placeholder='Game Name '
                        type='text'
                        autoComplete='off' />
                </ListItem>
                <ListItem style={{ marginTop: '50px' }}>
                    <TextField style={{ marginRight: '15px' }}
                        InputProps={{ classes: { underline: classes.text } }}
                        name='username'
                        placeholder='Start Date '
                        type='text'
                        autoComplete='off' />
                    <TextField
                        style={{ marginLeft: '15px' }}
                        InputProps={{ classes: { underline: classes.text } }}
                        name='username'
                        placeholder='End Date '
                        type='text'
                        autoComplete='off' />
                </ListItem>
                <ListItem style={{ marginTop: '50px' }}>
                    <TextField style={{ marginRight: '15px' }}
                        InputProps={{ classes: { underline: classes.text } }}
                        name='username'
                        placeholder='Win Condition'
                        type='text'
                        autoComplete='off' />
                    <TextField
                        style={{ marginLeft: '15px' }}
                        InputProps={{ classes: { underline: classes.text } }}
                        name='username'
                        placeholder='Wallet '
                        type='text'
                        autoComplete='off' />
                </ListItem>
                <ListItem style={{ justifyContent: 'center', marginTop: '50px' }}>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <Button className={classes.button}
                            variant='text'>Submit</Button>
                    </Link>
                </ListItem>

            </List>
        </div>
    )
}
