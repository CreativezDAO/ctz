import styled from "styled-components"
import {ConnectButton} from "web3uikit";

function WalletConnectInfo() {

  return (
    <Wrap>
    <OuterBorder>  
      <p1 className ="p1"><p1 className = "p13">🦊 Connect Metamask Wallet to Access Minting 🦊</p1></p1>          
      <div className=''><ConnectButton /></div>   
    </OuterBorder>  
    </Wrap>    
  )
}

export default WalletConnectInfo

  const OuterBorder = styled.div`
    text-align: center;
    justify-content:center;
    margin: 5px; 
`

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

