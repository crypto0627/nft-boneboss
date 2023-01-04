import React from "react";
import { Col, Row } from "react-bootstrap";


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
            value: Number(10000000000000000).toString(16),
            gas: Number(21000).toString(16),
            gasPrice: Number(250000).toString(16),
          };
          await window.ethereum.enable();
          const sendHash = await window.ethereum.request({
            method: "eth_sendTransaction",
            params: [params],
          });
          console.log(
            "✅ Check out your transaction on Etherscan: https://mumbai.polygonscan.com/tx/" +
              sendHash
          );
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
