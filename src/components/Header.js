import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useMoralis } from "react-moralis";
import { Link, NavLink } from "react-router-dom"
import {ConnectButton, CryptoLogos, Button} from "web3uikit";

function Header() {

  const {Moralis, isWeb3Enabled} = useMoralis();

  const [burgerStatus, setBurgerStatus] = useState(false);

  const chainId = Moralis.chainId;

  const [setError] = useState();

  const handleNetworkSwitch = async (networkName) => {
    await changeNetwork({ networkName, setError });
  };

  const networkChanged = (chainId) => {

  };

  useEffect(() => {
    window.ethereum.on("chainChanged", networkChanged);

    return () => {
      window.ethereum.removeListener("chainChanged", networkChanged);
    };
  }, []);
  
  return (
    <Container>
    <div>
        <img src="/images/logo.svg" alt="" />
    </div>
    <Menu>
      <NavLink to="/" className={"navbar"}>HOME</NavLink>
      <NavLink to="/earn" className={"navbar"}>EARN</NavLink>
      <NavLink to="/voting" className={"navbar"}>VOTING</NavLink>
      <NavLink to="/ctzarcade" className={"navbar"}>ARCADE</NavLink>
      <NavLink to="/stats" className={"navbar"}>STATS</NavLink>
    </Menu>
    <RightMenu> 
      {(() => {if( chainId !== '0x89' && isWeb3Enabled){return <Button
  color="red"
  onClick={() => {handleNetworkSwitch("polygon");}}
  text="Switch to Polygon Network"
  theme="colored"
/>} else {return <CryptoLogos
    chain="polygon"
    onClick={function noRefCheck(){}}
    size="38px"
    /> }})()}     
      
    <div className=''><ConnectButton /></div>   
          <CustomMenu onClick={()=>setBurgerStatus(true)}/>
    </RightMenu>
    <BurgerNav show={burgerStatus}>
      <CloseWrapper>
      <CustomClose onClick={()=>setBurgerStatus(false)}/>
      </CloseWrapper>  
      <li><Link to="/" onMouseEnter={ handleMouseEnterBurger } onMouseLeave={ handleMouseLeaveBurger }>HOME</Link></li> 
      <li><Link to="/earn" onMouseEnter={ handleMouseEnterBurger } onMouseLeave={ handleMouseLeaveBurger }>EARN</Link></li>
      <li><Link to="/voting" onMouseEnter={ handleMouseEnterBurger } onMouseLeave={ handleMouseLeaveBurger }>VOTING</Link></li>
      <li><Link to="/ctzarcade" onMouseEnter={ handleMouseEnterBurger } onMouseLeave={ handleMouseLeaveBurger }>ARCADE</Link></li>
      <li><Link to="/stats" onMouseEnter={ handleMouseEnterBurger } onMouseLeave={ handleMouseLeaveBurger }>STATS</Link></li>
      <li><Link to="/" onClick = {scrollToBottom} onMouseEnter={ handleMouseEnterBurger } onMouseLeave={ handleMouseLeaveBurger }>MINT</Link></li>
      <li><a href="https://creativezdapp.gitbook.io/c-r-ks-a-t-i-v-ks-z/" target="_blank" rel="noreferrer" onMouseEnter={ handleMouseEnterBurger } onMouseLeave={ handleMouseLeaveBurger }>DOCS</a></li>
      <li><a href="https://github.com/CreativezDApp" target="_blank" rel="noreferrer" onMouseEnter={ handleMouseEnterBurger } onMouseLeave={ handleMouseLeaveBurger }>GITHUB</a></li>
      <li><a href="https://twitter.com/Creativez_DApp" target="_blank" rel="noreferrer" onMouseEnter={ handleMouseEnterBurger } onMouseLeave={ handleMouseLeaveBurger }>TWITTER</a></li>
      <li><a href="https://www.youtube.com/channel/UCovn1niyPXt5jy84y8cQV6A/featured" target="_blank" rel="noreferrer" onMouseEnter={ handleMouseEnterBurger } onMouseLeave={ handleMouseLeaveBurger }>YOUTUBE</a></li>
      <li><a href="https://discord.gg/Uj7fmHbTWj" target="_blank" rel="noreferrer" onMouseEnter={ handleMouseEnterBurger } onMouseLeave={ handleMouseLeaveBurger }>DISCORD</a></li>
      

    </BurgerNav>
    </Container>
  )
}

export default Header

function handleMouseEnterBurger(e) {
  e.target.className = 'mouseEnterBurgerNav'
}

function handleMouseLeaveBurger(e) {
  e.target.className = 'mouseLeaveBurger';
}

function scrollToBottom() {
  window.scrollTo(0, document.body.scrollHeight)
}

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2px 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background: white;
    box-shadow: 0px 0px 40px 0px rgba(0,0,0,0.3);
`

const Menu = styled.div `
    color: #060420;
    font-weight: 600;
    font-size: 13px;
    

 
 a {
    text-transform: uppercase;
    height: 40px;
    width: 150px;
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    text-transform: uppercase;
    cursor: pointer;
    margin: 0 10px;
 }


    @media(max-width: 1470px) {
      display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a{
      font-weight: 600;
      text-transform: uppercase;
      margin-right: 10px;
    }

    @media(max-width: 790px) {
      flex-direction:column;
      align-items:left;
      justify-content:flex-end;
    }
`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 200px;
    z-index: 100;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
    transition: transform 0.2s;
    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);

        a {
            font-weight: 600;
        }
    }

`

const CustomClose = styled(CloseIcon)`
      cursor: pointer;
`

const CloseWrapper = styled.div`
      display: flex;
      justify-content: flex-end;

`
const polygon = {
  polygon: {
    chainId: `0x${Number(137).toString(16)}`,
    chainName: "Polygon Mainnet",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18
    },
    rpcUrls: ["https://polygon-rpc.com/"],
    blockExplorerUrls: ["https://polygonscan.com/"]
  },
}

const changeNetwork = async ({ networkName, setError }) => {
  try {
    if (!window.ethereum) throw new Error("No metamask wallet found");
    await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          ...polygon[networkName]
        }
      ]
    });
  } catch (err) {
    setError(err.message);
  }
};


