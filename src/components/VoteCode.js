import React, { useEffect, useState } from "react";
import "./VoteCode.css";
import { useWeb3ExecuteFunction, useMoralis } from "react-moralis";

function VoteCode({ perc, setPerc, token, setModalToken, setVisible }) {
  const {Moralis, isInitialized, isAuthenticated, authenticate} = useMoralis();
  const [color, setColor] = useState();
  const contractProcessor = useWeb3ExecuteFunction();
  const [Perc1, setPerc1] = useState ();
  const [Perc2, setPerc2] = useState ();
  const [Perc3, setPerc3] = useState ();

  useEffect(() => {
    if (perc > 66) {
      setColor("#5900ff");
    } else if (perc <= 66 && perc >33) {
      setColor('#752cfd');
    }
    else {
        setColor('#9761fd');
    }
  }, [perc]);

  useEffect(() => {
    async function calculatePerc () { //not getting through this code
      const query1A = new Moralis.Query("Vote");
      const query1B = new Moralis.Query("VoteingBegins");
      query1A.descending ("count");
      const querytest = await query1A.find();
      console.log(querytest);
      // const query1C = query1A.descending(Number("time")) > query1B.descending(Number("voteStartTime")) && query1A.descending("option") === query1B.descending("option1");
      // const query2C = query1A.descending(Number("time")) > query1B.descending(Number("voteStartTime")) && query1A.descending("option") === query1B.descending("option2");
      // const query3C = query1A.descending(Number("time")) > query1B.descending(Number("voteStartTime")) && query1A.descending("option") === query1B.descending("option3");
      // const Option1Count = await query1B.count();
      // const Option2Count = await query1A.count();
      // const Option3Count = await query1A([]);
      // console.log(Option1Count)
      // console.log(Option2Count)
      // console.log(Option3Count)
      // const Perc1 = ((Option1Count / (Option1Count+Option2Count+Option3Count)));
      // const Perc2 = ((Option2Count / (Option1Count+Option2Count+Option3Count)));
      // const Perc3 = ((Option3Count / (Option1Count+Option2Count+Option3Count)));

    setPerc1(Perc1);
    setPerc2(Perc2);
    setPerc3(querytest);
    } 

    calculatePerc();
    }, [isInitialized]);  

  return (
    <>
      <div>
        <div className="token">{token}</div>
        <div className="circle" style={{ boxShadow: `0 0 20px ${color}` }}>
          <div
            className="wave"
            style={{
              marginTop: `${100 - perc}%`,
              boxShadow: `0 0 20px ${color}`,
              backgroundColor: color,
            }}
          ></div>
          <div className="percentage">{perc}</div>
        </div>       
        <div className="votes">            
        </div>
        <div>
          <p1>test</p1>
        </div>
      </div>
    </>
  );
}

export default VoteCode;