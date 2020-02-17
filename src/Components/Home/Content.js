import React from 'react'
import { Route } from 'react-router-dom'
import Games from './Games/Games'
import Profile from './Profile/Profile'
import Friends from './Friends/Friends'
import Statistics from './Statistics/Statistics'
import CreateGame from './CreateGame'
import JoinGame from './JoinGame'
import { Container } from '@material-ui/core'

export default function Content(props) {
    return (
        <Container style={{width: '100%'}}>
            <Route path='/app' exact>
                <Games username={props.username} />
            </Route>
            <Route path='/app/profile'>
                <Profile />
            </Route>
            <Route path='/app/friends'>
                <Friends />
            </Route>
            <Route path='/app/statistics'>
                <Statistics />
            </Route>
            <Route path='/app/game'>
                
            </Route>
            <Route path='/app/creategame'>
                <CreateGame/>
            </Route>
            <Route path='/app/joingame'>
                <JoinGame/>
            </Route>
        </Container>
    )
}
