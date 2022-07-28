import React, { useState, useEffect } from 'react'
import {useWeb3ExecuteFunction, useMoralis } from "react-moralis"
import styled from "styled-components"
import Fade from 'react-reveal/Fade'
import Footer from './Footer'
import background from '../animations/polygon.mp4'

const Earn = () => {
  const contractProcessor = useWeb3ExecuteFunction();
  const {Moralis, isInitialized, isAuthenticated, authenticate} = useMoralis();
  const [BeQi, setBeQi] = useState (new Date ());
  const [WETHWMATIC, setWETHWMATIC] = useState (new Date ());
  const [BNBWMATIC, setBNBWMATIC] = useState (new Date ());
  const [USDCDAI, setUSDCDAI] = useState (new Date ());
  const [BananaWMATIC, setBananaWMATIC] = useState (new Date ());
  const [BIFI, setBIFI] = useState (new Date ());
  const [PayDay, setPayDay] = useState (new Date ());
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

  async function pushThePayDayButton(){

    let options = {
      contractAddress: "0xfC3C67A891B071aDE3d7aDE1e0e2b71be265AAb0",
      functionName: "PayDay",
      abi: [{"inputs":[],"name":"PayDay","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Receiver","outputs":[],"stateMutability":"payable","type":"function"}],
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

            useEffect(() => {
              async function calculateTimeLeftPayDay () {
              const query = new Moralis.Query("PayDayCycle");
              query.descending("createdAt");
              const result = await query.first(); 
              let start = Number(result.attributes.block_timestamp);
              let timelocked = Number(result.attributes.timelocked);
              let end = Number(start+(timelocked*1000));
              const endDate = new Date(end); 
          
              setPayDay(endDate);
              } 
          
              calculateTimeLeftPayDay();
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
    <Fade top delay={100} duration={1200}>  
        <ItemText1>
        <p1 className = "p3"> <br/><p1 className = "p8">__</p1>THREE WAYS TO EARN FROM CRΞATIVΞZ <p1 className = "p8">__</p1> <br/><br/> <ItemText2><p1 className = "p6"> 1.  <p1 className = "p7">Hold a CRΞATIVΞZ NFT</p1> and receive a MATIC airdrop fortnightly <br/>2. <p1 className = "p7">Push the buttons below for a small MATIC reward</p1> <br/>3. <p1 className = "p7">TBA</p1></p1></ItemText2></p1>
        </ItemText1>
        </Fade>  
        <Wrap2>
        <div className='strip'><p1><br/></p1></div>
        <Buttons>
        <ButtonTitles><p1 className="p10">Staking Contracts</p1></ButtonTitles>
        <ButtonGroup>    
            <div className='buttons5' onClick={() => { if(isAuthenticated) { pushTheBeQiButton()}else{handleNetworkSwitch("polygon"); login();}}}>{Number(BeQi) < Number(new Date()) ? <p1 className="p9">Earn 0.2 Matic</p1> : <span><p1 className="p9">Push This Button On:<br/>{BeQi.toLocaleDateString(undefined, options)} - {BeQi.toLocaleTimeString()}</p1></span>}</div>
            <div className='buttons5' onClick={() => { if(isAuthenticated) { pushTheWETHWMATICButton()}else{handleNetworkSwitch("polygon"); login();}}}>{Number(WETHWMATIC) < Number(new Date()) ? <p1 className="p9">Earn 0.2 Matic</p1> : <span><p1 className="p9">Push This Button On:<br/>{WETHWMATIC.toLocaleDateString(undefined, options)} - {WETHWMATIC.toLocaleTimeString()}</p1></span>}</div>
            <div className='buttons5' onClick={() => { if(isAuthenticated) { pushTheBNBWMATICButton()}else{handleNetworkSwitch("polygon"); login();}}}>{Number(BNBWMATIC) < Number(new Date()) ? <p1 className="p9">Earn 0.2 Matic</p1> : <span><p1 className="p9">Push This Button On:<br/>{BNBWMATIC.toLocaleDateString(undefined, options)} - {BNBWMATIC.toLocaleTimeString()}</p1></span>}</div>
        </ButtonGroup>
        <ButtonGroup>
            <div className='buttons5' onClick={() => { if(isAuthenticated) { pushTheUSDCDAIButton()}else{handleNetworkSwitch("polygon"); login();}}}>{Number(USDCDAI) < Number(new Date()) ? <p1 className="p9">Earn 0.2 Matic</p1> : <span><p1 className="p9">Push This Button On:<br/>{USDCDAI.toLocaleDateString(undefined, options)} - {USDCDAI.toLocaleTimeString()}</p1></span>}</div>
            <div className='buttons5' onClick={() => { if(isAuthenticated) { pushTheBananaWMATICButton()}else{handleNetworkSwitch("polygon"); login();}}}>{Number(BananaWMATIC) < Number(new Date()) ? <p1 className="p9">Earn 0.2 Matic</p1> : <span><p1 className="p9">Push This Button On:<br/>{BananaWMATIC.toLocaleDateString(undefined, options)} - {BananaWMATIC.toLocaleTimeString()}</p1></span>}</div>
            <div className='buttons5' onClick={() => { if(isAuthenticated) { pushTheBIFIButton()}else{handleNetworkSwitch("polygon"); login();}}}>{Number(BIFI) < Number(new Date()) ? <p1 className="p9">Earn 0.2 Matic</p1> : <span><p1 className="p9">Push This Button On:<br/>{BIFI.toLocaleDateString(undefined, options)} - {BIFI.toLocaleTimeString()}</p1></span>}</div>
        </ButtonGroup> 
        <ButtonTitles><p1 className = "p10">Pay Day</p1></ButtonTitles>
        <ButtonGroup>
            <div className='buttons5' onClick={() => { if(isAuthenticated) { pushThePayDayButton()}else{handleNetworkSwitch("polygon"); login();}}}>{Number(USDCDAI) < Number(new Date()) ? <p1 className="p9">Earn 0.5 Matic</p1> : <span><p1 className="p9">Push This Button On:<br/>{PayDay.toLocaleDateString(undefined, options)} - {PayDay.toLocaleTimeString()}</p1></span>}</div>
        </ButtonGroup>
        </Buttons> 
        <ItemImage>
          <img src = "images/Rewards_Info.png" alt="" className='ItemImage2'/> 
        </ItemImage>                     
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
    margin-top: 0px;
    margin-bottom: 0px;
    justify-content: center;
    z-index: 100;
    height:100%;
    @media (max-width: 1000px) {
      flex-direction: column;
      align-items: center;
    }
`

const ButtonTitles = styled.div`
    display: flex;
    margin-top: 80px;
    margin-bottom: 20px;
    justify-content: center;
    z-index: 100;
    height:100%;
    @media (max-width: 1000px) {
      flex-direction: column;
      align-items: center;
    }
`

const Buttons = styled.div`
margin-top: 250px;

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

const ItemImage = styled.div`
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    margin-bottom: 130px;
    margin-top: 100px;
    max-width: 100%;
`



