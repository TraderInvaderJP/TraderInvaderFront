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
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [email, setEmail] = useState('')
    const [verification, setVerification] = useState('')
    const [authorized, setAuthorized] = useState('')
    const [login, setLogin] = useState('')
    const [createAuth, setCreateAuth] = useState('')
    const [didCreate, setDidCreate] = useState('')

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
                <Login 
                setUsername={setUsername}
                setPassword={setPassword}
                setAuthorized={setAuthorized}
                setLogin={setLogin}
                username={username}
                password={password}
                authorized={authorized}
                login={login}/>
            </Route>
            <Route path='/verification'>
                <Verification 
                setVerification={setVerification}
                username={username}
                verification={verification}/>
            </Route>
            <Route path='/forgot'>
                <Forgot 
                setEmail={setEmail}/>
            </Route>
            <Route path='/create'>
                <Create 
                setUsername={setUsername}
                setPassword={setPassword}
                setConfirm={setConfirm}
                setEmail={setEmail}
                setCreateAuth={setCreateAuth}
                setDidCreate={setDidCreate}
                username={username}
                password={password}
                email={email}
                confirm={confirm}
                createAuth={createAuth}
                didCreate={didCreate}/>
            </Route>
            <Route path='/app'>
                <UserHome auth={auth} 
                setAuthorized={setAuthorized}
                setUsername={setUsername}
                setPassword={setPassword}
                setLogin={setLogin}
                username={username}
                authorized={authorized}
                login={login} />
            </Route>
        </div>
    )
}
