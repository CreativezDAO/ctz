import React, {useState} from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade'
import { useNavigate } from "react-router-dom"
import ReactCardFlip from 'react-card-flip'
import animationData from '../animations/animationTitleV7.json'
import Lottie from "react-lottie"
import Footer from './Footer';
import background from '../animations/Background.mp4'

function Section() {
  
    let navigate = useNavigate();

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
        <video autoPlay muted style={{position: "absolute", width: "100%", left: "50%", top: "50%", height: "100%", objectFit: "cover", transform: "translate(-50%, -50%", zIndex: "-1"}}>
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
            <ButtonGroup>
                <LeftButton onClick={() => { navigate("/mint")}} onMouseEnter={ handleMouseEnter3 } onMouseLeave={ handleMouseLeave3 }>Mint</LeftButton>
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
    background-color: #07070a;
    height: 60px;
    width: 200px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 16px;
    cursor: pointer;
    margin: 0px 20px;
    box-shadow: 0px 3px 18px 3px rgba(0,0,0,0.5);
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

