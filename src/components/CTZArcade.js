import React from 'react'
import background from '../animations/CyberPunkBackground.mp4'
import styled from "styled-components"
import Fade from 'react-reveal/Fade'
import Footer from './Footer'

function CTZArcade() {
  return (
    <Wrap>
    <video autoPlay muted style={{position: "absolute", width: "100%", left: "50%", top: "50%", height: "100%", objectFit: "cover", transform: "translate(-50%, -50%", zIndex: "-1"}}>
    <source src={background} type="video/mp4"/>
  </video>
  <Fade top delay={100} duration={1200}>  
        <ItemText1>
        <p1 className = "p3"> <br/><p1 className = "p8">__</p1>THE ARCADE IS UNDER CONSTRUCTION<p1 className = "p8">__</p1> <br/><p1 className = "p8">Hidden Message Bonus Points!!</p1></p1>
        </ItemText1>
        </Fade>
        <Footer />
  </Wrap>
  )
}

export default CTZArcade

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const ItemText1 = styled.div`
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    height: 100vh;
    width: 100vw;    
`