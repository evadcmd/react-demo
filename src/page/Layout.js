import React from 'react'

import styled from 'styled-components'

import SideNav from '../section/SideNav'
import TopNav from '../section/TopNav'
import Content from '../section/Content'

const Main = styled.main`
    width: 100%;
    display: flex;
`

export default function Layout() {
    return <>
        <TopNav />
        <Main>
            <SideNav />
            <Content />
        </Main>
    </>
}