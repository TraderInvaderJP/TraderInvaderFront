import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Redirect, } from 'react-router-dom';
import Login from './Login.js'
import Create from './Create.js'
import Verification from './Verification.js'
import UserHome from './UserHome.js'
import Forget from './Forget'

function Authentication(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [email, setEmail] = useState('')
    const [verification, setVerification] = useState('')
    const [authorized, setAuthorized] = useState('')
    const [login, setLogin] = useState('')
    const [createAuth, setCreateAuth] = useState('')
    const [didCreate, setDidCreate] = useState('')


    return (
        < Router >
            <div>

                {authorized && <Redirect to='/userhome' />}
                <Route path='/userhome'>
                    <UserHome
                        setAuthorized={setAuthorized}
                        setUsername={setUsername}
                        setPassword={setPassword}
                        setLogin={setLogin}
                        username={username}
                        authorized={authorized}
                        login={login}                       
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
                        setCreateAuth={setCreateAuth}
                        setDidCreate={setDidCreate}
                        username={username}
                        password={password}
                        email={email}
                        confirm={confirm}
                        createAuth={createAuth}
                        didCreate={didCreate}
                    />
                </Route>
                {createAuth &&<Redirect to='/verification' />}
                <Route path='/verification'>
                    <Verification
                        setVerification={setVerification}
                        username={username}
                        verification={verification}
                    />
                </Route>
                <Route path='/forget'>
                    <Forget
                        setEmail={setEmail}
                    />
                </Route>

            </div>
        </Router >
    )
}

export default Authentication