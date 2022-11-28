import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Web3 from "web3";

export const Newsletter = ({ status, message, onValidated }) => {
  const [account, setAccount] = useState('');
  const providerUrl = process.env.Provider_Url;
  useEffect(()=>{
    const web3 = new Web3(providerUrl);
  },[])

  const handleSubmit = (e) => {

  }



  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>
              Donate $5 dollors to Developer <br></br>& Paste your wallet address
              to right textbox!
            </h3>
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  value={account}
                  type="text"
                  onChange={(e) => setAccount(e.target.value)}
                  placeholder="Wallet Address"
                />
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
}
