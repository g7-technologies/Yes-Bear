/** @format */

import styled from "styled-components";

const Wrapper = styled.div`
  .team {
    padding: 100px 0px;
    background-color: #111232;
  }
  .col-md-3 {
    flex: 0 0 23%;
    max-width: 24%;
  }
  .row {
    justify-content: space-between;
  }
  .singleItem {
    text-align: center;
  }
  .title {
    text-align: center;
    margin-bottom: 50px;
  }
  .title h1 {
    font-size: 55px;

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
  .cardImg {
  }
  .cardImg img {
    width: 35vh;
  }
  .teamTitle {
  }
  .teamTitle h4 {
    font-size: 34px;
    font-weight: 600;

    color: white;
  }
  .teamTitle p {
    margin-top: 10px;
    color: #c0c0c0;
  }
  .teamDesc {
    margin-top: 70px;
  }
  .teamDesc h3 {
    font-size: 24px;
    color: rgb(161, 154, 238);

    font-weight: 500;
  }
  .teamDesc2 h3 {
    color: rgb(216, 188, 120);
  }
  .teamDesc3 h3 {
    color: rgb(140, 176, 219);
  }
  .teamDesc4 h3 {
    color: rgb(175, 215, 180);
  }
  @media (max-width: 575.98px) {
    .col-md-3 {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .singleItem {
      margin-bottom: 30px;
    }
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    .col-md-3 {
      flex: 0 0 48%;
      max-width: 50%;
    }
    .singleItem {
      margin-bottom: 40px;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    .col-md-3 {
      flex: 0 0 48%;
      max-width: 50%;
    }
    .singleItem {
      margin-bottom: 40px;
    }
  }
`;

export default Wrapper;
