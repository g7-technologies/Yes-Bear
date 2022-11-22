/** @format */
import styled from "styled-components";
import Banner from "../../images/Banner.jpg";

const Wrapper = styled.div`
  .banner {
    background: url(${Banner});
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    position: relative;
  }
  .official {
    position: absolute;
    top: auto;
    bottom: 3%;
    left: auto;
    right: 70px;
  }
  .official img {
    max-width: 160px;
    margin-bottom: 13px;
    animation: Blinking 1s linear infinite alternate;
  }
  @keyframes Blinking {
    10%,
    90% {
      opacity: 0.5;
    }
    20%,
    80% {
      opacity: 0.7;
    }
    30%,
    50%,
    70% {
      opacity: 0.9;
    }
    40%,
    60% {
      // transform: translate3d(4px, 0, 0);
      opacity: 1;
    }
  }

  @media (min-width: 576px) {
    .bannerBg {
      display: none;
    }
  }
  @media (max-width: 575.98px) {
    .banner {
      background: none;
      height: auto;
    }
    .official {
      right: 30px;
      display: none;
    }
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    .banner {
      height: 51vh;
      background-position: center;
    }
    .official {
      right: 30px;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    .banner {
      height: 70vh;
      background-position: center;
    }
  }
  @media (max-width: 575.98px) {
    .bannerBg img {
      width: 100%;
    }
  }
`;

export default Wrapper;
