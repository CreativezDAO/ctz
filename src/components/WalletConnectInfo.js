import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import { useMoralis } from "react-moralis";

function WalletConnectInfo() {

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

  const { authenticate, isAuthenticated, user} = useMoralis();

   const login = async () => {
    if (!isAuthenticated && !user) {
      const address = await window.eth_requestAccounts;
      console.log(address);
      await authenticate({signingMessage: "Log in using Metamask" })
        .then(function (user) {
          console.log("logged in user:", user);
          console.log(user.get("ethAddress"));
        })
        console.log("updating page")
        .catch(function (error) {
          console.log(error);
        });
      }};

  return (

    <Wrap>
    <ItemText2>  
    <p1 className ="p1"><p1 className = "p13">🦊 Connect Metamask Wallet to Access Minting 🦊</p1></p1>    
    </ItemText2>    
    <Button onClick={() => {handleNetworkSwitch("polygon"); login();}}  onMouseEnter={ handleMouseEnter3 } onMouseLeave={ handleMouseLeave3 }>Connect Wallet</Button>
    </Wrap>
    
  )
}

export default WalletConnectInfo

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