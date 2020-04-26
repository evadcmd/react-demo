import {createContext} from 'react'
import cookie from 'cookie'

export const Auth = createContext({
    isAuthenticated: false,
    displayname: '',
    password: ''
})

export function readAuthState() {
    const cookies = cookie.parse(document.cookie)
    const {isAuthenticated, displayname, authorities} = cookies
    return {
        isAuthenticated: isAuthenticated === 'true',
        displayname,
        authorities: authorities && authorities.split(',')
    }
}