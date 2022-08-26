import React from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade';
import Footer from './Footer';
import VoteCode from '../components/VoteCode'

function Voting() {
  return (
    <Wrap>
        <Fade top>
        <ItemText>
            <p1 className="p10">WHICH STAKING POOL <br/> SHOULD CRΞATIVΞZ AUTO-REINVEST INTO?</p1>
        </ItemText>
        <VotingVials>
            <VoteCode/>
        </VotingVials>            
        </Fade>
        <ItemImage>
          <img src = "images/Voting_Info.png" alt="" className='ItemImage'/>
        </ItemImage>  
        <Footer />         
    </Wrap>
  )
}

export default Voting

const Wrap = styled.div`
    width: 100vw;
    height: 100%;
    background-size: cover;
    background-color: #010308;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const ItemText = styled.div`
    padding-top: 15vh;
    padding-bottom: 10vh;
    text-align: center;
`

const VotingVials = styled.div`
    padding-top: 0vh;
    padding-bottom: 3vh;
    text-align: center;
    display: flex;
    flex-direction: row;
    @media (max-width: 1000px) {
      height: 100%;
      width: 100%;
      flex-direction: column;
    }
`

const ItemImage = styled.div`
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    margin-bottom: 130px;
    max-width: 100%;
`

