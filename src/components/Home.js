import React, {useState, useEffect} from 'react'
import styled from "styled-components"
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
import { FaQuestionCircle } from "react-icons/fa"
import Tippy from "@tippy.js/react"
import "tippy.js/dist/tippy.css"


function Section() {    

    const {Moralis, isInitialized, isAuthenticated, user, isWeb3Enabled} = useMoralis();
    const [Minted, setMinted] = useState (String ());
    const [presale, setPresale] = useState (Boolean());
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
        <WrappedBorder>
        <ItemImage>
        <img src = "images/Creativez_NFTCollection.png" alt="" className='ItemImage3'/>
        </ItemImage> 
        </WrappedBorder>       
        <CardBox> 
        <ReactCardFlip isFlipped={isFlipped1} flipDirection="horizontal">    
        <div className='card' onClick={ handleClick1 }>
          <img src = "images/Human_Card_Front.jpg" alt="CardPic" className='image'/>     
        </div> 
        <div className='card' onClick={ handleClick1 }>
          <img src = "images/Human_Card_Back.jpg" alt="CardPic" className='image'/>     
        </div>           
        </ReactCardFlip> 
        <Spacer/>      
        <ReactCardFlip isFlipped={isFlipped2} flipDirection="horizontal">
        <div className='card' onClick={ handleClick2 }>
          <img src = "images/Cyberpunk_Card_Front.jpg" alt="CardPic" className='image'/>     
        </div> 
        <div className='card' onClick={ handleClick2 }>
          <img src = "images/Cyberpunk_Card_Back.jpg" alt="CardPic" className='image'/>     
        </div>   
        </ReactCardFlip>
        <Spacer/>
        <ReactCardFlip isFlipped={isFlipped3} flipDirection="horizontal">    
        <div className='card' onClick={ handleClick3 }>
          <img src = "images/Undead_Card_Front.jpg" alt="CardPic" className='image'/>     
        </div> 
        <div className='card' onClick={ handleClick3 }>
          <img src = "images/Undead_Card_Back.jpg" alt="CardPic" className='image'/>     
        </div>   
        </ReactCardFlip> 
        <Spacer/> 
        <ReactCardFlip isFlipped={isFlipped4} flipDirection="horizontal">    
        <div className='card' onClick={ handleClick4 }>
          <img src = "images/Exotic_Card_Front.jpg" alt="CardPic" className='image'/>     
        </div> 
        <div className='card' onClick={ handleClick4 }>
          <img src = "images/Exotic_Card_Back.jpg" alt="CardPic" className='image'/>     
        </div> 
        </ReactCardFlip>                
        </CardBox>             
        <Buttons>
        <OuterBorder>        
        <ItemText3>    
        <Tippy content={<span style={{ color: "white"}} >CRΞATIVΞZ is an automated reward distributor NFT collection with 5000 unique randomly generated artworks on the Polygon Network with an integrated Matic airdrop every fortnight.</span>}>
        <ItemText2>
          <p1 className = "p18"><FaQuestionCircle /></p1>
        </ItemText2>        
        </Tippy>
            <p1 className = "p17">MINT YOUR CRΞATIVΞZ HERE</p1>
            <p1 className = "p16">{Minted} / 5000</p1>
        </ItemText3>   
        <ButtonGroup>
          {(() => {if(Minted === "5000"){return <MintedOutInfo/>} else if(!isAuthenticated || !isWeb3Enabled){return <WalletConnectInfo/>} else if(Boolean(freeMint) === true) {return <FreeMintInfo/>} else if (Boolean(presale) === true){return <PresaleInfo/>} else {return <PublicsaleInfo/>}})()}          
        </ButtonGroup>
        </OuterBorder>     
        <ItemImage>
          <img src = "images/Crystals_Large.png" alt="" className=''/>
        </ItemImage> 
        </Buttons>  
        <Footer />
        </Wrap2>
        </Wrap>       
  )
}


export default Section

const Wrap = styled.div`
`
const OuterBorder = styled.div`
    text-align: center;
    justify-content:center;
    margin: 5px; 
    background-color: #010308;  
    width: 750px;
    min-height: 400px;
    display:flex;
    flex-direction: column;
    align-items: center; 
    border-radius: 50px;
    box-shadow: 0px 0px 5px 5px rgba(170, 44, 255, 1);
    @media (max-width: 1550px) {
    width:350px;
    font-size: 80%;
`

const Spacer = styled.div`
    margin-bottom: 50px;
`

const ItemImage = styled.div`
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    width: 100vw;
`

const Wrap2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #010308;
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
    @media (max-width: 790px) {
      margin-top: 100px;
    }
`

const ItemText2 = styled.div`
    text-align: left;
    justify-content:left;   
    display:flex;
    max-width:19.2px;
`

const ItemText3 = styled.div`
    text-align: left;
    justify-content:left;  
    align-items: left;
    margin-top: 3vh;  
    margin-right: 170px;
    flex-direction: column;
    display: flex;
    @media (max-width: 1550px) {
      flex-direction: column;
      align-items: left;
      justify-content: center;
      text-align: center;
      margin-right: 0px;
    }
`

const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    z-index: 1;
    margin-top: 2vh;
    margin-bottom: 2vh;
    @media (max-width: 1550px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
`

const CardBox = styled.div`
margin-top: 9vh;
display: flex;
align-items: center;
height: 100%;
@media (max-width: 1550px) {
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 50px 200px;
  flex-direction: column;
}
`

const Buttons = styled.div`
    height: 100%;
    width: 100vw;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    margin-top: 150px;
    background-image: "../../public/images/Crystals.png"
    @media (max-width: 1800px) {
  align-items: center;
  justify-content: center;
  height: 100%;
}
`

const WrappedBorder = styled.div`
text-align: center;
    justify-content:center;
    margin-top: 100px; 
    display:flex;
    flex-direction: column;
    align-items: center; 
    border-radius: 100px;
    padding: 40px 40px;
}
`
