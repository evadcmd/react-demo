import {createContext} from 'react'
import Cookies from 'js-cookie'

export const Auth = createContext()

export function readAuthState() {
    const {isAuthenticated, username, authID, authorites} = Cookies.get()
    return {
        isAuthenticated: isAuthenticated === 'true',
        username,
        authID,
        authorities: authorities && authorities.split(',')
    }
}

export function validateAuth(authID) {
    return {
        isRoot: authID == 1,
        isManager: authID < 3
    }
}