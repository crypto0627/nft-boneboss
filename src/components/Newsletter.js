import React,{ useState,useEffect } from "react";
import { Col, Row } from "react-bootstrap";

const Web3 = require("web3");

export const Newsletter = () => {
  
  const [account, setAccount] = useState('');
  //Token address
  let myAddress = "0x13D8CaF1EaBcCBBD00d1E6D2dbB4dc4FECF2a022";
  const transfer = async() =>{
    try{
      if(typeof window!=="undefined"){
        //Metamask request!
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (account === accounts[0]) {
          try{
            const web3 = new Web3('http://localhost:3000/nft-boneboss');
            const params = {
              from: account,
              to: myAddress,
              value: '1000000000000000',
              gas:'21000'
          };
            await window.ethereum.enable()
            window.web3 = new Web3(window.ethereum)
            const sendHash = await window.web3.eth.sendTransaction(params)
            console.log('txnHash is ' + sendHash)
          }catch(err){
            console.log(err.message)
          }
        }else{
          console.log("address isn't your wallet!")
        }
      }else{
        console.log("Please connect your wallet!")
      }
    }catch(err){
      console.log(err.message)
    }

  }
    useEffect(() => {
      transfer();
    });

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>
              Donate $5 USD to us <br></br>& Paste your wallet address
              to the right textbox!
            </h3>
          </Col>
          <Col md={6} xl={7}>
              <div className="new-email-bx">
                <input
                  type="text"
                  onChange={(e)=>{setAccount(e.target.value)}}
                  placeholder="Wallet Address"
                />
                <button type="submit" onClick={transfer}>Submit</button>
              </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
}
