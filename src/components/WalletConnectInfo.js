import styled from "styled-components"
import {ConnectButton} from "web3uikit";

function WalletConnectInfo() {

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
      <div className=''><ConnectButton /></div>   
      </ButtonSection>
    </OuterBorder>  
    </Wrap>    
  )
}

export default WalletConnectInfo

  const OuterBorder = styled.div`
    text-align: left;
    justify-content:center;
    margin: 5px; 
    flex-direction: column;
    display: flex;
`

const Rules = styled.div`
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

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

