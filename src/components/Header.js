import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useMoralis } from "react-moralis";
import { Link, NavLink } from "react-router-dom"

function Header() {

  const [burgerStatus, setBurgerStatus] = useState(false);

  const [setError] = useState();

  const handleNetworkSwitch = async (networkName) => {
    setError();
    await changeNetwork({ networkName, setError });
  };

  const networkChanged = (chainId) => {
    console.log({ chainId });
  };

  useEffect(() => {
    window.ethereum.on("chainChanged", networkChanged);

    return () => {
      window.ethereum.removeListener("chainChanged", networkChanged);
    };
  }, []);

  const { authenticate, isAuthenticated, logout } = useMoralis();

   const login = async () => {
    if (!isAuthenticated) {

      await authenticate({signingMessage: "Log in using Metamask" })
        .then(function (user) {
          console.log("logged in user:", user);
          console.log(user.get("ethAddress"));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  const logOut = async () => {
    await logout();
    console.log("logged out");
  }

  return (
    <Container>
    <div>
        <img src="/images/logo.svg" alt="" />
    </div>
    <Menu>
      <NavLink to="/" className={"navbar"}>HOME</NavLink>
      <NavLink to="/earn" className={"navbar"}>EARN</NavLink>
      <NavLink to="/voting" className={"navbar"}>VOTING</NavLink>
      <NavLink to="/ctzworld" className={"navbar"}>CTZ WORLD</NavLink>
      <NavLink to="/stats" className={"navbar"}>STATS</NavLink>
    </Menu>
    <RightMenu>
    {isAuthenticated ? (<RightButtonLogout onClick={logOut} onMouseEnter={ handleMouseEnterButtons1 } onMouseLeave={ handleMouseLeaveButtons1 }>Disconnect</RightButtonLogout>
    ) : ( 
      <RightButtonLogin onClick={() => {handleNetworkSwitch("polygon"); login();}} onMouseEnter={ handleMouseEnterButtons1 } onMouseLeave={ handleMouseLeaveButtons1 }>Connect Wallet</RightButtonLogin>
    )}    
          <CustomMenu onClick={()=>setBurgerStatus(true)}/>
    </RightMenu>
    <BurgerNav show={burgerStatus}>
      <CloseWrapper>
      <CustomClose onClick={()=>setBurgerStatus(false)}/>
      </CloseWrapper>  
      <li><Link to="/" onMouseEnter={ handleMouseEnterBurger } onMouseLeave={ handleMouseLeaveBurger }>HOME</Link></li> 
      <li><Link to="/earn" onMouseEnter={ handleMouseEnterBurger } onMouseLeave={ handleMouseLeaveBurger }>EARN</Link></li>
      <li><Link to="/voting" onMouseEnter={ handleMouseEnterBurger } onMouseLeave={ handleMouseLeaveBurger }>VOTING</Link></li>
      <li><Link to="/ctzworld" onMouseEnter={ handleMouseEnterBurger } onMouseLeave={ handleMouseLeaveBurger }>CTZ WORLD</Link></li>
      <li><Link to="/stats" onMouseEnter={ handleMouseEnterBurger } onMouseLeave={ handleMouseLeaveBurger }>STATS</Link></li>
      <li><Link to="/" onMouseEnter={ handleMouseEnterBurger } onMouseLeave={ handleMouseLeaveBurger }>MINT</Link></li>
      <li><a href="https://creativezdao.gitbook.io/c-r-ks-a-t-i-v-ks-z/introduction/what-is-crksativksz" target="_blank" rel="noreferrer" onMouseEnter={ handleMouseEnterBurger } onMouseLeave={ handleMouseLeaveBurger }>DOCS</a></li>
      <li><a href="https://github.com/CreativezDAO" target="_blank" rel="noreferrer" onMouseEnter={ handleMouseEnterBurger } onMouseLeave={ handleMouseLeaveBurger }>GITHUB</a></li>
      <li><a href="https://twitter.com/CreativezDAO" target="_blank" rel="noreferrer" onMouseEnter={ handleMouseEnterBurger } onMouseLeave={ handleMouseLeaveBurger }>TWITTER</a></li>


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

function handleMouseEnterButtons1(e) {
  e.target.className = 'mouseEnterButtons1';
}

function handleMouseLeaveButtons1(e) {
  e.target.className = 'mouseLeaveButtons1';
}

const Container = styled.div`
    min-height: 80px;
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


    @media(max-width: 1350px) {
      display: none;
    }
`

const RightButtonLogin = styled.div`
    background-color: #060420;
    height: 40px;
    width: 150px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 13px;
    cursor: pointer;
    margin: 8px;
    box-shadow: 0px 3px 18px 3px rgba(0,0,0,0.2);
`

const RightButtonLogout = styled.div`
    background-color: #060420;
    height: 40px;
    width: 150px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 13px;
    cursor: pointer;
    margin: 8px;
    box-shadow: 0px 3px 18px 3px rgba(0,0,0,0.2);
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a{
      font-weight: 600;
      text-transform: uppercase;
      margin-right: 10px;
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


