import React from 'react'
import { Route } from 'react-router-dom'
import Game from './Game'
import Games from './Games/Games'
import Profile from './Profile/Profile'
import Friends from './Friends/Friends'
import Statistics from './Statistics/Statistics'
import CreateGame from './CreateGame'
import JoinGame from './JoinGame'
import Help from './Help/Help'
import Game from './Game'
import Settings from './Settings'
import { Container } from '@material-ui/core'

export default function Content(props) {
    return (
        <React.Fragment>
            <Route path='/app' exact>
            <Container style={{width: '100%', marginTop: '130px', marginBottom: '10px'}}>
                <Games username={props.username} />
            </Container>
            </Route>
            <Route path='/app/profile'>
                <Container style={{width: '100%', marginTop: '130px', marginBottom: '10px'}}>
                    <Profile />
                </Container>
            </Route>
            <Route path='/app/friends'>
                <Container style={{width: '100%', marginTop: '130px', marginBottom: '10px'}}>
                    <Friends />
                </Container>
            </Route>
            <Route path='/app/statistics'>
                <Container style={{width: '100%', marginTop: '130px', marginBottom: '10px'}}>
                    <Statistics />
                </Container>
            </Route>
            <Route path='/app/game'>
<<<<<<< HEAD
                <Game />
=======
                <Game username={props.username}/>
>>>>>>> a5aaeb25f029d6e8b7d71845846eb73d7533839c
            </Route>
            <Route path='/app/creategame'>
                <Container style={{width: '100%', marginTop: '130px', marginBottom: '10px'}}>
                    <CreateGame username={props.username}/>
                </Container>
            </Route>
            <Route path='/app/joingame'>
                <Container style={{width: '100%', marginTop: '130px', marginBottom: '10px'}}>
                    <JoinGame/>
                </Container>
            </Route>
            <Route path='/app/help'>
                <Container style={{width: '100%', marginTop: '130px', marginBottom: '10px'}}>
                    <Help />
                </Container>
            </Route>
<<<<<<< HEAD
        </React.Fragment>
=======
            <Route path='/app/settings'>
                <Settings />
                </Route>
        </Container>
>>>>>>> a5aaeb25f029d6e8b7d71845846eb73d7533839c
    )
}
