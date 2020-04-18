import React, {useContext} from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

import cookie from 'cookie'
import {Auth} from './context'

import Login from './page/Login'
import Layout from './page/Layout'

export default function App() {
    return <Auth.Provider value = {auth()}>
        <BrowserRouter basename='/demo'>
            <Switch>
                <Route path='/login' component={Login} />
                <ProtectedRoute path='*' component={Layout} />
            </Switch>
        </BrowserRouter>
    </Auth.Provider>
}

function ProtectedRoute({...props}) {
    const {isAuthenticated} = useContext(Auth)
    if (isAuthenticated) {
        return <Route {...props}/>
    } else {
        const {location: from} = props
        return <Redirect to={{pathname: '/login', state: from}} />
    }
}

function auth() {
    const cookies = cookie.parse(document.cookie)
    const {isAuthenticated, displayname, authorities} = cookies
    return {
        isAuthenticated: isAuthenticated === 'true',
        displayname,
        authorities: authorities && authorities.split(',')
    }
}