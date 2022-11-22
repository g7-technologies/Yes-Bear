/** @format */
import React, { useState } from "react";
import Layout from "../Components/Layout/Layout";
import About from "../Components/About/About";
import Bear from "../Components/Bear/Bear";
import Roadmap from "../Components/Roadmap/Roadmap";
import Team from "../Components/Team/Team";
import Gallery from "../Components/Gallery/Gallery";
import Banner from "../Components/Banner/Banner";
import Join from "../Components/Join/Join";
import Collapsed from "../Components/Collapsed/Collapsed";
import Wrapper from "../Components/Mint/Mint.styled";
import Card from "../images/yesCard2.png";
import BackToTopButton from "../Components/BackButton/BackToTopButton";
import Navbar from "../Components/Navbar/Navbar";
import ringer from "../Audio/click.mpeg";
import Footer from "../Components/Footer/Footer";
import AOS from "aos";
import "./Home.css";
import { Icon } from "@iconify/react";
function Home() {
  AOS.init({
    once: true,
  });
  const audio = new Audio(ringer);
  audio.loop = false;

  // const [counter, setCounter] = useState(1);
  // function decrementCounter() {
  //   if (counter <= 1) {
  //     setCounter(1);
  //   } else {
  //     setCounter(counter - 1);
  //   }
  // }
  const [Loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }

  return (
    !Loading && (
      <Layout>
        <header>
          <Navbar />
        </header>
        <Wrapper>
          <Banner />{" "}
          <div className="mint" id="mint">
            <div className="container">
              <div className="row">
                {/* singleItem */}
                <div className="col-12">
                  <div className="topContent topContent2">
                    <h2>Welcome to Yes Bear</h2>
                  </div>
                </div>
                {/* single Item end */}
                <div className="col-12">
                  <div className="row">
                    {/* sinlge item start here */}
                    <div className="col-md-6">
                      <div
                        className="cardItem"
                        data-aos="fade-up"
                        data-aos-duration="2000">
                        <img src={Card} className="img-fluid" alt="card" />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div
                        className="ContentItem"
                        data-aos="fade-up"
                        data-aos-duration="2000">
                        <div className="topContent">
                          <h2>Welcome to Yes Bear</h2>

                          <p>
                            Yes Bear is a unique collection of 6,666 Pixelated
                            NFTs that live on the Ethereum blockchain (ERC-721).
                            Featuring a myriad of distinct and powerful traits,
                            the Yes Bear collection offers its holders access to
                            a branded toy collection, an immersive mobile game
                            featuring holders’ favorite Yes Bear NFTs,
                            token-gated merchandise drops, an exclusive
                            expansion collection mint, and more to come!
                          </p>
                        </div>

                        {/* <div className="counter">
                          <div className="buttonGroup">
                            <button
                              onClick={() => {
                                {
                                  decrementCounter();
                                }
                                audio.play();
                              }}
                              className="fButton">
                              <Icon icon="akar-icons:minus" />
                            </button>

                            <div className="inputField">{counter}</div>
                            <button
                              onClick={() => {
                                setCounter(counter + 1);
                                audio.play();
                              }}>
                              <Icon icon="ant-design:plus-outlined" />
                            </button>
                          </div>
                          <div className="mintButton">
                            <button
                              onClick={() => {
                                audio.play();
                              }}>
                              Mint Now
                            </button>
                          </div>
                        </div> */}
                      </div>
                    </div>
                    {/* single item end here */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <BackToTopButton />
          <About />
          <Bear />
          <Gallery />
          <Roadmap />
          <Join />
          <Team />
          <Collapsed />
        </Wrapper>
        <footer>
          <Footer />
        </footer>
      </Layout>
    )
  );
}

export default Home;
