import React from 'react'
import {useWeb3ExecuteFunction } from "react-moralis"
import styled from "styled-components"
import Fade from 'react-reveal/Fade'
import Footer from './Footer'
import background from '../animations/EarnV7.mp4'

function Earn() {
  const contractProcessor = useWeb3ExecuteFunction();

  async function pushTheButton1(){

    let options = {
      contractAddress: "",
      functionName: "pushTheButton",
      abi: [],
      params: {}
    }

    await contractProcessor.fetch({
      params: options
    })
  }

  return (
    <Wrap>
    <video autoPlay loop muted style={{position: "absolute", width: "100%", left: "50%", top: "50%", height: "100%", objectFit: "cover", transform: "translate(-50%, -50%", zIndex: "-1"}}>
      <source src={background} type="video/mp4"/>
    </video>
    <Fade top delay={200} duration={4000}>  
        <ItemText1>
        <p1 className = "p3">There are two ways to <p1 className = "p4">earn</p1> from CRΞATIVΞZ. </p1>
        </ItemText1>
        <ItemText2>
         <p1 className = "p6"> 1.  <p1 className = "p4">Hold a CRΞATIVΞZ NFT</p1> and receive a Matic Airdrop fortnightly. <br/>2. <p1 className = "p4">Push the buttons</p1> below for a small Matic reward. </p1>
        </ItemText2>
        </Fade>  
        <Fade bottom delay={20} duration={3300}>
        <Buttons>
        <ButtonGroup>
            <LeftButton onClick={() => pushTheButton1()} onMouseEnter={ handleMouseEnter3 } onMouseLeave={ handleMouseLeave3 }>Earn 0.1 Matic</LeftButton>
            <RightButton onClick={() => pushTheButton1()} onMouseEnter={ handleMouseEnter2 } onMouseLeave={ handleMouseLeave2 }>Earn 0.1 Matic</RightButton>
        </ButtonGroup>
        </Buttons> 
        <ItemText3>
        <div/> <p1 className = "p5"> By pushing the button you are executing functions <br/> for the CRΞATIVΞZ DAO such as claiming staking rewards, <br/> sending rewards to the deployer contract, reinvesting into other contracts <br/> & sending rewards to NFT holders. As an incentive and a way to say thank-you, <br/> the contract will reward you upon successful execution of a CRΞATIVΞZ contract function.</p1>
        </ItemText3>                   
    </Fade>
    <Footer /> 
    </Wrap>   
    
  )
}


export default Earn

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 100px;
    margin-top: 150px;
    justify-content: center;
    z-index: 100;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
`

const LeftButton = styled.div`
    background-color: #0f0a52;
    height: 60px;
    width: 200px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 16px;
    cursor: pointer;
    margin: 0px 20px;
    box-shadow: 0px 3px 18px 3px rgba(0,0,0,0.2);
`

const RightButton = styled(LeftButton)`
    background: white;
    opacity: 0.65;
    color: black;
`

const Buttons = styled.div`


`

const ItemText1 = styled.div`
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    margin-bottom: 20px;
    margin-top: 150px;    
`

const ItemText2 = styled.div`
    text-align: left;
    justify-content: center;
    align-items: center;
    display: flex;
    margin-bottom: 100px;    
`

const ItemText3 = styled.div`
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    margin-bottom: 70px;
    margin-top: 350px;    
`

function handleMouseEnter2(e) {
  e.target.className = 'mouseEnterButtons2';
}

function handleMouseLeave2(e) {
  e.target.className = 'mouseLeaveButtons2';
}

function handleMouseEnter3(e) {
  e.target.className = 'mouseEnterButtons3';
}

function handleMouseLeave3(e) {
  e.target.className = 'mouseLeaveButtons3';
}
