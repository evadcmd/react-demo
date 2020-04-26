import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
 
import {Home} from '@styled-icons/boxicons-solid/Home'
import {User} from '@styled-icons/boxicons-solid/User'
import {TestTube} from '@styled-icons/boxicons-regular/TestTube'

const Aside = styled.aside`

`
const NavLink = styled(Link)`
    font-size: 20px;
    display: block;
`

export default function SideNav() {
    return <Aside>
        <NavLink to='/'>
            <Home size='30' /> Home
        </NavLink>
        <NavLink to='/user'>
            <User size='30' /> User
        </NavLink>
        <NavLink to='/test'>
            <TestTube size='30' /> Test
        </NavLink>
    </Aside>
}