import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Redirect, } from 'react-router-dom';
import Login from './Login.js'
import Create from './Create.js'
import Verification from './Verification.js'
import UserHome from './UserHome.js';
import Forget from './Forget'
import axios from 'axios'

function Authentication(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [email, setEmail] = useState('')
    const [verification, setVerification] = useState('')
    const [authorized, setAuthorized] = useState('')
    const [login, setLogin] = useState('')

    // useEffect(() => {
    //     let token = localStorage.getItem('token')
    //     if (token) {
    //         axios
    //             .put('https://o5gn70te7h.execute-api.us-west-2.amazonaws.com/latest/users/token/', {
    //                 refresh_token: token
    //             })
    //             .then(res => {
    //                 localStorage.setItem('token', res.data)
    //                 setAuthorized(true)
    //             })
    //             .catch(err => console.log(err))
    //     }
    // })

    return (
        < Router >
            <div>
                
                {authorized && <Redirect to='/userhome'/>}
                <Route path='/userhome'>
                    <UserHome
                        setAuthorized={setAuthorized}
                        setUsername={setUsername}
                        setPassword={setPassword}
                        username={username}
                        authorized={authorized}
                    />
                </Route>
                <Route exact path='/'>
                    <Login
                        setUsername={setUsername}
                        setPassword={setPassword}
                        setAuthorized={setAuthorized}
                        setLogin={setLogin}
                        username={username}
                        password={password}
                        authorized={authorized}
                        login={login}
                    />
                </Route>
                <Route path='/create'>
                    <Create
                        setUsername={setUsername}
                        setPassword={setPassword}
                        setConfirm={setConfirm}
                        setEmail={setEmail}
                        username={username}
                        password={password}
                        email={email}
                        confirm={confirm}
                    />
                </Route>
                <Route path='/verification'>
                    <Verification
                        setVerification={setVerification}
                        username={username}
                        verification={verification}
                    />
                </Route>
                <Route path='/forget'>
                    <Forget
                    />
                </Route>

            </div>
        </Router >
    )
}

export default Authentication