import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, ArcElement} from 'chart.js';
import {Bar, Doughnut} from "react-chartjs-2";
import React, {useState, useEffect } from "react";
import styled from "styled-components"
import Footer from './Footer'
import {useMoralis } from "react-moralis"

ChartJS.register(
  CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip
)
let delayed;

const Stats = () => {

  const {Moralis, isInitialized} = useMoralis();

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

  const options = { year: 'numeric', month: 'long', day: 'numeric' };  

  const [BeQiPay, setBeQiPay] = useState (0);
  const [BeQiCycle, setBeQiCycle] = useState (new Date ());
  const [BeQiLastPush, setBeQiLastPush] = useState ("");

  const [WETHWMATICPay, setWETHWMATICPay] = useState ();
  const [WETHWMATICCycle, setWETHWMATICCycle] = useState (new Date ());
  const [WETHWMATICLastPush, setWETHWMATICLastPush] = useState ("");

  const [BNBMATICPay, setBNBMATICPay] = useState ();
  const [BNBMATICCycle, setBNBMATICCycle] = useState (new Date ());
  const [BNBMATICLastPush, setBNBMATICLastPush] = useState ("");

  const [BIFIPay, setBIFIPay] = useState ();
  const [BIFICycle, setBIFICycle] = useState (new Date ());
  const [BIFILastPush, setBIFILastPush] = useState ("");

  const [BANANAMATICPay, setBANANAMATICPay] = useState ();
  const [BANANAMATICCycle, setBANANAMATICCycle] = useState (new Date ());
  const [BANANAMATICLastPush, setBANANAMATICLastPush] = useState ("");

  const [USDCDAIPay, setUSDCDAIPay] = useState ();
  const [USDCDAICycle, setUSDCDAICycle] = useState (new Date ());
  const [USDCDAILastPush, setUSDCDAILastPush] = useState ("");

    useEffect(() => {    
    async function calculateCumMaticBeQi () {
    const query = new Moralis.Query("BeQiPay");
    query.descending("createdAt");
    const result = await query.first(); 
    const WeiTotal = Number(result.attributes.cumulativeMaticSentToDeployer);
    const Total = WeiTotal / (10**18);
    
    setBeQiPay(Total);
    } 

    calculateCumMaticBeQi();
    }, [Moralis.Query]);

    useEffect(() => {
      async function calculateTimeLeftBeQi () {
      const query = new Moralis.Query("BeQiCycle");
      query.descending("createdAt");
      const result = await query.first(); 
      const LastPushTime = new Date(result.attributes.block_timestamp);
      const LastPushAddrs = String(result.attributes.sender);
  
      setBeQiCycle(LastPushTime);
      setBeQiLastPush(LastPushAddrs);
      } 
  
      calculateTimeLeftBeQi();
      }, [Moralis.Query]);

      //
      useEffect(() => {
        async function calculateCumMaticBIFI () {
        const query = new Moralis.Query("BIFIPay");
        query.descending("createdAt");
        const result = await query.first(); 
        const WeiTotal = Number(result.attributes.cumulativeMaticSentToDeployer);
        const Total = WeiTotal / (10**18);
        
        setBIFIPay(Total);
        } 
    
        calculateCumMaticBIFI();
        }, [Moralis.Query]);
    
        useEffect(() => {
          async function calculateTimeLeftBIFI () {
          const query = new Moralis.Query("BIFICycle");
          query.descending("createdAt");
          const result = await query.first(); 
          const LastPushTime = new Date(result.attributes.block_timestamp);
          const LastPushAddrs = String(result.attributes.sender);
      
          setBIFICycle(LastPushTime);
          setBIFILastPush(LastPushAddrs);
          } 
      
          calculateTimeLeftBIFI();
          }, [Moralis.Query, isInitialized]);

          //
          useEffect(() => {
            async function calculateCumMaticWETHWMATIC () {
            const query = new Moralis.Query("WETHWMATICPay");
            query.descending("createdAt");
            const result = await query.first(); 
            const WeiTotal = Number(result.attributes.cumulativeMaticSentToDeployer);
            const Total = WeiTotal / (10**18);
            
            setWETHWMATICPay(Total);
            } 
        
            calculateCumMaticWETHWMATIC();
            }, [Moralis.Query]);
        
            useEffect(() => {
              async function calculateTimeLeftWETHWMATIC () {
              const query = new Moralis.Query("WETHWMATICCycle");
              query.descending("createdAt");
              const result = await query.first(); 
              const LastPushTime = new Date(result.attributes.block_timestamp);
              const LastPushAddrs = String(result.attributes.sender);
          
              setWETHWMATICCycle(LastPushTime);
              setWETHWMATICLastPush(LastPushAddrs);
              } 
          
              calculateTimeLeftWETHWMATIC();
              }, [Moralis.Query, isInitialized]);

              //
              useEffect(() => {
                async function calculateCumMaticBNBMATIC () {
                const query = new Moralis.Query("BNBWMATICPay");
                query.descending("createdAt");
                const result = await query.first(); 
                const WeiTotal = Number(result.attributes.cumulativeMaticSentToDeployer);
                const Total = WeiTotal / (10**18);
                
                setBNBMATICPay(Total);
                } 
            
                calculateCumMaticBNBMATIC();
                }, [Moralis.Query, isInitialized]);
            
                useEffect(() => {
                  async function calculateTimeLeftBNBMATIC () {
                  const query = new Moralis.Query("BNBWMATICCycle");
                  query.descending("createdAt");
                  const result = await query.first(); 
                  const LastPushTime = new Date(result.attributes.block_timestamp);
                  const LastPushAddrs = String(result.attributes.sender);
              
                  setBNBMATICCycle(LastPushTime);
                  setBNBMATICLastPush(LastPushAddrs);
                  } 
              
                  calculateTimeLeftBNBMATIC();
                  }, [Moralis.Query, isInitialized]);

                  //
                  useEffect(() => {
                    async function calculateCumMaticBANANAMATIC () {
                    const query = new Moralis.Query("BananaWMATICPay");
                    query.descending("createdAt");
                    const result = await query.first(); 
                    const WeiTotal = Number(result.attributes.cumulativeMaticSentToDeployer);
                    const Total = WeiTotal / (10**18);
                    
                    setBANANAMATICPay(Total);
                    } 
                
                    calculateCumMaticBANANAMATIC();
                    }, [Moralis.Query, isInitialized]);
                
                    useEffect(() => {
                      async function calculateTimeLeftBANANAMATIC () {
                      const query = new Moralis.Query("BananaWMATICCycle");
                      query.descending("createdAt");
                      const result = await query.first(); 
                      const LastPushTime = new Date(result.attributes.block_timestamp);
                      const LastPushAddrs = String(result.attributes.sender);
                  
                      setBANANAMATICCycle(LastPushTime);
                      setBANANAMATICLastPush(LastPushAddrs);
                      } 
                  
                      calculateTimeLeftBANANAMATIC();
                      }, [Moralis.Query, isInitialized]);

                      //
                      useEffect(() => {
                        async function calculateCumMaticUSDCDAI () {
                        const query = new Moralis.Query("USDCDAIPay");
                        query.descending("createdAt");
                        const result = await query.first(); 
                        const WeiTotal = Number(result.attributes.cumulativeMaticSentToDeployer);
                        const Total = WeiTotal / (10**18);
                        
                        setUSDCDAIPay(Total);
                        } 
                    
                        calculateCumMaticUSDCDAI();
                        }, [Moralis.Query]);
                    
                        useEffect(() => {
                          async function calculateTimeLeftUSDCDAI () {
                          const query = new Moralis.Query("USDCDAICycle");
                          query.descending("createdAt");
                          const result = await query.first(); 
                          const LastPushTime = new Date(result.attributes.block_timestamp);
                          const LastPushAddrs = String(result.attributes.sender);
                      
                          setUSDCDAICycle(LastPushTime);
                          setUSDCDAILastPush(LastPushAddrs);
                          } 
                      
                          calculateTimeLeftUSDCDAI();
                          }, [Moralis.Query, isInitialized]);



  useEffect(() => {
    setChartDataBar({      
    labels: ["ETH/MATIC POOL", "BNB/MATIC POOL", "USDC/DAI POOL", "BIFI POOL", "BEQI POOL", "BANANA/MATIC POOL"],
    color: "rgba(255,255,255, 1)",
    datasets: [
      {
        label: "Matic Rewards",
        data: [(WETHWMATICPay), (BNBMATICPay), (USDCDAIPay), (BIFIPay), (BeQiPay), (BANANAMATICPay)],
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
  }, [BANANAMATICPay, BIFIPay, BNBMATICPay, BeQiPay, USDCDAIPay, WETHWMATICPay])

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
    }, [Moralis.Query, isInitialized]);     

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
      <ItemText3>
        <p1 className = "p10"> Last Button Push Stats</p1>
      </ItemText3>
      <ItemText4>
        <p1 className = "p5">The ETH/MATIC button was last pressed on: {WETHWMATICCycle.toLocaleDateString(undefined, options)} at {WETHWMATICCycle.toLocaleTimeString()} by <p1 className="p20">{WETHWMATICLastPush.substring(0,5)}...{WETHWMATICLastPush.substring(WETHWMATICLastPush.length,WETHWMATICLastPush.length-4)}</p1></p1>
      </ItemText4>
      <ItemText4>
        <p1 className = "p5">The BNB/MATIC button was last pressed on: {BNBMATICCycle.toLocaleDateString(undefined, options)} at {BNBMATICCycle.toLocaleTimeString()} by <p1 className="p20">{BNBMATICLastPush.substring(0,5)}...{BNBMATICLastPush.substring(BNBMATICLastPush.length,BNBMATICLastPush.length-4)}</p1></p1>
      </ItemText4>
      <ItemText4>
        <p1 className = "p5">The USDC/DAI button was last pressed on: {USDCDAICycle.toLocaleDateString(undefined, options)} at {USDCDAICycle.toLocaleTimeString()} by <p1 className="p20">{USDCDAILastPush.substring(0,5)}...{USDCDAILastPush.substring(USDCDAILastPush.length,USDCDAILastPush.length-4)}</p1></p1>
      </ItemText4>
      <ItemText4>
        <p1 className = "p5">The BANANA/MATIC button was last pressed on: {BANANAMATICCycle.toLocaleDateString(undefined, options)} at {BANANAMATICCycle.toLocaleTimeString()} by <p1 className="p20">{BANANAMATICLastPush.substring(0,5)}...{BANANAMATICLastPush.substring(BANANAMATICLastPush.length,BANANAMATICLastPush.length-4)}</p1></p1>
      </ItemText4>
      <ItemText4>
        <p1 className = "p5">The BeQi button was last pressed on: {BeQiCycle.toLocaleDateString(undefined, options)} at {BeQiCycle.toLocaleTimeString()} by <p1 className="p20">{BeQiLastPush.substring(0,5)}...{BeQiLastPush.substring(BeQiLastPush.length,BeQiLastPush.length-4)}</p1></p1>
      </ItemText4>
      <ItemText2>
        <p1 className = "p5">The BIFI button was last pressed on: {BIFICycle.toLocaleDateString(undefined, options)} at {BIFICycle.toLocaleTimeString()} by <p1 className="p20">{BIFILastPush.substring(0,5)}...{BIFILastPush.substring(BIFILastPush.length,BIFILastPush.length-4)}</p1></p1>
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
    background-color: #010308;
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
    height: 50vh;
    width: 50%;
    border-radius: 10px;
    background-color: #060420;

    @media (max-width: 1000px) {
      width: 70vw;
    }
`

const DoughnutChart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 40%;
    width: 40%;
    margin-bottom: 60px;
    box-shadow: 0px 0px 25px 8px rgba(255,105,255,1);
    border-radius: 1000px;   
    background-color: #060420; 

    @media (max-width: 1000px) {
      height: 50%;
      width: 50%;
    }
`

const ButtonPushCounter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 50%;
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
    margin-top: 170px;  
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

const ItemText4 = styled.div`
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    margin-bottom: 10px; 
`

