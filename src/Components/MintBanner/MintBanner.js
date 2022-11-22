import React, { useState, useEffect } from "react";
import Wrapper from "./MintBanner.styled";
import CountUp from "react-countup";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination } from "swiper";

import SliderImg from "../../images/slider.png";
import SliderImg2 from "../../images/slider2.png";
import SliderImg3 from "../../images/AliS.png";
import SliderImg4 from "../../images/Legion.png";

// import DAPP
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../../redux/blockchain/blockchainActions";
import { fetchData } from "../../redux/data/dataActions";

import FlipCountdown from "@rumess/react-flip-countdown";

function MintBanner() {
  
  const dispatch = useDispatch();
  const [mblDapp,setMblDapp]=useState(false);
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click Mint Now to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "0x551882c57cf04bc87a9b3c2684b566d89ce5d35f",
    SCAN_LINK: "https://goerli.etherscan.io/address/0x551882c57cf04bc87a9b3c2684b566d89ce5d35f",
    NETWORK: {
      NAME: "Ethereum",
      SYMBOL: "Eth",
      ID: 5,
    },
    NFT_NAME: "Tenacious Tacos",
    SYMBOL: "TT",
    MAX_SUPPLY: 10000,
    WEI_COST: 1000000000000000,
    DISPLAY_COST: 0.001,
    GAS_LIMIT: 205000,
    MARKETPLACE: "Opeansea",
    MARKETPLACE_LINK: "https://testnets.opensea.io/",
    SHOW_BACKGROUND: false,
    DEEPLINK: "https://metamask.app.link/dapp/tenacioustacos.io",
  });

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        setFeedback(
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 10) {
      newMintAmount = 10;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    checkBrowser();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);
  
  function checkBrowser(){
    const { userAgent } = navigator;
    let s = userAgent;
    
    if(s.search("Chrome/77") != -1 || s.search("CriOS/76") != -1){
      setMblDapp(true);
    }
    else{
      setMblDapp(false);
    }
  }

  return (
    <Wrapper>
      <div className="mint mintBanner">
        <div className="container">
          <div className="row">
            <div className="col-md-7 ">
              <div className="mintBannerSingleItem">
                <div className="mintBannerText">
                  <div className="col-md-10">
                    <p>
                      <span className="titleMintNow">
                        {" "}
                        MINT NOW WITH <span> YES BEAR </span>{" "}
                      </span>{" "}
                      <span
                        className="titleMintNow"
                        style={{ color: "#ff01de" }}>
                        {" "}
                        (WL SALE)
                      </span>
                      <br /> <br />
                      <span className="paraGraph">
                        {" "}
                        Over 10,000 Bears have registered for only 6,466 WL
                        mint.
                        <br></br> First comes, first serves.
                      </span>
                      <br></br> <br></br>
                      <span className="when">
                        {" "}
                        When life hands you lovable bears, say yes. <br></br>
                      </span>
                      <span className="official">
                        {" "}
                        Official wallet address:
                      </span>
                      <br />
                      <span className="code">
                        {" "}
                        0x936C0fE036fd21B23904EaCa43cC88088bbCBa84
                      </span>
                    </p>
                  </div>
                </div>

                {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
                  <div className="countDown">
                    <span className="when">
                      {" "}
                      The sale has ended. You can still find {CONFIG.NFT_NAME} on<br></br>
                    </span>
                    <div className="mint-wrap">
                      {" "}
                      <a href={CONFIG.MARKETPLACE_LINK} target={"_blank"} className="mint-now-anchor">{CONFIG.MARKETPLACE}</a>
                    </div>
                  </div>
                ) : (
                  <div className="countDown">
                    {blockchain.account === "" || blockchain.smartContract === null ? (
                      <>
                        <>
                          {(window.matchMedia("only screen and (max-width: 760px)").matches) ?
                            <>
                            {mblDapp?
                              <>
                                <div className="mint-wrap">
                                  {" "}
                                  <button className="mint-now" onClick={(e) => { e.preventDefault(); dispatch(connect()); getData(); }}>Connect</button> 
                                </div>
                                <p className="when margin-10">
                                  {" "}
                                  Connect to the {CONFIG.NETWORK.NAME} network
                                </p>
                              </>
                              :
                              <div className="mint-wrap">
                                {" "}
                                <a className="mint-now-anchor" href={CONFIG.DEEPLINK}>Connect</a>
                              </div>
                            }
                            </>
                            :
                            <>
                              <div className="mint-wrap">
                                {" "}
                                <button className="mint-now" onClick={(e) => { e.preventDefault(); dispatch(connect()); getData(); }}>Connect</button>
                              </div>
                              <p className="when margin-10">
                                {" "}
                                Connect to the {CONFIG.NETWORK.NAME} network
                              </p>
                            </>
                          }
                        </>
                        {blockchain.errorMsg !== "" ? (
                          <p className="when">
                            {" "}
                            {blockchain.errorMsg}
                          </p>
                        ) : null}
                      </>
                    ) : (  
                      <>
                        <p className="when">NFTs Minted :  {data.totalSupply} / {CONFIG.MAX_SUPPLY}</p>
                        <p className="when margin-10">1  {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST}{" "}{CONFIG.NETWORK.SYMBOL}. Excluding gas fees.</p>
                        <div className="mint-group-container">
                          <div className="calc">
                            <div className="mint-wrap">
                              <button
                                onClick={decrementMintAmount}
                                className="mint-now">
                                -
                              </button>
                            </div>
                            <div className="mint-wrap">
                              <div className="mint-now">{mintAmount}</div>
                            </div>
                            <div className="mint-wrap">
                              <button
                                onClick={incrementMintAmount}
                                className="mint-now">
                                +
                              </button>
                            </div>
                          </div>
                          <div className="mint-wrap">
                            {" "}
                            <button className="mint-now" onClick={(e) => {e.preventDefault(); claimNFTs(); getData(); }}>{claimingNft ? "Minting In Process" : "Mint Now"}</button>
                          </div>
                        </div>
                        <span className="when">{feedback}</span>
                      </>
                    )
                  }
                  </div>
                )}

                <div className="CounterUp">
                  {/* single item */}
                  <div className="client">
                    <h1>
                      {" "}
                      <CountUp end={30} />
                      <span>k+</span>
                      <span className="counterUpText">Clients</span>
                    </h1>
                  </div>
                  {/* single item end */}
                  {/* single item */}
                  <div className="client">
                    <h1>
                      {" "}
                      <CountUp end={6} />
                      <span>k+</span>
                      <span className="counterUpText">NFT Art</span>
                    </h1>
                  </div>
                  {/* single item end */}
                  {/* single item */}
                  <div className="client">
                    <h1>
                      {" "}
                      <CountUp end={100} />
                      <span>+</span>
                      <span className="counterUpText">Collaborations</span>
                    </h1>
                  </div>
                  {/* single item end */}
                </div>
              </div>
            </div>
            <div className=" col-md-5 ">
              {/*<Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  580: {
                    slidesPerView: 2,
                  },
                }}
                modules={[Pagination]}
                className="mySwiper">
                <SwiperSlide>
                  <div className="image-wrapper">
                    <img src={SliderImg} className="img-fluid " alt="slider" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="image-wrapper">
                    <img src={SliderImg2} className="img-fluid " alt="slider" />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="image-wrapper">
                    <img src={SliderImg3} className="img-fluid " alt="slider" />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="image-wrapper">
                    <img src={SliderImg4} className="img-fluid " alt="slider" />
                  </div>
                </SwiperSlide>
              </Swiper>*/}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default MintBanner;
