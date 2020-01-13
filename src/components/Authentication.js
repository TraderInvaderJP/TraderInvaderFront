import React, { useState } from 'react'
import { Login } from './'

export default function Authentication() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [email, setEmail] = useState('')
    const [verification, setVerification] = useState('')

    return (
        <div>
            <Login setUsername={setUsername} setPassword={setPassword} />
            <Create setUsername={setUsername} setPassword={setPassword} setConfirm={setConfirm} setEmail={setEmail} />
            <Verification username={username} setVerification={setVerification}/>
        </div>
    )
}
