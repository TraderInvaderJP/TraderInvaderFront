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
    const [inactive, setInactive] = useState({})
    const history = useHistory()
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [oldpass, setOldPass] = useState('')
    const [stats, setStats] = useState('')
    const [achievements, setAchievements] = useState([])
    const [invites, setInvites] = useState([])

    useEffect(() => {
        getGames()
    }, [props.username, SetGames])

    useEffect(() => {
        if (props.username) {
            axios.get(`/games/${props.username}/inactive`, {
            })
                .then(res => {
                    const { data } = res.data
                    setInactive(data)
                })
                .catch(err => console.log(err))
        }
    }, [props.username, setInactive])

    useEffect(() => {
        const GetStats = async () => {
            try {
                const { data } = await axios.get(`/statistics/${props.username}/statistics`)
                setStats(data.data)
            } catch (err) {
                console.log(err)
            }
        }
        GetStats()
    }, [props.username, setStats])

    useEffect(() => {
        const GetAchievements = async () => {
            try {
                const { data } = await axios.get(`/statistics/${props.username}/achievements`)
                setAchievements(Object.keys(data.data))
            } catch (err) {
                console.log(err)
            }
        }
        GetAchievements()
    }, [props.username, setAchievements])

    useEffect(() => {
        getInvites()
    }, [props.username, setInvites])

    const getGame = async (index) => {
        let name = games[index]
        setName(name)

        const portfolioData = (await axios.get(`/games/${name}/portfolios/${props.username}`)).data

        SetPortfolio(portfolioData.data)

        const gameData = (await axios.get(`/games/${name}/info`)).data

        setGame(gameData.data)

        history.push('/app/game')
    }

    const getGames = async () => {
        try {
            if(props.username) {
                const { data } = await axios.get(`/games/${props.username}/active`)

                SetGames(data.data)
            }
        } 
        catch (err) {
            console.log(err)
        }
    }

    const getInvites = async () => {
        try {
            const { data } = await axios.get(`/users/${props.username}/invites`)

            if(data.success)
                setInvites(data.data)
            else
                throw 'No good'
        } catch (err) {
            console.log(err)
        }
    }

    const addGame = (name) => {
        SetGames([...games, name])
    }

    const joinGame = async (name) => {
        const { data } = await axios.get(`/games/${name}/info`)

        console.log(data)
        
        await axios.put(`/games/${name}/users/${props.username}`, { initial_amount: data.data.game.wallet })
        await axios.delete(`/users/${props.username}/invites/${name}`)

        getInvites()
        getGames()
    }

    return (
        <React.Fragment>
            <Route path='/app' exact>
                <Container style={{ width: '100%', marginTop: '130px', marginBottom: '10px' }}>
                    <Games username={props.username} games={games} getGame={getGame} invites={invites} joinGame={joinGame}/>
                </Container>
            </Route>
            <Route path='/app/changepassverification'>
                <Container style={{ width: '100%', marginTop: '130px', marginBottom: '10px' }}>
                    <ChangePassVerification username={props.username} oldpass={oldpass} setOldPass={setOldPass} password={password}
                        setPassword={setPassword} setConfirm={setConfirm} confirm={confirm} />
                </Container>
            </Route>
            <Route path='/app/friends'>
                <Container style={{ width: '100%', marginTop: '130px', marginBottom: '10px' }}>
                    <Friends username={props.username} games={games}/>
                </Container>
            </Route>
            <Route path='/app/statistics'>
                <Container style={{ width: '100%', marginTop: '130px', marginBottom: '10px' }}>
                    <Statistics username={props.username} stats={stats} achievements={achievements} inactive={inactive}/>
                </Container>
            </Route>
            <Route path='/app/game'>
                <Game username={props.username} portfolio={portfolio} getGame={getGame} name={name} gameInfo={game} />
            </Route>
            <Route path='/app/creategame'>
                <Container style={{ width: '100%', marginTop: '130px', marginBottom: '10px' }}>
                    <CreateGame username={props.username} addGame={addGame} />
                </Container>
            </Route>
            <Route path='/app/joingame'>
                <Container style={{ width: '100%', marginTop: '130px', marginBottom: '10px' }}>
                    <JoinGame username={props.username} addGame={addGame} />
                </Container>
            </Route>
            <Route path='/app/help'>
                <Container style={{ width: '100%', marginTop: '130px', marginBottom: '10px' }}>
                    <Help />
                </Container>
            </Route>
        </React.Fragment>
    )
}
