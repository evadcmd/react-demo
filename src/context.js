import {createContext} from 'react'

export const Auth = createContext({
    isAuthenticated: false,
    displayname: '',
    password: ''
})