import React from 'react'
import {useWeb3ExecuteFunction } from "react-moralis"
import styled from "styled-components"
import Fade from 'react-reveal/Fade'
import Footer from './Footer'
import background from '../animations/polygon.mp4'

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
    <video autoPlay muted style={{position: "absolute", width: "100%", left: "50%", top: "50%", height: "100%", objectFit: "cover", transform: "translate(-50%, -50%", zIndex: "-1"}}>
      <source src={background} type="video/mp4"/>
    </video>
    <Fade top delay={100} duration={2500}>  
        <ItemText1>
        <p1 className = "p3"> <br/><p1 className = "p8">__</p1>TWO WAYS TO EARN FROM CRΞATIVΞZ <p1 className = "p8">__</p1> <br/><p1 className = "p8">Hidden Message Bonus Points!!</p1> <br/> <ItemText2><p1 className = "p6"> 1.  <p1 className = "p7">Hold a CRΞATIVΞZ NFT</p1> and receive a Matic airdrop fortnightly <br/>2. <p1 className = "p7">Push the buttons</p1> below for a small Matic reward </p1></ItemText2></p1>
        </ItemText1>
        </Fade>  
        <Fade bottom delay={20} duration={1800}>
        <Buttons>
        <ButtonGroup>
            <RightButton onClick={() => pushTheButton1()} onMouseEnter={ handleMouseEnter2 } onMouseLeave={ handleMouseLeave2 }>Earn 0.1 Matic</RightButton>
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
    height: 100vh;
    width: 100vw;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 100px;
    justify-content: center;
    z-index: 100;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
`

const LeftButton = styled.div`
    background-color: white;
    height: 120px;
    width: 300px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 26px;
    cursor: pointer;
    margin: 20px 20px;
    box-shadow: 0px 0px 10px 10px rgba(170, 44, 255, 0.4);
`

const RightButton = styled(LeftButton)`
    background: white;
    opacity: 1;
    color: black;
`

const Buttons = styled.div`


`

const ItemText1 = styled.div`
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    margin-bottom: 40px;
    margin-top: 150px;  
    border-radius: 30px;  
`

const ItemText2 = styled.div`
    text-align: left;
    justify-content: center;
    align-items: center;
    display: flex;
    margin-bottom: 50px;    
`

const ItemText3 = styled.div`
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    margin-bottom: 100px;
    bottom: 0;   
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
