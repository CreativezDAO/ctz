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
import {useMoralis } from "react-moralis"

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
        <Wrap2>
        <CardBox> 
        <ReactCardFlip isFlipped={isFlipped1} flipDirection="horizontal">    
        <div className='card' onClick={ handleClick1 }>
          <img src = "images/Human_Card_Back.jpg" alt="CardPic" className='image'/>     
        </div> 
        <div className='card' onClick={ handleClick1 }>
          <img src = "images/Human_Card_Back.jpg" alt="CardPic" className='image'/>     
        </div>           
        </ReactCardFlip>       
        <ReactCardFlip isFlipped={isFlipped2} flipDirection="horizontal">
        <div className='card' onClick={ handleClick2 }>
          <img src = "images/Cyberpunk_Card_Back.jpg" alt="CardPic" className='image'/>     
        </div> 
        <div className='card' onClick={ handleClick2 }>
          <img src = "images/Cyberpunk_Card_Back.jpg" alt="CardPic" className='image'/>     
        </div>   
        </ReactCardFlip>
        <ReactCardFlip isFlipped={isFlipped3} flipDirection="horizontal">    
        <div className='card' onClick={ handleClick3 }>
          <img src = "images/Undead_Card_Back.jpg" alt="CardPic" className='image'/>     
        </div> 
        <div className='card' onClick={ handleClick3 }>
          <img src = "images/Undead_Card_Back.jpg" alt="CardPic" className='image'/>     
        </div>   
        </ReactCardFlip>  
        <ReactCardFlip isFlipped={isFlipped4} flipDirection="horizontal">    
        <div className='card' onClick={ handleClick4 }>
          <img src = "images/Exotic_Card_Back.jpg" alt="CardPic" className='image'/>     
        </div> 
        <div className='card' onClick={ handleClick4 }>
          <img src = "images/Exotic_Card_Back.jpg" alt="CardPic" className='image'/>     
        </div> 
        </ReactCardFlip>                
        </CardBox>             
        <Buttons>
        <Fade bottom>
        <ItemText3>
            <p1 className = "p14">{Minted} / 5000</p1>
        </ItemText3>   
        <ButtonGroup>
          {(() => {if(Minted === "5000"){return <MintedOutInfo/>} else if(!isAuthenticated){return <WalletConnectInfo/>} else if(Boolean(freeMint) === true) {return <FreeMintInfo/>} else if (Boolean(presale) === true){return <PresaleInfo/>} else {return <PublicsaleInfo/>}})()}
        </ButtonGroup>
            <ItemText2>
            <p1 className = "p1">CRΞATIVΞZ is an automated reward distributor NFT collection with 5000 unique randomly <br/> generated artworks on the Polygon Network with an integrated Matic airdrop every fortnight.</p1>   
            </ItemText2>            
        </Fade>
        </Buttons> 
        <Footer />
        </Wrap2>
        </Wrap>       
  )
}


export default Section

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const Wrap2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: white;
`

const ItemTitle = styled.div`
    margin-top: 0px;
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
    margin-bottom: 20px;  
    margin-top: 3vh;  
`

const ItemText3 = styled.div`
    text-align: center;
    justify-content:center;
    margin-bottom: 10px;  
    margin-top: 40px;  
`

const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    z-index: 100;
    margin-top: 2vh;
    margin-bottom: 2vh;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
`

const CardBox = styled.div`
margin-top: 9vh;
display: flex;
align-items: center;
justify-content: space-between;
height: 45vh;
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
