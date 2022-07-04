import React, {useState, useEffect} from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade'
import ReactCardFlip from 'react-card-flip'
import animationData from '../animations/animationTitleV7.json'
import Lottie from "react-lottie"
import Footer from './Footer';
import PresaleInfo from './PresaleInfo';
import FreeMintInfo from './FreeMintInfo';
import PublicsaleInfo from './PublicsaleInfo';
import WalletConnectInfo from './WalletConnectInfo';
import MintedOutInfo from './MintedOutInfo';
import background from '../animations/CyberPunkBackground.mp4'
import {useWeb3ExecuteFunction, useMoralisWeb3Api, useMoralis } from "react-moralis"

function Section() {    

    const {Moralis, isInitialized, isAuthenticated, user} = useMoralis();
    const [Minted, setMinted] = useState (String ());
    const [presale, setPresale] = useState (Boolean());
    const [publicsale, setPublicsale] = useState (Boolean);
    const [freeMint, setFreeMint] = useState (Boolean);

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
          async function checkLists () {
          const query = new Moralis.Query("MintTracker");
          query.descending("createdAt");
          const currentAddress = user.get("ethAddress")
          query.equalTo("userAddress", currentAddress);
          const test = await query.count();
          if (test === 0){
            const notOnList = Boolean(true);      
            setPublicsale(notOnList);
          }
          else {
            const result = await query.first();
            const freeMintList = result.attributes.freeMint;
            const presaleList = result.attributes.presale;
            setFreeMint(freeMintList);          
            setPresale(presaleList);         
          }}          
      
          checkLists();
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
              <img src = "images/Creativez_Human.jpg" alt="CardPic" className='imageFront'/> 
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
            <p1 className = "p14">{Minted} / 5000</p1>
        </ItemText2>   
        <ButtonGroup>
          {(() => {if(Minted === "5000"){return <MintedOutInfo/>} else if(!isAuthenticated){return <WalletConnectInfo/>} else if(Boolean(freeMint) === true) {return <FreeMintInfo/>} else if (Boolean(presale) === true){return <PresaleInfo/>} else {return <PublicsaleInfo/>}})()}
        </ButtonGroup>
            <ItemText2>
            <p1 className = "p1">CRΞATIVΞZ is an automated reward distributor NFT collection with 5000 unique randomly <br/> generated artworks on the Polygon Network with an integrated Matic airdrop every fortnight.</p1>   
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

