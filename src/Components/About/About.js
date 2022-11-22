/** @format */

import React from "react";
import Wrapper from "./About.styled";
import WalkingToy from "../../images/walking.gif";

function About() {
  return (
    <Wrapper>
      <div className="about" id="about">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="contentItem">
                <h3>The Story</h3>
              </div>
            </div>
            <div className="col-12">
              <div className="row flexRow">
                <div className="col-md-6">
                  <div
                    className="contentItem"
                    data-aos="fade-up"
                    data-aos-duration="2000">
                    <p>
                      In the frigid forest, the land sits damp with loneliness.
                      The Yes Bears dreamed of a life beyond their own. They
                      craved company to keep their hearts full. The Yes Bears
                      dreamed fondly of the city as they went about their daily
                      lives. They were ready to start a new life.{" "}
                    </p>
                    <p>
                      The Yes Bears trekked from trail to city and journeyed to
                      Etheverse City as they focused on their life ahead. To
                      their surprise, vivid holograms rose from the ground -
                      human narrators helped guide them. Advancements in
                      metaverse technology enabled them to understand each
                      other.
                    </p>
                    <p>
                      As they entered the city, the Yes Bears were eager to say
                      yes to their opportunities ahead. Over time, the bears and
                      humans grew closer, and integrated fully. They became the
                      students, officers, bartenders, baseball players,
                      firefighters, miners, sailors, police officers and chefs
                      dearly loved by their community. &nbsp;
                    </p>
                    <p>
                      Perhaps moving to the big city wasn’t so bad, after all.
                      Welcome to Neo Tokyo - where achieving your dreams is only
                      one yes away.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="walking"
                    data-aos="fade-up"
                    data-aos-duration="2000">
                    <img src={WalkingToy} className="img-fluid" alt="walking" />
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

export default About;
