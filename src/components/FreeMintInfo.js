import React from 'react'
import styled from "styled-components"
import {useWeb3ExecuteFunction} from "react-moralis"

function FreeMintInfo() {

  const contractProcessor = useWeb3ExecuteFunction();

  async function mint(){

    let options = {
      contractAddress: "0xA56B8588877d090Da3427E0Ca8eB1533C5D80Cb9",
      functionName: "mint",
      abi: [{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}],
      params: {_mintAmount: 1},
      msgValue: (0)
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
      <p1 className ="p1"><p1 className = "p17">MINTING RULES</p1></p1> 
      <Rules>
      <p1 className ="p1"><p1 className = "p18">1) One free NFT mint for early supporters / competition winners</p1></p1> 
      <p1 className ="p1"><p1 className = "p18">2) Max three NFT mints for presale wallets <p1 className="p20">@ 70 MATIC</p1> each</p1></p1> 
      <p1 className ="p1"><p1 className = "p18">3) Max five NFT mints for public sale wallets <p1 className="p20">@ 90 MATIC</p1> each</p1></p1> 
      </Rules>
      <ButtonSection>
      <Button onClick={mint} onMouseEnter={ handleMouseEnter3 } onMouseLeave={ handleMouseLeave3 }>free mint</Button>   
      </ButtonSection>
    </OuterBorder> 
    </Wrap>
  )
}



export default FreeMintInfo

const Button = styled.div`
    background-color: rgba(90, 0, 150, 1);
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
    font-family: "Marcellus", sans-serif;
`

function handleMouseEnter3(e) {
  e.target.className = 'mouseEnterButtons3';
}

function handleMouseLeave3(e) {
  e.target.className = 'mouseLeaveButtons3';
}

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
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
    margin-top: 50px; 
    flex-direction: column;
    display: flex;
`