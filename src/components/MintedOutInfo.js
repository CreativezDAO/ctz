import React from 'react'
import styled from "styled-components"

function MintedOutInfo() {
  return (
    <Wrap>
    <ItemText2>  
    <p1 className ="p1"><p1 className = "p13">🌟 The CRΞATIVΞZ NFT Collection Is Minted Out 🌟</p1></p1>    
    </ItemText2>    
    <Button onClick={() => { window.location ="https://twitter.com/Creativez_NFTs"}} onMouseEnter={ handleMouseEnter3 } onMouseLeave={ handleMouseLeave3 }>Buy on Opensea</Button>
    </Wrap>
  )
}

export default MintedOutInfo

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

const Button = styled.div`
    background-color: rgba(170, 44, 255, 1);
    height: 80px;
    width: 260px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    text-transform: uppercase;
    font-size: 20px;
    cursor: pointer;
    margin: 0px 20px;
    box-shadow: 0px 0px 10px 10px rgba(170, 44, 255, 0.4);
`

function handleMouseEnter3(e) {
    e.target.className = 'mouseEnterButtons3';
  }
  
  function handleMouseLeave3(e) {
    e.target.className = 'mouseLeaveButtons3';
  }
  