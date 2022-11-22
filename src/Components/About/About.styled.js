/** @format */

import styled from "styled-components";

const Wrapper = styled.div`
  .about {
    padding: 100px 0%;
  }
  .contentItem {
    @media (max-width: 767.98px) {
    }
  }
  .contentItem h3 {
    font-size: 55px;
    margin-bottom: 50px;
  }
  .contentItem p {
    font-size: 18px;
    line-height: 31px;
    margin-bottom: 15px;
    color: #c0c0c0;
  }
  .walking {
    text-align: center;
  }
  .walking img {
    width: 70%;
  }
  .row {
    align-items: flex-start;
  }
  .walking {
    text-align: right;
  }
  @media (max-width: 992px) {
    .col-md-6 {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .walking {
      text-align: center;
      margin-bottom: 30px;
    }
    .walking img {
      width: 50%;
    }
    .flexRow {
      flex-direction: column-reverse;
    }
  }
  @media (max-width: 575.98px) {
    .about {
      padding: 50px 15px;
    }
    .flexRow {
      flex-direction: column-reverse;
    }
    .contentItem h3 {
      font-size: 31px;
      margin-bottom: 50px;
      margin-top: 30px;
      text-align: center;
    }
    .walking img {
      width: 100%;
    }
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    .about {
      padding: 60px 0%;
    }
    .contentItem h3 {
      font-size: 36px;
      text-align: center;
    }

    .walking {
      margin-top: 50px;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    .about {
      padding: 60px 0%;
    }
    .contentItem h3 {
      font-size: 41px;
      margin-bottom: 50px;
      text-align: center;
    }

    .walking {
      margin-top: 20px;
    }
  }
  @media (min-width: 992px) and (max-width: 1199.98px) {
    .about {
      padding: 100px 0%;
    }

    .contentItem h3 {
      font-size: 47px;
    }
  }
`;

export default Wrapper;
