import React, {useState} from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade';
import { useNavigate } from "react-router-dom"
import ReactCardFlip from 'react-card-flip';

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

  return (
    <Wrap>
        <Fade top>
        <ItemText>
            <h1 className='title'>WΞLCOMΞ TO THΞ</h1>
            <h1 className='title'>CRΞATIVΞZ PROJΞCT</h1>            
        </ItemText>
        <CardBox> 
        <ReactCardFlip isFlipped={isFlipped1} flipDirection="horizontal">    
        <img src = "images/background-placeholder.jpg" alt="CardPic" className='card' onClick={ handleClick1 } onMouseEnter={ handleMouseEnterCard } onMouseLeave={ handleMouseLeaveCard }/> 
        <div className='card' onClick={ handleClick1 }>
          <div className='card__face--back'>
              <div className='card__header'>
                <img src="/images/human.svg" alt="" className='pp' />
                <h2>Human</h2>
              </div>
              <div className='card__body'>
                <h3>40%</h3>
                <p>humans are the cloest thing to a virus</p>
              </div>
          </div>
        </div> 
        </ReactCardFlip>       
        <ReactCardFlip isFlipped={isFlipped2} flipDirection="horizontal">
        <img src = "images/background-placeholder.jpg" alt="CardPic" className='card' onClick={ handleClick2 } onMouseEnter={ handleMouseEnterCard } onMouseLeave={ handleMouseLeaveCard }/> 
        <div className='card' onClick={ handleClick2 }>
          <div className='card__face--back'>
              <div className='card__header'>
                <img src="/images/cyberpunk.svg" alt="" className='pp' />
                <h2>CyberPunk</h2>
              </div>
              <div className='card__body'>
                <h3>30%</h3>
                <p>cyberpunks love to listen to rock music while they tie their shoes</p>
              </div>
          </div>
        </div> 
        </ReactCardFlip>
        <ReactCardFlip isFlipped={isFlipped3} flipDirection="horizontal">    
        <img src = "images/background-placeholder.jpg" alt="CardPic" className='card' onClick={ handleClick3 } onMouseEnter={ handleMouseEnterCard } onMouseLeave={ handleMouseLeaveCard }/> 
        <div className='card' onClick={ handleClick3 }>
          <div className='card__face--back'>
              <div className='card__header'>
                <img src="/images/undead.svg" alt="" className='pp' />
                <h2>Undead</h2>
              </div>
              <div className='card__body'>
                <h3>20%</h3>
                <p>eat ppls brains and shit... best to avoid large packs</p>
              </div>
          </div>
        </div> 
        </ReactCardFlip>  
        <ReactCardFlip isFlipped={isFlipped4} flipDirection="horizontal">    
        <img src = "images/background-placeholder.jpg" alt="CardPic" className='card' onClick={ handleClick4 } onMouseEnter={ handleMouseEnterCard } onMouseLeave={ handleMouseLeaveCard }/> 
        <div className='card' onClick={ handleClick4 }>
          <div className='card__face--back'>
              <div className='card__header'>
                <img src="/images/exotic.svg" alt="" className='pp' />
                <h2>Exotic</h2>
              </div>
              <div className='card__body'>
                <h3>10%</h3>
                <p>only the most majestic beings to be in universal existence... no biggie</p>
              </div>
          </div>
        </div>  
        </ReactCardFlip>          
        </CardBox>
        </Fade>
        <Buttons>
        <Fade bottom>
            <ButtonGroup>
                <LeftButton onClick={() => { navigate("/mint") }} onMouseEnter={ handleMouseEnter1 } onMouseLeave={ handleMouseLeave1 }>Mint</LeftButton>
                <RightButton onClick={() => { navigate("/earn") }} onMouseEnter={ handleMouseEnter2 } onMouseLeave={ handleMouseLeave2 }>Earn</RightButton>
            </ButtonGroup>
            <ItemText2>
            <p>CRΞATIVΞZ is an <p1 className = "p1">automated reward distributor</p1> DAO NFT collection with 5000 unique randomly <br/> generated artworks on the <p1 className = "p1">Polygon Network</p1> with an integrated <p1 className = "p1">Matic airdrop</p1> every fortnight.</p>
            </ItemText2>
        </Fade>
        </Buttons>    
    </Wrap>
  )
}


export default Section

const Wrap = styled.div`
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-image: linear-gradient(45deg, #34e89e, #0f3443);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1500px) {
      width: 100%;
      height: 100%;
    }
`

const ItemText = styled.div`
    margin-top: 122px;
    text-align: center;
`

const ItemText2 = styled.div`
    text-align: center;
    margin-bottom: 90px;    
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 40px;
    justify-content: center;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
`

const CardBox = styled.div`
display: flex;
justify-content: space-between;
@media (max-width: 1500px) {
  flex-wrap: wrap;
  margin: 0px 150px;
  align-items: center;
  justify-content: center;
}
@media (max-width: 768px) {
  flex-direction: column;
  align-items: center;
}
`
const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 150px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
    box-shadow: 0px 3px 18px 3px rgba(0,0,0,0.2);
`

const RightButton = styled(LeftButton)`
    background: white;
    opacity: 0.65;
    color: black;
`

const Buttons = styled.div`


`

function handleMouseEnter1(e) {
    e.target.className = 'mouseEnterButtons1';
  }

  function handleMouseLeave1(e) {
    e.target.className = 'mouseLeaveButtons1';
  }

  function handleMouseEnter2(e) {
    e.target.className = 'mouseEnterButtons2';
  }

  function handleMouseLeave2(e) {
    e.target.className = 'mouseLeaveButtons2';
  }

  function handleMouseEnterCard(e) {
    e.target.className = 'cardOpacity';
  }

  function handleMouseLeaveCard(e) {
    e.target.className = 'card';
  }

