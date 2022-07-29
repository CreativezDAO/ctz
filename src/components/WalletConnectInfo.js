import styled from "styled-components"
import {ConnectButton} from "web3uikit";

function WalletConnectInfo() {

  return (
    <Wrap>
    <ItemText2>  
      <p1 className ="p1"><p1 className = "p13">🦊 Connect Metamask Wallet to Access Minting 🦊</p1></p1>    
    </ItemText2>    
      <div className=''><ConnectButton /></div>   
    </Wrap>    
  )
}

export default WalletConnectInfo

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