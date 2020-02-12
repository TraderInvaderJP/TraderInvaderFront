import React, { useEffect, useState } from 'react'
import { Redirect, Route } from 'react-router-dom'
import axios from 'axios'
import Login from './Components/Login'
import UserHome from './Components/UserHome'
import Forgot from './Components/Forgot'
import Verification from './Components/Verification'
import Create from './Components/Create'

export default function App() {
    const [auth, setAuth] = useState(true)

    useEffect(async () => {
        const token = localStorage.getItem('token');

        if(token)
        {
            try{
                const refresh_token = localStorage.getItem('refresh')
            
                let res = await axios.put('/users/token', { refresh_token })

                if(res.success)
                {
                    localStorage.setItem('token', res.data.access_token)
                    setAuth(true);
                }
            }
            catch(err) {
                console.log(err)
            }
        }
    }, [auth])

    return (
        <div>
            { auth && <Redirect to='/userhome' /> }
            <Route path='/' exact>
                <Login />
            </Route>
            <Route path='/verification'>
                <Verification />
            </Route>
            <Route path='/forgot'>
                <Forgot />
            </Route>
            <Route path='/create'>
                <Create />
            </Route>
            <Route path='/app'>
                <UserHome auth={auth} />
            </Route>
        </div>
    )
}
