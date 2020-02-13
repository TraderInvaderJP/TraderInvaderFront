import React from 'react'
import { Route } from 'react-router-dom'
import Games from './Games'

export default function Content(props) {
    return (
        <div>
            <Route path='/app/' exact>
                <Games username={props.username} />
            </Route>
            <Route path='/app/profile'>

            </Route>
            <Route path='/app/friends'>

            </Route>
            <Route path='/app/statistics'>

            </Route>
            <Route path='/app/game'>
                
            </Route>
        </div>
    )
}
