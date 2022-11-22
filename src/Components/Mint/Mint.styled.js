/** @format */

import styled from "styled-components";
import Bg from "../../images/bgMint.jpg";

const Wrapper = styled.div`
  .mint {
    padding: 100px 0px;
    background: url(${Bg});
    background-size: cover;
    background-repeat: no-repeat;
  }
  .cardItem {
    text-align: left;
    margin-top: 10px;

    @media (max-width: 1199px) {
    }
    @media (max-width: 992px) {
      margin-top: 0px;
    }
  }
  .cardItem img {
  }
  .ContentItem {
    font-family: "Jost", sans-serif;
  }
  .topContent {
  }
  .topContent h2 {
    font-size: 54px;

    margin-bottom: 40px;

    font-weight: 700;
    @media (max-width: 992px) {
      display: none;
    }
  }
  .topContent2 h2 {
    font-size: 54px;
    margin-left: 50%;
    margin-bottom: 40px;

    font-weight: 700;
    @media (max-width: 991.98px) {
      position: relative;
      display: block;
      margin-left: 0;
    }
    @media (min-width: 992px) {
      display: none;
    }
  }
  .topContent p {
    color: #c0c0c0;
    font-size: 18px;
    line-height: 31px;
    padding: 0px 0px 30px 0px;
  }
  .bottomContent {
  }
  .bottomContent p {
    font-size: 18px;
    color: #fdd563;
    margin-bottom: 5px;
    margin-top: 30px;
  }
  .bottomContent span {
    color: #c0c0c0;
    font-size: 18px;
  }
  .button {
    margin-top: 50px;
  }
  .button a {
    background: linear-gradient(90deg, #25b24c 0%, #229c5e 50%, #1f8672 101.5%);
    color: white;
    font-weight: 600;
    padding: 12px 45px;
    border-radius: 38px;
    -webkit-text-decoration: none;
    text-decoration: none;
    font-weight: 500;
    font-size: 20px;
  }
  .counter {
    display: flex;
    margin: 30px 0px 20px 0px;
    position: relative;
    justify-content: left;
  }
  .buttonGroup {
    display: flex;
    align-items: center;
  }
  .counter button {
    background: linear-gradient(90deg, #25b24c 0%, #229c5e 50%, #1f8672 101.5%);
    padding: 4px 15px;
    font-size: 19px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;

    color: white;
    border: 1px solid #e16589;
    cursor: pointer;
    -webkit-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    height: 45px;
    @media (max-width: 575.99px) {
      padding: 4px 10px;

      height: 40px;
    }
  }

  .inputField {
    width: 120px;
    text-align: center;
    height: 45px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    background-color: transparent;
    border: 2px solid #229c5e;
    margin: 0px 15px;
    @media (max-width: 575.99px) {
      width: 126px;

      height: 40px;
    }
  }
  .mintButton {
    margin-left: 30px;
  }
  .mintButton button {
    border: 0;
    padding: 13px 40px;
    font-size: 18px;
    color: white;
    background: linear-gradient(90deg, #25b24c 0%, #229c5e 50%, #1f8672 101.5%);
    cursor: pointer;
    border-radius: 0px;
    border: 1px solid #e16589;
    transition: 0.5s ease-in-out;
    margin-left: 0px;
    border-radius: 80px;
    border: 0;
  }

  @media (max-width: 992px) {
    .col-md-6 {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .cardItem {
      text-align: center;
    }
  }
  @media (max-width: 575.98px) {
    .cardItem img {
      width: 80%;
    }
    .topContent h2 {
      font-size: 31px;
      text-align: center;
    }
    .topContent p {
      font-size: 17px;
      line-height: 32px;
    }
    .bottomContent p,
    .bottomContent span {
      font-size: 17px;
    }
    .ContentItem {
      padding: 0px 20px;
    }

    .counter {
      display: block;
      width: 90%;

      justify-content: left;
      padding: 0px 0px;
    }
    .mintButton {
      text-align: center;
      margin: 30px 0;
    }
    .mint {
      padding: 70px 0px;
      margin-top: -7px;
    }
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    .cardItem img {
      width: 70vh;
    }
    .topContent h2 {
      font-size: 45px;
      text-align: center;
    }
    .topContent p {
      color: #c0c0c0;
      font-size: 18px;
      line-height: 32px;
      padding: 30px 0px;
    }
    .mint {
      padding: 60px 0px;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    .topContent h2 {
      font-size: 40px;
      text-align: center;
    }
    .topContent p {
      font-size: 17px;
    }
    .bottomContent p {
      font-size: 18px;
    }
    .bottomContent span {
      font-size: 18px;
    }
    .mint {
      padding: 60px 0px;
    }
  }
  @media (min-width: 992px) and (max-width: 1199.98px) {
    .topContent h2 {
      font-size: 45px;
    }
  }
`;

export default Wrapper;
