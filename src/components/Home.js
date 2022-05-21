import React from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade';
import { useNavigate } from "react-router-dom"

function Section() {
    let navigate = useNavigate();
  return (
    <Wrap>
        <Fade top>
        <ItemText>
            <h1 className='gradient-text'>WΞLCOMΞ TO THΞ CRΞATIVΞZ PROJΞCT</h1>
            <p>CRΞATIVΞZ is an automated reward distributor DAO NFT collection with 5000 unique, randomly generated artworks on the Polygon Network, with an integrated Matic airdrop every fortnight.</p>
        </ItemText>
        </Fade>
        <Buttons>
        <Fade bottom>
            <ButtonGroup>
                <LeftButton onClick={() => { navigate("/mint") }}>Mint</LeftButton>
                <RightButton onClick={() => { navigate("/earn") }}>Earn</RightButton>
            </ButtonGroup>
        </Fade>
        </Buttons>    
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/background-placeholder.jpg');
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 600px;
    @media (max-width: 768px) {
      flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 160px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`

const RightButton = styled(LeftButton)`
    background: white;
    opacity: 0.65;
    color: black;
`

const Buttons = styled.div`


`
