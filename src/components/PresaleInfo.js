import React from 'react'
import styled from "styled-components"

function PresaleInfo() {
  return (
    //link to when presale is open - presale open ? "presale is open" : date when open (like on Earn) >> can be TBA till we decide on a date
    <Wrap>
      <ItemText2>
        <p1 className ="p1"><p1 className = "p13">🥳 Congrats - you made the Presale List! 🥳</p1> <br/><br/> Presale can mint up to 3 NFTs at a discounted price. <br/> Wallets can only perform the presale minting function once <br/>so make sure you choose the desired amount before executing.<br/><br/><p1 className="p13">Presale Open Time: TBA</p1></p1>    
      </ItemText2>    
      <Button onMouseEnter={ handleMouseEnter3 } onMouseLeave={ handleMouseLeave3 }>presale</Button> 
    </Wrap>    
    //button / 2buttons to increase / decrease Mint Amount
    
  )
}

export default PresaleInfo

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

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const ItemText2 = styled.div`
    text-align: center;
    justify-content:center;
    margin-bottom: 5vh;    
`