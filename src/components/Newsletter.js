import React from "react";
import { Col, Row } from "react-bootstrap";

const Web3 = require("web3");

export const Newsletter = () => {
  //Token address
  let myAddress = "0x13D8CaF1EaBcCBBD00d1E6D2dbB4dc4FECF2a022";
  const transfer = async () => {
    try {
      if (window.ethereum.isConnected()) {
        //Metamask request!
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if(accounts[0])
        try {
          const params = {
            from: accounts[0],
            to: myAddress,
            value: "10000000000000000",
            gas: "39000",
          };
          await window.ethereum.enable();
          window.web3 = new Web3(window.ethereum);
          const sendHash = await window.web3.eth.sendTransaction(params);
          console.log("txnHash is " + sendHash);
        } catch (err) {
          console.log(err.message);
        }
      } else {
        console.log("Please connect your wallet!");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={10} md={0} xl={5}>
            <h3>
              Donate $0.01 ETH to us 
            </h3>
          </Col>
          <Col md={5} xl={7}>
            <div className="new-email-bx">
              <button type="submit" onClick={transfer}>
                Submit
              </button>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
