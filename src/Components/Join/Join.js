import React from "react";
import Wrapper from "./Join.styled";
import JoinBg from "../../images/join.png";

import ringer from "../../Audio/click.mpeg";
function Join() {
  const audio = new Audio(ringer);
  audio.loop = false;
  return (
    <Wrapper>
      <div className="join">
        <div className="container" data-aos="zoom-out" data-aos-duration="2000">
          <div className="row">
            <div className="col-12">
              <div className="joinItem">
                <div className="title">
                  <h1>Join The Yes Bear</h1>
                  <p>Join a genuine community of 6,666 Yes Bear!</p>
                </div>
                <div className="joinButton brows">
                  <a
                    href="https://discord.com/invite/xwdAZjHt"
                    onClick={() => {
                      audio.play();
                    }}>
                    JOIN OUR DISCORD
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg">
            <img src={JoinBg} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Join;
