import React, { useState} from 'react'
import styled from "styled-components"
import {useWeb3ExecuteFunction} from "react-moralis"

function PublicsaleInfo() {
  const contractProcessor = useWeb3ExecuteFunction();
  const [mintAmount, setMintAmount] = useState(1)

  function decrementCount() {
    if(mintAmount > 1){
      setMintAmount(prevCount => prevCount - 1)
    }
  }

  function incrementCount() {
    if(mintAmount < 5){
      setMintAmount(prevCount => prevCount + 1)
    }
  }

  async function mint(){

    let options = {
      contractAddress: "0xA56B8588877d090Da3427E0Ca8eB1533C5D80Cb9",
        functionName: "mint",
        abi: [{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}],
        params: {_mintAmount: mintAmount},
        msgValue: (50000000000000000 * mintAmount)
    }

    await contractProcessor.fetch({
      params: options,
      onSuccess: () => {

      },
      onError: (error) => {
        alert(error.data.message)
      }
    });
  }

  return (
    <Wrap>
      <OuterBorder>  
      <p1 className = "p17">MINTING RULES</p1> 
      <Rules>
      <p1 className ="p18">1) One free NFT mint for early supporters / competition winners</p1> 
      <p1 className = "p18">2) Max three NFT mints for presale wallets @ 70 MATIC each</p1>
      <p1 className = "p18">3) Max five NFT mints for public sale wallets @ 100 MATIC each</p1>
      </Rules>
      <ButtonSection>
      <Button onClick={mint} onMouseEnter={ handleMouseEnter5 } onMouseLeave={ handleMouseLeave5 }>M I N T</Button> 
      <p1 className ="p1"><p1 className = "p18"><br/>{mintAmount} CRΞATIVΞZ NFT = {Math.round(mintAmount *100 * 100) / 100} MATIC</p1></p1> 
      </ButtonSection>
      <WrapCounter>
      <SmallButton onClick={decrementCount} onMouseEnter={ handleMouseEnter4 } onMouseLeave={ handleMouseLeave4 }>-</SmallButton><span><p1 className = "p18">{mintAmount}</p1></span><SmallButton onClick={incrementCount} onMouseEnter={ handleMouseEnter4 } onMouseLeave={ handleMouseLeave4 }>+</SmallButton>
      </WrapCounter>
    </OuterBorder> 
    </Wrap>
  )
}

export default PublicsaleInfo

const Button = styled.div`
    background-color: rgb(90, 0, 150);
    opacity: 0.9;
    height: 60px;
    width: 240px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    text-transform: uppercase;
    font-size: 20px;
    cursor: pointer;
    margin: 0px 20px;
    box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.4);
`

function handleMouseEnter5(e) {
  e.target.className = 'mouseEnterButtons5';
}

function handleMouseLeave5(e) {
  e.target.className = 'mouseLeaveButtons5';
}

function handleMouseEnter4(e) {
  e.target.className = 'mouseEnterButtons4';
}

function handleMouseLeave4(e) {
  e.target.className = 'mouseLeaveButtons4';
}

const WrapCounter = styled.div`
    align-items: center;
    justify-content:center;
    margin-top: 3vh;  
    flex-direction: row;
    display: flex;  
`

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const SmallButton = styled.div`
    background-color: rgb(90, 0, 150);
    height: 50px;
    width: 50px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    text-transform: uppercase;
    font-size: 30px;
    cursor: pointer;
    margin: 0px 20px;
    box-shadow: box-shadow: 0px 0px 3px 3px rgba(90, 0, 150, 0.8);
`

const Rules = styled.div`
    text-align: left;
    justify-content:center;
    margin: 5px; 
    flex-direction: column;
    display: flex;
`

const OuterBorder = styled.div`
    text-align: left;
    justify-content:center;
    margin: 5px; 
    flex-direction: column;
    display: flex;
`

const ButtonSection = styled.div`
    text-align: center;
    align-items: center;
    justify-content:center;
    margin-top: 30px; 
    flex-direction: column;
    display: flex;
`