import React from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade';
import { useNavigate } from "react-router-dom"
import Footer from './Footer';
import VoteCode from '../components/VoteCode'

function Voting() {
    let navigate = useNavigate();
  return (
    <Wrap>
        <Fade top>
        <ItemText>
            <h1>WHICH STAKING POOL SHOULD CRΞATIVΞZ AUTO-REINVEST INTO?</h1>
            <p>Cast your vote!</p>
        </ItemText>
        <VotingVials>
            <VoteCode/>
        </VotingVials>            
        </Fade>
        <Footer />         
    </Wrap>
  )
}

export default Voting

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/08.jpg');
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const ItemText = styled.div`
    padding-top: 15vh;
    padding-bottom: 15vh;
    text-align: center;
`

const VotingVials = styled.div`
    padding-top: 8vh;
    padding-bottom: 30vh;
    text-align: center;
`

