import React, { PreventDefault } from 'react';
import { Button, List, ListItem, Toolbar, AppBar, IconButton, InputAdornment, Input } from '@material-ui/core'
import { VisibilityOff, Visibility } from '@material-ui/icons'
import '../App.css'
import { Link } from 'react-router-dom';
import templogo from '../templogo.png';

function Home(props) {
    const [values, setValues] = React.useState({
        showPassword: false,
    })

    const handleSubmit = () => {

    }
    const handleClickShowPassword = () => { setValues({ ...values, showPassword: !values.showPassword }) }

    const handleMouseDownPressed = event => { event.preventDefault() }

    return (
        <div className={'centered'}>
            <AppBar position='fixed' >
                <Toolbar position=' fixed' className={'toolbar'}>
                    <Link to='/'>
                        <h1><img src={templogo} alt="Logo" height='120' width='100' /></h1>
                    </Link>
                </Toolbar>
            </AppBar>
            Forget Password Comming Soon...
    </div>
    )
}
export default Home
