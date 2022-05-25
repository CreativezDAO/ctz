import React, {useState} from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade'
import { useNavigate } from "react-router-dom"
import ReactCardFlip from 'react-card-flip'
import animationData from '../animations/animationTitleV7.json'
import Lottie from "react-lottie"
import Footer from './Footer';

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
        <Background>      
        <ItemTitle>
          <Lottie options ={defaultOptions}/> 
        </ItemTitle>
        </Background> 
        <Fade top>
        <Spacer/>
        <CardBox> 
        <ReactCardFlip isFlipped={isFlipped1} flipDirection="horizontal">    
        <div className='card' onClick={ handleClick1 }>
          <div className='cardInsideBorder'>          
            <div className='imageBorderFront'>
              <img src = "images/background-placeholder.jpg" alt="CardPic" className='imageFront'/> 
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
              <img src = "images/background-placeholder.jpg" alt="CardPic" className='imageFront'/> 
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
              <img src = "images/background-placeholder.jpg" alt="CardPic" className='imageFront'/> 
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
              <img src = "images/background-placeholder.jpg" alt="CardPic" className='imageFront'/> 
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
        </Fade>
        <Buttons>
        <Fade bottom>
            <ButtonGroup>
                <LeftButton onClick={() => { navigate("/mint") }} onMouseEnter={ handleMouseEnter3 } onMouseLeave={ handleMouseLeave3 }>Mint</LeftButton>
                <RightButton onClick={() => { navigate("/earn") }} onMouseEnter={ handleMouseEnter2 } onMouseLeave={ handleMouseLeave2 }>Earn</RightButton>
            </ButtonGroup>
            <ItemText2>
            <p1 className = "p1">CRΞATIVΞZ is an <p1 className = "p2">automated reward distributor</p1> DAO NFT collection with 5000 unique randomly <br/> generated artworks on the <p1 className = "p2">Polygon Network</p1> with an integrated <p1 className = "p2">Matic airdrop</p1> every fortnight.</p1>
            </ItemText2>            
        </Fade>
        </Buttons> 
        <Footer />
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

const Background = styled.div `
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-image: linear-gradient(45deg, #558f83, #6ab3a8, #66899c, #985fba, 	#5c3170);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const ItemTitle = styled.div`
    margin-top: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ItemText2 = styled.div`
    text-align: center;
    margin-bottom: 100px;    
`
const Spacer = styled.div`
    text-align: center;
    margin-bottom: 200px;    
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 100px;
    margin-top: 150px;
    justify-content: center;
    z-index: 100;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
`

const CardBox = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
@media (max-width: 1800px) {
  flex-wrap: wrap;
  margin: 25px 200px;
  position: relative;
  align-items: center;
  justify-content: center;
}
@media (max-width: 1300px) {
  flex-wrap: wrap;
  margin: 25px 100px;
  align-items: center;
  justify-content: center;
}
@media (max-width: 700px) {
  margin: 0px 0px;
  align-items: center;
  justify-content: center;
}
`

const LeftButton = styled.div`
    background-color: #0f0a52;
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
    box-shadow: 0px 3px 18px 3px rgba(0,0,0,0.2);
`

const RightButton = styled(LeftButton)`
    background: white;
    opacity: 0.65;
    color: black;
`

const Buttons = styled.div`


`

  function handleMouseEnter2(e) {
    e.target.className = 'mouseEnterButtons2';
  }

  function handleMouseLeave2(e) {
    e.target.className = 'mouseLeaveButtons2';
  }

  function handleMouseEnter3(e) {
    e.target.className = 'mouseEnterButtons3';
  }

  function handleMouseLeave3(e) {
    e.target.className = 'mouseLeaveButtons3';
  }
