import React, {useContext} from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

import Login from './page/Login'
import Layout from './page/Layout'

import {Auth, readAuthState} from './context/auth'
import {CONTEXT_PATH} from './util/web'

export default function App() {
    return <Auth.Provider value = {readAuthState()}>
        <BrowserRouter basename={CONTEXT_PATH}>
            <Switch>
                <Route path='/login' component={Login} />
                <ProtectedRoute path='*' component={Layout} />
            </Switch>
        </BrowserRouter>
    </Auth.Provider>
}

function ProtectedRoute(props) {
    const {isAuthenticated} = useContext(Auth)
    if (isAuthenticated) {
        return <Route {...props}/>
    } else {
        const {location: {pathname}} = props
        return <Redirect
            to={{
                pathname: '/login',
                state: {anchor: pathname === '/login' ? '/' : pathname}
            }}
        />
    }
}