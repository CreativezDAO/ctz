import React, { useState, useEffect, useRef } from 'react'
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
  const [RewardDay, setRewardDay] = useState (new Date ());
  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  async function pushTheBeQiButton(){

    let options = {
      contractAddress: "0x0bB982cd7E4D21E58F666188263f7FE4EB6Feb51",
      functionName: "pushTheButton",
      abi: [{"inputs":[],"name":"pushTheButton","outputs":[],"stateMutability":"payable","type":"function"}],
      params: {}
    }

    await contractProcessor.fetch({
      params: options,
      onSuccess: () => {
        
      },
      onError: (error) => {
        alert(error.data.message)
      }
    });
  }

  async function pushTheWETHWMATICButton(){

    let options = {
      contractAddress: "0x42FCCCDaa78a5681F5F92C66758be1fFC8971210",
      functionName: "pushTheButton",
      abi: [{"inputs":[],"name":"pushTheButton","outputs":[],"stateMutability":"payable","type":"function"}],
      params: {}
    }

    await contractProcessor.fetch({
      params: options,
      onSuccess: () => {
        
      },
      onError: (error) => {
        alert(error.data.message)
      }
    });
  }

  async function pushTheBNBWMATICButton(){

    let options = {
      contractAddress: "0xddD74378031F946d21c547DBe1F926aaC1E6AD82",
      functionName: "pushTheButton",
      abi: [{"inputs":[],"name":"pushTheButton","outputs":[],"stateMutability":"payable","type":"function"}],
      params: {}
    }

    await contractProcessor.fetch({
      params: options,
      onSuccess: () => {
        
      },
      onError: (error) => {
        alert(error.data.message)
      }
    });
  }

  async function pushTheUSDCDAIButton(){

    let options = {
      contractAddress: "0x576F044C2cB7636D94366136c73d174E6a32b8fC",
      functionName: "pushTheButton",
      abi: [{"inputs":[],"name":"pushTheButton","outputs":[],"stateMutability":"payable","type":"function"}],
      params: {}
    }

    await contractProcessor.fetch({
      params: options,
      onSuccess: () => {
        
      },
      onError: (error) => {
        alert(error.data.message)
      }
    });
  }

  async function pushTheBananaWMATICButton(){

    let options = {
      contractAddress: "0xFfde542cab2e1Ea70122fD28c070879750217a0D",
      functionName: "pushTheButton",
      abi: [{"inputs":[],"name":"pushTheButton","outputs":[],"stateMutability":"payable","type":"function"}],
      params: {}
    }

    await contractProcessor.fetch({
      params: options,
      onSuccess: () => {
        
      },
      onError: (error) => {
        alert(error.data.message)
      }
    });
  }

  async function pushTheBIFIButton(){

    let options = {
      contractAddress: "0xBaD0B643cf2704e62A4CF59696D59C72f934a5bf",
      functionName: "pushTheButton",
      abi: [{"inputs":[],"name":"pushTheButton","outputs":[],"stateMutability":"payable","type":"function"}],
      params: {}
    }

    await contractProcessor.fetch({
      params: options,
      onSuccess: () => {
        
      },
      onError: (error) => {
        alert(error.data.message)
      }
    });
  }

  async function pushThePayDayButton(){

    let options = {
      contractAddress: "0x54aDDE78c95C5E4017A70E51bB163A846b030BbF",
      functionName: "PayDay",
      abi: [{"inputs":[],"name":"PayDay","outputs":[],"stateMutability":"payable","type":"function"}],
      params: {}
    }

    await contractProcessor.fetch({
      params: options,
      onSuccess: () => {
        
      },
      onError: (error) => {
        alert(error.data.message)
      }
    });
  }

  async function pushTheRewardsButton(){

    let options = {
      contractAddress: "0x376f6ED38e4865D76b16f64940143444F4593b03",
      functionName: "buttonPushPayDay",
      abi: [{"inputs":[],"name":"buttonPushPayDay","outputs":[],"stateMutability":"payable","type":"function"}],
      params: {}
    }

    await contractProcessor.fetch({
      params: options,
      onSuccess: () => {
        
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

              useEffect(() => {
                async function calculateTimeLeftRewardDay () {
                const query = new Moralis.Query("ButtonPushRewardsTracking");
                query.descending("createdAt");
                const result = await query.first(); 
                let start = Number(result.attributes.block_timestamp);
                let timelocked = Number(result.attributes.timelocked);
                let end = Number(start+(timelocked*1000));
                const endDate = new Date(end); 
            
                setRewardDay(endDate);
                } 
            
                calculateTimeLeftRewardDay();
                }, [isInitialized]);

            const handleNetworkSwitch = async (networkName) => {
              setError();
              await changeNetwork({ networkName, setError });
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

            const login = async () => {                
                await Moralis.enableWeb3()
                await authenticate({signingMessage: "Sign To Connect" })
                  .then(function (user) {                             
                  })        
                  .catch(function (error) {
                  });
                window.location.reload();
              };
          


              const [USDCDAItimerDays, setUSDCDAITimerDays] = useState('00');
              const [USDCDAItimerHours, setUSDCDAITimerHours] = useState('00');
              const [USDCDAItimerMinutes, setUSDCDAITimerMinutes] = useState('00');
              const [USDCDAItimerSeconds, setUSDCDAITimerSeconds] = useState('00');
          
              let interval = useRef();
          
              const startTimerUSDCDAI = () => {
                  const countdownDate = new Date(USDCDAI).getTime();
          
                  interval = setInterval(() => {
                      const now = new Date().getTime();
                      const distance = countdownDate - now;
          
                      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                      const hours = Math.floor((distance %  (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
                      const minutes = Math.floor((distance %  (1000 * 60 * 60)) / (1000 * 60));
                      const seconds = Math.floor((distance %  (1000 * 60)) / 1000);
          
                      if (distance < 0) {
                          //stop our timer
                          clearInterval(interval.current);
                      } else {
                          //update timer
                          setUSDCDAITimerDays(days);
                          setUSDCDAITimerHours(hours);
                          setUSDCDAITimerMinutes(minutes);
                          setUSDCDAITimerSeconds(seconds);
                      }
          
                  }, 1000);
              };
          
              //componentDidMount
              useEffect(() => {
                  startTimerUSDCDAI();
                  return () => {
                      clearInterval(interval.current);
                  };
              });

              const [BIFItimerDays, setBIFITimerDays] = useState('00');
              const [BIFItimerHours, setBIFITimerHours] = useState('00');
              const [BIFItimerMinutes, setBIFITimerMinutes] = useState('00');
              const [BIFItimerSeconds, setBIFITimerSeconds] = useState('00');
          
              const startTimerBIFI = () => {
                  const countdownDate = new Date(BIFI).getTime();
          
                  interval = setInterval(() => {
                      const now = new Date().getTime();
                      const distance = countdownDate - now;
          
                      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                      const hours = Math.floor((distance %  (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
                      const minutes = Math.floor((distance %  (1000 * 60 * 60)) / (1000 * 60));
                      const seconds = Math.floor((distance %  (1000 * 60)) / 1000);
          
                      if (distance < 0) {
                          //stop our timer
                          clearInterval(interval.current);
                      } else {
                          //update timer
                          setBIFITimerDays(days);
                          setBIFITimerHours(hours);
                          setBIFITimerMinutes(minutes);
                          setBIFITimerSeconds(seconds);
                      }
          
                  }, 1000);
              };
          
              //componentDidMount
              useEffect(() => {
                  startTimerBIFI();
                  return () => {
                      clearInterval(interval.current);
                  };
              });

              const [BananaWMATICtimerDays, setBananaWMATICTimerDays] = useState('00');
              const [BananaWMATICtimerHours, setBananaWMATICTimerHours] = useState('00');
              const [BananaWMATICtimerMinutes, setBananaWMATICTimerMinutes] = useState('00');
              const [BananaWMATICtimerSeconds, setBananaWMATICTimerSeconds] = useState('00');
          
              const startTimerBananaWMATIC = () => {
                  const countdownDate = new Date(BananaWMATIC).getTime();
          
                  interval = setInterval(() => {
                      const now = new Date().getTime();
                      const distance = countdownDate - now;
          
                      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                      const hours = Math.floor((distance %  (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
                      const minutes = Math.floor((distance %  (1000 * 60 * 60)) / (1000 * 60));
                      const seconds = Math.floor((distance %  (1000 * 60)) / 1000);
          
                      if (distance < 0) {
                          //stop our timer
                          clearInterval(interval.current);
                      } else {
                          //update timer
                          setBananaWMATICTimerDays(days);
                          setBananaWMATICTimerHours(hours);
                          setBananaWMATICTimerMinutes(minutes);
                          setBananaWMATICTimerSeconds(seconds);
                      }
          
                  }, 1000);
              };
          
              //componentDidMount
              useEffect(() => {
                  startTimerBananaWMATIC();
                  return () => {
                      clearInterval(interval.current);
                  };
              });

              const [BNBWMATICtimerDays, setBNBWMATICTimerDays] = useState('00');
              const [BNBWMATICtimerHours, setBNBWMATICTimerHours] = useState('00');
              const [BNBWMATICtimerMinutes, setBNBWMATICTimerMinutes] = useState('00');
              const [BNBWMATICtimerSeconds, setBNBWMATICTimerSeconds] = useState('00');
          
              const startTimerBNBWMATIC = () => {
                  const countdownDate = new Date(BNBWMATIC).getTime();
          
                  interval = setInterval(() => {
                      const now = new Date().getTime();
                      const distance = countdownDate - now;
          
                      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                      const hours = Math.floor((distance %  (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
                      const minutes = Math.floor((distance %  (1000 * 60 * 60)) / (1000 * 60));
                      const seconds = Math.floor((distance %  (1000 * 60)) / 1000);
          
                      if (distance < 0) {
                          //stop our timer
                          clearInterval(interval.current);
                      } else {
                          //update timer
                          setBNBWMATICTimerDays(days);
                          setBNBWMATICTimerHours(hours);
                          setBNBWMATICTimerMinutes(minutes);
                          setBNBWMATICTimerSeconds(seconds);
                      }
          
                  }, 1000);
              };
          
              //componentDidMount
              useEffect(() => {
                  startTimerBNBWMATIC();
                  return () => {
                      clearInterval(interval.current);
                  };
              });

              const [WETHWMATICtimerDays, setWETHWMATICTimerDays] = useState('00');
              const [WETHWMATICtimerHours, setWETHWMATICTimerHours] = useState('00');
              const [WETHWMATICtimerMinutes, setWETHWMATICTimerMinutes] = useState('00');
              const [WETHWMATICtimerSeconds, setWETHWMATICTimerSeconds] = useState('00');
          
              const startTimerWETHWMATIC = () => {
                  const countdownDate = new Date(WETHWMATIC).getTime();
          
                  interval = setInterval(() => {
                      const now = new Date().getTime();
                      const distance = countdownDate - now;
          
                      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                      const hours = Math.floor((distance %  (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
                      const minutes = Math.floor((distance %  (1000 * 60 * 60)) / (1000 * 60));
                      const seconds = Math.floor((distance %  (1000 * 60)) / 1000);
          
                      if (distance < 0) {
                          //stop our timer
                          clearInterval(interval.current);
                      } else {
                          //update timer
                          setWETHWMATICTimerDays(days);
                          setWETHWMATICTimerHours(hours);
                          setWETHWMATICTimerMinutes(minutes);
                          setWETHWMATICTimerSeconds(seconds);
                      }
          
                  }, 1000);
              };
          
              //componentDidMount
              useEffect(() => {
                  startTimerWETHWMATIC();
                  return () => {
                      clearInterval(interval.current);
                  };
              });

              const [BeQitimerDays, setBeQiTimerDays] = useState('00');
              const [BeQitimerHours, setBeQiTimerHours] = useState('00');
              const [BeQitimerMinutes, setBeQiTimerMinutes] = useState('00');
              const [BeQitimerSeconds, setBeQiTimerSeconds] = useState('00');
          
              const startTimerBeQi = () => {
                  const countdownDate = new Date(BeQi).getTime();
          
                  interval = setInterval(() => {
                      const now = new Date().getTime();
                      const distance = countdownDate - now;
          
                      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                      const hours = Math.floor((distance %  (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
                      const minutes = Math.floor((distance %  (1000 * 60 * 60)) / (1000 * 60));
                      const seconds = Math.floor((distance %  (1000 * 60)) / 1000);
          
                      if (distance < 0) {
                          //stop our timer
                          clearInterval(interval.current);
                      } else {
                          //update timer
                          setBeQiTimerDays(days);
                          setBeQiTimerHours(hours);
                          setBeQiTimerMinutes(minutes);
                          setBeQiTimerSeconds(seconds);
                      }
          
                  }, 1000);
              };
          
              //componentDidMount
              useEffect(() => {
                  startTimerBeQi();
                  return () => {
                      clearInterval(interval.current);
                  };
              });

              const [PayDaytimerDays, setPayDayTimerDays] = useState('00');
              const [PayDaytimerHours, setPayDayTimerHours] = useState('00');
              const [PayDaytimerMinutes, setPayDayTimerMinutes] = useState('00');
              const [PayDaytimerSeconds, setPayDayTimerSeconds] = useState('00');
          
              const startTimerPayDay = () => {
                  const countdownDate = new Date(PayDay).getTime();
          
                  interval = setInterval(() => {
                      const now = new Date().getTime();
                      const distance = countdownDate - now;
          
                      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                      const hours = Math.floor((distance %  (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
                      const minutes = Math.floor((distance %  (1000 * 60 * 60)) / (1000 * 60));
                      const seconds = Math.floor((distance %  (1000 * 60)) / 1000);
          
                      if (distance < 0) {
                          //stop our timer
                          clearInterval(interval.current);
                      } else {
                          //update timer
                          setPayDayTimerDays(days);
                          setPayDayTimerHours(hours);
                          setPayDayTimerMinutes(minutes);
                          setPayDayTimerSeconds(seconds);
                      }
          
                  }, 1000);
              };
          
              //componentDidMount
              useEffect(() => {
                  startTimerPayDay();
                  return () => {
                      clearInterval(interval.current);
                  };
              });

              const [RewardDaytimerDays, setRewardDayTimerDays] = useState('00');
              const [RewardDaytimerHours, setRewardDayTimerHours] = useState('00');
              const [RewardDaytimerMinutes, setRewardDayTimerMinutes] = useState('00');
              const [RewardDaytimerSeconds, setRewardDayTimerSeconds] = useState('00');
          
              const startTimerRewardDay = () => {
                  const countdownDate = new Date(RewardDay).getTime();
          
                  interval = setInterval(() => {
                      const now = new Date().getTime();
                      const distance = countdownDate - now;
          
                      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                      const hours = Math.floor((distance %  (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
                      const minutes = Math.floor((distance %  (1000 * 60 * 60)) / (1000 * 60));
                      const seconds = Math.floor((distance %  (1000 * 60)) / 1000);
          
                      if (distance < 0) {
                          //stop our timer
                          clearInterval(interval.current);
                      } else {
                          //update timer
                          setRewardDayTimerDays(days);
                          setRewardDayTimerHours(hours);
                          setRewardDayTimerMinutes(minutes);
                          setRewardDayTimerSeconds(seconds);
                      }
          
                  }, 1000);
              };
          
              //componentDidMount
              useEffect(() => {
                  startTimerRewardDay();
                  return () => {
                      clearInterval(interval.current);
                  };
              });

           
  return (
    <Wrap>
    <video autoPlay loop muted style={{position: "absolute", width: "100%", left: "50%", top: "50%", height: "100%", objectFit: "cover", transform: "translate(-50%, -50%", zIndex: "-1"}}>
      <source src={background} type="video/mp4"/>
    </video>    
    <Fade top delay={100} duration={1200}>  
        <ItemText1>
        <p1 className = "p3"> <br/><p1 className = "p8">__</p1>THREE WAYS TO EARN FROM CRΞATIVΞZ <p1 className = "p8">__</p1> <br/><br/> <ItemText2><p1 className = "p6"> 1.  <p1 className = "p7">Hold a CRΞATIVΞZ NFT</p1> and receive MATIC fortnightly <br/>2. <p1 className = "p7">Push the buttons below for a small MATIC reward</p1> <br/>3. <p1 className = "p7">P2E Games in the Arcade Section of the DApp</p1></p1></ItemText2></p1>
        </ItemText1>
        </Fade>  
        <Wrap2>
        <div className='strip'><p1><br/></p1></div>
        <Buttons>
        <ItemImage3>
        <img src = "images/EarnMatic.png" alt="" className='ItemImage3'/>
        </ItemImage3>
        <ButtonTitles><p1 className="p10">Push the Buttons Below to Receive Matic in the Next Pay Cycle</p1></ButtonTitles> 
        <ButtonTitles><p1 className="p10">STAKING CONTRACTS<br/><p1 className="p9">( pushed every 1-2 days )</p1></p1></ButtonTitles>
        <ButtonGroup>    
            <div className='buttons5' onClick={() => { if(isAuthenticated) { pushTheBeQiButton()}else{handleNetworkSwitch("polygon"); login();}}}>{Number(BeQi) < Number(new Date()) ? <p1 className="p9">BeQi</p1> : <span><p1 className="p9">Next Push:<br/><TimerBoxes><p1 className="p21">{BeQi.toLocaleDateString(undefined, options)} - {BeQi.toLocaleTimeString()}<br/> {(() => {if(BeQitimerDays > 0){return <div>{BeQitimerDays} D {BeQitimerHours} H {BeQitimerMinutes} M {BeQitimerSeconds} S</div>} else if(BeQitimerHours > 0){return <div>{BeQitimerHours} H {BeQitimerMinutes} M {BeQitimerSeconds} S</div>} else if(BeQitimerMinutes > 0) {return <div>{BeQitimerMinutes} M {BeQitimerSeconds} S</div>} else {return <div>{BeQitimerSeconds} S</div>}})()} </p1></TimerBoxes></p1></span>}</div>
            <div className='buttons5' onClick={() => { if(isAuthenticated) { pushTheWETHWMATICButton()}else{handleNetworkSwitch("polygon"); login();}}}>{Number(WETHWMATIC) < Number(new Date()) ? <p1 className="p9">ETH / MATIC</p1> : <span><p1 className="p9">Next Push:<br/><TimerBoxes><p1 className="p21">{WETHWMATIC.toLocaleDateString(undefined, options)} - {WETHWMATIC.toLocaleTimeString()}<br/> {(() => {if(WETHWMATICtimerDays > 0){return <div>{WETHWMATICtimerDays} D {WETHWMATICtimerHours} H {WETHWMATICtimerMinutes} M {WETHWMATICtimerSeconds} S</div>} else if(WETHWMATICtimerHours > 0){return <div>{WETHWMATICtimerHours} H {WETHWMATICtimerMinutes} M {WETHWMATICtimerSeconds} S</div>} else if(WETHWMATICtimerMinutes > 0) {return <div>{WETHWMATICtimerMinutes} M {WETHWMATICtimerSeconds} S</div>} else {return <div>{WETHWMATICtimerSeconds} S</div>}})()} </p1></TimerBoxes></p1></span>}</div>
            <div className='buttons5' onClick={() => { if(isAuthenticated) { pushTheBNBWMATICButton()}else{handleNetworkSwitch("polygon"); login();}}}>{Number(BNBWMATIC) < Number(new Date()) ? <p1 className="p9">BNB / MATIC</p1> : <span><p1 className="p9">Next Push:<br/><TimerBoxes><p1 className="p21">{BNBWMATIC.toLocaleDateString(undefined, options)} - {BNBWMATIC.toLocaleTimeString()}<br/> {(() => {if(BNBWMATICtimerDays > 0){return <div>{BNBWMATICtimerDays} D {BNBWMATICtimerHours} H {BNBWMATICtimerMinutes} M {BNBWMATICtimerSeconds} S</div>} else if(BNBWMATICtimerHours > 0){return <div>{BNBWMATICtimerHours} H {BNBWMATICtimerMinutes} M {BNBWMATICtimerSeconds} S</div>} else if(BNBWMATICtimerMinutes > 0) {return <div>{BNBWMATICtimerMinutes} M {BNBWMATICtimerSeconds} S</div>} else {return <div>{BNBWMATICtimerSeconds} S</div>}})()} </p1></TimerBoxes></p1></span>}</div>
        </ButtonGroup>
        <ButtonGroup>
            <div className='buttons5' onClick={() => { if(isAuthenticated) { pushTheUSDCDAIButton()}else{handleNetworkSwitch("polygon"); login();}}}>{Number(USDCDAI) < Number(new Date()) ? <p1 className="p9">USDC / DAI</p1> : <span><p1 className="p9">Next Push:<br/><TimerBoxes><p1 className="p21">{USDCDAI.toLocaleDateString(undefined, options)} - {USDCDAI.toLocaleTimeString()}<br/>{(() => {if(USDCDAItimerDays > 0){return <div>{USDCDAItimerDays} D {USDCDAItimerHours} H {USDCDAItimerMinutes} M {USDCDAItimerSeconds} S</div>} else if(USDCDAItimerHours > 0){return <div>{USDCDAItimerHours} H {USDCDAItimerMinutes} M {USDCDAItimerSeconds} S</div>} else if(USDCDAItimerMinutes > 0) {return <div>{USDCDAItimerMinutes} M {USDCDAItimerSeconds} S</div>} else {return <div>{USDCDAItimerSeconds} S</div>}})()} </p1></TimerBoxes></p1></span>}</div>
            <div className='buttons5' onClick={() => { if(isAuthenticated) { pushTheBananaWMATICButton()}else{handleNetworkSwitch("polygon"); login();}}}>{Number(BananaWMATIC) < Number(new Date()) ? <p1 className="p9">BANANA / MATIC</p1> : <span><p1 className="p9">Next Push:<br/><TimerBoxes><p1 className="p21">{BananaWMATIC.toLocaleDateString(undefined, options)} - {BananaWMATIC.toLocaleTimeString()}<br/> {(() => {if(BananaWMATICtimerDays > 0){return <div>{BananaWMATICtimerDays} D {BananaWMATICtimerHours} H {BananaWMATICtimerMinutes} M {BananaWMATICtimerSeconds} S</div>} else if(BananaWMATICtimerHours > 0){return <div>{BananaWMATICtimerHours} H {BananaWMATICtimerMinutes} M {BananaWMATICtimerSeconds} S</div>} else if(BananaWMATICtimerMinutes > 0) {return <div>{BananaWMATICtimerMinutes} M {BananaWMATICtimerSeconds} S</div>} else {return <div>{BananaWMATICtimerSeconds} S</div>}})()} </p1></TimerBoxes></p1></span>}</div>
            <div className='buttons5' onClick={() => { if(isAuthenticated) { pushTheBIFIButton()}else{handleNetworkSwitch("polygon"); login();}}}>{Number(BIFI) < Number(new Date()) ? <p1 className="p9">BIFI</p1> : <span><p1 className="p9">Next Push:<br/><TimerBoxes><p1 className="p21">{BIFI.toLocaleDateString(undefined, options)} - {BIFI.toLocaleTimeString()}<br/> {(() => {if(BIFItimerDays > 0){return <div>{BIFItimerDays} D {BIFItimerHours} H {BIFItimerMinutes} M {BIFItimerSeconds} S</div>} else if(BIFItimerHours > 0){return <div>{BIFItimerHours} H {BIFItimerMinutes} M {BIFItimerSeconds} S</div>} else if(BIFItimerMinutes > 0) {return <div>{BIFItimerMinutes} M {BIFItimerSeconds} S</div>} else {return <div>{BIFItimerSeconds} S</div>}})()} </p1></TimerBoxes></p1></span>}</div>
        </ButtonGroup> 
        <ButtonTitles><p1 className = "p10">PAY NFT HOLDERS<br/><p1 className="p9">( pushed every 14 days )</p1></p1></ButtonTitles>
        <ButtonGroup>
            <div className='buttons5' onClick={() => { if(isAuthenticated) { pushThePayDayButton()}else{handleNetworkSwitch("polygon"); login();}}}>{Number(PayDay) < Number(new Date()) ? <p1 className="p9">NFT HOLDER REWARDS</p1> : <span><p1 className="p9">Next Push:<br/><TimerBoxes><p1 className="p21">{PayDay.toLocaleDateString(undefined, options)} - {PayDay.toLocaleTimeString()}<br/> {(() => {if(PayDaytimerDays > 0){return <div>{PayDaytimerDays} D {PayDaytimerHours} H {PayDaytimerMinutes} M {PayDaytimerSeconds} S</div>} else if(PayDaytimerHours > 0){return <div>{PayDaytimerHours} H {PayDaytimerMinutes} M {PayDaytimerSeconds} S</div>} else if(PayDaytimerMinutes > 0) {return <div>{PayDaytimerMinutes} M {PayDaytimerSeconds} S</div>} else {return <div>{PayDaytimerSeconds} S</div>}})()} </p1></TimerBoxes></p1></span>}</div>
        </ButtonGroup>
        <ButtonTitles><p1 className = "p10">PAY BUTTON PUSHING<br/><p1 className="p9">( pushed every 14 days )</p1></p1></ButtonTitles>
        <ButtonGroup>
            <div className='buttons5' onClick={() => { if(isAuthenticated) { pushTheRewardsButton()}else{handleNetworkSwitch("polygon"); login();}}}>{Number(RewardDay) < Number(new Date()) ? <p1 className="p9">BUTTON PUSHING REWARDS</p1> : <span><p1 className="p9">Next Push:<br/><TimerBoxes><p1 className="p21">{RewardDay.toLocaleDateString(undefined, options)} - {RewardDay.toLocaleTimeString()}<br/> {(() => {if(RewardDaytimerDays > 0){return <div>{RewardDaytimerDays} D {RewardDaytimerHours} H {RewardDaytimerMinutes} M {RewardDaytimerSeconds} S</div>} else if(RewardDaytimerHours > 0){return <div>{RewardDaytimerHours} H {RewardDaytimerMinutes} M {RewardDaytimerSeconds} S</div>} else if(RewardDaytimerMinutes > 0) {return <div>{RewardDaytimerMinutes} M {RewardDaytimerSeconds} S</div>} else {return <div>{RewardDaytimerSeconds} S</div>}})()} </p1></TimerBoxes></p1></span>}</div>
        </ButtonGroup>
        </Buttons> 
        <Spacer/>
        <div className='strip'><p1><br/></p1></div>
        <ItemImage2>
          <img src = "images/Creativez_Reward_Title.png" alt="" className='ItemImage6'/> 
          <img src = "images/Creativez_Rewards_Structure.png" alt="" className='ItemImage2'/> 
        </ItemImage2>
        <div className='strip'><p1><br/></p1></div>
        <ItemImage>
          <img src = "images/Rewards_Info.png" alt="" className='ItemImage7'/> 
        </ItemImage> 
        <ItemImage4>
          <img src = "images/Crystals_Large.png" alt="" className=''/>
        </ItemImage4>                     
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

const TimerBoxes = styled.div`
    text-align: center;
    align-items: center;
    justify-content:left;
    flex-direction: row;
    display: flex;
    @media (max-width: 1550px) {
  flex-direction: column;
  justify-content:center;
}
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
    margin-bottom: 30px;
    justify-content: center;
    z-index: 100;
    height:100%;
    @media (max-width: 1000px) {
      flex-direction: column;
      align-items: center;
    }
`

const Buttons = styled.div`
margin-top: 70px;

`

const ItemText1 = styled.div`
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;    
    height: 100vh; 

    @media (max-width: 790px) {
      flex-direction: row;
      align-items: center;
      width: 90vw;
      justify-content: center;
      font-size:80%;
    }
`

const ItemText2 = styled.div`
    text-align: left;
    justify-content: center;
    align-items: center;
    display: flex;
    margin-bottom: 50px;  
    
    @media (max-width: 600px) {
      text-align: center;
    }
  
`

const ItemImage = styled.div`
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    max-width: 100%;
    overflow-x: hidden;
    margin-top: 50px;
`

const ItemImage2 = styled.div`
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    max-width: 100%;
    overflow-x: hidden;
    margin-bottom: 100px;
    margin-top: 100px;
    flex-direction: column;
`

const ItemImage3 = styled.div`
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    max-width: 100%;
    overflow-x: hidden;
`

const ItemImage4 = styled.div`
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    max-width: 100%;
    overflow-x: hidden;
`

const Spacer = styled.div`
  margin-top:80px;
`