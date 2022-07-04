import React, {useState} from 'react'
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
    if(mintAmount < 20){
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
        console.log("mint successful");
      },
      onError: (error) => {
        alert(error.data.message)
      }
    });
  }

  console.log(mintAmount)


  return (

    //link to when presale is open - presale open ? "presale is open" : date when open (like on Earn) >> can be TBA till we decide on a date
    <Wrap>
    <ItemText2>  
      <p1 className ="p1"><p1 className = "p13">🥳 Public Sale Open Time: TBA 🥳</p1></p1>    
    </ItemText2>    
    <Button onClick={mint} onMouseEnter={ handleMouseEnter3 } onMouseLeave={ handleMouseLeave3 }>M I N T</Button>
    <WrapCounter>
      <SmallButton onClick={decrementCount} onMouseEnter={ handleMouseEnter4 } onMouseLeave={ handleMouseLeave4 }>-</SmallButton><span><p1 className = "p13">{mintAmount}</p1></span><SmallButton onClick={incrementCount} onMouseEnter={ handleMouseEnter4 } onMouseLeave={ handleMouseLeave4 }>+</SmallButton>
    </WrapCounter>
    </Wrap>
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
    box-shadow: 0px 0px 3px 3px rgba(103, 0, 172, 0.8);
`

function handleMouseEnter3(e) {
  e.target.className = 'mouseEnterButtons3';
}

function handleMouseLeave3(e) {
  e.target.className = 'mouseLeaveButtons3';
}

function handleMouseEnter4(e) {
  e.target.className = 'mouseEnterButtons4';
}

function handleMouseLeave4(e) {
  e.target.className = 'mouseLeaveButtons4';
}

const ItemText2 = styled.div`
    text-align: center;
    justify-content:center;
    margin-bottom: 5vh;    
`

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
    background-color: rgba(170, 44, 255, 1);
    height: 60px;
    width: 60px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    text-transform: uppercase;
    font-size: 30px;
    cursor: pointer;
    margin: 0px 20px;
    box-shadow: box-shadow: 0px 0px 3px 3px rgba(103, 0, 172, 0.8);
`