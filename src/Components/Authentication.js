import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login.js'
import Create from './Create.js'
import Verification from './Verification.js'
import UserHome from './UserHome.js';
import Forget from './Forget'

function Authentication(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [email, setEmail] = useState('')
    const [verification, setVerification] = useState('')

    return (
        <div>
            < Router >
                <Route exact path='/'>
                    <Login
                        setUsername={setUsername}
                        setPassword={setPassword}
                        username={username}
                        password={password}
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
                        username={username}
                        setVerification={setVerification}
                        verification={verification}
                    />
                </Route>
                <Route path='/userhome'>
                    <UserHome/>
                </Route>
                <Route path='/forget'>
                    <Forget
                    />
                </Route>

            </Router>
        </div>
    )
}

export default Authentication