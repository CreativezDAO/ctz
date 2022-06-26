import React, {useState, useEffect} from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade'
import ReactCardFlip from 'react-card-flip'
import animationData from '../animations/animationTitleV7.json'
import Lottie from "react-lottie"
import Footer from './Footer';
import background from '../animations/CyberPunkBackground.mp4'
import {useWeb3ExecuteFunction, useMoralisWeb3Api, useMoralis } from "react-moralis"

function Section() {  

    const {Moralis, isInitialized, isAuthenticated, authenticate, user} = useMoralis();

    const [Minted, setMinted] = useState (String ());

    const [presale, setPresale] = useState (Boolean ());

    const [freeMint, setFreeMint] = useState (Boolean ());

    useEffect(() => {
      async function calculateMinted () {
      const query = new Moralis.Query("MintTotal");
      query.descending("supply_decimal");
      const result = await query.first(); 
      const minted = String(result.attributes.supply);
  
      setMinted(minted);
      } 
  
      calculateMinted(); 
      }, [isInitialized]);

      useEffect(() => {
        async function checkPresaleList () {
        const query = new Moralis.Query("MintTracker");
        query.descending("createdAt");
        const currentAddress = user.get("ethAddress")
        query.equalTo("userAddress", currentAddress);
        const test = await query.count();
        console.log(test);
        if (test === 0){
          const notOnList = Boolean(false);      
          setFreeMint(notOnList);
          setPresale(notOnList);
          console.log(notOnList);
        }
        else {
          const result = await query.first();
          const presaleList = result.attributes.presale;
          console.log(presaleList);
          setFreeMint(presaleList);}
        }  
    
        checkPresaleList();
        }, [isInitialized]); 

        useEffect(() => {
          async function checkFreeMintList () {
          const query = new Moralis.Query("MintTracker");
          query.descending("createdAt");
          const currentAddress = user.get("ethAddress")
          query.equalTo("userAddress", currentAddress);
          const test = await query.count();
          console.log(test);
          if (test === 0){
            const notOnList = Boolean(false);      
            setFreeMint(notOnList);
            setPresale(notOnList);
            console.log(notOnList);
          }
          else {
            const result = await query.first();
            const freeMintList = result.attributes.freeMint;
            console.log(freeMintList);
            setFreeMint(freeMintList);}
          }  
      
          checkFreeMintList();
          }, [isInitialized]); 

    const [isFlipped1, setIsFlipped1] = useState(false);

    const [isFlipped2, setIsFlipped2 ] = useState(false);
    
    const [isFlipped3, setIsFlipped3 ] = useState(false);

    const [isFlipped4, setIsFlipped4 ] = useState(false);
  
    const handleClick1 = () => {
      setIsFlipped1(!isFlipped1);
    }

    const handleClick2 = () => {
        setIsFlipped2(!isFlipped2);
      }

    const handleClick3 = () => {
        setIsFlipped3(!isFlipped3);
      }

    const handleClick4 = () => {
        setIsFlipped4(!isFlipped4);
      }

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    }

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

  return (
    <Wrap>  
        <ItemTitle>
        <video autoPlay loop muted style={{position: "absolute", width: "100%", left: "50%", top: "50%", height: "100%", objectFit: "cover", transform: "translate(-50%, -50%", zIndex: "-1"}}>
          <source src={background} type="video/mp4"/>
        </video>  
          <Lottie options ={defaultOptions}/>          
        </ItemTitle>
        <Fade bottom>
        <Spacer/>
        <CardBox> 
        <ReactCardFlip isFlipped={isFlipped1} flipDirection="horizontal">    
        <div className='card' onClick={ handleClick1 }>
          <div className='cardInsideBorder'>          
            <div className='imageBorderFront'>
              <img src = "images/speckled-light.jpg" alt="CardPic" className='imageFront'/> 
            </div>
            <div className='textOnFrontCardBorder'>
            <div className='textOnFrontCard'>HUMAN</div>
            </div>
          </div>         
        </div> 
        <div className='card' onClick={ handleClick1 }>
        <div className='cardInsideBorder'> 
        <div className='textBorderBack2'>      
            <div className='textBorderBack1'>
            <div>
              <div className='card__header'>
                <img src="/images/human.svg" alt="" className='pp' />
                <h2>Human</h2>
              </div>
              <div className='card__body'>
                <h3>40%</h3>
                <p>2000 HUMANS will be in the CRΞATIVΞZ NFT Collection.</p>
              </div>
            </div>
            </div>   
            </div>
          </div>
        </div> 
        </ReactCardFlip>       
        <ReactCardFlip isFlipped={isFlipped2} flipDirection="horizontal">
        <div className='card' onClick={ handleClick2 }>
          <div className='cardInsideBorder'>          
            <div className='imageBorderFront'>
              <img src = "images/speckled-light.jpg" alt="CardPic" className='imageFront'/> 
            </div>
            <div className='textOnFrontCardBorder'>
            <div className='textOnFrontCard'>CYBERPUNK</div>
            </div>
          </div>         
        </div> 
        <div className='card' onClick={ handleClick2 }>
        <div className='cardInsideBorder'> 
        <div className='textBorderBack2'>      
            <div className='textBorderBack1'>
            <div>
              <div className='card__header'>
                <img src="/images/human.svg" alt="" className='pp' />
                <h2>CYBERPUNK</h2>
              </div>
              <div className='card__body'>
                <h3>30%</h3>
                <p>1500 CYBERPUNKS will be in the CRΞATIVΞZ NFT Collection.</p>
              </div>
            </div>
            </div>   
            </div>
          </div>
        </div> 
        </ReactCardFlip>
        <ReactCardFlip isFlipped={isFlipped3} flipDirection="horizontal">    
        <div className='card' onClick={ handleClick3 }>
          <div className='cardInsideBorder'>          
            <div className='imageBorderFront'>
              <img src = "images/speckled-light.jpg" alt="CardPic" className='imageFront'/> 
            </div>
            <div className='textOnFrontCardBorder'>
            <div className='textOnFrontCard'>UNDEAD</div>
            </div>
          </div>         
        </div> 
        <div className='card' onClick={ handleClick3 }>
        <div className='cardInsideBorder'> 
        <div className='textBorderBack2'>      
            <div className='textBorderBack1'>
            <div>
              <div className='card__header'>
                <img src="/images/human.svg" alt="" className='pp' />
                <h2>UNDEAD</h2>
              </div>
              <div className='card__body'>
                <h3>20%</h3>
                <p>1000 UNDEAD will be in the CRΞATIVΞZ NFT Collection.</p>
              </div>
            </div>
            </div>   
            </div>
          </div>
        </div> 
        </ReactCardFlip>  
        <ReactCardFlip isFlipped={isFlipped4} flipDirection="horizontal">    
        <div className='card' onClick={ handleClick4 }>
          <div className='cardInsideBorder'>          
            <div className='imageBorderFront'>
              <img src = "images/speckled-light.jpg" alt="CardPic" className='imageFront'/> 
            </div>
            <div className='textOnFrontCardBorder'>
            <div className='textOnFrontCard'>EXOTIC</div>
            </div>
          </div>         
        </div> 
        <div className='card' onClick={ handleClick4 }>
        <div className='cardInsideBorder'> 
        <div className='textBorderBack2'>      
            <div className='textBorderBack1'>
            <div>
              <div className='card__header'>
                <img src="/images/human.svg" alt="" className='pp' />
                <h2>EXOTIC</h2>
              </div>
              <div className='card__body'>
                <h3>10%</h3>
                <p>500 EXOTICS will be in the CRΞATIVΞZ NFT Collection.</p>
              </div>
            </div>
            </div>   
            </div>
          </div>
        </div>  
        </ReactCardFlip>                
        </CardBox>
        <Spacer/>        
        </Fade>        
        <Buttons>
        <Fade bottom>
        <ItemText2>
            <p1 className = "p12">{Minted} / 5000</p1>
            </ItemText2>   
            <ButtonGroup>
                <LeftButton onClick={() => {if(!isAuthenticated) { handleNetworkSwitch("polygon"); login();}else if({freeMint} === true){<p1>free mint</p1>} else if({presale} ===true){<p1>presale</p1>} else{<p1>public sale</p1>}}} onMouseEnter={ handleMouseEnter3 } onMouseLeave={ handleMouseLeave3 }>{{freeMint} ? <p1>freeMint</p1> : <span><p1>publicMint</p1></span>}</LeftButton>
            </ButtonGroup>
            <ItemText2>
            <p1 className = "p1">CRΞATIVΞZ is an automated reward distributor DAO NFT collection with 5000 unique randomly <br/> generated artworks on the Polygon Network with an integrated Matic airdrop every fortnight.</p1>   
            </ItemText2>            
        </Fade>
        </Buttons> 
        <Footer />
        </Wrap>       
  )
}


export default Section

const Spacer = styled.div`
    height: 5px;
    width: 100vw;
    justify-content: center;
    align-items: center;
    position: absolute;
`

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const ItemTitle = styled.div`
    margin-top: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    @media (max-width: 1100px) {
      height: 100%;
      width: 100%;
    }
`

const ItemText2 = styled.div`
    text-align: center;
    justify-content:center;
    margin-top: 5vh;    
`

const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    z-index: 100;
    margin-top: 5vh;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
`

const CardBox = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: 40vh;
@media (max-width: 1800px) {
  flex-wrap: wrap;
  margin: 25px 200px;
  align-items: center;
  justify-content: center;
  height: 1000px;
}
@media (max-width: 1300px) {
  flex-wrap: wrap;
  margin: 25px 100px;
  align-items: center;
  justify-content: center;
}
@media (max-width: 980px) {
  margin: 25px 100px;
  align-items: center;
  justify-content: center;
  height: 2000px;
}
`

const LeftButton = styled.div`
    background-color: rgba(170, 44, 255, 1);
    height: 60px;
    width: 200px;
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

const Buttons = styled.div`
    height: 45vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    margin-bottom: 70px;
`

  function handleMouseEnter3(e) {
    e.target.className = 'mouseEnterButtons3';
  }

  function handleMouseLeave3(e) {
    e.target.className = 'mouseLeaveButtons3';
  }

