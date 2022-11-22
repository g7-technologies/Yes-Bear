/** @format */

import React from "react";
import Wrapper from "./Bear.styled";
import WalkingToy from "../../images/yesBear.png";
import AOS from "aos";

function Bear() {
  AOS.init();
  return (
    <Wrapper>
      <div className="about">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="contentItem">
                <h3>Behind Yes Bear</h3>
              </div>
            </div>
            <div className="col-12">
              <div className="row flexRow">
                <div className="col-md-6">
                  <div
                    className="walking"
                    data-aos="fade-up"
                    data-aos-duration="2000">
                    <img src={WalkingToy} className="img-fluid" alt="walking" />
                  </div>
                </div>
                <div className="col-md-6 mobileCol">
                  <div
                    className="contentItem"
                    data-aos="fade-up"
                    data-aos-duration="2200">
                    <p>
                      The Yes Bear collection was carefully drawn by our
                      talented designers under the guidance of Andy B, an
                      experienced creative director of several games and NFT
                      projects. Over 3,600 hours have been invested to develop
                      the concept, creative art design, technical structures,
                      marketing, and social media building for the Yes Bear
                      project.
                    </p>
                    <p>
                      {" "}
                      Yes Bear is largely inspired by the natural prowess of
                      real-life bears, who possess the largest, most complex
                      brains of all land mammals to their size. Despite their
                      smarts and strength, bears become subject to an array of
                      exploitation including: bear circuses, bear baiting, bear
                      bile harvesting, and bear dancing. Our project aims to
                      protect and save bears currently entrapped in these
                      inhumane conditions.&nbsp;
                    </p>
                    <p>
                      Yes Bear will raise fund for bear conservation
                      organizations when the collection is sold out. Moreover,
                      we hope the release of Yes Bear collection will inspire
                      the love of bears to help them escape from captivity,
                      cruelty, and abuse to live meaningful and happier lives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Bear;
