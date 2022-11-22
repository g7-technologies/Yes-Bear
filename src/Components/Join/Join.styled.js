/** @format */

import styled from "styled-components";

const Wrapper = styled.div`
  .join {
    background-color: #080a23;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    overflow: hidden;
    min-height: auto;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 130px 0px 90px 0px;
    @media (max-width: 1199.98px) {
      padding: 80px 0px 40px 0px;
    }
  }
  .bg img {
    width: 96%;
  }
  .bg {
    position: absolute;
    top: 50%;
    left: 3%;
    right: 0;
    z-index: 5;

    transform: translate(0%, -50%);
  }

  @media (max-width: 992px) {
    .bg {
      display: none;
    }
  }
  .col-12,
  .container {
    justify-content: center;
    z-index: 578;
  }
  .brows {
    margin-top: 50px;
  }
  .brows a {
    font-size: 18px;
    -webkit-text-decoration: none;
    text-decoration: none;
    padding: 16px 1.7rem;
    /* line-height: 50px; */
    -webkit-transform-origin: right;
    -ms-transform-origin: right;
    transform-origin: right;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    background: linear-gradient(90deg, #fb6567 0%, #ec008b 101.5%);
    font-weight: bold;
    color: wheat;
    border-radius: 60px;
    transition: 0.5s ease-in-out;
  }
  .brows a:hover {
    background: linear-gradient(90deg, #fb6567 0%, #ec008b 101.5%);
  }
  .col-12 {
    text-align: center;
  }
  .joinItem {
  }
  .title {
  }
  .title h1 {
    font-size: 55px;
    font-weight: 700;
    @media (max-width: 1199.98px) {
      font-size: 47px;
    }
    @media (max-width: 991.98px) {
      font-size: 41px;
    }
    @media (max-width: 767.98px) {
      font-size: 36px;
    }
    @media (max-width: 575.98px) {
      font-size: 31px;
    }
  }
  .title p {
    font-size: 19px;
    margin: 32px 0px;
    color: #c0c0c0;
  }
  .joinButton {
  }
  .joinItem {
    z-index: 487;
  }
  @media (max-width: 991.99px) {
    .join {
      min-height: 65vh;
    }

    .brows a {
      font-size: 16px;
    }
  }
  @media (max-width: 767.99px) {
    .join {
      min-height: 60vh;
    }
  }
  @media (max-width: 575.98px) {
    .join {
      height: auto;
      min-height: auto;
      padding: 30px 0px;
    }

    .title p {
      margin: 20px 0px;
      font-size: 17px;
    }
  }
`;

export default Wrapper;
