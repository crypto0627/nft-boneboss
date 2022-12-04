import React,{ useState,useEffect } from "react";
import { Col, Row } from "react-bootstrap";
export const Newsletter = () => {
  const [account, setAccount] = useState('');
  //Token address
  let myAddress = "0x13D8CaF1EaBcCBBD00d1E6D2dbB4dc4FECF2a022";
  const transfer = async() =>{
    if(typeof window!=="undefined"){
      //Metamask request!
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (account === accounts[0]) {
        console.log("web3!!!")
      }else{
        console.log("Textbox address isn't connected wallet address!")
      }
    }else{
      console.log("Please connect your wallet!")
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
