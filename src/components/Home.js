import React from 'react'
import styled from "styled-components"
import Section1 from "./Section1"
import Section2 from "./Section2"

function Home() {
  return (
    <Container>
        <Section1/>
        <Section2/>
    </Container>
  )
}

export default Home

const Container = styled.div`
    height:100vh;
`