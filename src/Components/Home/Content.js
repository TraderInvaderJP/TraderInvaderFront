import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import Game from './Game/Game'
import Games from './Games/Games'
import Profile from './Profile/Profile'
import Friends from './Friends/Friends'
import Statistics from './Statistics/Statistics'
import CreateGame from './CreateGame'
import JoinGame from './JoinGame'
import Help from './Help/Help'
import Settings from './Settings'
import { Container } from '@material-ui/core'
import axios from 'axios'

export default function Content(props) {
    const [games, SetGames] = useState([])
    const [portfolio, SetPortfolio] = useState({})

    useEffect(() => {
        axios.get(`/games/${props.username}`, {
        })
            .then(res => {
                const { data } = res.data
                SetGames(data)
            })
            .catch(err => console.log(err))
    }, [props.username, SetGames])
    

    const getGame = async (index) => {
        let name = games[index]

        const { data } = await axios.get(`/games/${name}/portfolios/${props.username}`)

        SetPortfolio(data.data)
    }

    const addGame = (name) => {
        SetGames([...games, name])
    }

    return (
        <React.Fragment>
            <Route path='/app' exact>
            <Container style={{width: '100%', marginTop: '130px', marginBottom: '10px'}}>
                <Games username={props.username} games={games} getGame={getGame} />
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
                <Game username={props.username} portfolio={portfolio} />
            </Route>
            <Route path='/app/creategame'>
                <Container style={{width: '100%', marginTop: '130px', marginBottom: '10px'}}>
                    <CreateGame username={props.username} addGame={addGame}/>
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
            <Route path='/app/settings'>
                <Container style={{width: '100%', marginTop: '130px', marginBottom: '10px'}}>
                    <Settings />
                </Container>
            </Route>
        </React.Fragment>
    )
}
