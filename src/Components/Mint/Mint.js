/** @format */

import React, { useState } from "react";
import Wrapper from "./Mint.styled";
import Card from "../../images/Card.png";
import { Icon } from "@iconify/react";
import ringer from "../../Audio/click.mpeg";
import AOS from "aos";

function Mint() {
  
  AOS.init({
    once: true,
  });
  const audio = new Audio(ringer);
  audio.loop = false;

  return (
    <Wrapper>
      <div className="mint" id="mint">
        <div className="container">
          <div className="row">
            {/* sinlge item start here */}
            <div className="col-md-6">
              <div
                className="cardItem"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <img src={Card} className="img-fluid" alt="card" />
              </div>
            </div>
            {/* single item end here */}
            {/* single item start here */}
            <div className="col-md-6">
              <div
                className="ContentItem"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <div className="topContent">
                  <h2>Welcome to Yes Bear</h2>
                  <p>
                    The Yes Bear collection is a variety of 10,000 unique NFTs.
                    Holders receive access to a strong multi-chain community as
                    well as exclusive drops and experiences for our upcoming
                    collections.
                  </p>
                </div>
                <div className="bottomContent">
                  <p>1 Yes Bear costs 0.08 Eth.</p>
                  <span>Connect to the Ethereum network</span>
                </div>
                <div className="counter">
                  <div className="buttonGroup">
                    <button
                      onClick={() => {
                        {
                          decrementCounter();
                        }
                        audio.play();
                      }}
                      className="fButton"
                    >
                      <Icon icon="akar-icons:minus" />
                    </button>

                    <div className="inputField">{counter}</div>
                    <button
                      onClick={() => {
                        setCounter(counter + 1);
                        audio.play();
                      }}
                    >
                      <Icon icon="ant-design:plus-outlined" />
                    </button>
                  </div>
                  <div className="mintButton">
                    <button
                      onClick={() => {
                        audio.play();
                      }}
                    >
                      Mint Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* single item end here */}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Mint;
