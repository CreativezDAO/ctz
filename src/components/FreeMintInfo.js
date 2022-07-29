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
    //<p1> presale instructions - Presale can mint up to 3 NFTs at a discounted price. Wallets can only perform the minting function once - so make sure you choose the desired amount before executing.
    <Wrap>
      <ItemText2>
        <p1 className = "p13">🔥 Congrats! You made the Free Mint List 🔥<br/><br/> Press the button to mint 1 free CRΞATIVΞZ NFT </p1>  
      </ItemText2>    
      <Button onClick={mint} onMouseEnter={ handleMouseEnter3 } onMouseLeave={ handleMouseLeave3 }>free mint</Button>
    </Wrap>
  )
}

export default FreeMintInfo

const Button = styled.div`
    background-color: #060420;
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

function handleMouseEnter3(e) {
  e.target.className = 'mouseEnterButtons3';
}

function handleMouseLeave3(e) {
  e.target.className = 'mouseLeaveButtons3';
}

const ItemText2 = styled.div`
    text-align: center;
    justify-content:center;
    margin-bottom: 5vh;    
`

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`