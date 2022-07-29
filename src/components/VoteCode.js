import React, { useEffect, useState } from "react";
import "./VoteCode.css";
import { useWeb3ExecuteFunction, useMoralis } from "react-moralis";
import styled from "styled-components"

function VoteCode() {
  const {Moralis, isInitialized, isAuthenticated, authenticate} = useMoralis();
  const color1 = '#3f00eb';
  const color2 = '#66237a';
  const color3 = "#ffb618";
  const contractProcessor = useWeb3ExecuteFunction();
  const [Perc1, setPerc1] = useState ();
  const [Perc2, setPerc2] = useState ();
  const [Perc3, setPerc3] = useState ();
  const [Option1, setOption1] = useState ();
  const [Option2, setOption2] = useState ();
  const [Option3, setOption3] = useState ();
  const [Option1Address, setOption1Address] = useState ();
  const [Option2Address, setOption2Address] = useState ();
  const [Option3Address, setOption3Address] = useState ();
  const [Option1Count, setOption1Count] = useState ();
  const [Option2Count, setOption2Count] = useState ();
  const [Option3Count, setOption3Count] = useState ();

  async function voteOption1(){

    let options = {
      contractAddress: "0xd20Fc5EDd74Fd46DE9E8515F7d95Aba505277B44",
      functionName: "vote",
      abi: [{"inputs":[{"internalType":"address","name":"option","type":"address"}],"name":"vote","outputs":[],"stateMutability":"nonpayable","type":"function"}],
      params: {option: (Option1Address)}
    }

    await contractProcessor.fetch({
      params: options,
      onSuccess: () => {

      },
      onError: (error) => {
        alert(error.data.message)
      }
    });
  }

  async function voteOption2(){

    let options = {
      contractAddress: "0xd20Fc5EDd74Fd46DE9E8515F7d95Aba505277B44",
      functionName: "vote",
      abi: [{"inputs":[{"internalType":"address","name":"option","type":"address"}],"name":"vote","outputs":[],"stateMutability":"nonpayable","type":"function"}],
      params: {option: (Option2Address)}
    }

    await contractProcessor.fetch({
      params: options,
      onSuccess: () => {

      },
      onError: (error) => {
        alert(error.data.message)
      }
    });
  }

  async function voteOption3(){

    let options = {
      contractAddress: "0xd20Fc5EDd74Fd46DE9E8515F7d95Aba505277B44",
      functionName: "vote",
      abi: [{"inputs":[{"internalType":"address","name":"option","type":"address"}],"name":"vote","outputs":[],"stateMutability":"nonpayable","type":"function"}],
      params: {option: (Option3Address)}
    }

    await contractProcessor.fetch({
      params: options,
      onSuccess: () => {

      },
      onError: (error) => {
        alert(error.data.message)
      }
    });
  }  

  useEffect(() => {
    async function calculatePerc () { 
      const query = new Moralis.Query("Vote");
      query.descending ("createdAt");
      const result = await query.first();
      const option1_Count = Number(result.attributes.option1Count);
      const option2_Count = Number(result.attributes.option2Count);
      const option3_Count = Number(result.attributes.option3Count);

    setPerc1(Math.round(option1_Count / (option1_Count+option2_Count+option3_Count) * 100));
    setPerc2(Math.round(option2_Count / (option1_Count+option2_Count+option3_Count) * 100));
    setPerc3(Math.round(option3_Count / (option1_Count+option2_Count+option3_Count) * 100));
    setOption1Count(option1_Count);
    setOption2Count(option2_Count);
    setOption3Count(option3_Count);
    } 

    calculatePerc();
    }, [isInitialized]);  

    useEffect(() => {
      async function VotingOptions () { 
        const query = new Moralis.Query ("VotingBegins");
        query.descending ("createdAt");
        const result = await query.first();
        const option1 = String(result.attributes.option_1);
        const option2 = String(result.attributes.option_2);
        const option3 = String(result.attributes.option_3);
        const option1Address = String(result.attributes.option1)
        const option2Address = String(result.attributes.option2)
        const option3Address = String(result.attributes.option3)
  
        setOption1(option1);
        setOption2(option2);
        setOption3(option3);
        setOption1Address(option1Address);
        setOption2Address(option2Address);
        setOption3Address(option3Address);
      } 
  
      VotingOptions();
      }, [isInitialized]); 

      const handleNetworkSwitch = async (networkName) => {
        setError();
        await changeNetwork({ networkName, setError });
      };

      const networkChanged = (chainId) => {

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

          await Moralis.enableWeb3()
          await authenticate({signingMessage: "Log in using Metamask" })
            .then(function (user) {
       
            })        

            .catch(function (error) {

            });
          window.location.reload();
        };

  return (
    <>
      <VotingVials>
        <div className="token">{Option1}</div>
        <div className="circle" style={{ boxShadow: `0 0 20px ${color1}` }}>
          <div
            className="wave"
            style={{
              marginTop: `${100 - (Perc1)}%`,
              boxShadow: `0 0 20px ${color1}`,
              backgroundColor: color1,
            }}
          ></div>
          <div className="percentage">{Perc1}%</div>
        </div>       
        <div className="votes">
          <p1>Votes = {Option1Count}</p1>            
        </div>
        <ButtonGroup>
          <div className="buttons1" onClick={() => { if(isAuthenticated) { voteOption1()}else{handleNetworkSwitch("polygon"); login();}}}>Option 1</div>   
        </ButtonGroup>
      </VotingVials>

      <VotingVials>
        <div className="token">{Option2}</div>
        <div className="circle" style={{ boxShadow: `0 0 20px ${color2}` }}>
          <div
            className="wave"
            style={{
              marginTop: `${100 - (Perc2)}%`,
              boxShadow: `0 0 20px ${color2}`,
              backgroundColor: color2,
            }}
          ></div>
          <div className="percentage">{Perc2}%</div>
        </div>       
        <div className="votes">
          <p1>Votes = {Option2Count}</p1>
        </div>
        <ButtonGroup>
          <div className="buttons2" onClick={() => { if(isAuthenticated) { voteOption2()}else{handleNetworkSwitch("polygon"); login();}}}>Option 2</div>   
        </ButtonGroup>  
      </VotingVials>

      <VotingVials>
        <div className="token">{Option3}</div>
        <div className="circle" style={{ boxShadow: `0 0 20px ${color3}` }}>
          <div
            className="wave"
            style={{
              marginTop: `${100 - (Perc3)}%`,
              boxShadow: `0 0 20px ${color3}`,
              backgroundColor: color3,
            }}
          ></div>
          <div className="percentage">{Perc3}%</div>
        </div>       
        <div className="votes">
          <p1>Votes = {Option3Count}</p1>                    
        </div> 
        <ButtonGroup>
          <div className="buttons3" onClick={() => { if(isAuthenticated) { voteOption3()}else{handleNetworkSwitch("polygon"); login();}}}>Option 3</div>   
        </ButtonGroup>         
      </VotingVials>
    </>
    
  );
}

export default VoteCode;

const VotingVials = styled.div`
    padding: 0px 50px;
    text-align: center;
    height: 100%;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-top: 0px;
    margin-bottom: 0px;
    justify-content: center;
    z-index: 100;
    height:100%;
    @media (max-width: 1000px) {
      flex-direction: column;
      align-items: center;
    }
`
