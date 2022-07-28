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

  const { authenticate, Moralis} = useMoralis();

   const login = async () => {
      const address = await window.eth_requestAccounts;
      console.log(address);
      await Moralis.enableWeb3()
      await authenticate({signingMessage: "Log in using Metamask" })
        .then(function (user) {
          console.log("logged in user:", user);
          console.log(user.get("ethAddress"));
        })
        console.log("updating page")
        .catch(function (error) {
          console.log(error);
        });
      window.location.reload();
    };

  return (

    <Wrap>
    <ItemText2>  
    <p1 className ="p1"><p1 className = "p13">🦊 Connect Metamask Wallet to Access Minting 🦊</p1></p1>    
    </ItemText2>    
    <Button onClick={() => {handleNetworkSwitch("polygon"); login();}}  onMouseEnter={ handleMouseEnter5 } onMouseLeave={ handleMouseLeave5 }>Connect Wallet</Button>
    </Wrap>
    
  )
}

export default WalletConnectInfo

const Button = styled.div`
    background-color: #060420;
    opacity: 0.9;
    height: 60px;
    width: 240px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    text-transform: uppercase;
    font-size: 20px;
    cursor: pointer;
    margin: 0px 20px;
    box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.4);
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

  function handleMouseEnter5(e) {
    e.target.className = 'mouseEnterButtons5';
  }
  
  function handleMouseLeave5(e) {
    e.target.className = 'mouseLeaveButtons5';
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