import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useMoralis } from "react-moralis";
import { Link } from "react-router-dom"

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
      <Link to="/" onMouseEnter={ handleMouseEnter } onMouseLeave={ handleMouseLeave }>HOME</Link>
      <a href="https://creativezdao.gitbook.io/c-r-ks-a-t-i-v-ks-z/introduction/what-is-crksativksz" target="_blank" rel="noreferrer" onMouseEnter={ handleMouseEnter } onMouseLeave={ handleMouseLeave}>DOCS</a>
      <Link to="/voting" onMouseEnter={ handleMouseEnter } onMouseLeave={ handleMouseLeave}>VOTING</Link>
      <Link to="/ctzgallery" onMouseEnter={ handleMouseEnter } onMouseLeave={ handleMouseLeave}>CTZ GALLERY</Link>
      <Link to="/stats" onMouseEnter={ handleMouseEnter } onMouseLeave={ handleMouseLeave}>STATS</Link>
    </Menu>
    <RightMenu>
    {isAuthenticated ? (<RightButtonLogout onClick={logOut}>Disconnect</RightButtonLogout>
    ) : ( 
      <RightButtonLogin onClick={() => {handleNetworkSwitch("polygon"); login();}}>Connect Wallet</RightButtonLogin>
    )}    
          <CustomMenu onClick={()=>setBurgerStatus(true)}/>
    </RightMenu>
    <BurgerNav show={burgerStatus}>
      <CloseWrapper>
      <CustomClose onClick={()=>setBurgerStatus(false)}/>
      </CloseWrapper>  
      <li><Link to="/" onMouseEnter={ handleMouseEnterBurger } onMouseLeave={ handleMouseLeaveBurger }>HOME</Link></li> 
      <li><a href="https://creativezdao.gitbook.io/c-r-ks-a-t-i-v-ks-z/introduction/what-is-crksativksz" target="_blank" rel="noreferrer" onMouseEnter={ handleMouseEnterBurger } onMouseLeave={ handleMouseLeaveBurger }>DOCS</a></li>
      <li><Link to="/voting" onMouseEnter={ handleMouseEnterBurger } onMouseLeave={ handleMouseLeaveBurger }>VOTING</Link></li>
      <li><Link to="/ctzgallery" onMouseEnter={ handleMouseEnterBurger } onMouseLeave={ handleMouseLeaveBurger }>CTZ GALLERY</Link></li>
      <li><Link to="/stats" onMouseEnter={ handleMouseEnterBurger } onMouseLeave={ handleMouseLeaveBurger }>STATS</Link></li>
      <li><Link to="/mint" onMouseEnter={ handleMouseEnterBurger } onMouseLeave={ handleMouseLeaveBurger }>MINT</Link></li>
      <li><Link to="/earn" onMouseEnter={ handleMouseEnterBurger } onMouseLeave={ handleMouseLeaveBurger }>EARN</Link></li>

    </BurgerNav>
    </Container>
  )
}

export default Header

function handleMouseEnter(e) {
  e.target.className = 'mouseEnterNav';
}

function handleMouseEnterBurger(e) {
  e.target.className = 'mouseEnterBurgerNav'
}

function handleMouseLeave(e) {
  e.target.className = 'mouseLeaveNav';
}

function handleMouseLeaveBurger(e) {
  e.target.className = 'mouseLeaveBurger';
}

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`

const Menu = styled.div `
    background-color: rgba(255, 255, 255,);
    color: #393c41;
    font-weight: 500;

 
 a {
    text-transform: uppercase;
    height: 40px;
    width: 180px;
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    ${'' /* opacity: 0.8; */}
    text-transform: uppercase;
    cursor: pointer;
    margin: 0 20px;
 }


    @media(max-width: 1100px) {
      display: none;
    }
`

const RightButtonLogin = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 160px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`

const RightButtonLogout = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 160px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
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


