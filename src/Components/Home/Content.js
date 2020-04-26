import React, { useState, useEffect } from 'react'
import { Route, useHistory } from 'react-router-dom'
import Game from './Game/Game'
import Games from './Games/Games'
import Friends from './Friends/Friends'
import Statistics from './Statistics/Statistics'
import CreateGame from './CreateGame'
import JoinGame from './JoinGame'
import Help from './Help/Help'
import { Container } from '@material-ui/core'
import axios from 'axios'
import ChangePassVerification from './Profile/ChangePassVerification'

export default function Content(props) {
    const [games, SetGames] = useState([])
    const [portfolio, SetPortfolio] = useState({})
    const [name, setName] = useState(0)
    const [game, setGame] = useState({})
    const history = useHistory()
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [oldpass, setOldPass] = useState('')

    useEffect(() => {
        if(props.username) {
            axios.get(`/games/${props.username}/active`, {
            })
                .then(res => {
                    const { data } = res.data
                    SetGames(data)
                })
                .catch(err => console.log(err))
        }
    }, [props.username, SetGames])

    const getGame = async (index) => {
        let name = games[index]
        setName(name)


        const portfolioData = (await axios.get(`/games/${name}/portfolios/${props.username}`)).data

        SetPortfolio(portfolioData.data)

        const gameData = (await axios.get(`/games/${name}/info`)).data

        setGame(gameData.data)

        history.push('/app/game')
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
            <Route path='/app/changepassverification'>
                <Container style={{width: '100%', marginTop: '130px', marginBottom: '10px'}}>
                    <ChangePassVerification username={props.username} oldpass = {oldpass} setOldPass = {setOldPass} password={password} 
                    setPassword={setPassword} setConfirm={setConfirm} confirm={confirm}/>
                </Container>
            </Route>
            <Route path='/app/friends'>
                <Container style={{width: '100%', marginTop: '130px', marginBottom: '10px'}}>
                    <Friends username={props.username} />
                </Container>
            </Route>
            <Route path='/app/statistics'>
                <Container style={{width: '100%', marginTop: '130px', marginBottom: '10px'}}>
                    <Statistics username={props.username} />
                </Container>
            </Route>
            <Route path='/app/game'>
                <Game username={props.username} portfolio={portfolio} getGame={getGame} name={name} gameInfo={game}/>
            </Route>
            <Route path='/app/creategame'>
                <Container style={{width: '100%', marginTop: '130px', marginBottom: '10px'}}>
                    <CreateGame username={props.username} addGame={addGame}/>
                </Container>
            </Route>
            <Route path='/app/joingame'>
                <Container style={{width: '100%', marginTop: '130px', marginBottom: '10px'}}>
                    <JoinGame username={props.username} addGame={addGame}/>
                </Container>
            </Route>
            <Route path='/app/help'>
                <Container style={{width: '100%', marginTop: '130px', marginBottom: '10px'}}>
                    <Help />
                </Container>
            </Route>
        </React.Fragment>
    )
}
