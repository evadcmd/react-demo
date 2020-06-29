import React, {useState, useContext} from 'react'
import {useHistory, useLocation} from 'react-router-dom'

import styled from 'styled-components'

import Row from 'react-bootstrap/Row'
import {default as BSCol} from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import {Email} from '@styled-icons/material-outlined/Email'
import {Lock} from '@styled-icons/material'

import {http} from '../util/web'
import {Auth, readAuthState} from '../context/auth'

const ScaledForm = styled(Form)`
    border: 1px solid silver;
    border-radius: 5px; 
    width: 360px;
    padding: 20px 20px 20px 5px;
`
const Col = styled(BSCol)`
    padding: 0px;
`
const FormGroup = styled(Form.Group)`
    margin: 0 0 20px 0;
`

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {state} = useLocation()
    const history = useHistory()

    const auth = useContext(Auth)
    async function attemptAuth() {
        await http.post('login', {username, password})
        Object.assign(auth, readAuthState())
        // state object may not exist. (precedence && > ||)
        history.replace(state && state.anchor || {pathname: '/'})
    }

    return <ScaledForm>

        <FormGroup as={Row}>
            <Form.Label column sm='2'>
                <Email />
            </Form.Label>
            <Col sm='10'>
                <Form.Control
                    type='email'
                    placeholder='メールアドレス'
                    onChange={event => setUsername(event.target.value)}
                />
            </Col>
        </FormGroup>
    
        <FormGroup as={Row}>
            <Form.Label column sm='2'>
                <Lock />
            </Form.Label>
            <Col sm='10'>
                <Form.Control
                    type='password'
                    placeholder='パスワード'
                    onChange={event => setPassword(event.target.value)}
                />
            </Col>
        </FormGroup>

        <Button
            variant="outline-primary"
            className='float-right'
            onClick={attemptAuth}
        >
            ログイン
        </Button>
    </ScaledForm>
}