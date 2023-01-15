import { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { mintNFT, verifyNFT, nftused, tokenURI } from "../utils/interact.js";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  // eslint-disable-next-line no-unused-vars
  const [index, setIndex] = useState(1);
  const toRotate = ["BlockChain", "NFT Developer", "Web3 Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  //mintNFT
  const [count, setcount] = useState("");
  const onMint = async () => {
    setcount(1);
    const { status } = await mintNFT(count);
    console.log(status);
    alert(status);
  };

  //verify nft 
  const inputRef = useRef(null);
  const [tokenId, setTokenId] = useState("");
  const onVerify = async () => {
    // 👇 "inputRef.current.value" is input value
    setTokenId(inputRef.current.value);
    if (tokenId < 0 || tokenId > 100) {
      console.log("Please input tokenId for the range 0~99.");
      alert("Please input tokenId for the range 0~99.");
    } else {
      const { status } = await verifyNFT(tokenId);
      console.log(status);
      alert(status);
    }
  };

  //nftused return(uint256)
  const OwnerOfcall = async()=>{
    setTokenId(inputRef.current.value);
    if (tokenId < 0 || tokenId > 100) {
      console.log("Please input tokenId for the range 0~99.");
      alert("Please input tokenId for the range 0~99.");
    } else {
      const { status } = await nftused(tokenId);
      console.log(status);
      alert(status);
    }
  }
  //tokenURI
  const tokenURICall = async()=>{
    setTokenId(inputRef.current.value);
    if (tokenId < 0 || tokenId > 100) {
      console.log("Please input tokenId for the range 0~99.");
      alert("Please input tokenId for the range 0~99.");
    } else {
      const { status } = await tokenURI(tokenId);
      console.log(status);
      alert(status);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to BoneBoss NFT</span>
                  <h1>{`Hi! I'm JakeHong`}</h1>
                  <p>NightClub NFT</p>
                  <button onClick={onMint}>
                    Let’s Mint NFT! <ArrowRightCircle size={25} />
                  </button>
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="write your tokenId"
                    id="verifytext"
                  />
                  <button onClick={OwnerOfcall}>
                    Check the remaining usage
                    <ArrowRightCircle size={25} />
                  </button>
                  <button onClick={onVerify}>
                    Verify NFT Ticket <ArrowRightCircle size={25} />
                  </button>
                  <button onClick={tokenURICall}>
                    View NFT tokenURI
                    <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
