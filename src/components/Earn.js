import React, { useState, useEffect } from 'react'
import {useWeb3ExecuteFunction, useMoralisWeb3Api, useMoralis } from "react-moralis"
import styled from "styled-components"
import Fade from 'react-reveal/Fade'
import Footer from './Footer'
import background from '../animations/polygon.mp4'

const Earn = () => {
  const contractProcessor = useWeb3ExecuteFunction();
  const {Moralis, isInitialized, isAuthenticated, authenticate, user} = useMoralis();
  const [BeQi, setBeQi] = useState (new Date ());
  const [WETHWMATIC, setWETHWMATIC] = useState (new Date ());
  const [BNBWMATIC, setBNBWMATIC] = useState (new Date ());
  const [USDCDAI, setUSDCDAI] = useState (new Date ());
  const [BananaWMATIC, setBananaWMATIC] = useState (new Date ());
  const [BIFI, setBIFI] = useState (new Date ());
  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  async function pushTheBeQiButton(){

    let options = {
      contractAddress: "0xDBd4455AB3F153a3F235bDEA2F5506E092B7dAd6",
      functionName: "pushTheButton",
      abi: [{"inputs":[],"name":"pushTheButton","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"removeTimelock","outputs":[],"stateMutability":"nonpayable","type":"function"}],
      params: {}
    }

    await contractProcessor.fetch({
      params: options,
      onSuccess: () => {
        console.log("button push succesful");
      },
      onError: (error) => {
        alert(error.data.message)
      }
    });
  }

  async function pushTheWETHWMATICButton(){

    let options = {
      contractAddress: "0x10844B8E9437Ee7ED052Db07AB447740D7a77Fcd",
      functionName: "pushTheButton",
      abi: [{"inputs":[],"name":"pushTheButton","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"removeTimelock","outputs":[],"stateMutability":"nonpayable","type":"function"}],
      params: {}
    }

    await contractProcessor.fetch({
      params: options,
      onSuccess: () => {
        console.log("button push succesful");
      },
      onError: (error) => {
        alert(error.data.message)
      }
    });
  }

  async function pushTheBNBWMATICButton(){

    let options = {
      contractAddress: "0x134705CD5e116Ea332f878100Fb44BEe1a58c3c8",
      functionName: "pushTheButton",
      abi: [{"inputs":[],"name":"pushTheButton","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"removeTimelock","outputs":[],"stateMutability":"nonpayable","type":"function"}],
      params: {}
    }

    await contractProcessor.fetch({
      params: options,
      onSuccess: () => {
        console.log("button push succesful");
      },
      onError: (error) => {
        alert(error.data.message)
      }
    });
  }

  async function pushTheUSDCDAIButton(){

    let options = {
      contractAddress: "0x39A5B1e88cc76285D4DcbD8e0370766170C068e4",
      functionName: "pushTheButton",
      abi: [{"inputs":[],"name":"pushTheButton","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"removeTimelock","outputs":[],"stateMutability":"nonpayable","type":"function"}],
      params: {}
    }

    await contractProcessor.fetch({
      params: options,
      onSuccess: () => {
        console.log("button push succesful");
      },
      onError: (error) => {
        alert(error.data.message)
      }
    });
  }

  async function pushTheBananaWMATICButton(){

    let options = {
      contractAddress: "0xAa87F63C8c5948E4d585118E53A37695B69B5CEF",
      functionName: "pushTheButton",
      abi: [{"inputs":[],"name":"pushTheButton","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"removeTimelock","outputs":[],"stateMutability":"nonpayable","type":"function"}],
      params: {}
    }

    await contractProcessor.fetch({
      params: options,
      onSuccess: () => {
        console.log("button push succesful");
      },
      onError: (error) => {
        alert(error.data.message)
      }
    });
  }

  async function pushTheBIFIButton(){

    let options = {
      contractAddress: "0x6030e600e95c7ee9100dBf4DA0dACF7A2955f93c",
      functionName: "pushTheButton",
      abi: [{"inputs":[],"name":"pushTheButton","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"removeTimelock","outputs":[],"stateMutability":"nonpayable","type":"function"}],
      params: {}
    }

    await contractProcessor.fetch({
      params: options,
      onSuccess: () => {
        console.log("button push succesful");
      },
      onError: (error) => {
        alert(error.data.message)
      }
    });
  }


  useEffect(() => {
    async function calculateTimeLeftBeQi () {
    const query = new Moralis.Query("BeQiCycle");
    query.descending("createdAt");
    const result = await query.first(); 
    let start = Number(result.attributes.block_timestamp);
    let timelocked = Number(result.attributes.timelocked);
    let end = Number(start+(timelocked*1000));
    const endDate = new Date(end); 

    setBeQi(endDate);
    } 

    calculateTimeLeftBeQi();
    }, [isInitialized]);

    useEffect(() => {
    async function calculateTimeLeftWETHWMATIC () {
    const query = new Moralis.Query("WETHWMATICCycle");
    query.descending("createdAt");
    const result = await query.first(); 
    let start = Number(result.attributes.block_timestamp);
    let timelocked = Number(result.attributes.timelocked);
    let end = Number(start+(timelocked*1000));
    const endDate = new Date(end); 

    setWETHWMATIC(endDate);
    } 

    calculateTimeLeftWETHWMATIC();
    }, [isInitialized]);

    useEffect(() => {
      async function calculateTimeLeftBNBWMATIC () {
      const query = new Moralis.Query("BNBWMATICCycle");
      query.descending("createdAt");
      const result = await query.first(); 
      let start = Number(result.attributes.block_timestamp);
      let timelocked = Number(result.attributes.timelocked);
      let end = Number(start+(timelocked*1000));
      const endDate = new Date(end); 
  
      setBNBWMATIC(endDate);
      } 
  
      calculateTimeLeftBNBWMATIC();
      }, [isInitialized]);

      useEffect(() => {
        async function calculateTimeLeftUSDCDAI () {
        const query = new Moralis.Query("USDCDAICycle");
        query.descending("createdAt");
        const result = await query.first(); 
        let start = Number(result.attributes.block_timestamp);
        let timelocked = Number(result.attributes.timelocked);
        let end = Number(start+(timelocked*1000));
        const endDate = new Date(end); 
    
        setUSDCDAI(endDate);
        } 
    
        calculateTimeLeftUSDCDAI();
        }, [isInitialized]);

        useEffect(() => {
          async function calculateTimeLeftBananaWMATIC () {
          const query = new Moralis.Query("BananaWMATICCycle");
          query.descending("createdAt");
          const result = await query.first(); 
          let start = Number(result.attributes.block_timestamp);
          let timelocked = Number(result.attributes.timelocked);
          let end = Number(start+(timelocked*1000));
          const endDate = new Date(end); 
      
          setBananaWMATIC(endDate);
          } 
      
          calculateTimeLeftBananaWMATIC();
          }, [isInitialized]);

          useEffect(() => {
            async function calculateTimeLeftBIFI () {
            const query = new Moralis.Query("BIFICycle");
            query.descending("createdAt");
            const result = await query.first(); 
            let start = Number(result.attributes.block_timestamp);
            let timelocked = Number(result.attributes.timelocked);
            let end = Number(start+(timelocked*1000));
            const endDate = new Date(end); 
        
            setBIFI(endDate);
            } 
        
            calculateTimeLeftBIFI();
            }, [isInitialized]);

            const handleNetworkSwitch = async (networkName) => {
              setError();
              await changeNetwork({ networkName, setError });
            };

            const networkChanged = (chainId) => {
              console.log({ chainId });
            };

            const [setError] = useState();

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
          
            useEffect(() => {
              window.ethereum.on("chainChanged", networkChanged);
          
              return () => {
                window.ethereum.removeListener("chainChanged", networkChanged);
              };
            }, []);

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
    <video autoPlay loop muted style={{position: "absolute", width: "100%", left: "50%", top: "50%", height: "100%", objectFit: "cover", transform: "translate(-50%, -50%", zIndex: "-1"}}>
      <source src={background} type="video/mp4"/>
    </video>    
    <Fade top delay={100} duration={2500}>  
        <ItemText1>
        <p1 className = "p3"> <br/><p1 className = "p8">__</p1>THREE WAYS TO EARN FROM CRΞATIVΞZ <p1 className = "p8">__</p1> <br/><br/> <ItemText2><p1 className = "p6"> 1.  <p1 className = "p7">Hold a CRΞATIVΞZ NFT</p1> and receive a MATIC airdrop fortnightly <br/>2. <p1 className = "p7">Push the buttons below for a small MATIC reward</p1> <br/>3. <p1 className = "p7">TBA</p1></p1></ItemText2></p1>
        </ItemText1>
        </Fade>  
        <Wrap2>
        <div className='strip'><p1><br/></p1></div>
        <Buttons>
        <ButtonGroup>    
            <RightButton onClick={() => { if(isAuthenticated) { pushTheBeQiButton()}else{handleNetworkSwitch("polygon"); login();}}} onMouseEnter={ handleMouseEnter2 } onMouseLeave={ handleMouseLeave2 }>{Number(BeQi) < Number(new Date()) ? <p1 className="p9">Earn 0.2 Matic</p1> : <span><p1 className="p9">Push This Button On:<br/>{BeQi.toLocaleDateString(undefined, options)} - {BeQi.toLocaleTimeString()}</p1></span>}</RightButton>
            <RightButton onClick={() => { if(isAuthenticated) { pushTheWETHWMATICButton()}else{handleNetworkSwitch("polygon"); login();}}} onMouseEnter={ handleMouseEnter2 } onMouseLeave={ handleMouseLeave2 }>{Number(WETHWMATIC) < Number(new Date()) ? <p1 className="p9">Earn 0.2 Matic</p1> : <span><p1 className="p9">Push This Button On:<br/>{WETHWMATIC.toLocaleDateString(undefined, options)} - {WETHWMATIC.toLocaleTimeString()}</p1></span>}</RightButton>
            <RightButton onClick={() => { if(isAuthenticated) { pushTheBNBWMATICButton()}else{handleNetworkSwitch("polygon"); login();}}} onMouseEnter={ handleMouseEnter2 } onMouseLeave={ handleMouseLeave2 }>{Number(BNBWMATIC) < Number(new Date()) ? <p1 className="p9">Earn 0.2 Matic</p1> : <span><p1 className="p9">Push This Button On:<br/>{BNBWMATIC.toLocaleDateString(undefined, options)} - {BNBWMATIC.toLocaleTimeString()}</p1></span>}</RightButton>
        </ButtonGroup>
        <ButtonGroup>
            <RightButton onClick={() => { if(isAuthenticated) { pushTheUSDCDAIButton()}else{handleNetworkSwitch("polygon"); login();}}} onMouseEnter={ handleMouseEnter2 } onMouseLeave={ handleMouseLeave2 }>{Number(USDCDAI) < Number(new Date()) ? <p1 className="p9">Earn 0.2 Matic</p1> : <span><p1 className="p9">Push This Button On:<br/>{USDCDAI.toLocaleDateString(undefined, options)} - {USDCDAI.toLocaleTimeString()}</p1></span>}</RightButton>
            <RightButton onClick={() => { if(isAuthenticated) { pushTheBananaWMATICButton()}else{handleNetworkSwitch("polygon"); login();}}} onMouseEnter={ handleMouseEnter2 } onMouseLeave={ handleMouseLeave2 }>{Number(BananaWMATIC) < Number(new Date()) ? <p1 className="p9">Earn 0.2 Matic</p1> : <span><p1 className="p9">Push This Button On:<br/>{BananaWMATIC.toLocaleDateString(undefined, options)} - {BananaWMATIC.toLocaleTimeString()}</p1></span>}</RightButton>
            <RightButton onClick={() => { if(isAuthenticated) { pushTheBIFIButton()}else{handleNetworkSwitch("polygon"); login();}}} onMouseEnter={ handleMouseEnter2 } onMouseLeave={ handleMouseLeave2 }>{Number(BIFI) < Number(new Date()) ? <p1 className="p9">Earn 0.2 Matic</p1> : <span><p1 className="p9">Push This Button On:<br/>{BIFI.toLocaleDateString(undefined, options)} - {BIFI.toLocaleTimeString()}</p1></span>}</RightButton>
        </ButtonGroup> 
        </Buttons> 
        <ItemText3>
          <p1 className = "p5"><p1 className="p10">📖 WHY REWARDS? 📖</p1><br/><br/> By pushing the buttons you are executing functions <br/> for the CRΞATIVΞZ ecosystem including: claiming staking rewards, <br/> sending rewards to the deployer contract, reinvesting into other contracts <br/> & sending rewards to NFT holders. As an incentive and a way to say thank-you, <br/> the contract will reward you upon successful execution of a CRΞATIVΞZ contract function.</p1>
        </ItemText3>                         
    <Footer /> 
    </Wrap2>
    </Wrap>   
    
  )
}


export default Earn

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
`

const Wrap2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #010308;
    height: 100%;
    width: 100%;    
`

const ButtonGroup = styled.div`
    display: flex;
    margin-top: 50px;
    margin-bottom: 0px;
    justify-content: center;
    z-index: 100;
    height:100%;
    @media (max-width: 1000px) {
      flex-direction: column;
      align-items: center;
    }
`

const LeftButton = styled.div`
    background-color: rgba(170, 44, 255, 0.6);
    height: 100px;
    width: 300px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 24px;
    cursor: pointer;
    margin: 10px 20px;
    box-shadow: 0px 0px 10px 10px rgba(170, 44, 255, 0.4);
`

const RightButton = styled(LeftButton)`
    background-color: rgba(170, 44, 255, 0.6);
    opacity: 1;
    color: white;
`

const Buttons = styled.div`
margin-top: 300px;

`

const ItemText1 = styled.div`
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;    
    height: 100vh; 
`

const ItemText2 = styled.div`
    text-align: left;
    justify-content: center;
    align-items: center;
    display: flex;
    margin-bottom: 50px;    
`

const ItemText3 = styled.div`
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    margin-bottom: 150px;
    margin-top:250px;
    bottom: 0;   
`

function handleMouseEnter2(e) {
  e.target.className = 'mouseEnterButtons2';
}

function handleMouseLeave2(e) {
  e.target.className = 'mouseLeaveButtons2';
}

