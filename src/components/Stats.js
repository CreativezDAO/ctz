import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, ArcElement} from 'chart.js';
import {Bar, Doughnut} from "react-chartjs-2";
import React, {useState, useEffect } from "react";
import styled from "styled-components"
import Footer from './Footer'
import {useWeb3ExecuteFunction, useMoralisWeb3Api, useMoralis } from "react-moralis"

ChartJS.register(
  CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip
)
let delayed;

const Stats = () => {

  const {Moralis, isInitialized, isAuthenticated, authenticate} = useMoralis();

  const [Count, setCount] = useState ();

  const [chartDataBar, setChartDataBar] = useState ({
    datasets: [],
  })

  const [chartDataDoughnut, setChartDataDoughnut] = useState ({
    datasets: [],
  })


  const [chartOptionsBar, setChartOptionsBar] = useState ({
    datasets: [],
  })

  const [chartOptionsDoughnut, setChartOptionsDoughnut] = useState ({
    datasets: [],
  })

  useEffect(() => {
    setChartDataBar({
    labels: ["ETH/MATIC POOL", "BNB/MATIC POOL", "USDC/DAI POOL", "BIFI POOL", "BEQI POOL", "BANANA/MATIC POOL"],
    color: "rgba(255,255,255, 1)",
    datasets: [
      {
        label: "Matic Rewards",
        data: [1212, 255, 434, 320, 720, 500],
        borderColor: "rgb(255, 255, 255)",
        backgroundColor: ["rgba(114,20,119, 1)","rgba(64,30,120, 1)","rgba(76,12,79, 1)","rgba(238,201,250, 1)","rgba(147,142,236, 1)","rgba(60,52,100, 1)"],        
      },
    ],
    });
    setChartOptionsBar({
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          ticks: { color: "white", beginAtZero: true, font: {size: 12, family: "Arial", weight: 50,}},
          grid: { color: "rgba(255,255,255, 0.1)", borderColor: "rgba(255,255,255, 0.3)"},
        },
        y: {
          ticks: { color: "white", beginAtZero: true, font: {size: 12, family: "Arial", weight: 50,}},
          grid: { color: "rgba(255,255,255, 0.1)", borderColor: "rgba(255,255,255, 0.3)" }},
        },
      animation: {
        onComplete: () => {
          delayed = true;
        },
        delay: (context) => {
          let delay = 0;
          if (context.type === 'data' && context.mode === 'default' && !delayed) {
            delay = context.dataIndex * 300 + context.datasetIndex * 100;
          }
          return delay;
        },
      },
    })
  }, [])

  useEffect(() => {
    setChartDataDoughnut({
    labels: [" % ETH/MATIC", " % BNB/MATIC", " % USDC/DAI", " % BIFI", " % BEQI", " % BANANA/MATIC"],
    color: "rgba(255,255,255, 1)",
    datasets: [
      {
        label: "Matic Rewards",
        data: [25, 25, 10, 5, 25, 10],
        borderColor: "rgb(255, 255, 255)",
        backgroundColor: ["rgba(114,20,119, 1)","rgba(64,30,120, 1)","rgba(76,12,79, 1)","rgba(238,201,250, 1)","rgba(147,142,236, 1)","rgba(60,52,100, 1)"],        
      },
    ],
    });
    setChartOptionsDoughnut({
      responsive: true,
      animation: {
        onComplete: () => {
          delayed = true;
        },
        delay: (context) => {
          let delay = 0;
          if (context.type === 'data' && context.mode === 'default' && !delayed) {
            delay = context.dataIndex * 300 + context.datasetIndex * 100;
          }
          return delay;
        },
      },
    })
  }, [])

  useEffect(() => {
    async function calculateButtonPush () {
      const query1 = new Moralis.Query("BeQiCycle");
      query1.descending("createdAt");
      const BeQicount = await query1.count();
      const query2 = new Moralis.Query("WETHWMATICCycle");
      query2.descending("createdAt");
      const WETHWMATICcount = await query2.count();
      const query3 = new Moralis.Query("BNBWMATICCycle");
      query3.descending("createdAt");
      const BNBWMATICcount = await query3.count();
      const query4 = new Moralis.Query("USDCDAICycle");
      query4.descending("createdAt");
      const USDCDAIcount = await query4.count();
      const query5 = new Moralis.Query("BananaWMATICCycle");
      query5.descending("createdAt");
      const BananaWMATICcount = await query5.count();
      const query6 = new Moralis.Query("BIFICycle");
      query6.descending("createdAt");
      const BIFIcount = await query6.count();

      const TotalCount = ((BeQicount)+(WETHWMATICcount)+(BNBWMATICcount)+(USDCDAIcount)+(BananaWMATICcount)+(BIFIcount));

    setCount(TotalCount);
    } 

    calculateButtonPush();
    }, [isInitialized]);          


  return (
    <Wrap>
    <ItemText1>
    <p1 className = "p10"> Cumulative MATIC Rewards Since CRΞATIVΞZ NFT Release</p1>
    </ItemText1>
      <BarChart>
        <Bar options={chartOptionsBar} data={chartDataBar}/>
      </BarChart>
      <ItemText2>
        <p1 className = "p5">MATIC rewards are accumulated by swapping staking rewards to MATIC.<br/> 85% of MATIC is distributed to CRΞATIVΞZ NFT holders, 8% is reinvested <br/> back into the staking contracts, 5% is sent to a gaming rewards treasury <br/> (in development) and 2% is used to finance CRΞATIVΞZ development.</p1>
      </ItemText2>
      <ItemText3>
        <p1 className = "p10"> CRΞATIVΞZ DAO - Initial Staking Portfolio</p1>
      </ItemText3>
      <DoughnutChart>
        <Doughnut options={chartOptionsDoughnut} data={chartDataDoughnut}/>
      </DoughnutChart>
      <ItemText2>
        <p1 className = "p5">100% of the MATIC produced from mint will be staked into the following pools. <br/> Accumulated MATIC rewards will be distributed to CRΞATIVΞZ NFT Holders fortnightly.</p1>
      </ItemText2>
      <ItemText3>
        <p1 className = "p10"> Button Push Counter</p1>
      </ItemText3>
      <ButtonPushCounter>
        <p1 className = "p11"> {Count}</p1>
      </ButtonPushCounter>
      <ItemText2>
        <p1 className = "p5">This is a running total of the number of times a button has been pushed on the "EARN" page.</p1>
      </ItemText2>
      <Footer />
    </Wrap>
  )
}

export default Stats

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100vw;
    background-color: #060420;
    background-image: linear-gradient(45deg, #060420,#190425, #250636, #330949);
`

const BarChart = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 60px;
    margin-bottom: 60px;
    box-shadow: 0px 0px 15px 5px rgba(255,105,255,1);
    padding: 40px;
    height: 40vh;
    width: 35%;
    border-radius: 10px;
    background-color: #060420;
`

const DoughnutChart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 30%;
    width: 30%;
    margin-bottom: 60px;
    box-shadow: 0px 0px 25px 8px rgba(255,105,255,1);
    border-radius: 1000px;   
    background-color: #060420; 
`

const ButtonPushCounter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 30%;
    margin-bottom: 60px;
    box-shadow: 0px 0px 25px 8px rgba(255,105,255,1);
    border-radius: 1000px;   
    padding: 50px;
    background-color: #060420; 
`

const ItemText1 = styled.div`
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    margin-top: 270px;  
    border-radius: 30px;  
`
const ItemText2 = styled.div`
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    margin-bottom: 20vh;    
`

const ItemText3 = styled.div`
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    margin-bottom: 60px;  
    border-radius: 30px;  
`

