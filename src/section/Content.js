import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 100%;
    width: 100%;
    padding: 0;
    overflow-y: scroll;
`

export default function Content() {
    return <Container>
    {[...Array(100).keys()].map(i => <div key={i}>{i}</div>)}
    </Container>
}