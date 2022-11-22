/** @format */

import styled from "styled-components";

const Wrapper = styled.nav`
  min-height: 120px;
  display: flex;
  justify-content: space-between;
  padding: 0px 0px;
  align-items: center;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media (max-width: 992px) {
    position: relative;
    justify-content: space-between;
    padding: 0 20px;
  }
  @media (max-width: 600px) {
    padding: 0 10px;
    min-height: 80px;
  }
  .nav-logo {
    display: flex;
    justify-content: center;
    transition: 0.5s ease-in-out;
    img {
      @media (max-width: 575.99px) {
        width: 25vh;
      }
    }
    ${'' /* :hover {
      transform: scale(1.1);
    } */}
    p {
      font-size: 32px;
      font-weight: 300;
      font-family: "Poppins", sans-serif;
      cursor: pointer;

      @media (max-width: 1199.98px) {
        font-size: 24px;
      }
    }
  }
  .nav-link-container {
    display: flex;
    @media (max-width: 992px) {
      position: absolute;
      left: 0%;
      top: 0%;
      width: 100%;
      height: 0;
      overflow: hidden;
      background: #080a23f2;
      transition: 0.5s ease-out;
    }
    ul {
      list-style: none;
      display: flex;
      justify-content: space-around;
      align-items: center;
      @media (max-width: 992px) {
        flex-direction: column;
        margin-left: 50px;
        margin-right: 50px;
        width: 100%;
        padding-bottom: 20px;
      }
      li {
        margin: 0 0px;
        @media (max-width: 1199.98px) {
          margin: 0 0px;
          padding: 10px 0px;
        }
        a {
          margin: 0px 15px;
          @media (max-width: 1199px) {
            margin: 0px 8px;
          }
        }
      }
      @media (max-width: 992px) {
        width: 100%;
        position: relative;
        top: 18%;
        height: 65%;
        padding: 20px 0px;
        display: block;
      }
      a {
        text-decoration: none;
        color: #ffffff;
        display: block;
        -webkit-transition: 0.5s ease-in-out;
        transition: 0.5s ease-in-out;
        font-weight: 700;
        font-size: 1rem;

        :hover {
          color: #fb6468;
        }
        @media (max-width: 992px) {
          text-align: center;
        }
      }
    }
    .nav-link-last-item {
      margin-right: 20px;
      @media (max-width: 992px) {
        margin: 0;
      }
    }
    .social-media-icon {
      display: flex;
      margin-top: 12px;
      @media (max-width: 992px) {
        justify-content: center;
      }
      a {
        margin: 0 10px;
        font-size: 30px;
        :hover {
          transform: translateY(-10px);
          color: #24ae4f;
        }
        @media (max-width: 119px) {
          margin: 0px 7px;
          font-size: 30px;
        }
      }
    }
    .nav-button {
      @media (max-width: 992px) {
        text-align: center;
        max-width: 220px;
        margin: 0 auto;
      }
      a {
        background: linear-gradient(
          90deg,
          #25b24c 0%,
          #229c5e 50%,
          #1f8672 101.5%
        );
        color: white;
        font-weight: 600;
        padding: 12px 45px;
        border-radius: 38px;
        box-shadow: 0px 4px 43pxrgba (0, 0, 0, 0.25);
        -webkit-transition: 0.5s ease-in-out;
        -webkit-transition: 0.5s ease-in-out;
        transition: 0.5s ease-in-out;
        padding: 0 2.25rem;
        line-height: 56px;
        font-size: 1.2rem;
        font-weight: 500 !important;
        min-width: 190px;
        text-align: center;
        margin: 0;
        margin-left: 15px;
        :hover {
          background-color: transparent;
          color: #151515;
        }
      }
    }
  }

  .mobile-menu {
    display: none;
    @media (max-width: 992px) {
      display: flex;
      button {
        border: none;
        color: #ffffff;
        font-size: 30px;
        background: transparent;
        z-index: 587;
      }
    }
  }
`;
export default Wrapper;
