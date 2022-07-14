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
            <p1 className="p10">WHICH STAKING POOL <br/> SHOULD CRΞATIVΞZ AUTO-REINVEST INTO?</p1>
        </ItemText>
        <VotingVials>
            <VoteCode/>
        </VotingVials>            
        </Fade>
        <ItemText3>
          <p1 className = "p5"><p1 className="p10">📖 VOTING INFORMATION 📖</p1><br/><br/><br/>1. One vote per wallet address during the voting period <br/>(e.g. If you hold three (3) CRΞATIVΞZ NFTs in your wallet = three (3) votes towards your chosen option above) <br/><br/> 2. Must hold at least one CRΞATIVΞZ NFT in your wallet (that hasn't voted during this voting period) <br/><br/> 3. Once you have voted, your vote is stored on the blockchain and cannot be altered</p1>
        </ItemText3>  
        <Footer />         
    </Wrap>
  )
}

export default Voting

const Wrap = styled.div`
    width: 100vw;
    height: 100%;
    background-size: cover;
    background-color: #060420;
    background-image: linear-gradient(45deg, #060420,#190425, #250636, #330949);
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
    padding-bottom: 10vh;
    text-align: center;
    display: flex;
    flex-direction: row;
    @media (max-width: 1000px) {
      height: 100%;
      width: 100%;
      flex-direction: column;
    }
`

const ItemText3 = styled.div`
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    margin-bottom: 150px;
    margin-top:00px;
    bottom: 0;   
`

