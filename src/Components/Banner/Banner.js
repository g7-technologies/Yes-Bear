import React from "react";
import Wrapper from "./Banner.styled";
import Official from "../../images/official.png";
import Banner2 from "../../images/mobilebg.jpg";

function Banner() {
  return (
    <Wrapper>
      <div className="banner" id="home">
        <div className="bannerBg">
          <img src={Banner2} className="img-fluid" alt="bg" />
        </div>
        <div className="official">
          <img src={Official} className="img-fluid" alt="official" />
        </div>
      </div>
    </Wrapper>
  );
}

export default Banner;
