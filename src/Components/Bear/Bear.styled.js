/** @format */

import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #111232;
  .about {
    padding: 70px 30px;
  }

  .contentItem {
  }
  .contentItem h3 {
    font-size: 55px;
    margin-bottom: 50px;
    margin-left: 51%;
    @media (max-width: 992px) {
      margin-left: 0;
    }
  }
  .contentItem p {
    font-size: 18px;
    line-height: 31px;
    margin-bottom: 15px;
    color: #c0c0c0;
  }
  .walking {
    text-align: left;
  }
  .walking img {
    width: 80%;
    animation: Blinking 3s linear infinite alternate;
  }
  .row {
    align-items: flex-start;
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
  @media (max-width: 992px) {
    .col-md-6 {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .walking {
      text-align: center;
      margin-top: 0;
      margin-bottom: 30px;
    }
    .walking img {
      width: 50%;
    }
  }
  @media (max-width: 575.98px) {
    .about {
      padding: 70px 15px;
    }
    .contentItem h3 {
      font-size: 31px;
      margin-bottom: 20px;
      margin-top: 20px;
      text-align: center;
    }
    .walking img {
      width: 100%;
    }
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    .contentItem h3 {
      font-size: 36px;
      margin-bottom: 20px;
      text-align: center;
    }

    .walking {
      margin-top: 50px;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    .contentItem h3 {
      font-size: 41px;
      margin-bottom: 20px;
      text-align: center;
    }
  }
  @media (min-width: 992px) and (max-width: 1199.98px) {
    .contentItem h3 {
      font-size: 47px;
    }
  }
`;

export default Wrapper;
