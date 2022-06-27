import React from 'react'
import styled from "styled-components"

function PublicsaleInfo() {
  return (

    //link to when presale is open - presale open ? "presale is open" : date when open (like on Earn) >> can be TBA till we decide on a date
    //<p1> presale instructions - Presale can mint up to 3 NFTs at a discounted price. Wallets can only perform the minting function once - so make sure you choose the desired amount before executing.
    <Wrap>
    <ItemText2>  
      <p1 className ="p1"><p1 className = "p13">🥳 Public Sale Open Time: TBA 🥳</p1></p1>    
    </ItemText2>    
    <Button onMouseEnter={ handleMouseEnter3 } onMouseLeave={ handleMouseLeave3 }>publicsale</Button>
  </Wrap>
    //button / 2buttons to increase / decrease Mint Amount
  )
}

export default PublicsaleInfo

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