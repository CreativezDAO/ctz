// import React, {useEffect} from 'react';
import './App.css';
import Header from "./components/Header"
import Home from "./components/Home"
import Voting from "./components/Voting"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CTZArcade from './components/CTZArcade';
import Stats from './components/Stats';
import Earn from './components/Earn';
// import {useMoralis} from "react-moralis"
import ScrollToTop from './components/ScrollToTop';

function App() {

  // const {logout} = useMoralis();
  

  // useEffect(() => {
  //   if(window.ethereum) {
  //     window.ethereum.on('chainChanged', () => {
  //       window.location.reload();
  //     })
  //     window.ethereum.on('accountsChanged', async () => {
  //       logout();
  //       window.location.reload();
  //     })
  // }});

  // const provider = window.ethereum;
  // if(!provider){
  //   window.confirm("Metamask is not installed. Please install and connect wallet to use this DApp")
  // }

  // useEffect(() => {
  // async function changeNetwork () {
  // const chainId = await provider.request({ method: "eth_chainId" });
  // const polygonChainId = '0x89';
  // if(chainId === polygonChainId){
  //   console.log("Bravo!, you are on the correct network");
  //   }else{
  //     try {
  //       await provider.request({
  //         method: 'wallet_switchEthereumChain',
  //         params: [{ chainId: polygonChainId}],
  //       });
  //     console.log("You have succefully switched to Polygon network")
  //     } catch (switchError) {
  //       // This error code indicates that the chain has not been added to MetaMask.
  //       if (switchError.code === 4902) {
  //        console.log("This network is not available in your metamask, please add it")
  //     }
  //       console.log("Failed to switch to the network")
  //     }}}

  //   changeNetwork(); 
  // }, []);


  return (
    <div className="App">
    <Router>
    <ScrollToTop/>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />  
      <Route path="/voting" element={<Voting />} />
      <Route path="/ctzarcade" element={<CTZArcade />} />
      <Route path="/stats" element={<Stats />} />
      <Route path="/earn" element={<Earn />} />
    </Routes>
    </Router>
    </div>
  );
}

export default App;
