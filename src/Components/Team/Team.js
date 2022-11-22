/** @format */

import React from "react";
import Wrapper from "./Team.styled";
import Team1 from "../../images/Leo.png";
import Team2 from "../../images/AndyB.png";
import Team3 from "../../images/AliS.png";
import Team4 from "../../images/Legion.png";
import ringer from "../../Audio/click.mpeg";

function Team() {
  const audio = new Audio(ringer);
  audio.loop = false;
  return (
    <Wrapper>
      <div className="team" id="team">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title">
                <h1>Meet The Team</h1>
              </div>
            </div>

            <div className="col-12">
              <div className="row">
                <div className="col-md-3">
                  <a
                    onClick={() => {
                      audio.play();
                    }}
                    href="https://yesbear.gitbook.io/whitepaper/7yILDYQRhz2llUuE8Ga3/team/founder"
                    target="blank"
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      className="singleItem"
                      data-aos="fade-up"
                      data-aos-duration="1200"
                    >
                      <div className="cardImg">
                        <img src={Team1} className="img-fluid" alt="team" />
                      </div>
                      <div className="teamTitle">
                        <h4>Leo_HP</h4>
                        <p>Founder</p>
                      </div>
                      {/* <div className="teamDesc">
      <h3>
        “Only Accept <br />
        the best”{" "}
      </h3>
    </div> */}
                    </div>
                  </a>
                </div>

                <div className="col-md-3">
                  <a
                    onClick={() => {
                      audio.play();
                    }}
                    href="https://yesbear.gitbook.io/whitepaper/7yILDYQRhz2llUuE8Ga3/team/creative-director"
                    target="blank"
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      className="singleItem"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                    >
                      <div className="cardImg">
                        <img src={Team2} className="img-fluid" alt="team" />
                      </div>
                      <div className="teamTitle">
                        <h4>Andy B.</h4>
                        <p>Creative Director</p>
                      </div>
                      {/* <div className="teamDesc teamDesc2">
      <h3>
        “Creativity is
        <br />
        intelligence having fun
      </h3>
    </div> */}
                    </div>
                  </a>
                </div>

                <div className="col-md-3">
                  <a
                    onClick={() => {
                      audio.play();
                    }}
                    href="https://yesbear.gitbook.io/whitepaper/7yILDYQRhz2llUuE8Ga3/team/copywriter"
                    target="blank"
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      className="singleItem"
                      data-aos="fade-up"
                      data-aos-duration="1900"
                    >
                      <div className="cardImg">
                        <img src={Team4} className="img-fluid" alt="team" />
                      </div>
                      <div className="teamTitle">
                        <h4>Legion</h4>
                        <p>Copywriter</p>
                      </div>
                      {/* <div className="teamDesc teamDesc3">
    <h3>
      “Expect the best
      <br />
      prepare for the worst”
    </h3>
  </div> */}
                    </div>
                  </a>
                </div>
                {/* single item end here */}
                {/* single item  */}
                <div className="col-md-3">
                  <a
                    onClick={() => {
                      audio.play();
                    }}
                    href="https://yesbear.gitbook.io/whitepaper/7yILDYQRhz2llUuE8Ga3/team/tech-lead"
                    target="blank"
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      className="singleItem"
                      data-aos="fade-up"
                      data-aos-duration="2100"
                    >
                      <div className="cardImg">
                        <img src={Team3} className="img-fluid" alt="team" />
                      </div>
                      <div className="teamTitle">
                        <h4>Ali S.</h4>
                        <p>Tech Lead</p>
                      </div>
                      {/* <div className="teamDesc teamDesc4">
      <h3>
        “I just simly
        <br />
        need a cup of coffee”
      </h3>
    </div> */}
                    </div>
                  </a>
                </div>
                {/* single item end here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Team;
