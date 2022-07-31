import styled from "styled-components"
import React, { useEffect, useRef, useState } from 'react'

function BeforePresale() {

    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('October 21, 2022 00:00:00').getTime();

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
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }

        }, 1000);
    };

    //componentDidMount
    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        };
    });

  return (
    <Wrap>
      <OuterBorder>  
      <p1 className = "p17">MINTING RULES</p1> 
      <Rules>
      <p1 className ="p18">1) One free NFT mint for early supporters / competition winners</p1> 
      <p1 className = "p18">2) Max three NFT mints for presale wallets @ 70 MATIC each</p1>
      <p1 className = "p18">3) Max five NFT mints for public sale wallets @ 100 MATIC each</p1>
      </Rules>
      <Timer>
      <p1 className = "p17">COUNTDOWN TO PRESALE</p1> 
      <TimerBoxes>
        <p1 className = "p19">Days <br/> {timerDays} </p1>
        <Spacer/> 
        <p1 className = "p19">Hours <br/> {timerHours} </p1>
        <Spacer/> 
        <p1 className = "p19">Minutes <br/> {timerMinutes} </p1>
        <Spacer/> 
        <p1 className = "p19">Seconds <br/> {timerSeconds} </p1>
      </TimerBoxes>
      
      </Timer>
    </OuterBorder> 
    </Wrap>    
  )
}

export default BeforePresale

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const Rules = styled.div`
    text-align: left;
    justify-content:center;
    margin: 5px; 
    flex-direction: column;
    display: flex;
`

const Spacer = styled.div`
    margin-left: 40px;
    @media (max-width: 1550px) {
    margin-bottom: 30px;
}
`

const OuterBorder = styled.div`
    text-align: left;
    justify-content:center;
    margin: 5px; 
    flex-direction: column;
    display: flex;
    @media (max-width: 1550px) {
    text-align: center;
    align-items: center;
}
`

const Timer = styled.div`
    text-align: left;
    align-items: left;
    justify-content:center;
    margin-top: 30px; 
    flex-direction: column;
    display: flex;
    @media (max-width: 1550px) {
    text-align: center;
    align-items: center;
}
`

const TimerBoxes = styled.div`
    text-align: center;
    align-items: center;
    justify-content:left;
    margin-top: 30px; 
    flex-direction: row;
    display: flex;
    @media (max-width: 1550px) {
  flex-direction: column;
  justify-content:center;
}
`

