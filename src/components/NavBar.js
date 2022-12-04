import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from "../assets/img/nav-icon4.svg";
import navIcon5 from "../assets/img/nav-icon5.svg";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const [walletAddress, setWalletAddress] = useState("");

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  useEffect(()=>{
    getCurrentWalletAddress();
    addWalletListener();
  })
  const getCurrentWalletAddress= async()=>{
    if (
      typeof window !== "undefined" &&
      typeof window.ethereum !== "undefined"
    ) {
      try {
        //Metamask request!
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if(accounts.length>0){
          setWalletAddress(accounts[0]);
          console.log("Web3 is Listenning!",accounts[0]);
        }else{
          console.log("Connect to MetaMask using the connect button")
        }

      } catch (err) {
        console.error(err.message);
      }
    } else {
      //Metamask not be installed
      console.log("Please install MetaMask!");
    }
  }

  
  const connectWallet = async()=>{
    if(typeof window !== "undefined" && typeof window.ethereum !== "undefined"){
      try{
        //Metamask request!
        const accounts= await window.ethereum.request({method:"eth_requestAccounts"})
        setWalletAddress(accounts[0])
        console.log("connect correct!",accounts[0])
      }catch(err){
        console.error(err.message)
      }
    } else{
      //Metamask not be installed
      console.log("Please install MetaMask!")
    }
  }

  const addWalletListener = async ()=>{
    if (
      typeof window !== "undefined" &&
      typeof window.ethereum !== "undefined"
    ) {
      try {
        //Metamask request!
        window.ethereum.on("accountsChanged",(accounts)=>{
        setWalletAddress(accounts[0]);
        console.log("switch account correct!",accounts[0]);
        })
      } catch (err) {
        console.error(err.message);
      }
    } else {
      //Metamask not be installed
      console.log("Please install MetaMask!");
    }
  }
  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <Nav className="LOGO">DJ Bone</Nav>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                NFT Collections
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/laihong-kuo-83b186245/"
                  target="_blank"
                  title="Linkedin"
                  rel="noreferrer"
                >
                  <img src={navIcon1} alt="" />
                </a>
                <a
                  href="mailto:F111110111@nkust.edu.tw"
                  target="_blank"
                  title="Email"
                  rel="noreferrer"
                >
                  <img src={navIcon2} alt="" />
                </a>
                <a
                  href="https://www.instagram.com/klhong_0627/"
                  target="_blank"
                  title="Instagram"
                  rel="noreferrer"
                >
                  <img src={navIcon3} alt="" />
                </a>
                <a
                  href="https://github.com/crypto0627"
                  target="_blank"
                  title="GitHub"
                  rel="noreferrer"
                >
                  <img src={navIcon4} alt="" />
                </a>
                <a
                  href="https://opensea.io/"
                  target="_blank"
                  title="Opensea"
                  rel="noreferrer"
                >
                  <img src={navIcon5} alt="" />
                </a>
              </div>
              <CopyToClipboard text={walletAddress} title="Copy Wallet address">
                <button className="vvd" onClick={connectWallet}>
                  <span>
                    {walletAddress && walletAddress.length > 0
                      ? `Connected: ${walletAddress.substring(
                          0,
                          6
                        )}...${walletAddress.substring(38)}`
                      : "Connect Wallet"}
                  </span>
                </button>
              </CopyToClipboard>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
}
