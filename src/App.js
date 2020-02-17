import React, { useEffect, useState } from 'react'
import { Redirect, Route } from 'react-router-dom'
import axios from 'axios'
import Login from './Components/Authentication/Login'
import UserHome from './Components/Home/UserHome'
import Forgot from './Components/Authentication/Forgot'
import Verification from './Components/Authentication/Verification'
import Create from './Components/Authentication/Create'
import Change from './Components/Authentication/ChangePass'

export default function App() {
    const [auth, setAuth] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [email, setEmail] = useState('')
    const [verification, setVerification] = useState('')
    const [login, setLogin] = useState('')
    const [createAuth, setCreateAuth] = useState('')
    const [didCreate, setDidCreate] = useState('')

    useEffect(() => {
        (async () => {
            const token = localStorage.getItem('token');

            if(token)
            {
                try{
                    const { data } = await axios.get(`/users?access_token=${token}`)
                    
                    setUsername(data.data.Username)

                    const refresh_token = localStorage.getItem('refresh')
                
                    if (refresh_token)
                    {
                        const { data } = await axios.put('/users/token', { refresh_token })
                        
                        if(data.success)
                        {
                            localStorage.setItem('token', data.data.access_token)
                            setAuth(true);
                        }
                    }
                }
                catch(err) {
                    console.log(err)
                }
            }
        })()
    }, [auth])

    return (
        <div>
            { auth && <Redirect to='/app' /> }
            <Route path='/' exact>
                <Login 
                setUsername={setUsername}
                setPassword={setPassword}
                setAuth={setAuth}
                setLogin={setLogin}
                username={username}
                password={password}
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
            <Route path='/changepass'>
                <Change
                setPassword={setPassword}
                setConfirm={setConfirm}
                password={password}
                confirm={confirm}/>
            </Route>
            <Route path='/app'>
                <UserHome 
                    setAuth={setAuth}
                    auth={auth} 
                    setUsername={setUsername}
                    setPassword={setPassword}
                    setLogin={setLogin}
                    username={username}
                    login={login} />
            </Route>
        </div>
    )
}
